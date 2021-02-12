---
slug: osdev-intro
title: OS Dev Introduction
description: An introduction into operating system development.
id: Operating System Developement
date: 02-11-2021
---

---

![Alt Text](https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80)

###### Photo by [Emile Perron](https://unsplash.com/@emilep?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/programming?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)

#### Preface

Before I begin there are some things that need to be addressed. Firstly, I am only a hobbyist not a professional. I do my best to make sure my information is correct and easy to understand, however, there are a million ways to do everything. My way is not the end all way and is certainly not the best way. 

Secondly, this series is meant to help the reader understand the workings of an operating system and how it's written, not show them the best way to implement one. Although I want to keep the information simple, I understand some people have an unquenchable thirst for knowledge so I will add additional interesting information wherever possible. 

Lastly, in this series I will be using x86 assembly Intel syntax so you will either need to review that before starting or learn it as you go. I'll keep the code as simple as possible so if you are only here for theory you only need to know a small amount of assembly. 

With that being said, let's move forward.

#### Setup

Before we can start going over anything, we need to set up [QEMU]( https://www.qemu.org/), [NASM]( https://www.nasm.us/), and any text editor of your choice (Personally I use [VSCode]( https://code.visualstudio.com/)). [QEMU]( https://www.qemu.org/) will be our machine emulator so that we can test our code in the correct environment and [NASM]( https://www.nasm.us/) will compile our assembly programs into their respective binary files.

[QEMU]( https://www.qemu.org/) is super easy to download and install. Just be sure to pay attention to where it gets downloaded in case something goes wrong and you have to set the environment variable yourself.
[NASM]( https://www.nasm.us/)  is just as easy and again be sure to pay attention to where it is downloaded.
Now to make sure both programs are working and the environment variables are set we will run two commands on the command line. 
``` 
> nasm
	nasm: fatal: no input file specified
	Type nasm -h for help.
> qemu-system-x86_64 -L C:/Progra~1/qemu
```

After running the nasm command you should see the same output. If you do not make sure you installed it correctly and that you have your environment variables set up correctly. 

After running the qemu command you should see the qemu emulator window open. It will go through its usual process and eventually say "No bootable device". This is fine, we will be giving it a bootable device later on. If you do not see this check that it is installed correctly and that you have the correct environment variables set. A note on the additonal "-L C:/Progra~1/qemu": This is used to tell qemu where to find certain dependencies it needs to run. If this does not work for you try changing "C:/Progra~1/qemu" to the directory where you installed qemu. You can try and run the command without -L C:/Progra~1/qemu if you would like. For me I have to add this on Windows for qemu to find the write files it needs but for my Mac I do not need to specify the directory.

For the text editor I like to have a syntax highlighter so I use the vscode addon [x86 and x86_64 Assembly](https://marketplace.visualstudio.com/items?itemName=13xforever.language-x86-64-assembly) by 13xforever.

#### Prerequisite

Before we start with writing the OS we need to go over some basics.

I'm going to assume that since you're already here you know what an operating system is, so we'll start with the bootloader. For this series we will be interfacing with legacy BIOS and not UEFI.

Whenever you boot up your computer the first thing it does is run a series of diagnostics called POST (Power On Self Test). This operation checks that all the computer hardware is working correctly before continuing the boot process and searches for all the bootable devices hooked up to the system (Floppy Disk, CD-ROM, Hard Disk, etc.).

Once your computer is done running POST it moves into verifying the Master Boot Record. This is the content on the first sector of the hard drive and will eventually be where we put our bootloader. To verify that there is a bootloader it looks for the magic number which is stored in the last two bytes of the first sector. If the memory contains the byte sequence 0x55, 0xAA at byte offsets 510 and 511 respectively it can load the bootloader and continue. If it does not see these bytes it will move on to check the next bootable device.

> ## Extra
> If you own a computer you probably own a hard disk (or SSD if you've moved on or Floppy Disk if you're old) and you may have never thought about what it was. The hard disk is a temporary storage device used for storing things in memory that won't get wiped when you restart your computer. It records data by magnetizing a thin film of ferromagnetic material. Inside the hard drive is a spindle that holds 1 to 5 platters, which are small (10-20nm depth) circular disks, which are covered in the ferromagnetic material on both sides. There is also an arm for each platter on the drive that contains the heads capable of reading and writing data.

For our project you don't need to know the intracacies of the hard disk but it would be good to know how memory works and how it is arranged. The hard drive separates areas of memory into sectors, clusters, and tracks. Tracks are concentric circles, a 1 bit wide ring, that pass under a single stationary head during a disk rotation. The track is divided into segments of sectors. Sectors are blocks of memory defined in size by the type of hard disk. Most commonly the sector is 512 bytes, however, on CD-ROMs and DVD-ROMs sectors are 2048 bytes and on newer hard drives, Advanced Format disks, they can be 4096 bytes. Clusters are combinations of sectors usually defined in size by the programmer. Clusters come in handy to store files or other large amounts of memory. For a 4TB hard drive instead of keeping track of 8,589,934,592 sectors it would be much easier to define cluster size as 2048 bytes so we only keep track of 2,147,483,648 sectors. The only rule is you must use a number of sectors that is an exponent of 2, so 8 or 16 but never 10 or 5 etc. Most commonly I've seen 4096 byte (4KB) clusters for most file systems.

#### Bootloader

Now that we've got some pre reqs out of the way we can move on to the actual bootloader. For anyone who is familiar with the bootloader this section will solely be on familiarizing ourselves with assembly and how the bootloader is loaded into memory. We will not be dealing with any second stage bootloader or kernel loading for this section.

