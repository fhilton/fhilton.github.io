---
layout: post
title: Running Docker Containers in Microsoft Azure
date: "2017-03-24 18:01"
published: true
categories: [Docker]
tags: [Blog, Docker, Azure, Microsoft]
---

I have been looking into the different ways of which to run Docker containers using Microsoft Azure. It took me a while to run down all of the options so I thought I would summarize them here in case it's useful to someone else.

<!--more-->

### Monolithic (Single Container) Apps
An application does not need to be built out of microservices to benefit from the advantages of containers.
Developing a monolithic application in a container gives the advantages of dependency management, portability and ease of deployment.
<br><br>
Options for running single containers in Azure:

* <strong>Azure VM - IAAS using ARM Templates</strong>

    <br>You can create your own VM using [Azure Resource Manager (ARM)](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview) Templates and install Docker.  From there you can use [Azure VM Scale Sets](https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-overview) to scale your service as needed.

* [Azure App Service](https://azure.microsoft.com/en-us/services/app-service/web/)

    <br>Azure App Service now supports running Docker containers using Linux.  You can configure containers to be run using the [Azure Portal](https://docs.microsoft.com/en-us/azure/app-service-web/app-service-linux-using-custom-docker-image) or [create a containerized application and deploy the container directly to App Service using Visual Studio](https://blogs.msdn.microsoft.com/webdev/2016/11/16/new-docker-tools-for-visual-studio/).
    <br><br>
    You can setup a continuous delivery pipeline for your App Service in Visual Studio Team Services using the [Continuous Delivery Tools for Visual Studio](https://marketplace.visualstudio.com/items?itemName=VSIDEDevOpsMSFT.ContinuousDeliveryToolsforVisualStudio) extension.

<br>
Note that "Visual Studio Tools for Docker" is part of Visual Studio 2017 and available as an [extension](https://marketplace.visualstudio.com/items?itemName=MicrosoftCloudExplorer.VisualStudioToolsforDocker-Preview) for Visual Studio 2015.



### Service-oriented (Multiple Container) Apps
Containers really shine when it comes to building Service-oriented architectures.  Using services gives the ability to scale only the required parts of the application and allows developers to improve a single part of the system at a time.
<br><br>
While the above sounds great, that hard part is deploying and maintaining all of the containers that make up an application.
Tools that help manage the provisioning, scheduling and monitoring of containers are called <strong>orchestrators</strong>.
<br><br>
You can use just about any orchestrator with Azure because you can manually create VMs and install whatever you like on them.  Installing and configuring orchestrators is a complicated process.  Microsoft has gone to great lengths to make configuring Orchestrators easier with the Azure Container Service (ACS)
<br>
<br>
Options for orchestrating containers in Azure:

- [Azure Container Service (ACS)](https://azure.microsoft.com/en-us/services/container-service/)

    <br>Azure Container Service makes it easier to setup orchestration by pre-configuring the hosting environment and deploying the orchestrator for you.  Select the orchestrator, the size and number of VMs and ACS takes care of the rest.

    ACS currently supports (as of March 2017):

    - Docker Swarm (not to be confused with the new Docker Swarm Mode)
    - Kubernetes
    - DC/OS 

    There are some great tutorials in the [Technical Community Content](https://github.com/Microsoft/TechnicalCommunityContent/tree/master/Open%20Dev%20Framework/Docker) repository on GitHub if you want to try out ACS.
    <br><br>
    You can setup a continuous delivery pipeline for your Azure Container Service in Visual Studio Team Services using the [Continuous Delivery Tools for Visual Studio](https://marketplace.visualstudio.com/items?itemName=VSIDEDevOpsMSFT.ContinuousDeliveryToolsforVisualStudio) extension.

- [Azure Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)

    <br>Azure Service Fabric is Microsoft’s orchestrator that was originally used internally for services such as Azure DocumentDB, Azure SQL Databases and Skype for Business.  Service Fabric can be installed on premises or in a cloud provider such as Azure or AWS.  Service Fabric can run Linux and Windows containers. 


- <strong>Azure VM - IAAS using ARM Templates</strong>

    <br>As with the monolithic containers above, you can provision your own VMs and install your own orchestrator.

    There is a great example [here](https://github.com/tripdubroot/ContainerCamp/blob/master/labfour/deploy-docker-swarm.md) on how to use the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli) to setup and run [Docker Swarm Mode](https://docs.docker.com/engine/swarm/) in Azure.

<br><br>
A couple more good links:<br>

- [Microsoft e-book on Docker Containers and Azure](https://blogs.msdn.microsoft.com/cesardelatorre/2016/11/16/free-ebook-on-containerized-docker-application-lifecycle-with-microsoft-tools-and-platform/)
- [Discussion of Container Strategies with Michele Bustamante on .NET Rocks](https://www.dotnetrocks.com/?show=1419)
- [Using Docker with App Service with Nick Walker on the MSDevShow](http://msdevshow.com/2017/03/web-apps-with-nick-walker/)