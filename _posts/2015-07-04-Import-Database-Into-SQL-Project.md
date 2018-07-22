---
layout: post
title: SQL Database Project - Import an Existing Database
date: "2015-07-04 18:01"
published: true
categories: [Software, SQL]
tags: [SQL Database Project,Azure,CI]
---

This post is a follow up to [this post]({{site.baseurl}}/software/sql/2015/03/30/SQL%20into%20Version%20Control%20-%20Talk%20Questions.html) about a [talk](http://www.bostoncodecamp.com/CC23/Sessions/Details/14225) I gave at the [Boston Code Camp](http://www.bostoncodecamp.com/).

One of the questions at the end of my talk was:

>How do you deal with multiple, dependent databases, including using symbolic links?
<!--more-->

I decided the best way to explain working with dependancies is to do a step by step database import example.

If you would like to skip to the part about dependancies click [here](#referenceError).

This tutorial was created with [Visual Studio 2013](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) and [SQL Server 2014 Express](https://msdn.microsoft.com/en-us/sqlserver2014express.aspx).

The sample project for this tutorial is on Github [here](https://github.com/fhilton/SQLProjectImportExample).
For this example I'm going to use two dummy databases, "Database1" and "Database2".

A view in Database2 is dependent on a table in Database1.

<e>Open SQL Server Object Explorer</e>
![SQL Server Object Explorer](/images/2015/07/ObjectExplorer.png)

<e>Connect to your database server</e>
![Open Database](/images/2015/07/OpenDatabase.png)

<e>Right click -> New Project</e>
![Create New Project](/images/2015/07/CreateNewProject.png)

<e>Check settings and click Start</e>
![Import Database Dialog](/images/2015/07/ImportDatabaseDialog.png)

> For this example I am importing into Git, and will have the source code on Github [here](https://github.com/fhilton/SQLProjectImportExample).
I chose to not import logins, permissions, or db settings because it gets complicated and for most cases you won't need it.
<e>Choose Git</e>
![Choose Git](/images/2015/07/ChooseGit.png)

<e>Click Finish</e>
![Finish](/images/2015/07/Finish.png)

<e>Files that are created when adding to Git</e>
![Created Files](/images/2015/07/CreatedFiles.png)
When you choose to import the solution into Git, some files are created for you:

> .git directory - Holds the files that store the Git version history
> .gitattributes - What kind of line ending should be used?

>![.gitattributes](/images/2015/07/gitAttributes.png)
 &nbsp; Note that there were some issues with text=auto setting all line endings to CRLF, I'm not sure if this is still a problem, but if you see [this](http://www.khalidabuhakmeh.com/why-you-gotta-be-like-that-visual-studio-2013) issue then can you can change text=false.

 > .gitignore - Tells what files to NOT commit, such as files generated during the build process.
![.gitignore](/images/2015/07/gitignore.png)

<e>Commit files to Git</e>
> Visual Studio created a Git repository for us, but no files have been added.
> To add the files to Git, you can use Visual Studio's Git integration.
![Team Explorer](/images/2015/07/TeamExplorer.png)
>
![Team Explorer Open](/images/2015/07/TeamExplorer2.png)
>
![Commit Changes](/images/2015/07/CommitChanges.png) 
> Push Changes to server (in this case Github)
![Unsynced Commits](/images/2015/07/UnsyncedCommit.png)
>
![Add Remote](/images/2015/07/AddRemote.png)
<e>Resolve Errors</e>
Now that you have Database2 imported, you will see that there are some errors:
![Errors](/images/2015/07/Errors.png)

Go to the Error tab and view the errors:
![Errors List](/images/2015/07/ErrorList.png)
There are two errors listed, lets resolve one at a time.
The second error is because it is legal to reference the current database name in a view, but not legel in an SQL Database Project:
![Database Self Reference](/images/2015/07/DatabaseSelfReference.png)
Once we remove the self-reference the error is resolved:
![Database Reference Resolved](/images/2015/07/DatabaseSelfReference_fixed.png)

<a name="referenceError"></a>
The other error is a little more involved. The view is referencing another database.
![Reference Error](/images/2015/07/ErrorReferencedDb.png)
There are two ways to resolve this error.
1. Import the database that is being referenced into the solution.
2. Add a reference to a .DACPAC (for more info on DACPACs, [see this post]({{site.baseurl}}/software/sql/2015/04/26/Deploying%20an%20SQL%20Project%20DACPAC.html))

For this example, I am going to do #2 above, because I don't want to go through the hassle of having to fix any errors with Database1 after importing it.
First we have to create the .DACPAC for Database1
<e>Right click on Database1 in SQL Server Object Explorer</e>
![Extract Dacpac](/images/2015/07/ExtractDacpac.png)
<e>Specify location</e>
![Extract Dacpac dialog](/images/2015/07/ExtractDacpacDialog.png)

> I like to make a folder under the project that holds DACPACs that will be referenced.
Once the DACPAC is created, we need to add a reference to the Database2 project.
<e>Right click on the Database2 project references and click "Add Database Reference"</e>
![Add Database Reference](/images/2015/07/AddDatabaseReference.png)


![Add Reference Dialog](/images/2015/07/AddReferenceDialog.png)

> Here you have some choices to make, you can either use a database variable to refer to the referenced database (see above), or you can clear out the "Database variable" field and reference the database by name:
![No Db Variable](/images/2015/07/NoDbVariable.png)
For this example I'm going to use the Database variable option so that I can show how to use variables when publishing. For simple database references, I usually clear out the variable and just reference the database by name.
You will also see that I clicked "Suppress Errors", this will suppress any reference errors if Database1 references another database.

<e>Fix the error by referencing the DACPAC</e>
![Referencing db with variable](/images/2015/07/FixDbReferenceError.png)
<e>Error fixed</e>
![Fixed](/images/2015/07/ReferenceFixed.png)

At this point the database is imported and the errors are resolved.
In a future blog post I will cover making changes and publishing those changes to a new or existing database.
<e>What about symbolic links?</e>
[Symbolic links](https://technet.microsoft.com/en-us/library/cc754077(v=ws.10).aspx) allow you to reference another database with a name you give the link.
To publish a database that references another database using a symbolic link, simply set the database variable equal to the name used in the Symbolic Link.


  [41ed51ab]: https://msdn.microsoft.com/en-us/hh272687(v=vs.103).aspx "MSDN Article"
  [41767920]: http://www.bostoncodecamp.com/ "Boston Code Camp"
  [d8c0da08]: http://www.bostoncodecamp.com/CC23/Sessions/Details/14225 "Boston Code Camp Talk"
  [70c9a3a4]: https://github.com/fhilton/SqlDbProject "Github project"
