---
layout: post
title: Running Jekyll GitHub Pages on Windows using Docker
date: "2016-12-14 18:01"
published: true
categories: [Tools]
tags: [Blog, Docker, Windows]
---

When I first started this blog, I went through the process of setting up  [Jekyll](https://jekyllrb.com/) locally on my Mac so that I could preview posts.


Recently I've been doing more work in Windows and wanted to be able to work on my blog without booting up my Mac.


My friend James pointed out on his blog [jamessturtevant.com](http://www.jamessturtevant.com/posts/Running-Jekyll-in-Windows-using-Docker/) that it's really easy to get Jekyll running on Windows using Docker so I thought I'd give it a try.

<!--more-->

Here are the steps I took based on James advice:


# Install Docker for Windows
See instructions here:
[Docker for Windows](https://www.docker.com/products/docker#/windows)

# Checkout Blog Source
Check out the blog source code to C:\\Code

>PS C:\\> git clone https://github.com/fhilton/fhilton.github.io.git C:\\Code\

# Run Jekyll
Run the following command

> PS C:\\> docker run -it -p 4000:4000 -v C:/Code/fhilton.github.io:/site itzg/jekyll-github-pages

Which produces the following output

>Configuration file: /site/_config.yml
&nbsp;            Source: /site
&nbsp;        Destination: /site/_site
 &nbsp;      Generating...
  &nbsp;                    done.
 Auto-regeneration: disabled. Use --watch
Configuration file: /site/_config.yml
   &nbsp;  Server address: http://0.0.0.0:4000/
  &nbsp; Server running... press ctrl-c to stop.


The above command tells docker to

*  run the [itzg/jekyll-github-pages](https://hub.docker.com/r/itzg/jekyll-github-pages/) image
* bind /site in the image to C:\\Code\\fhilton.github.io 
* bind port 4000 of our docker host to port 4000 of the container

# Browse Away!
Next browse to http://localhost:4000 and the blog is served!

![Blog is Served](/images/2016/12/BlogIsServed.png)

 
