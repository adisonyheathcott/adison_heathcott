---
slug: osdev-bootloader
title: OS Dev Bootloader
description: Learning about the bootloader and some common utilities.
id: Operating System Development
date: 02-17-2021
---

---

![Alt Text](https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80)

###### Photo by [Tianyi Ma]("https://unsplash.com/@tma?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText") on [Unsplash]("https://unsplash.com/s/photos/computer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText")

#### Preface

As we’ve seen before the bootloader is actually really interesting and we can do some cool things with it. So far, the only thing we’ve done with it is print a simple phrase “Starting up in 16-bit Real Mode.”. We could do a lot more with it but stop and think for a minute, what can we really do with 512 bytes. It’s not a terrible amount of space but it’s definitely too small to do anything interesting with video memory, drivers, or anything else. What’s the solution? A common practice is using this space to jump start a second stage bootloader that will be much bigger than this. We are still restricted by memory that is already taken by BIOS and the maximum accessible memory caused by being in 16 bit mode but it is going to be much more memory than we had before. With a plan in mind let's move forward.

#### Setting Up

So, we programmed our bootloader in the last section but for our new plan it will need to be added to. Since we've seen some of this before I'm going to be more sparse with the comments.

```
[bits 16]
[org 0x7c00]

; Our code will go here

mov bp, 0x8FFF			; Set the base pointer at 0x8FFF
mov sp, bp				; Set the stack pointer at the base

mov si, MSG_REAL_MODE	; Move the pointer to the first character to si
call printString_16		; Call the print string function

jmp $					; Endlessly jump on this line of code

-- PRINT FUNCTION DEFINED HERE --

SECONDBOOT_OFFSET: equ 0x9000
BOOT_DRIVE: db 0

LBA_SECONDBOOT:
    ; Size of DAP
    db 0x10
    ; Unused
    db 0x00
    ; Number of sectors to be read
    dw 0x02
    ; Offset to the loaded location -x86 (little endian)
    dw SECONDBOOT_OFFSET
    dw 0x00
    ; Absolute number of the start sector to be read
    dd 0x01
    dd 0x00

MSG_REAL_MODE:  db "Starting up in 16-bit Real Mode.", 0
ERROR_MSG:      db "Error reading from disk.", 0

times 510-($-$$) db 0
dw 0xaa55
```

Here we changed a few things that are important. First, we changed the stack location to 0x8FFF so that it wouldn't start on the first byte of our second stage bootloader. Second, we defined two directives called BOOT_DRIVE and SECONDBOOT_OFFSET. BOOT_DRIVE holds information about our boot disk that we will need to load files. SECONDBOOT_OFFSET will define the location where we want to load the second bootloader in memory. Memory location 0x9000 will give us much more memory as long as we do not pass memory location 0x7FFFF.

The Linear Block Address (LBA) is a nice way of accessing areas on our hard drive. It strips away the need to specify the head and track when accessing a memory address and assumes we have 512 byte sectors. Hopefully you recognize the assembly instructions we used for this structure, if not the simple rundown is db is declare byte, dw is declare word, and dd is declare double word. We start by defining the Disk Address Packet (DAP) which will make loading that much easier. The definition is as follows:

1 byte - Size of the packet (Always set to 0x10)

1 byte - Unused (Set this to 0x00)

2 bytes - The number of sectors to read from the hard drive

4 bytes - The segment:offset pointer to memory buffer

8 bytes - The absolute number of sectors to read

> ## Extra
> There is also another way to address memory on a hard disk called Cylinder Head Sector (CHS). This is particularly useful for older devices like floppy disks that have no direct way of being accessed with LBA's. Luckily the name is pretty self-explanitory, we just need to specify the head, the track, and the sector. BIOS will find this location for us on the hard drive and we can then read or write from that location as we wish.

We will see how this is used when we call the interrupt itself. To save space I won't show the entire file all the time but I will try and define something that was previously defined so you know where to start and end.

```
; Store the boot location into BOOT_DRIVE
mov [BOOT_DRIVE], dl

; Set up the stack location at 0x8FFF
mov bp, 0x8FFF  ; Set the base stack pointer
mov sp, bp      ; Set the stack pointer

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

-- PRINT FUNCTION DEFINED HERE --

```

#### Conclusion


[Return to the Posts Page](https://adisonyheathcott.github.io/adison_heathcott/posts)