---
path: /blog/2018-03-12_javascript-and-decision-fatigue
layout: blog
title: JavaScript and Decision Fatigue
date: '2018-03-12T14:11:57-07:00'
---
> JavaScript suffers and imposes Decision Fatigue on developers. I am enjoying working with `React` and `Express`, but the search for better tools and techniques is exhausting!

JavaScript [under the `Node.js` ("`Node`") ecosystem] has a reasonably well-known limitation: it is prone to cause decision fatigue.

Over the past month or so of free-form investigation, I have juggled the following technologies or tools:

* `Typescript`
* TDD `Jest` (`Chai`/`Mocha` were considered, but I think `Enzyme` may better-suit my needs, and `Enzyme` seems to best-pair with `Jest`)
* Multiple CI build/configuration/manipulation scripts
* Different code coverage tools (e.g. CodeClimate, `inferno-scripts test --env=jsdom --coverage`)
* `MobX` (I tend to use `Redux`, but I'm exploring `MobX` with `Inferno` in building a `ResumeBuilder`)
* `GatsbyJS` with accompanying tools `Apollo` and `GraphQL`
* Various `Functional Programming` techniques--I know the theory behind these (thanks, misspent academic youth!), but something like `Elm` still makes me worry about how I'll run this through `Babel` to polyfill and present to `Webpack`
* Performance optimization--how do I _definitively_ prove, aside from either running timing-scripts in the CLI or looking at Chrome's debugging console, that the apps I write are production-ready?

This list, while exhausting, is _not_ exhaustive. I have worked through many technical stacks in my time, and I really like the `Node`-based stack It has good infrastructure, reasonable-seeming performance (text-file parsing aside--`Python` beats the daylights out of `JavaScript` for this), easy deployment out to `Heroku` and friends, and an active community. Unfortunately, there is something of a paradox of choice here, and this leads to decision-fatigue. 

As an example, let's look at a front-end app that runs in the browser and delivers some sort of web content. You want to build this in `JavaScript`. What are your viable options under `Node`?

* `React`
* `Preact` (`React` with SSR)
* `Inferno` (`React` with SSR options and lack of synthetic event handling)
* `Angular`
* Others (`Ember`, `Meteor`, `Vue`, `NextJS`...)

There are lots of options here!

Each of these carries decisions in their own right:

* Testing
* Typescript or Flow for typing--or nothing?
* Linting (`ESLint`) and/or Polyfill (`Babel`)
* JS `callback`s, `Promise`s, or `async`/`await` asynchronous call resolution (or `yield`, I haven't worked with `yield` in `JavaScript` yet)

At least the back-end/server-side of this environment is simpler; we really have two solid choices:

* `Express`
* `Koa`

But these two choices themselves carry much of the above decisions ("How do I test this?" "Do I write strongly-typed code that will compile to `JavaScript`, or do I just write raw `JavaScript` and be careful about typing?" "Do I want to enable `ES2015` syntax?" [`Express` only; `Koa` builds this in])

While I tend to work primarily in `React` [or "`React`-inspired"] and `Express` for front- and back-end work, as a long-time developer who is also fairly new to digging into the `JavaScript` full-stack infrastructure and associated tools, I am always left with a nagging thought: _is what I'm building the best way to go? Am I going to get caught out on performance when I go to scale this?_ These are questions that people new to development as a whole won't even know to ask, and I wonder how frequently this catches up with us, and how much of this is due to having entirely _too many options_.
