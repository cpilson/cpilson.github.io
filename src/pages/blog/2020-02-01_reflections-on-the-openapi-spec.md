---
path: /blog/2020-02-01_reflections-on-documenting-using-the-openapi-spec
layout: blog
title: Reflections on Documenting Using the OpenAPI Spec
date: '2020-02-01T12:24:07-07:00'
---
> Swagger started life as an offering from [SmartBear](https://swagger.io/solutions/getting-started-with-oas/). SmartBear then donated the API specification to the Open Source community, where it was re-branded `OpenAPI 2.0` ... There now exists the `OpenAPI 3.0` specification [and I go through a bit of pain to generate this automatically, as `Springfox` support for `OpenAPI 3.0` hasn't yet come out of experimental channels]. _[I]s it really worth doing all this for the sake of documentation?_ **[Y]es**, it is worth the effort.

I have [talked before](./2019-03-14_on-apis-swagger-or-stumble) about Swagger at a high level, but let's now back up a bit and re-visit.

Swagger, a SmartBear product, came out and allowed people to annotate code. These annotations would be parsed and transformed into a JSON file that described the API and its endpoints, expected data, and so forth.

Things were not-terrible, life was good, annotations aren't terribly bad, right?

I spent most of 2019 working professionally in `Spring Boot 2.x`. Spring Boot is an opinionated library built atop `Spring`, which itself runs atop `Java`. The short version is that components can be wired together very quickly, and different component types can be built and orchestrated, and Spring will ultimately take these components, parse them as Beans, and vomit the whole thing out as a bunch of connected POJOs (Plain Old Java Objects). It's pretty good times.

All that Spring and Spring Boot require to work this magic is
  1. Conformance to an established convention (AOP and IoC are at work here);
  1. [Extensive] use of annotations.

**Annotations**. My God, so many annotations. Annotations _everywhere_. As a relative newcomer, I know (and love) the annotations that I work with, but also as a relative newcomer to the libraries, it's a bit overwhelming. I also like to pull in [JSR-380 (bean validation)](https://beanvalidation.org/2.0/), so I can trade stand-alone Java validators for annotations in model classes.

Is life good here? Well, yes, but it's _noisy_.

And in comes Swagger, riding atop its own ocean of annotations.

I've thus far given you half the story about Swagger. Swagger started life as an offering from [SmartBear](https://swagger.io/solutions/getting-started-with-oas/). SmartBear then donated the API specification to the Open Source community, where it was re-branded `OpenAPI 2.0`. _OpenAPI 2.0 and Swagger specification are, for now, the same thing_. These terms can be used interchangeably. If you've ever clicked-through a `Swagger UI` screen and looked at `/v2/api-docs` and seen the resulting `JSON` file, you have seen OpenAPI 2.0 specification code. There now exists the `OpenAPI 3.0` specification, but there's no good way to get there from Spring Boot. Lately, though, I've been mutating OpenAPI 2.0 spec (manually, with the `sed`, `grep`, and `jq` CLI tools) and generating `OpenAPI 3.0` JSON output, which I then send to [`Redoc`](https://github.com/Redocly/redoc) for compilation into a static HTML file (this is quasi-public facing, so I wanted this output to be fast, immutable, and not live on the application server). `OpenAPI 3.0` specification improves upon Swagger by--in addition to other items--permitting multiple servers to be listed for an API (e.g. `dev`, `qa`, `staging`, `production`), along with labels for each, versus presenting one and only one server. Support for OpenAPI 3.0 generation via Springfox isn't yet ready, so for now, I'm left doing the 2.0 -> 3.0 conversion dance in the console.

It sometimes feels a bit much, and it's easy to ask the question, _is it really worth doing all this for the sake of documentation?_

I stand fast in my earlier blog entry that, **yes**, it is worth the effort. Good software engineers do, in my considered opinion, work harder to ease and facilitate consumption and comprehension of the code they write. In other words, as the code we can consistently and correctly generate becomes more complex and intricate, so too must we be mindful and work to make it easier to consume this code.

These days, I tend to use Springfox to parse Swagger annotations and build the `api-doc.json` description. As described above, converting the `OpenAPI 2.0` specification file to `OpenAPI 3.0` specification takes a bit of extra-IDE work, and I look forward to seeing this requirement go away as `Springfox` becomes able to generate `OpenAPI 3.0` specifications directly. 

As a collective group, software engineers are disinclined to generate high-quality and _current_ documentation. We are nearly to the point where the "this is too cumbersome to maintain" argument vanishes, and only moderate measures of discipline and compassion remain as impediments to providing high-quality and maintained documentation. I look forward to this day.
