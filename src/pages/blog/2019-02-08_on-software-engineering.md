---
path: /blog/2019-02-08_on-software-engineering
layout: blog
title: On Software Engineering
date: '2019-02-08T16:36:43-07:00'
---
> Differentiating between _good_ software and engineers, and _outstanding_ software and engineers \[...] comes down to a simple word: _consideration_.

I have spent considerable time over the past two decades thinking deeply about a singular common attribute of high-quality software, software engineers, and engineering. (NB: I have more-recently framed this thinking within the context of web sites, so my examples will pull from this, but the concepts hold through other software engineering targets and environments.)

This attribute is not what you may think--raw intellect, flexibility, skill, and capacity for improvisation all certainly have their place and are important, but they are not singular in differentiating between _good_ software and engineers, and _outstanding_ software and engineers.

It comes down to a simple word: _consideration_.

Consideration in design means that the end-user or stakeholder is kept in mind and the software is designed and built around their needs and not what is easiest or most "exciting" to build. Consideration means that engineers think deeply about disabilities--such as color-blindness or low vision or complete blindness--and research and implement reasonable accommodation to promote site usability. Consideration means not lying--either overtly or by omission--to users, stakeholders, or other engineers. Consideration means writing and supporting documentation. Consideration means writing and updating test suites to ease troubleshooting.

Consideration, of course, takes time. Consideration takes a mature team and support infrastructure that values the next three years or three months versus only the next three weeks or three days. Consideration, in light of and against this backdrop, requires an ever-vigilant allowance for taking the time to do something properly and correctly rather than paving over software with increasingly-worse software.

**Inconsiderate Software**:

* Reports a file or template or other data as "saved" when in fact no such operation has begun.
* Consistently fails to implement `a11y` or WebAIM or W3C's LVTF or [Section 508](https://www.section508.gov/) suggestions.
* Presents text layout in ways that aren't useful to low-vision readers (e.g. displaying linked resources in text with a different color versus underlining the text link) or screen-reading software (e.g. providing appropriate `aria` tags).
* Contains buttons that are are either wildly over-scoped (`do ALL THE THINGS` buttons) or have labels that do not describe what action will be performed when they are pressed (`do ... something?` buttons).
* Even worse: contains buttons that _say_ they will carry out one action, but actually _do_ some other action (`do OTHER THINGS` buttons).

Inconsiderate software is difficult to use and can make people feel actively irritated, incapable, and lied-to. Inconsiderate software reflects poorly on its engineers and company, as it breaks an [at least] implicit contract between the site and user.

**Inconsiderate Software Engineers**:

* Believe that using TDD and implementing even rudimentary smoke-tests a waste of time.
* Believe documentation, even at the block-diagram level, is an even larger waste of time.
* Treat colleagues with disdain or even outright abuse them.
* Don't discourage, or even encourage, repeated harassment of people by fellow employees. 
* Outright lie to colleagues about work, resources, the product, and goals.
* Are unprofessional in their conduct for extended periods of time, and are unapologetic about this (see the previous couple bullet-points).

**What kind of engineer are you? What kind of software are you writing?**
