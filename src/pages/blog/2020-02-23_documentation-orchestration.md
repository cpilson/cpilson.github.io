---
path: /blog/
layout: blog
title: Documentation Orchestration
date: '2020-02-23T13:05:59-07:00'
---
By this point, I have hopefully convinced the software engineers, developers, recruiters, and other interested technical people reading this blog that \_documentation is important\_ and that we \_owe it to ourselves, our colleagues, and our users\_ to provide high-quality documentation for our projects.

We also owe it to our future-selves not to build out infrastructure that is unmaintainable.

\
To this end, let’s take a moment to talk through the \_orchestration\_ of documentation. Sure, we can build out documentation, but how might we automate this process?

I am pleased to find that one initial approach that appealed greatly to me, that of building documentation inline with our project build, is actually possible (at least under Maven).

\`springdoc-openapi\` has a Maven build plugin. Here is how we can leverage this:
