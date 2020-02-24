---
path: /blog/2020-02-23_documentation-orchestration
layout: blog
title: Documentation Orchestration
date: '2020-02-23T13:05:59-07:00'
---
By this point, I have hopefully convinced the software engineers, developers, recruiters, and other interested technical people reading this blog that _documentation is important_ and that we _owe it to ourselves, our colleagues, and our users_ to provide high-quality documentation for our projects.

We also owe it to our future-selves not to build out infrastructure that is silly.

To this end, let’s take a moment to talk through the _orchestration_ of documentation. Sure, we can build out documentation, but how might we automate this process?

I am pleased to find that one initial approach that appealed greatly to me, that of building documentation inline with our project build, is actually possible (at least under Maven).

`springdoc-openapi` has a Maven build plugin. Here is how we can leverage this:

`pom.xml`
```xml
  ...
  <plugin>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-maven-plugin</artifactId>
    <version>0.2</version>
    <executions>
      <execution>
        <phase>integration-test</phase>
        <goals>
          <goal>generate</goal>
        </goals>
      </execution>
    </executions>
  </plugin>
  ...

```

So that's done. But what does this do? Simply, this runs the `generate` goal against the `springdoc` OpenAPI Maven plugin during the `integration test` phase of building. As I have previously mentioned, I have been waiting for the `springdoc` suite to bring OpenAPI to 3.0. And here it is, in _whatever, man, just do the thing when it would probably make sense_ form.

Within the CI tool / GitHub Actions / GitLab Runner, we can do something like this to push the docs out to an external (static) documentation server:

```
touch docs/XXXX-0.0.1-SNAPSHOT-OpenAPIv3.json && 
mvn -B package --file pom.xml && 
npx redoc-cli bundle docs/XXXX-0.0.1-SNAPSHOT-OpenAPIv3.json --options.theme.colors.primary.main=blue && 
git clone <repo> && mv redoc-static.html <repo>/docs/XXXX-0.0.1-XXXX-OpenAPIv3.html && cd <repo> && git commit -m "Updating docs." && git push
```
