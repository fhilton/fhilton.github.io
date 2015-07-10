---
layout: post
title: Simple Software Schedule - When will the Project be Done?
published: true
categories: [Software, Project Management]
tags: []
---
<!--more-->

Every once in a while I need to quickly figure out what a potential completion date will be for a given project.

Usually we have the following information:
<ul>
	<li>Potential Project Start Date</li>
	<li>Guesstimate of the Total Project Hours</li>
	<li>Number of Potential Resources</li>
	<li>Hours per Resource per Day</li>
	<li>Resource will be working Monday-Friday</li>
</ul>

Using the variables above, I typically whip open Excel and use the WORKDAY function to give me a potential project finish date.

The trouble is, finding the Excel file (or recreating it) is inefficient, and when others want to do the calculation I have to send them the file.

To solve the troubles, I have created a quick and dirty web version called [Can it be done](projects/canItBeDone/canItBeDone.html).

If you would like to see the code, make it better, or use it in your own project, head on over to [https://github.com/fhilton/can-it-be-done/](https://github.com/fhilton/can-it-be-done/)
