---
layout: post
title: Deploying an SQL Project DACPAC on Check-In
date: "2015-04-26 18:01"
published: true
categories: [Software, SQL]
tags: [SQL Database Project,Azure,CI]
---

This post is a follow up to [this post]({{site.baseurl}}/software/sql/2015/03/30/SQL%20into%20Version%20Control%20-%20Talk%20Questions.html) about a [talk](http://www.bostoncodecamp.com/CC23/Sessions/Details/14225) I gave at the [Boston Code Camp](http://www.bostoncodecamp.com/).

One of the questions from the talk was "Can you automatically deploy SQL Database Project changes when the code is checked in?".
<!--more-->

I found a blog post by [Jamie Thompson][635cee10] called [How deploy a DACPAC on Check-In using MS Azure][a62b5a4b] which explains how to check an SQL Database Project, build and deploy it. The article is from 2013 and mentions TFS Online, which is now Visual Studio Online.  I assume the article should translate to using VSO and TFS or Git version control, if anyone has tried it please let me know.

The output of "building" an SQL Database Project is a file called a DACPAC. A DACPAC is defined on [MSDN][85428d92] as:

> A data-tier application (DAC) is a logical database management entity that defines all of the SQL Server objects - like tables, views, and instance objects, including logins – associated with a user’s database. A DAC is a self-contained unit of SQL Server database deployment that enables data-tier developers and database administrators to package SQL Server objects into a portable artifact called a DAC package, also known as a DACPAC.

[Deborah Kurata][d29d8ef1] mentions a few ways to deploy a DACPAC in her excellent pluralsight video [Visual Studio Data Tools for Developers][d1d719ba] and on her blog in the post [Multiple ways to deploy a DACPAC][15fc8902].

I hope you find the above info useful, post in the comments if you know of any other good resources for deploying SQL Database Project on Check-In.

  [d1d719ba]: http://www.pluralsight.com/courses/visual-studio-data-tools-developers "Deborah Kurata Pluralsight Video"
  [d29d8ef1]: https://twitter.com/@DeborahKurata "Deborah Kurata Twitter"
  [15fc8902]: http://blogs.msmvps.com/deborahk/deploying-a-dacpac/ "Deborah's Blog"
  [a62b5a4b]: http://sqlblog.com/blogs/jamie_thomson/archive/2013/01/27/continuous-deployment-of-ssdt-database-projects-to-windows-azure-using-team-foundation-service.aspx "Jamie Thomson's Blog"
  [41767920]: http://www.bostoncodecamp.com/ "Boston Code Camp"
  [d8c0da08]: http://www.bostoncodecamp.com/CC23/Sessions/Details/14225 "Boston Code Camp Talk"
  [635cee10]: https://twitter.com/jamiet "Jamie Thompson's Twitter"
  [85428d92]: https://msdn.microsoft.com/en-us/library/ee210546.aspx "Data-tier Applications"
