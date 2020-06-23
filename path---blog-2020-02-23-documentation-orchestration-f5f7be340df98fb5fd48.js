webpackJsonp([0x752b7a0b62b0],{924:function(n,a){n.exports={data:{markdownRemark:{html:'<p>By this point, I have hopefully convinced the software engineers, developers, recruiters, and other interested technical people reading this blog that <em>documentation is important</em> and that we <em>owe it to ourselves, our colleagues, and our users</em> to provide high-quality documentation for our projects.</p>\n<p>We also owe it to our future-selves not to build out infrastructure that is silly.</p>\n<p>To this end, let’s take a moment to talk through the <em>orchestration</em> of documentation. Sure, we can build out documentation, but how might we automate this process?</p>\n<p>I am pleased to find that one initial approach that appealed greatly to me, that of building documentation inline with our project build, is actually possible (at least under Maven).</p>\n<p><code class="language-text">springdoc-openapi</code> has a Maven build plugin. Here is how we can leverage this:</p>\n<p><code class="language-text">pom.xml</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code class="language-xml">  ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springdoc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>springdoc-openapi-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">></span></span>integration-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">></span></span>generate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">></span></span>\n  ...</code></pre>\n      </div>\n<p>So that\'s done. But what does this do? Simply, this runs the <code class="language-text">generate</code> goal against the <code class="language-text">springdoc</code> OpenAPI Maven plugin during the <code class="language-text">integration test</code> phase of building. As I have previously mentioned, I have been waiting for the <code class="language-text">springdoc</code> suite to bring OpenAPI to 3.0. And here it is, in <em>whatever, man, just do the thing when it would probably make sense</em> form.</p>\n<p>Within the CI tool / GitHub Actions / GitLab Runner, we can do something like this to push the docs out to an external (static) documentation server:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">touch docs/XXXX-0.0.1-SNAPSHOT-OpenAPIv3.json &amp;&amp; \nmvn -B package --file pom.xml &amp;&amp; \nnpx redoc-cli bundle docs/XXXX-0.0.1-SNAPSHOT-OpenAPIv3.json --options.theme.colors.primary.main=blue &amp;&amp; \ngit clone &lt;repo&gt; &amp;&amp; mv redoc-static.html &lt;repo&gt;/docs/XXXX-0.0.1-XXXX-OpenAPIv3.html &amp;&amp; cd &lt;repo&gt; &amp;&amp; git commit -m &quot;Updating docs.&quot; &amp;&amp; git push</code></pre>\n      </div>',frontmatter:{date:"2020-02-23T13:05:59-07:00",path:"/blog/2020-02-23_documentation-orchestration",title:"Documentation Orchestration"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-2020-02-23-documentation-orchestration-f5f7be340df98fb5fd48.js.map