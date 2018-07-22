---
layout: post
title: Understanding Docker "Container Host" vs. "Container OS" for Linux and Windows Containers
date: "2017-03-31 18:01"
published: true
categories: [Docker]
tags: [Blog, Docker, Windows Container, Microsoft, Linux]
---

Lets explore the relationship between the "Container Host" and the "Container OS" and how they differ between Linux and Windows containers.

<!--more-->

#### Some Definitions:

- <strong>Container Host:</strong> Also called the <strong>Host OS</strong>. The Host OS is the operating system on which the Docker client and Docker daemon run.  In the case of Linux and non-Hyper-V containers, the Host OS shares its kernel with running Docker containers. For Hyper-V each container has its own Hyper-V kernel.
- <strong>Container OS:</strong> Also called the <strong>Base OS</strong>. The base OS refers to an image that contains an operating system such as Ubuntu, CentOS, or windowsservercore. Typically, you would build your own image on top of a Base OS image so that you can take utilize parts of the OS. Note that windows containers require a Base OS, while Linux containers do not.
- <strong>Operating System Kernel:</strong> The Kernel manages lower level functions such as memory management, file system, network and process scheduling.

#### Now for some pictures:

![Linux Containers](/images/2017/03/2017-03-31_14_50_13-Radom Learnings, Online Whiteboard for Visual Collaboration.png)



In the above example

- The Host OS is Ubuntu. 
- The Docker Client and the Docker Daemon (together called the Docker Engine) are running on the Host OS. 
- Each container shares the Host OS kernel.  
- CentOS and BusyBox are Linux Base OS images.
- The "No OS" container demonstrates that you do not NEED a base OS to run a container in Linux.  You can create a Docker file that has a base image of [scratch](https://hub.docker.com/_/scratch/) and then runs a binary that uses the kernel directly.
- Check out [this](https://www.brianchristner.io/docker-image-base-os-size-comparison/) article for a comparison of Base OS sizes.


![Windows Containers - Non Hyper-V](/images/2017/03/2017-03-31_15_04_03-Radom Learnings, Online Whiteboard for Visual Collaboration.png)


In the above example

- The Host OS is Windows 10 or Windows Server.  
- Each container shares the Host OS kernel.  
- All windows containers require a Base OS of either [nanoserver](https://hub.docker.com/r/microsoft/nanoserver/) or [windowsservercore](https://hub.docker.com/r/microsoft/windowsservercore/). 



![Windows Containers - Hyper-V](/images/2017/03/2017-03-31_15_41_31-Radom Learnings, Online Whiteboard for Visual Collaboration.png)


In the above example

- The Host OS is Windows 10 or Windows Server.  
- Each container is hosted in its own light weight Hyper-V VM.
- Each container uses the kernel inside the Hyper-V VM which provides an extra layer of separation between containers.
- All windows containers require a Base OS of either [nanoserver](https://hub.docker.com/r/microsoft/nanoserver/) or [windowsservercore](https://hub.docker.com/r/microsoft/windowsservercore/). 



A couple of good links:

- [About windows containers](https://docs.microsoft.com/en-us/virtualization/windowscontainers/about/)
- [Deep dive into the implementation Windows Containers including multiple User Modes and "copy-on-write" to save resources](http://blog.xebia.com/deep-dive-into-windows-server-containers-and-docker-part-2-underlying-implementation-of-windows-server-containers/)
- [How Linux containers save resources by using "copy-on-write"](https://docs.docker.com/engine/userguide/storagedriver/imagesandcontainers/#the-copy-on-write-strategy)
