---
slug: osdev-intro
title: OS Dev Introduction
description: An introduction into operating system development.
id: Operating System Development
date: 02-14-2021
---

---

![Alt Text](https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80)

###### Photo by [Emile Perron](https://unsplash.com/@emilep?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/programming?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)

#### Preface

Before I begin there are some things that need to be addressed. Firstly, I am only a hobbyist not a professional. I do my best to make sure my information is correct and easy to understand, however, there are a million ways to do everything. My way is not the end all way and is certainly not the best way. 

Secondly, this series is meant to help the reader understand the workings of an operating system and how it's written, not show them the best way to implement one. Although I want to keep the information simple, I understand some people have an unquenchable thirst for knowledge so I will add additional interesting information wherever possible. 

Lastly, in this series I will be using x86 assembly Intel syntax for the entire codebase so you will either need to review that before starting or learn it as you go. I'll keep the code as simple as possible so if you are only here for theory you only need to know a small amount of assembly. 

With that being said, let's move forward.

#### Setup

Before we can start going over anything, we need to set up [QEMU]( https://www.qemu.org/), [NASM]( https://www.nasm.us/), and any text editor of your choice (Personally I use [VSCode]( https://code.visualstudio.com/)). [QEMU]( https://www.qemu.org/) will be our machine emulator so that we can test our code in the correct environment and [NASM]( https://www.nasm.us/) will compile our assembly programs into their respective binary files.

[QEMU]( https://www.qemu.org/) is super easy to download and install. Just be sure to pay attention to where it gets downloaded in case something goes wrong and you have to set the environment variable yourself.
[NASM]( https://www.nasm.us/)  is just as easy and again be sure to pay attention to where it is downloaded.
Now to make sure both programs are working and the environment variables are set we will run two commands on the command line. (Excluding what is in parenthesis) 
``` 
> nasm
	nasm: fatal: no input file specified
	Type nasm -h for help.
> qemu-system-x86_64 -L C:/Progra~1/qemu 	(Windows)
> qemu-system-x86_64						(Mac)
```

After running the nasm command you should see the same output. If you do not make sure you installed it correctly and that you have your environment variables set up correctly. 

After running the qemu command you should see the qemu emulator window open. It will go through its usual process and eventually say "No bootable device". This is fine, we will be giving it a bootable device later on. If you do not see this check that it is installed correctly and that you have the correct environment variables set. A note on the additonal "-L C:/Progra\~1/qemu": This is used to tell qemu where to find certain dependencies it needs to run. If this does not work for you try changing "C:/Progra\~1/qemu" to the directory where you installed qemu. If you are on Windows you will most likely need to keep the `-L C:/Progra\~/qemu`, however, if you are on MAC this will not work so you need to delete that line.

For the text editor I like to have a syntax highlighter so I use the vscode addon [x86 and x86_64 Assembly](https://marketplace.visualstudio.com/items?itemName=13xforever.language-x86-64-assembly) by 13xforever.

#### Prerequisites

I'm going to assume you already know what an operating system is and know a little about what it does. If you were curious we are going to use legacy BIOS and not UEFI. If you don't know what these are that's fine, we will go over this. Before we start with writing the OS we need to go over some basics.

## Disk Drive

> ## Extra
> If you own a computer you probably own a hard disk (or SSD if you've moved on or Floppy Disk if you're old) and you may have never thought about what it was. The hard disk is a temporary storage device used for storing things in memory that won't get wiped when you restart your computer. It records data by magnetizing a thin film of ferromagnetic material. Inside the hard drive is a spindle that holds 1 to 5 platters, which are small (10-20nm depth) circular disks, which are covered in the ferromagnetic material on both sides. There is also an arm for each platter on the drive that contains the heads capable of reading and writing data.

For our project you don't need to know the intracacies of the hard disk but it would be good to know how memory works and how it is arranged. The hard drive separates areas of memory into sectors, clusters, and tracks. Tracks are concentric circles, a 1 bit wide ring, that pass under a single stationary head during a disk rotation. The track is divided into segments of sectors. Sectors are blocks of memory defined in size by the type of hard disk. Most commonly the sector is 512 bytes, however, on CD-ROMs and DVD-ROMs sectors are 2048 bytes and on newer hard drives, Advanced Format disks, they can be 4096 bytes. Clusters are combinations of sectors usually defined in size by the programmer. Clusters come in handy to store files or other large amounts of memory. For a 4TB hard drive instead of keeping track of 8,589,934,592 sectors it would be much easier to define cluster size as 2048 bytes so we only keep track of 2,147,483,648 sectors. The only rule is you must use a number of sectors that is an exponent of 2, so 8 or 16 but never 10 or 5 etc. Most commonly I've seen 4096 byte (4KB) clusters for most file systems.

## CPU and Registers

When you hear about the CPU you probably think of the simple explanation everybody gives, “It’s just a small piece of hardware that executes code”. This is true, however, there is so much more behind the CPU than simple instruction execution. It can provide memory protection, multitasking capabilities, code privilege levels, registers, cached memory, and more. If you already know about the specifics of registers, you can skip this section but if you don’t, we need to go over them. They will be vital to programming our operating system.

You can think of registers as hardware variables. They are small memory locations used for extremely fast memory access, this speed comes from its implementation and location since its so close to the CPU core. They are usually classified by their usage and size, so you’ll hear 32-bit accumulator register, or 64-bit data register. We will go over the usages in just a bit.

For clarification we will define a byte as 8-bits, a word as 16-bits, a doubleword as 32-bits, a quadword as 64-bits, and a double quadword as 128-bits.

You will need to know this information as it dictates how to access the registers. Originally on the first 16-bit CPUs we had fourteen 16-bit regsiters.

General Purpose Registers
- AX - Accumulator Register
- BX - Base Register
- CX - Counter Register
- DX - Data Register

Stack Registers
- BP - Base Stack Pointer Register
- SP - Stack Pointer Register

Address Registers
- SI - Source Index Register
- DI - Destination Index Register
- BP and BX (Not new registers but also considered address registers)

Segment Registers
- CS - Code Segment
- DS - Data Segment
- SS - Stack Segment
- ES - Extra Segment

Instruction Pointer
- IP

And finally the FLAGS register that holds flags such as the carry flag, overflow flag, zero flag, etc. Later on three additional registers were added for special table access GDTR, LDTR, and IDTR and a fourth for task switching TR. The general purpose registers can be accessed differently by exchaning the X with an H (high byte) or L (low byte). For example AX is the 16-bit access, AH is the high byte access, and AL is the low byte access. It would be the same for BX, BH, BL, CX, CH, CL, etc.

These worked well but it was only a matter of time before something would change, and that change came with the advent of the 32-bit CPU. The 80386 processor brought an extension onto the registers and added two extra segment registers. Before, our general purpose registers were AX, BX, CX, and DX. Now we have **Extended** registers EAX, EBX, ECX, and EDX which can hold 32-bits now instead of 16. Also included were ESI, EDI, EBP, ESP, EFLAGS, and EIP. The two stack registers added were FS and GS. On top of the extended registers, the 32-bit CPU brought some really cool 64-bit MMX registers, but we won't get into that, you can look them up if you're interested.

Again, these worked well until the advent of the 64-bit CPU. The 64-bit architecture brought extensions to other registers such as RSI, RDI, RBP, RSP, RFLAGS, and RIP. It also brought extensions to the general purpose registers, RAX, RBX, RCX, and RDX, and added eight more general purpose register R8-R15 (All registers with R-prefix are 64-bits). Since the new registers were named R# instead of a legacy name they have a different method of access. R8 (qword), R8D (lowest double word), R8W (lowest word), R8B (lowest byte).

Here is a quick overview of the registers
- AL/AH/AX/EAX/RAX: Accumulator
- BL/BH/BX/EBX/RBX: Base Index (for array use)
- CL/CH/CX/ECX/RCX: Counter (loops and strings)
- DL/DH/DX/EDX/RDX: Extend accumulator precision
- R8-15/R8-15D/R8-15W/R8-15B: General registers
- SI/ESI/RSI: Source Index
- DI/EDI/RDI: Destination index
- SP/ESP/RSP: Stack Pointer
- BP/EBP/RBP: Base Stack Pointer
- IP/EIP/RIP: Instruction Pointer
- CS: Code Segment
- DS: Data Segment
- SS: Stack Segment
- ES: Extra Segment
- FS: Extra Segment #2
- GS: Extra Segment #3

> ## Extra
> Registers are actually really cool if you look at their implementation. This article does an incredible job of going over the old 8086s instruction register. If you are interested in the hardware aspect of it I recommend giving this a read. [Ken Shirriff's Blog - Latches inside: Reverse-engineering the Intel 8086's instruction regster](http://www.righto.com/2020/08/latches-inside-reverse-engineering.html)

## Real Mode and BIOS

When you boot up your computer the CPU starts up in Real Mode, also known as Real Address Mode. The reason for this name is when you access memory you are actually accessing that memory address and not being redirected by memory protection.  There are some pros and cons to being in this mode. 

Cons
* The default CPU operand length is 16 bits.
* No hardware based memory protection or virtual memory.
* Access to less than 1 MB of RAM.

Pros
* BIOS functions act as low level API functions.
* BIOS installs device drivers.
* Faster memory access.
* Faster CPU speeds due to lack of security overhead.

The BIOS is the saving grace when it comes to real mode because it takes care of interfacing with hardware and makes jumping to other modes much easier. The BIOS (Basic Input / Output System) was added to provide low-level services to PC system programmers. It does the job of hiding different hardware under a layer of abstraction that makes interfacing with it the same no matter the system. We can access the BIOS functions using interrupts where we set AH to a particular value and call INT #, where # is some predefined number for the interrupt. We will go over the BIOS functions as we need them throughout the series because there are too many to list out.

Some other modes the CPU supports are Virtual 8086 mode, Protected Mode (32-bit), and Long Mode (64-bit). We will see protected mode later on but the immediate effect is we will have to abandon the BIOS and won't be able to use its functions. Virtual 8086 mode is an emulated 16-bit real mode where you may call BIOS functions in protected mode. We don't use this because it has its fair share of problems and why use BIOS when we can program everything from that point on ourselves.

## Memory Layout

The memory layout is important to keep in mind because if we are not careful we could overwrite BIOS functions or the bootloader itself, which could only throw the system into a downward spiral of chaos. I'm not going to be as descriptive here becuase I can just throw up a table and refer back everytime we need to check.

| Start | End | Description |
| - | - | - |
| 0x00000000 | 0x000003FF | Real Mode IVT |
| 0x00000400 | 0x000004FF | BDA (BIOS Data Area) |
| 0x00000500 | 0x00007BFF | Conventional Memory |
| 0x00007C00 | 0x00007DFF | OS Bootsector |
| 0x00007E00 | 0x0007FFFF | Conventional Memory |
| 0x00080000 | 0x0009FFFF | EBDA (Extended BIOS Data Area) |
| 0x000A0000 | 0x000BFFFF | Video Display Memory |
| 0x000C0000 | 0x000C7FFF | Video BIOS |
| 0x000C8000 | 0x000EFFFF | BIOS Expansions |
| 0x000F0000 | 0x000FFFFF | Motherboard BIOS |

We won't go into the data areas but if you are interested there are plenty of resources that go over them.

#### Bootloader

Now that we've got some pre reqs out of the way we can move on to the actual bootloader. For anyone who is familiar with the bootloader this section will solely be on familiarizing ourselves with assembly, the boot process, and how the bootloader is loaded into memory. We will not be dealing with any second stage bootloader or kernel loading for this section.

Whenever you boot up your computer the first thing it does is run a series of diagnostics called POST (Power On Self Test). This operation checks that all the computer hardware is working correctly before continuing the boot process and searches for all the bootable devices hooked up to the system (Floppy Disk, CD-ROM, Hard Disk, etc.).

Once your computer is done running POST it moves into verifying the Master Boot Record. This is the content on the first sector of the hard drive and will eventually be where we put our bootloader. To verify that there is a bootloader it looks for the magic number which is stored in the last two bytes of the first sector. If the memory contains the byte sequence 0x55, 0xAA at byte offsets 510 and 511 respectively it can load the bootloader and continue. If it does not see these bytes it will move on to check the next bootable device.

Once our bootloader is found and verified the computer will load our program into memory location 0x7C00 and our instruction pointer register will be set to the start of the program. With this information out of the way let's finally start programming our first bootloader. Forewarning, this will not be like a normal hello world, we will have to manually program a function to print since we don't have the luxury of ```printf``` or ```std::cout``` *scary*.

We start with the needed assembler instructions

```x86asm
[bits 16]			; Tells the assembler this is 16-bit code
[org 0x7c00]		; Tells the assembler it will be in memory at 0x7c00
```

These two lines will be added to the first line of your program and will be used by the assembler. The first line tells the assembler to target a 16-bit platform for our code since we will be working in real mode. The second line will tell the assembler to add this offset to all absolute and relative addresses. Since we know where our program will be loaded into memory we can tell the assembler to make sure all addresses point to the correct physical memory.

```
[bits 16]			; Tells the assembler this is 16-bit code
[org 0x7c00]		; Tells the assembler it will be in memory at 0x7c00

jmp $				; Endlessly jump on this line of code

; Our message we want to print
MSG_REAL_MODE: db "Starting up in 16-bit Real Mode.", 0
```

I didn't add much but wanted to explain this portion before I added too much. First, we added our message we want to print at the end of the file. This will be our data section and keeps us from having to jump over it to get to the code. Second, we added jmp $. This instruction tells the program to jump to the same line it is already on (denoted by $) so it will never go into our data section. We want to keep the code from running in the data section because when all this gets compiled into bits it won't know that it is a data section and will try and execute whatever it sees. This could cause our bootloader to go haywire or the computer to just crash so we avoid it.

```
[bits 16]			; Tells the assembler this is 16-bit code
[org 0x7c00]		; Tells the assembler it will be in memory at 0x7c00

jmp $				; Endlessly jump on this line of code

; Our message we want to print
MSG_REAL_MODE: db "Starting up in 16-bit Real Mode.", 0

; Fill the end of the file until 510 bytes are filled
times 510-($-$$) db 0
dw 0xaa55
```

Remember when I said the computer looks for the magic number at the last two bytes of the bootloader, this is where we add it. We don't really care about what is in between so we can just pad that with zeroes, which is exactly what we do. The first added line will put zeroes at every location from where it starts to where it is specified to end, in our case 510. Then we define a word with the magic number 0xaa55 at byte offsets 510 and 511.

```
[bits 16]			; Tells the assembler this is 16-bit code
[org 0x7c00]		; Tells the assembler it will be in memory at 0x7c00

mov bp, 0x9000		; Set the base pointer at 0x8000
mov sp, bp			; Set the stack pointer at the base

jmp $				; Endlessly jump on this line of code

printString_16:


; Our message we want to print
MSG_REAL_MODE: db "Starting up in 16-bit Real Mode.", 0

; Fill the end of the file until 510 bytes are filled
times 510-($-$$) db 0
dw 0xaa55
```

Now we have set the base stack pointer and stack pointer to memory location 0x9000. Before I go over the rest, we need to go over a quick thing about the stack. For simplicity, a stack is a linear data structure that follows the last in first out order. We use the terms push and pop to put things on the stack and take them off, respectively. However, the trick is it grows downwards, so our stack will grow from 0x9000 to 0x0000 not 0xFFFF. For our use we won't even get close to overwriting our bootloader and will end up changing the stack and base pointer again very shortly.

We also define the function printString_16, well we declared the label. I like to declare functions in separate files but to keep this simple we can just combine, eventually we'll be separating them. In case you don't know assembly doesn't really have functions like you know them in other languages. You have labels that you call and return from, or jump to and from, but we will call them. The beauty of calling the function is that call instruction will push the return address (address immediately after the call instruction) onto the stack for us and change EIP to the call destination. Then when we call return it will pop that address off the top of the stack and set EIP to that value. Now we fill out the function.

```
[bits 16]				; Tells the assembler this is 16-bit code
[org 0x7c00]			; Tells the assembler it will be in memory at 0x7c00

mov bp, 0x9000			; Set the base pointer at 0x9000
mov sp, bp				; Set the stack pointer at the base

mov si, MSG_REAL_MODE	; Move the pointer to the first character to si
call printString_16		; Call the print string function

jmp $					; Endlessly jump on this line of code

printString_16:
	pusha				; Push all the registers to the stack
	mov ah, 0x0E		; BIOS Subfunction
	mov bx, 0x0007		; BH - Page Number / BL - Text Color

nextChar_16:
	cmp byte[si], 0		; Compare si to 0 (End of string delimeter)
	je stringReturn_16

	mov al, byte [si] 	; Move the character to print into al
	int 0x10			; Print Interrupt

	add si, 1			; Move forward to the next character
	jmp nextChar_16		; Jump back to print the next character in the string

stringReturn_16:
	mov al, 0x0D		; Move the ASCII code for Carraige Feed into al
	int 0x10			; Print the character
	mov al, 0x0A		; Move the ASCII code for Line Feed into al
	int 0x10			; Print the character
	popa				; Pop all the registers from the stack
	ret					; Return from the function

; Our message we want to print
MSG_REAL_MODE: db "Starting up in 16-bit Real Mode.", 0

; Fill the end of the file until 510 bytes are filled
times 510-($-$$) db 0
dw 0xaa55
```

The first thing we do is go back to our main execution and add two lines, we will move the pointer to the string into si and call the print string function. The great part about registers is that when we set them, unless we explicitly change them, they don't change. It's not like higher level languages with scope so when we get into our print function it'll still be that value. Next, we start writing the printString_16 function. We don't need to do it but it is good practice to save your register values before executing a function, so we call pusha. This is coupled with a popa at the end of the function. Since we do this, whatever registers we change inside the function will be restored when we exit.

Then we set the BIOS subfunction and additional data. When using BIOS interrupts ah will be the subfunction value for the interrupt, and al and bx will be additional data needed for the interrupt. In our case ah is set to 0x0E for the print function, bx is set to 0x0007 (Page Number / Text Color) and al is going to be set to the value to print.

We then define another label called nextChar_16. This will allow us to loop back and print each character in the string while avoiding code duplication. First, we compare the byte pointed to by si to zero. If the byte is zero that means we have reached the end of the string and need to finish the function. We use the je instruction to jump if the compare is equal. Then we move the byte at si to al and call the interrupt using int 0x10. Luckily for us the interrupt will increment the cursor location for us. After that we add one to si to move forward in memory to the next letter and jump back to the nextChar_16 label to continue printing the string.

Finally, we have the stringReturn_16 label which will end and cleanup our function. We move a carraige feed value into al and print that then load a line feed value into al and print that too (CRLF). Then we return from the function back to the main execution so we can endlessly jump and pause our bootloader.

## Bootloader Compilation

Now we need to compile the program so it can be run by QEMU. Our trusty program NASM shines here. Open up a terminal or command prompt and ```cd``` yourself to the directory your file is in. Run the command
```
> nasm bootloader.asm -f bin -o bootloader
```
You can change ```bootloader.asm``` to whatever you named your assembly bootloader file and bootloader to whatever you want your binary file to be named. Now you should see a beautiful binary file with loads of x86_64 opcodes, program data, and padding zeroes.

## Bootloader Testing

Now we can finally test our bootloader in QEMU. Make sure your terminal or command prompt is still open and run the following command.

```
qemu-system-x86_64 -L C:/Progra~1/qemu -drive format=raw,file=bootloader
```

Now you should see QEMU open up and display our message we programmed.

> ## Extra
> Remember that QEMU is a full on emulator so we can actually load this and run it on a computer. I advise you don't run it on your main computer and make sure you know what you are doing so you don't overwrite your Operating System on your main drive. It shouldn't hurt, but you can never be too safe when it comes to something with this lack of hardware security. Personally, I use a simple hard drive to usb adapter to write the bootloader to the first sector of the hard drive. I put the newly written hard drive in an old computer and boot it up. (**BE CAREFUL NOT TO OVERWRITE THE HARD DISK YOU ARE USING. THIS IS REALLY EASY TO DO IF YOU ARE NOT CAREFUL WITH DEVICE NAMES.**)

#### Conclusion

Congratulations! You have just programmed a bootloader and it only gets better from here. In the next section we will be going over a second stage bootloader in preperation for adding a kernel, drivers, video graphics, and more. It may seem we aren't doing anything super interesting at the moment but we are building a strong foundation so we can do cool things later. If you didn't understand something we went over I always suggest researching it some more and getting comfortable with the information. [OS Dev Wiki](https://wiki.osdev.org/Expanded_Main_Page) is an amazing place to check out if you are interested.

[Return to the Posts Page](https://adisonyheathcott.github.io/adison_heathcott/posts)