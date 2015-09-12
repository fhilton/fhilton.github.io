---
layout: post
title: Teaching Kids to Code with Acer C720 Chromebooks and Linux
date: "2015-08-31 18:01"
published: true
categories: [Software, Linux, Chromebook]
tags: [Linux, Kids, Teaching, Software]
---

![Acer C720 for kids](/images/2015/08/AcerLaptop.jpg)
This post is about using [codestarter.org's](https://codestarter.org/) [install script](http://blog.codestarter.org/how-we-turn-199-chromebooks-into-ubuntu-based/) to run Linux on an Acer C720 Chromebook and using the C720 to explore software development with my kids.
<!--more-->
<br>
<br>
Back in December of 2014 it was time to figure out what to get the kids for Christmas.  We were thinking about replacing our 7 year old Wii with something more current.  I looked at Xbox's and Playstation's, but both seemed to be more about consuming than creating, and we have been trying to do more of the latter. I stumbled across [this](http://blog.codestarter.org/how-we-turn-199-chromebooks-into-ubuntu-based/) blog post on [codestarter.org](https://codestarter.org/) all about using $199 Chromebooks and Linux to teach kids to program.  I ended up getting laptops for less than the price of an xbox and over the last 8 months they have gotten more use than our Wii has in the last 7 years.
<br>
<br>
I bought the laptops on Amazon and used the [codeStarter script](https://github.com/codestarterorg/ubuntu-chromebook-installer) to install Linux.  The script partitions the hard drive and installs Linux on the free space of the drive.  The script also installs a bunch of development tools such as MIT's Scratch, and a code editor, and best of all (according to my kids), MineCraft.
<br><br>

![Atom Editor](/images/2015/06/Atom.png)
We use the [Atom editor](https://atom.io/) to edit and run python scripts and edit HTML and Javascript.  See my [Atom Extensions]({{site.baseurl}}/resources/atom-extensions.html) page for my favorite extensions. One extension we use a lot is [atom-runner](https://github.com/lsegal/atom-runner) which allows you to execute python scripts and see the output right inside of Atom.
<br>
<br>
![](/images/2015/06/VisualStudioCode.png)
Just for fun we also experimented with Microsoft's cross platform editor [Visual Studio Code](https://code.visualstudio.com/) and it performed quite well.
<br>
<br>
![](/images/2015/08/Arduino.jpg)
[Our coding group](http://augusta-polyglot.github.io) had a meeting about [Arduino's](http://augusta-polyglot.github.io/meeting/2015/04/16/Arduino-Sensors.html) so we installed the Arduino dev environment and the laptops worked great for programming the micro-controllers.  
<br>
<br>
![](/images/2015/08/ArduinoStarterKit.jpg)
One of the other attendee's told us about an Arduino starter kit he got on Amazon, which came with an amazing amount of parts to try for a very reasonable price.
<br>
<br>
We recently installed NetBeans and starting working on some MineCraft mods (check out the [MineCraft Modding with Forge](http://shop.oreilly.com/product/0636920036562.do) book and [this](https://github.com/devoxx4kids/materials/blob/master/workshops/minecraft/readme.asciidoc) awesome tutorial from [@arungupta](https://twitter.com/arungupta) and [@Devoxx4Kids](https://twitter.com/Devoxx4Kids).), which exposed the biggest weakness with the Acer C720, hard drive space.  The C720 only has a 16GB drive to start with, so it didn't take long to fill it up.  After some research we found [this](http://www.androidcentral.com/how-upgrade-ssd-your-acer-c720-chromebook) article all about how to upgrade the drives.  I purchased a [64GB drive](http://www.amazon.com/gp/product/B00LNF0UXS) from Amazon for $38 and used the above instructions to upgrade the drives.  Now we have lots more space and the laptops are running great.
<br>
<br>
The latest thing we have done on the laptops was pretty overdue: we installed [dropbox](https://www.dropbox.com).  Dropbox has a linux client (Google Drive and OneDrive do not) and it was really easy to get the kids' files backed up just in case something happens.  It also works well for the kids to share their MineCraft mods with each other.
<br>
<br>
The only problem we have had with one of the laptops is that occasionaly when you try to boot into Linux, it just beeps and will not boot.  It turns out that for some reason an environment variable gets reset and legacy boot no longer works.  Luckily I found [this](http://jrs-s.net/2014/04/01/restoring-legacy-boot-linux-boot-on-a-chromebook/) article that explains how to easily fix the problem.  I would say I have had to fix the issue 3 or 4 times on one laptop, and it has never happened on the other.
<br>
<br>
All in all I am extremely pleased with how well the laptops perform and how well they have lasted through 8 months of constant kid use.
