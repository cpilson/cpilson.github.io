---
path: /blog/2018-03-14_the-art-of-resume-tool-writing
layout: blog
title: The Art of Resume Tool Writing
date: '2018-03-14T23:50:16-07:00'
---
I've been looking into GraphQL lately, and at serving GraphQL endpoints connected to a MongoDB data-store.

Why would I do such a thing? It actually ties into my earlier blog post about [decision fatigue](/blog/2018-03-12_javascript-and-decision-fatigue). I also have "career-fatigue," in that I have deep interest across many domains and within many disciplines and sub-disciplines. While I have studied software development for years and thrown products together in many languages, I am now looking to continue my focus on the JavaScript development stack, as I find it rewarding via rapid-prototyping and very quick development-feedback-testing-deployment loop times.

And this creates issues, as my résumé looks considerably different from most other "full-stack developer" résumés. 

I fear recruiters and would-be suitors don't know what they're really looking at. And that's my fault.

To this end, building a résumé-building app (Inferno front-end with an Express/GraphQL/Apollo Server back-end ... and Prisma, possibly?) seems the next reasonable step. I'll tag each "work-node" under a company with a set of tags, and then provide an option to filter the résumé. Ideally, I would push the output to LaTeX, as I typeset my résumés, but the first step here is formatting and presenting my experience in a cogent and concise fashion for (eager) public consumption.

I'm learning that GraphQL on the back-end is a considerably different animal than GraphQL on the front-end. In fact, there exists a not-inconsiderable leap between serving a GraphQL end-point with non-persistent data and connecting it to a data-store. Non-persistent data at a GraphQL endpoint is pretty simple and I was able to bang together a proof-of-concept over a day. Easy! But connecting this endpoint to a NoSQL (MongoDB) collection is proving ... interesting. A pain-point is that many tutorials and videos and what have you all seem to want to demonstrate a "single-file-simple-problem" approach. We'll make a `server.js` file and throw everything into it; problem solved! A few very muddled videos in, and I know I need a resolver ... and that's about it.

I look for "best practices" wherever I go. I've implemented `helmet` and other [Express security recommendations](https://expressjs.com/en/advanced/best-practice-security.html). I tend to break out `model`s, `route`s, and `schema`s to allow atomic and sane changes. But it is a bit frustrating to find that people providing content tend to follow the "ignore six-months-from-you-person" model and blob everything into the one file; that's a model that is prone to make future-me wonder just what present-day-me was thinking.

It's frustrating; future-me needs to be employed. And present-day-me feels the strong desire to improve the résumé through a résumé-building tool. Therefore, there exists tension between "just rebuild the résumé once and move on" and "use this as a teachable moment, build some tools, learn some useful extensions to existing skills, and create high-quality training content."
