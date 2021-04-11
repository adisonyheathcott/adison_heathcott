---
slug: osdev-bootloader
title: OS Dev Bootloader
description: Learning about the bootloader and some common utilities.
id: Operating System Development
date: 04-10-2021
---

---

![Alt Text](https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80)

###### Photo by [Tianyi Ma]("https://unsplash.com/@tma?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText") on [Unsplash]("https://unsplash.com/s/photos/computer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText")

#### Preface

As we saw in the last section the bootloader can do some interesting things. So far all we've done is display a simple message when we start up the emulator. We could do a lot more to it with interrupts and some assembly skills but stop and think for a minute, what can we really do with 512 bytes of memory. It's not a terribly small amount of space but it's definitely too small to do anything interesting or complicated like video memory, drivers, or anything else. What's the solution? A common practice is to use this space to jump start a second stage bootloader that will be much bigger than this. We are still restricted by memory that is already taken by BIOS and the maximum accessible memory caused by the CPU's 16-bit mode but it is going to be much more memory than we had before. So that's what we are going to do, load a second stage bootloader at memory location 0x9000 and jump to it from the intial bootloader. With a plan in mind let's move forward.

#### Setting Up

So, before we start programming we need to go over some things we will use. The first of which is how to access hard drive sectors using Linear Block Addressing. 

The Linear Block Address (LBA) is a nice way of accessing areas on our hard drive. It strips away the need to specify the head and track when accessing a memory address and allows us to access more memory than we could before. One thing to note is it automatically assumes that we have 512 byte sectors. Even if you don't have 512 byte sectors on your drive the BIOS and disk hardware should emulate it for you. The LBA structure is as follows:

| Offset Range | Size | Description |
| - | - | - |
| 0x00 | 1 byte | Size of the Data Address Packet (Usually 0x10) |
| 0x01 | 1 byte | Unused (Usually 0x00) |
| 0x02 - 0x03 | 2 bytes | Number of sectors to be read from the hard disk |
| 0x04 - 0x07 | 4 bytes | Segment:Offset pointer to the sector that contains the data we want to load |
| 0x08 - 0x0F | 8 bytes | Absolute number of the starting sector to be read (1st sector is 0) |

&nbsp;

> ## Extra
> There is also another way to address memory on a hard disk called Cylinder Head Sector (CHS). This is particularly useful for older devices like floppy disks that have no direct way of being accessed with LBA's. Luckily the name is pretty self-explanitory, we just need to specify the cylinder, the head, and the sector. BIOS will find this location for us on the hard drive and we can then read or write from that location as we wish.

#### Loading From Memory

Let's start by defining the variables we will need to load memory in our first bootloader. This will be an addition to what we had, however, I will also be changing a few things. If you added your own code I advise moving it to the second bootloader so we can safely stay under the 512 byte limit. What we are adding isn't that big but it's better to be safe than run over the memory limit unknowingly.

```
[bits 16]
[org 0x7c00]

mov [BOOT_DRIVE], dl

mov bp, 0x8FFF
mov sp, bp

mov si, MSG_REAL_MODE
call printString_16

jmp $

%include "printString_16.asm"

SECONDBOOT_OFFSET: equ 0x9000
BOOT_DRIVE: db 0

LBA_SECONDBOOT:
    ; Size of DAP
    db 0x10
    ; Unused
    db 0x00
    ; Number of sectors to be read
    dw 0x01
    ; Offset to the loaded location -x86 (little endian)
    dw SECONDBOOT_OFFSET
    dw 0x00
    ; Absolute number of the start sector to be read
    dd 0x01
    dd 0x00

MSG_REAL_MODE: db "Starting up in 16-bit Real Mode.", 0
ERROR_MSG: db "Error reading from disk.", 0

times 510-($-$$) db 0
dw 0xaa55
```

Here we've added and changed a few things. Firstly we recorded what drive our bootloader started up on. This is automatically stored in the register dl when the computer is booted. Later on we will need to know this so we can load the correct information from the correct drive. Second we changed the stack location to 0x8FFF so the first byte of our stack does not overwrite the first byte of our next bootloader. Then we find something new `%include "printFunctions/printString_16.asm`. This is similar to any higher level language include and just copies that code at the location of the include. This will allow us to stop duplicating code and to make our files easier to read. If it wasn't clear you should now move the code for printing in 16 bit mode into it's own file named "printString_16.asm".

Next we need to set up our code to actually tell the CPU to load the second bootloader into memory.

```
[bits 16]
[org 0x7c00]

mov [BOOT_DRIVE], dl

mov bp, 0x8FFF
mov sp, bp

mov si, MSG_REAL_MODE
call printString_16

loadSecondBoot:
    ; SI - offset to the disk address packet
    mov si, LBA_SECONDBOOT
    ; AH - The subroutine for 0x13 - Extended read from disk
    mov ah, 0x42
    ; DL - Boot drive
    mov dl, [BOOT_DRIVE]

    ; Interrupt
    int 0x13
    jc diskReadFailed

    jmp SECONDBOOT_OFFSET

diskReadFailed:
    mov si, ERROR_MSG
    call printString_16
    jmp $

%include "printString_16.asm"

SECONDBOOT_OFFSET: equ 0x9000
BOOT_DRIVE: db 0

LBA_SECONDBOOT:
    ; Size of DAP
    db 0x10
    ; Unused
    db 0x00
    ; Number of sectors to be read
    dw 0x01
    ; Offset to the loaded location -x86 (little endian)
    dw SECONDBOOT_OFFSET
    dw 0x00
    ; Absolute number of the start sector to be read
    dd 0x01
    dd 0x00

MSG_REAL_MODE: db "Starting up in 16-bit Real Mode.", 0
ERROR_MSG: db "Error reading from disk.", 0

times 510-($-$$) db 0
dw 0xaa55
```

What we added isn't that much but it gets us where we need to be. The first large addition is the `loadSecondBoot` label which loads the LBA info into SI, subroutine subfunction in AH, and the boot drive in DL. We then call the extended read from disk interrupt and check if anything went wrong by checking the carry bit. If nothing went wrong we jump to the beginning of the second bootloader, however, if something did go wrong we need to jump to the other label we added `diskReadFail`. This prints out an error message and jumps endlessly since we can't really do anything after that.

So now we have the initial bootloader and can start working on our second bootloader. This will look similar because initially we just want to print a simple message to verify that it worked correctly.

```
[bits 16]
[org 0x9000]

; Store the boot drive
mov [BOOT_DRIVE], dl

; Load a message and print
mov si, SECOND_BOOT_MSG
call printString_16

jmp $

; Includes
%include "printString_16.asm"

BOOT_DRIVE: db 0
SECOND_BOOT_MSG: db "The second bootloader has been loaded!", 0
```

We are officially prepared to start compiling and loading the files onto an img file. For one moment we need to shift gears into writing a program to write our binary files in the correct location to the img file. This can be done however you want but I'm going to write a program in cpp that will work for both windows and unix. No matter how you do it the big thing to keep in mind is we need to specify the order and location of the files. The bootloader MUST go first and be exactly 512 bytes. The second bootloader can be wherever you want but you will need to tell the bootloader where it needs to load from.

```cpp
#include <array>
#include <string>
#include <iostream>
#include <fstream>
#include <filesystem>

// Define all the needed files here in the correct order
std::array<std::string, 2> writeOrder = { "bootloader.asm", "secondboot.asm" };

int main(int argc, char* argv[]) {
    // Create or open the img file
    std::ofstream imgFile("os.img", std::ios::binary);

    bool found = false;
    for (int i = 0; i < writeOrder.size(); i++ ) {
        for (const auto& entry : std::filesystem::directory_iterator(".")) {
            if (entry.path().string().substr(entry.path().string.find_last_of('/') + 1) == writeOrder[i]) {
                found = true;

                // Compile the file
                int subIndex = entry.path().string().find_last_of('/') + 1;
                system(std::string("nasm " + entry.path().string().substr(subIndex) + " -f bin -o " + entry.path().string().substr()(subIndex, entry.path().string().length() - subIndex - 4)).c_str());

                // Write the compiled program to the img file
                std::ifstream rf(entry.path().string().substr(0, entry.path().string().find_last_of('.')), std::ios::binary | std::ios::in);
                if (!rf) { std::cout << "Failed to open the file.\n"; return -1; }
                std::copy(std::istreambuf_iterator<char>(rf), std::istreambuf_iterator<char>( ), std::ostreambuf_iterator<char>(imgFile));

                rf.close();

                break;
            }
        }

        if (found) continue;

        std::cout << "One of the required files was not found.\n";
        return -1;
    }

    // Close the file
    imgFile.close();

    return 0;
}
```

This isn't the best way to do it and it can use some error checking but for simplicity sake this will do. Now you can set the writeOrder array to contain your file names in the correct order, compile the program, and run it. You should then be able to run:

```
qemu-system-x86_64 -drive format=raw,file=os.img
```

or if you're on windows:

```
qemu-system-x86_64 -L C:/Progra~1/qemu -drive format=raw,file=os.img
```

Qemu should open up and you should see your two messages "Starting up in 16-bit Real Mode." and "The second bootloader has been loaded!". If you see an error about no bootable devices check that you are correctly writing the **binary data** to the img file.

#### Conclusion

Now we can add more code to our bootloader without worrying about the memory limit. It may seem like we aren't doing much with each addition but we are building up a strong base for adding some cool things in the future. As always take some time to mess around and see what you can do. The next topic we are going to cover is going into 32-bit protected mode and loading the kernel. It will be the most complicated thing we have done so far but it will be worth it. So be sure you are comfortable with the basics. As always if anything was confusing I suggest you research it some more as it might be imporant to understand later.


[Return to the Posts Page](https://adisonyheathcott.github.io/adison_heathcott/posts)