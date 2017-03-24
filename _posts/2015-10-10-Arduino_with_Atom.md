---
layout: post
title: Programming Arduino with Atom
date: "2015-10-10 18:01"
published: true
categories: [Software, Career]
tags: [Software, Mastermind, Training]
---
![](/images/2015/10/ArduinoWithAtom.png)
<br> <br>
Working with Arduino's is a lot of fun. Getting started is super easy thanks to the provided IDE and lots of great example code:

<!--more-->

![Arduino IDE with Examples](/images/2015/10/ArduinoExamples.png)

<br><br>
After getting past the "Hello World" phase I started to miss the editor experience that other editors give me, simple things like the ability to copy a line without highlighting or the way files are managed. <br><br>

I found a [whole list](http://playground.arduino.cc/Main/DevelopmentTools) of development tools on the Arduino website.  Two that stood out to me are:

* The [Viper IDE](http://doc.viperize.it/) - Allows you to program the Arduino in Python on a web based IDE, neat!
* [Visual Studio Arduino Plugin](http://www.visualmicro.com/) - This looks really cool and thanks to [Visual Studio Community](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) is free to get started with.


<br>
<br>
Since for now I want to stick with C++ and the kids I'm teaching use [Linux laptops](http://floydhilton.com/software/linux/chromebook/2015/08/31/Kids-Code-Chromebook-Linux.html), both of the above tools I found were not going to work.
 <br><br>
We were already successfully programming Python and Javascript with Atom on the Linux laptops, so I decided to look for a way to program the Arduino with Atom.<br><br>
The most promising extension I came across for Atom is [platformio](https://atom.io/packages/platomformio). [Here](https://viget.com/extend/arduino-development-in-atom-editor) is a blog post from the creator that explains what platformio is. See [here](http://floydhilton.com/resources/atom-extensions.html) for a list of the other Atom Extensions I use. <br><br>
Platformio has a nice some pretty easy setup instructions:

![platformio setup instructions](/images/2015/10/SetupInstructions.png)

I only ran into two issues trying to install the extension on my Mac.

1. I got an error "option --single-version-externally-managed not recognized" when trying to install Platformio.<br>
There is an issue report [here](https://github.com/platformio/platformio/issues/279) with a ton of info.<br>
I fixed the issue by adding "--egg" to the install command (which someone in the above issue report said was a bad idea, but it worked for me...)
![](/images/2015/10/pipinstall3.png)

2. I use [virtualenv](https://virtualenvwrapper.readthedocs.org/en/latest/) to isolate all of my Python environments. When I tried to build from Atom I got an error about not being able to find Platformio because I installed Platformio in a virtualenv.<br>
Luckily the platformio extension allows you to enter a custom path in the settings.<br>
To fix the issue I did the following:
  * Open a terminal and enter your virtualenv using workon
![](/images/2015/10/Workon2.png)
* Type Echo $PATH.
* Copy the path string and paste into the settings of the platformio extension:
![](/images/2015/10/platformioPath.png)
<br><br>

Once the above issues were completed I was able to build and then upload a sample program to my Arduino!

![Build Complete](/images/2015/10/BuildSuccess.png)
