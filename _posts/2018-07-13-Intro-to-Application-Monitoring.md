---
layout: post
title: Intro to Application Monitoring
date: "2018-07-13 18:01"
published: true
categories: [DevOps]
tags: [Monitoring, Stackify, Azure, .NET, Web]
---

Which of these stories do you identify with more?

- A customer reports an issue and your team starts trying to reproduce the issue or digging through logs to figure out whats wrong.  Eventually it's found that an error has been happening for a while, causing bad data, and its going to take a lot to clean up. The customer is frustrated and other customers need to be notified, if you'd only known sooner.
- You receive an alert from your synthetic (live) testing that a new error is happening.  A new feature was turned on a new feature an hour ago, that must be the problem. Custom metrics show that only the test user has used the new feature, crises averted.

Chances are you live somewhere in between the two extremes listed above, if so read on, perhaps some of the following will be useful.

<!--more-->

# Overview

While I was working for Mingle Analytics I helped put together a fairly comprehensive application monitoring system which helped us move from reactive to proactive monitoring.

In this post I'll go over the different parts of the system and give some details about each part.

![Application Monitoring Layers](/images/2018/07/MonitorLayers.png)

The image above shows the different types of monitoring and the tools that were used.  
Also shown is [Stackify Retrace](https://stackify.com/retrace/) being used to trigger alerts and send them to [Slack](https://slack.com/).

Lets take a look at each of the layers above and why you would use them.  
I'll be starting at bottom with the most common type and work my way to the top.  

Here are some quick links if you want to skip to a section:

- [Overview](#overview)
- [Server Monitoring - CPU, Memory, Disk](#server-monitoring---cpu-memory-disk)
- [Application Level Logging](#application-level-logging)
- [Log Aggregation](#log-aggregation)
- [Application Performance Monitoring (APM)](#application-performance-monitoring-apm)
- [Real User Monitoring (RUM)](#real-user-monitoring-rum)
- [Custom Metrics](#custom-metrics)
- [Synthetic (Live) Testing](#synthetic-live-testing)
- [Alerting](#alerting)

# Server Monitoring - CPU, Memory, Disk

Server monitoring is just what it sounds like, keeping an eye on your servers to make sure they are healthy. Is the CPU spiking, do we have a memory leak, a bad disk?  These are the types of questions you answer with server monitoring.  

Server monitoring is typically run by the IT/Operations side, however thanks to the DevOps movement developers are becoming more aware this type of monitoring.

At Mingle the IT group put [LogicMonitor](https://www.logicmonitor.com) in place to do the server level monitoring. 

[Stackify Retrace](https://stackify.com/retrace/) also does Server Monitoring, however since LogicMonitor was in place before Retrace, Mingle continued to use LogicMonitor for this level of monitoring.

**Some Server Monitoring Tools**

- [Stackify Retrace](https://stackify.com/retrace/)
- [Datadog](https://www.datadoghq.com)
- [Nagios](https://www.nagios.org/)
- [Azure monitoring](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview)
- [collectd](https://collectd.org/) with [plugins](https://collectd.org/wiki/index.php/Table_of_Plugins)

**Resources**

- [The Art of Monitoring Book](https://www.amazon.com/Art-Monitoring-James-Turnbull-ebook/dp/B01GU387MS)

# Application Level Logging

Application level logging is the first step to seeing what's happening inside your running application.

Logging is accomplished by adding code to your application that will tell you what parts of the application are being used and if there are any errors.

Logging can be as simple as writing the info text to a file, however using a logging framework such as [log4net](https://logging.apache.org/log4net/) or [NLog](http://nlog-project.org/) provide a lot of functionality out of the box.

At Mingle we used log4net for application logging.  We used the rolling file appender and kept a log file for each day of the month.

**When logging an application:**

- Use log levels to control the amount of logging.
- If running the app on multiple servers, include the server name in the log file to prevent file locking issues.
- Consider [structuring your logs](https://stackify.com/what-is-structured-logging-and-why-developers-need-it/) using JSON to help with later parsing.
- Make sure you log any handled as well as unhandled exceptions.

**Some Application Logging Tools**

- [log4net](https://logging.apache.org/log4net/)
- [NLog](http://nlog-project.org/)

**Resources** 

- [Logging Levels and how to use them](http://www.thejoyofcode.com/Logging_Levels_and_how_to_use_them.aspx)
- [C# logging best practices](https://stackify.com/csharp-logging-best-practices/)
- [Structured logging](https://stackify.com/what-is-structured-logging-and-why-developers-need-it/)
- [Using log4net](https://stackify.com/log4net-guide-dotnet-logging/)
- [Using nLog](https://stackify.com/nlog-guide-dotnet-logging/)
- [The Art of Monitoring Book](https://www.amazon.com/Art-Monitoring-James-Turnbull-ebook/dp/B01GU387MS)

# Log Aggregation

Log aggregation pulls together all of your log files into a central location. Many tools allow the searching and filtering of log data to help zero in on the info needed.

At Mingle we used [Stackify Retrace](https://stackify.com/retrace/) for log aggregation.  We found int very easy to setup and immediately began to see some errors that we had missed in the log files.

![Application Monitoring Layers](/images/2018/07/RetraceLog.png)

**Useful features of Retrace log aggregation:**

- Select a window of time and see the logs and other monitoring data all within the window.
- Receive alerts of errors and their frequency.
- Receive alerts when a search term is found in the log file.

# Application Performance Monitoring (APM)

APM tools typically help you see a breakdown of how each part of your application is performing.

At Mingle we used [Stackify Retrace](https://stackify.com/retrace/) for APM.

APM (combined with [RUM](#real-user-monitoring-rum) below) helped us find the source of some tricky issues.  One issue was a memory leak caused by a 3rd party component. Another issue was a front end bug that was intermittently sending thousands of requests, which in turn caused slow performance for all users.  The holistic view of server monitoring, stack traces, web requests and user info allowed us to quickly diagnose and fix the above issues.

![Application Monitoring Layers](/images/2018/07/RetraceAPM.png)

We were really impressed by the amount of information we received after installing Retrace:

- Graphs showing  the number of requests, average timing of web reqeusts and a breakdown of where that time is spent (App code, database, Redis, etc).
- Performance by
    - Request
    - SQL query
    - Web Service
- Code traces for slow or erroring code

Each of the above areas can be monitored and alerts can be sent when a threshold is breached.

**Some APM tools**

- [Stackify Retrace](https://stackify.com/retrace/)
- [Datadog](https://www.datadoghq.com)
- [Raygun APM](https://raygun.com/platform/apm)
- [Azure Monitoring](- [Azure monitoring](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview))

# Real User Monitoring (RUM)

RUM shows how a web application is performing from a users point of view:

- Who is logged in
- Number of users
- Location of users
- Page load performance
- Errors and crashes
- Feature usage

While APM above is focused from the webserver down, RUM is focused on the web browser.
RUM is particularly important for applications that use the Single Page Application (SPA) model. In SPA applications most of the code runs in the web browser.  It's quite possible for the SPA to be completely down and have the back APM reporting nothing but a lack of traffic.

One of our main apps at Mingle was a SPA written in AngularJs. We decided to use [Raygun](https://raygun.com) to monitor our SPA application.

Raygun proved useful for:

- Seeing the page load times by page or by user
- Seeing performance issues from the user point of view
- Knowing the number of active users
- Identifying specific users that were having performance issues
- Catching front end errors - User info such as browser type and location 

We created a custom plugin for Raygun that would push errors and performance information to [Stackify Retrace](https://stackify.com/retrace/) via a backend API.  This allowed us to have all of our error logging and alerting in one place.

Note that Raygun continues to evolve and now has many [plugins](https://raygun.com/docs/plugins/) to allow the export of alerts and data.  
Raygun is also starting to work in the [APM space](https://raygun.com/platform/apm).

**Some RUM tools**
- [Raygun](https://raygun.com)
- [TraceView](https://traceview.solarwinds.com/)

# Custom Metrics

While APM tools can give you a lot of metric information out of the box, its often necessary to complete the pictures using your own custom metrics.

Custom metrics are used for insight into both the technical and business sides of the application.

Typical metrics might be:

- Business
    - Number of users per day
    - Number of new users
    - Number of sales
    - Sales amounts
    - Page views
    - Features used
- Technical
    - Errors
    - Failed logins
    - Performance of specific requests or actions
    - Latency and response time of requests
    - Volumes of data transferred
    - Requests and responses

We used [Retraces custom metrics](https://docs.stackify.com/docs/custom-metrics-overview) to log page load times from Raygun as well as number of logins and performance of different parts of the system.

Custom metrics in Retrace are good for basic items but we ran up against the following limitations:

- All metrics are by the minute, no custom time frame.
- No support for using percentiles instead of average.
- Limited access to the metric data to perform our own analysis.
    - There is a basic API for metric data but it allows you to access the same info as the dashboard, averages by the minute.

**Some tools with custom metrics support**

- [Stackify Retrace](https://stackify.com/retrace/)
- [Datadog](https://www.datadoghq.com)
- [Azure Monitoring](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-overview)
- [StatsD](https://github.com/etsy/statsd)

**Resources**

- [Why Averages Suck and Percentiles are Great](https://www.dynatrace.com/news/blog/why-averages-suck-and-percentiles-are-great/)

# Synthetic (Live) Testing

Synthetic testing means running tests in production.  

We used custom metrics to monitor the performance of our synthetic tests and give us an early warning for any front end performance related issues.

We setup [TeamCity](https://www.jetbrains.com/teamcity/) to run [Selenium](https://www.seleniumhq.org/) tests which logged into the application as a test user and performed tasks.  We would then track and alert on metrics based on the test user ID.  

![Application Monitoring Layers](/images/2018/07/Synthetic.png)

# Alerting

Server level alerting was handled by [LogicMonitor](https://www.logicmonitor.com).

All other alerting was handled by [Stackify Retrace](https://stackify.com/retrace/) and routed to [Slack](https://slack.com/).

In Slack we had a dedicated "Production Issues" channel that was highly guarded and setup to always alert subscribers.

**Alterting tip**: Make sure alerts are real and infrequent. Too many alerts quickly turn into noise that is ignored.


<!-- | Tool             | Server | Log   | Log Agg | APM   | RPM   | Metrics |
| :--------------- | :----: | :---: | :-----: | :---: | :---: | :-----: |
| Stackify Retrace | x      | x     | x       | x     | x     | x       |
| Stackify Retrace | x      | x     | x       | x     | x     | x       | -->

