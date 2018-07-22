---
layout: post
title: Azure Bootcamp Prerequisites - Docker on Azure
date: "2017-04-12 18:01"
published: true
categories: [Docker]
tags: [Blog, Docker, Azure, .NET]
---

Below are the prerequisites for the [Global Azure Bootcamp](https://www.meetup.com/CascoBayNUG/events/236227762/) hands on lab "Docker on Azure".
<!--more-->

- [Exercise Files](#exercise-files)
- [PuTTY](#putty)
- [Docker for Windows](#docker-for-windows)
- [Visual Studio Tools for Docker](#visual-studio-tools-for-docker)
- [Docker Hub Account](#docker-hub-account)

#### Exercise Files

The exercise files are located in [this](https://github.com/Microsoft/TechnicalCommunityContent/tree/master/Open%20Dev%20Framework/Docker/Session%203%20-%20Hands%20On) GitHub repository. 


<strong>Note:</strong> The GitHub repo is HUGE.  I create a smaller zip file of the Docker files for the lab [here](https://dl.dropboxusercontent.com/u/47903262/TechCommContent_Docker.zip) if you don't want to clone the whole repository.

#### PuTTY
Install PuTTY from here: [http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

#### Docker for Windows
Install Docker for Windows from the Stable channel here:  [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)



Docker for Windows installs the Docker Client and Docker Daemon which allows you to run both Linux and Windows based containers.     

#### Visual Studio Tools for Docker
Docker support needs to be installed as an extension in VS 2015, and a workload in VS 2017, the examples for each are described below.



- <strong>For Visual Studio 2015<strong>
    - Install [.NET Core 1.0.1 VS 2015 Tooling Preview 2SDK](https://www.microsoft.com/net/core#windowscmd)
        - You need this specific version or the extension will not install
    - Tools for Docker Extension
        -   In Visual Studio 2015, go to Tools->Extensions and Updates
        -   Search for docker tools and click download
![Install Extension](/images/2017/04/VS2015Ext.png)
        - Open the downloaded file to install
        - Create a new .NET Core application, right click on the project, select Add and verify that "Docker Support" is listed.
![Docker Support](/images/2017/04/AddDockerSupport.png)



- <strong>For Visual Studio 2017<strong>
    - Go to Start->Visual Studio Installer
    - Click Modify
    - Select the "Azure Development" Workload
![Azure Workload](/images/2017/04/AzureWorkload.png)
    - Select the ".NET Core cross-platform development" Workload
![NET Cross Plat Workload](/images/2017/04/NetCoreCrossPlatWorkload.png)
    - Click modify to install
    - Create a new .NET Core application, right click on the project, select Add and verify that "Docker Support" is listed.
![Docker Support](/images/2017/04/AddDockerSupport.png)


#### Docker Hub Account
[Sign up for a Docker Hub account](https://hub.docker.com/)

Docker Hub is a repository for both Linux and Windows Docker images.
We will use Docker Hub to host an image that will then be deployed to Azure.

