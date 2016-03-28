---
layout: post
title: Using Mac Keyboard Shortcuts for Home/End in Visual Studio
date: "2016-03-26 18:01"
published: true
categories: [Tools]
tags: [Software, Tools, VisualStudio, Mac]
---
### Overview

Using Visual Studio (in Parallels) on my Mac works pretty well, except when I try to use **Command+Arrow** to move to the beginning or end of a line. When you press **Command+Arrow** in Visual Studio on a Mac, the window moves around the screen, which is quite surprising and not at all helpful. <br>
<br>
<!--more-->
I did some research and found some useful information about mapping Mac Keyboard Shortcuts to Visual Studio (and Windows) in the following areas:

1.  [http://hiltmon.com/blog/2013/10/10/using-mac-navigation-keys-in-visual-studio/](http://hiltmon.com/blog/2013/10/10/using-mac-navigation-keys-in-visual-studio/)
2. Comments from the post in #1 above
3. [https://autohotkey.com/board/topic/60675-osx-style-command-keys-in-windows/](https://autohotkey.com/board/topic/60675-osx-style-command-keys-in-windows/)


The information above basically involves using [AutoHotKey](https://www.autohotkey.com/) to remap the keys and then modifying the keyboard shortcuts in Visual Studio to get the desired result.<br><br>
Below is a summary of the steps required to use Mac keyboard shortcuts such as **Command+Left Arrow** from within a Parallels or similar Windows VM and Visual Studio.<br>
<br>
**Note** this tutorial is for Windows 10 and Visual Studio 2015.<br>

# Steps

1. Install [AutoHotKey](https://www.autohotkey.com/)
2. Download the [MacKeyboard.ahk](https://github.com/fhilton/autohotkey-windows-mac-keyboard) file (note this modifies more than just Visual Studio keys and incorporates changes from the links above.The file is a fork from [here](https://github.com/stroebjo/autohotkey-windows-mac-keyboard)).
3. Setup the .ahk file to run at startup
    1. Type Command+R to open the run window, then type shell:startup
![  Open Startup Folder](/images/2016/03/RunWindow.png)
    2. Copy the MacKeyboard.ahk file into the startup folder.
4. Open Visual Studio
5. Press Ctrl+Q and type Keyboard to open keyboard settings.
![Open Keyboard Settings](/images/2016/03/OpenKeyboardSettings.png)
6. Type "Edit.LineStart" in "Show commands containing" to select the LineStart command
7. Select "Text Editor" in the "Use new shortcut in:" box
8. Type Shift+Control+Option+Left Arrow into "Press shortcut keys:" and click Assign
![Open Keyboard Settings](/images/2016/03/VSKeyboardSettings.png)
9. Click OK to close the Options window.
10. Double click on the MacKeyboard.ahk script to run it.
11. Open a project in Visual Studio and Command+Left Arrow should bring your cursor to the home position. Alt+Left Arrow should move a word at a time.
