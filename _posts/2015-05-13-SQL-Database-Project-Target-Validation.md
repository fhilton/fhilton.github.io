---
layout: post
title: SQL Database Project - Validating Schema Against Specific Target Database Version
date: "2015-05-13 18:01"
published: true
categories: [Software, SQL]
tags: [SQL Database Project,Azure,CI]
---

This post is a follow up to [this post]({{site.baseurl}}/software/sql/2015/03/30/SQL%20into%20Version%20Control%20-%20Talk%20Questions.html) about a [talk](http://www.bostoncodecamp.com/CC23/Sessions/Details/14225) I gave at the [Boston Code Camp](http://www.bostoncodecamp.com/).

One of the questions at the end of my talk was

>if you change the target database version, is the schema validated against the selected version?
<!--more-->

With some research I found the [this article][41ed51ab] on MSDN.  The article tells how you if you add "ON [PRIMARY]" to the end of a script, and then change the Target Version to Azure, the validation fails because  "Filegroup reference and partitioning scheme" is not valid in Azure.

I also did my own test case using my [example database project on github][70c9a3a4].
I added a field with the type of "Date" and changed the Target Version to 2005. The validation showed an error as expected because the "Date" datatype is not valid in SQL 2005. 

![SQL Date Error](/images/2015/05/Screen Shot 2015-05-13 at 7.39.21 PM5-13-15.png)

So the answer is "Yes", and SQL Database Project does validate for the target version selected.

  [41ed51ab]: https://msdn.microsoft.com/en-us/hh272687(v=vs.103).aspx "MSDN Article"
  [41767920]: http://www.bostoncodecamp.com/ "Boston Code Camp"
  [d8c0da08]: http://www.bostoncodecamp.com/CC23/Sessions/Details/14225 "Boston Code Camp Talk"
  [70c9a3a4]: https://github.com/fhilton/SqlDbProject "Github project"
