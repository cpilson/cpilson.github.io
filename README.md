# Gatsby-based GitHub Pages site

Hi! If you're reading this and aren't me (which, odds are, will be the case) you'll want to go to the GitHub.io site holding the _compiled_ version of this repo.

The compiled page is available at [https://cpilson.github.io](https://cpilson.github.io)

See you there!

## Why _Gatsby_

Gatsby was recommended to me by a mentor over the winter of 2017-2018. I had seen Jekyll in use before and knew one could run/push a blog or simple web site to the world using Jekyll. Gatsby compiles React code into a static site, _and_ supports GraphQL natively and via plugins. GraphQL is, incidentally, how I'm pulling in my repo metadata, albeit in snapshot form rather than a real-time fetch.

## Grabbing Repository Data

> NOTE: This will soon be pulled into the Travis-CI build process. The presence of a raw `JSON` file is an issue.

This site's knowledge of my GitHub repos comes from a GraphQL query to [GitHub GraphQL API](https://developer.github.com/v4/explorer/). The result of this query is dumped into `/static/githubrepos.json`.

The query currently being run is

```text
{
  user(login: "cpilson") {
    avatarUrl(size: 128)
    bioHTML
    company
    createdAt
    email
    followers(first: 100) {
      nodes {
        avatarUrl(size: 32)
        isHireable
        login
        name
      }
    }
    following(first: 100) {
      nodes {
        avatarUrl(size: 32)
        isHireable
        login
        name
      }
    }
    isHireable
    location
    publicKeys(first: 10) {
      nodes {
        id
        key
      }
    }
    pullRequests(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        author {
          avatarUrl(size: 32)
          login
          url
        }
        bodyHTML
        merged
        mergedAt
        publishedAt
        reactions(first: 50) {
          nodes {
            content
            createdAt
            user {
              avatarUrl(size: 32)
              login
              url
            }
          }
          totalCount
        }
        repository {
          name
          owner {
            avatarUrl(size: 32)
            login
            url
          }
          url
        }
        reviews(first: 100) {
          nodes {
            author {
              avatarUrl(size: 32)
              login
              url
            }
            body
            createdAt
            publishedAt
            repository {
              name
              url
            }
            state
            url
          }
        }
      }
    }
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        collaborators(first: 50) {
          nodes {
            avatarUrl(size: 32)
            email
            login
            url
          }
          totalCount
        }
        createdAt
        description
        hasIssuesEnabled
        hasWikiEnabled
        homepageUrl
        id
        isPrivate
        licenseInfo {
          description
          id
          name
          nickname
          spdxId
          permissions {
            description
            label
          }
          url
        }
        name
        owner {
          avatarUrl(size: 16)
          login
          url
        }
        primaryLanguage {
          color
          name
        }
        pushedAt
        repositoryTopics(first: 20) {
          nodes {
            topic {
              name
            }
          }
          totalCount
        }
        sshUrl
        stargazers {
          totalCount
        }
        updatedAt
        url
      }
      totalCount
    }
    url
    websiteUrl
  }
}
```

## How to use/compile this suite

* If you're a user, simply head over to the [compiled page](https://cpilson.github.io) and gape in wonderment!
* Keep the source files in the _develop_ branch; the site gets compiled and pushed to _master_ via the `gh-pages` package and a `deploy` script (invoked via `yarn run deploy`), found in `package.json`.
  * Alternately (and as an improvement), this site gets deployed to `master` by `Travis-CI` whenever a push to `develop` happens. This push must pass `Travis-CI` tests.
* When you're happy with the site (`yarn run develop` to test), build it to a static folder (`public`) via `yarn run build`, and make sure it does what you want via `gatsby serve`. This will serve the static build from `localhost:9000`. 
* When complete, push this code to your `develop` branch. This should trigger the `Travis-CI` build process and a new commit (force-push) to `master` will take place within a few minutes.