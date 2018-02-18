# Gatsby-based GitHub Pages site

Hi! If you're reading this and aren't me (which, odds are, will be the case) you'll want to go to the GitHub.io site holding the _compiled_ version of this repo.

The compiled page is available at [https://cpilson.github.io](https://cpilson.github.io)

See you there!

## Why _Gatsby_

Gatsby was recommended to me by a mentor. I had seen Jekyll in use before and knew one could run/push a blog or simple web site to the world using Jekyll. Gatsby compiles React code into a static site, _and_ supports GraphQL natively and via plugins. GraphQL is, incidentally, how I'm pulling in my repo metadata, albeit in snapshot form rather than a real-time fetch.

## How to use/compile this suite

* If you're a user, simply head over to the [compiled page](https://cpilson.github.io) and gape in wonderment!
* If you're looking to develop a site of your own, or maybe if you're future-me looking for a hint, rename the `env_sample` file to `.env.development` to [set up development environment variables](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/environment-variables.md).
  * Thus far, there is only one variable, `GITHUB_GQL_TOKEN`, that works with the `gatsby-source-github-gql` plugin to run a GraphQL query against the GitHub API.
  * This permits `index.js` to pass information about a GitHub repo down to the `GitHubList.js` and `GitHubDetailsModal` components.
  * Keep the source files in the _develop_ branch; the site gets compiled and pushed to _master_ via the `gh-pages` package and a `deploy` script (invoked via `yarn run deploy`), found in `package.json`.
* When you're happy with the site (`yarn run develop` to test), add `.env.development` and `.env.production` to your `.gitignore` file, populate both `.env` files with your `GITHUB_GQL_TOKEN`, push to your `develop` branch, and then push to `master` and publish at the same time through `yarn run deploy`.