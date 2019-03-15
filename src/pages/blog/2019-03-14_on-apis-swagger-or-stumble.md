---
path: /blog/2019-03-14_on-apis-swagger-or-stumble
layout: blog
title: 'On APIs: Swagger, or stumble?'
date: '2019-03-14T15:23:37-07:00'
---
> \[[Swagger](https://swagger.io/)\], or something like it, seems a good hedge against you-of-the-future cursing your past self for shortsighted and possibly slipshod design. In effect, using such tools can help you become a more [compassionate engineer](/blog/2019-02-08_on-software-engineering), if only to yourself.

I have been thinking about APIs for years, both on the "consuming" and "creating" side.

Most of the APIs I have come across in private development have been either completely or relatively undocumented, some of the better-documented examples using `Javadoc`-style inline comments.
There has to be a better way.

Over the Summer of 2018, I came across [Swagger](https://swagger.io/) in an effort to look to meta-tools and -data to articulate and document APIs. I was at the time working with a group who soundly rejected the time investment in documenting the API. We chose instead to continue what I will call the "stumble" approach, which added some cognitive overhead when trying to interact with several endpoints at once. Any ad-hoc documentation was was written (by me, in a private journal) was almost immediately out-of-date. If you've worked on a team or project like this, you know this struggle.

I am currently building a collection of APIs to support a SaaS project I'm working on privately, and once again I find myself desiring structure and documentation. I am not sure that any honest developer or engineer can say they can support something adequately without structure and documentation--six months out, the decision to "just build this out NOW, damn the future!" tends to lead to some awkward moments when future-you tries to make "one quick change" that leads to an hour-long fact-finding mission.

I would rather use this hour to write and improve software.

I am not sold that Swagger is the best tool out there for this task, but as a starting-point it seems a solid move. If nothing else, it gives a high-level overview of what your API is trying to accomplish, lets you see naming conventions that are out of line with the rest of the API, and can allow you to mock out return types and status codes for future implementation. It, or something like it, seems a good hedge against you-of-the-future cursing your past self for shortsighted and possibly slipshod design. In effect, using such tools can help you become a more compassionate engineer, if only to yourself.
