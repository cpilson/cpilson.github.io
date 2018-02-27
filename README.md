# Gatsby-based GitHub Pages site

Hi! If you're reading this and aren't me (which, odds are, will be the case) you'll want to go to the GitHub.io site holding the _compiled_ version of this repo.

The compiled page is available at [https://cpilson.github.io](https://cpilson.github.io)

See you there!

## Why _Gatsby_

Gatsby was recommended to me by a mentor. I had seen Jekyll in use before and knew one could run/push a blog or simple web site to the world using Jekyll. Gatsby compiles React code into a static site, _and_ supports GraphQL natively and via plugins. GraphQL is, incidentally, how I'm pulling in my repo metadata, albeit in snapshot form rather than a real-time fetch.

## How to use/compile this suite

* If you're a user, simply head over to the [compiled page](https://cpilson.github.io) and gape in wonderment!
* Keep the source files in the _develop_ branch; the site gets compiled and pushed to _master_ via the `gh-pages` package and a `deploy` script (invoked via `yarn run deploy`), found in `package.json`.
  * Alternately (and as an improvement), this site gets deployed to `master` by `Travis-CI` whenever a push to `develop` happens. This push must pass `Travis-CI` tests.
* When you're happy with the site (`yarn run develop` to test), build it to a static folder (`public`) via `yarn run build`, and make sure it does what you want via `gatsby serve`. This will serve the static build from `localhost:9000`. 
* When complete, push this code to your `develop` branch. This should trigger the `Travis-CI` build process and a new commit (force-push) to `master` will take place within a few minutes.