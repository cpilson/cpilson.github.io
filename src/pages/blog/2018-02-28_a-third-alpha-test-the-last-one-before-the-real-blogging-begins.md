---
layout: blog
title: A third alpha-test; the last one before the real blogging begins
date: 2018-02-28T11:53:10.735Z
---
I _think_ this is ready for production. I've set this to push to `develop` branch on blog publication.

This should in turn trigger a `Travis CI` build. 

This will pick up the new blog post and roll it into the static site, as GraphQL will then be able to query the `gatsby-node.js` entry for the new blog file.

Here's hoping...
