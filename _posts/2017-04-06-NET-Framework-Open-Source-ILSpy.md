---
layout: post
title: Viewing .NET Framework Source Code - Open Source or Closed with ILSpy and Visual Studio
date: "2017-04-06 18:01"
published: true
categories: [Docker]
tags: [Blog, ALM, Open Source, .NET]
---

Ever want (or need) to know how the .NET Framework is working under the covers?

Thanks to the new "Open Source" Microsoft, viewing the framework code is easier than ever.<br>
<br>
But what if you are not using an open source version of .NET? Use a decompiler such as [ILSpy](https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.ILSpy) or [dotPeek](https://www.jetbrains.com/decompiler/).

<!--more-->

<!--#### TL;DR - To the point-->
<br>
<br>
<strong>Some useful Links</strong>

- [Landing point for .NET code on GitHub](https://github.com/Microsoft/dotnet)
- <strong>.NET Core</strong>
    - [Source code shepherded by the .NET Foundation - Including .NET Core](https://github.com/dotnet)
    - [.NET Core](https://github.com/dotnet/core)
    - [ASP.NET Core](https://github.com/aspnet/)
    - [Roslyn Compiler](https://github.com/dotnet/roslyn)
    - [Entity Framework Core](https://github.com/aspnet/EntityFramework)
- <strong>.NET Framework</strong>
    - [.NET Framework (non-core) Reference (Subset of the full framework)](https://github.com/microsoft/referencesource)
    - [Browse and search the .NET Framework (non-core) reference](https://referencesource.microsoft.com/)
    - [Identity 2.0 (Until CodePlex shuts down)](https://aspnetidentity.codeplex.com/)

<br>
<strong>Decompile using ILSpy</strong>
<br>
If you can't find the source code above, or just want to quickly look at the version you are using:

- Install the [ILSpy extension for Visual Studio (2012-2017)](https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.ILSpy)
![Install ILSpy Extension in Visual Studio](/images/2017/04/2017-04-06_11_38_34-Extensions and Updates.png)
- Right click on an assembly and click "Open in ILSpy"
![Right click to view decompiled source](/images/2017/04/2017-04-06_11_39_27-OLA - Microsoft Visual Studio.png)

