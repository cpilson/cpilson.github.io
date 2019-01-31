webpackJsonp([0xa1dd11c14917],{306:function(e,o){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>JavaScript suffers and imposes Decision Fatigue on developers. I am enjoying working with <code>React</code> and <code>Express</code>, but the search for better tools and techniques is exhausting!</p>\n</blockquote>\n<p>JavaScript [under the <code>Node.js</code> ("<code>Node</code>") ecosystem] has a reasonably well-known limitation: it is prone to cause decision fatigue.</p>\n<p>Over the past month or so of free-form investigation, I have juggled the following technologies or tools:</p>\n<ul>\n<li><code>Typescript</code></li>\n<li>TDD <code>Jest</code> (<code>Chai</code>/<code>Mocha</code> were considered, but I think <code>Enzyme</code> may better-suit my needs, and <code>Enzyme</code> seems to best-pair with <code>Jest</code>)</li>\n<li>Multiple CI build/configuration/manipulation scripts</li>\n<li>Different code coverage tools (e.g. CodeClimate, <code>inferno-scripts test --env=jsdom --coverage</code>)</li>\n<li><code>MobX</code> (I tend to use <code>Redux</code>, but I\'m exploring <code>MobX</code> with <code>Inferno</code> in building a <code>ResumeBuilder</code>)</li>\n<li><code>GatsbyJS</code> with accompanying tools <code>Apollo</code> and <code>GraphQL</code></li>\n<li>Various <code>Functional Programming</code> techniques--I know the theory behind these (thanks, misspent academic youth!), but something like <code>Elm</code> still makes me worry about how I\'ll run this through <code>Babel</code> to polyfill and present to <code>Webpack</code></li>\n<li>Performance optimization--how do I <em>definitively</em> prove, aside from either running timing-scripts in the CLI or looking at Chrome\'s debugging console, that the apps I write are production-ready?</li>\n</ul>\n<p>This list, while exhausting, is <em>not</em> exhaustive. I have worked through many technical stacks in my time, and I really like the <code>Node</code>-based stack It has good infrastructure, reasonable-seeming performance (text-file parsing aside--<code>Python</code> beats the daylights out of <code>JavaScript</code> for this), easy deployment out to <code>Heroku</code> and friends, and an active community. Unfortunately, there is something of a paradox of choice here, and this leads to decision-fatigue. </p>\n<p>As an example, let\'s look at a front-end app that runs in the browser and delivers some sort of web content. You want to build this in <code>JavaScript</code>. What are your viable options under <code>Node</code>?</p>\n<ul>\n<li><code>React</code></li>\n<li><code>Preact</code> (<code>React</code> with SSR)</li>\n<li><code>Inferno</code> (<code>React</code> with SSR options and lack of synthetic event handling)</li>\n<li><code>Angular</code></li>\n<li>Others (<code>Ember</code>, <code>Meteor</code>, <code>Vue</code>, <code>NextJS</code>...)</li>\n</ul>\n<p>There are lots of options here!</p>\n<p>Each of these carries decisions in their own right:</p>\n<ul>\n<li>Testing</li>\n<li>Typescript or Flow for typing--or nothing?</li>\n<li>Linting (<code>ESLint</code>) and/or Polyfill (<code>Babel</code>)</li>\n<li>JS <code>callback</code>s, <code>Promise</code>s, or <code>async</code>/<code>await</code> asynchronous call resolution (or <code>yield</code>, I haven\'t worked with <code>yield</code> in <code>JavaScript</code> yet)</li>\n</ul>\n<p>At least the back-end/server-side of this environment is simpler; we really have two solid choices:</p>\n<ul>\n<li><code>Express</code></li>\n<li><code>Koa</code></li>\n</ul>\n<p>But these two choices themselves carry much of the above decisions ("How do I test this?" "Do I write strongly-typed code that will compile to <code>JavaScript</code>, or do I just write raw <code>JavaScript</code> and be careful about typing?" "Do I want to enable <code>ES2015</code> syntax?" [<code>Express</code> only; <code>Koa</code> builds this in])</p>\n<p>While I tend to work primarily in <code>React</code> [or "<code>React</code>-inspired"] and <code>Express</code> for front- and back-end work, as a long-time developer who is also fairly new to digging into the <code>JavaScript</code> full-stack infrastructure and associated tools, I am always left with a nagging thought: <em>is what I\'m building the best way to go? Am I going to get caught out on performance when I go to scale this?</em> These are questions that people new to development as a whole won\'t even know to ask, and I wonder how frequently this catches up with us, and how much of this is due to having entirely <em>too many options</em>.</p>',frontmatter:{date:"March 12, 2018",path:"/blog/2018-03-12_javascript-and-decision-fatigue",title:"JavaScript and Decision Fatigue"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-2018-03-12-javascript-and-decision-fatigue-29d41bd7d5a91035f6ce.js.map