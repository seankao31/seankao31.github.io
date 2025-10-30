import"./Bg9kRutz.js";import"./69_IOA4Y.js";import{s as i,g as c,i as a,r as s,n as h}from"./kwVl_-fd.js";import{a as p,t as u}from"./DXXKktUD.js";import{h as n}from"./BYXFwn-o.js";var g=u(`<h1 id="sveltekit-static-blog-starter"><a aria-hidden="true" tabindex="-1" href="#sveltekit-static-blog-starter"><span class="icon icon-link"></span></a>SvelteKit static blog starter</h1> <p>This starter contains everything you need to get up and running with <a href="https://kit.svelte.dev/" rel="nofollow">SvelteKit</a> as a static site generator for your
Markdown (and Svelte)-powered blog. <a href="https://sveltekit-static-starter.netlify.app/" rel="nofollow">Check out the demo here</a>, or
view the <a href="https://github.com/josh-collinsworth/sveltekit-blog-starter" rel="nofollow">GitHub repo here</a>.</p> <h2 id="features"><a aria-hidden="true" tabindex="-1" href="#features"><span class="icon icon-link"></span></a>Features</h2> <ul><li>🎉 <strong>Fully up-to-date with SvelteKit 2 and Svelte 5!</strong></li> <li>⚡️ <strong>Super fast static site generation with hydration</strong>. Every route is
compiled down to static HTML and routed with (optional) JavaScript, thanks to
the SvelteKit static adapter (pre-installed)</li> <li>📦 <strong>Zero-config preloading</strong> for automatic, fast background preloading of all
top-level pages</li> <li>✍️ <strong>Markdown support</strong> with a pre-configured blog <ul><li>📑 <strong>Pagination</strong> included (<em>can customize posts per page</em>)</li> <li>✅ <strong>Category pages</strong> included</li> <li>💬 <strong>Posts JSON API</strong></li></ul></li> <li>📝 <strong>mdsvex</strong> pre-installed—use Svelte components inside Markdown! <ul><li>🔗 <strong>Rehype</strong> plugins are included to generate unique heading IDs, for
direct linking</li></ul></li> <li>📱 <strong>Responsive and accessible defaults</strong>; includes a “skip to content” link
and accessible mobile nav menu</li> <li>🔄 <strong>Page transitions</strong> (<em>fancy and customizable!</em>)</li> <li>🔎 <strong>Basic SEO</strong> for blog posts (<em>strongly recommend checking that out for
yourself, though</em>)</li> <li>📰 <strong>RSS feed</strong> set up and ready to go (<em>though it could also likely benefit
from some optimization</em>); just update <code>src/lib/config.js</code></li> <li>💈 <strong>Basic CSS ready to use, customize, or remove!</strong> Want to use Sass or
Tailwind instead? Just install them!
(<a href="https://tailwindcss.com/docs/guides/sveltekit" rel="nofollow">Directions for Tailwind can be found here</a>.)
Prefer to write your own? Delete <code>static/css</code> and add your own links in <code>+layout.svelte</code>.</li> <li>ℹ️ <strong>Fonts included</strong>. (No more built-in Google tracking.)</li></ul> <h2 id="quick-start"><a aria-hidden="true" tabindex="-1" href="#quick-start"><span class="icon icon-link"></span></a>Quick Start</h2> <p>Clone or download <a href="https://github.com/josh-collinsworth/sveltekit-blog-starter" rel="nofollow">this repo</a>, then
install the dependencies and run the dev server:</p> <pre class="language-undefined"><!></pre> <p>That should get a dev server up and running (assuming you have npm and Node
installed already). Any saved changes to components and styles should
auto-refresh blazingly fast.</p> <p>Now all you need to do is:</p> <ul><li>Update the <code>src/lib/config.js</code> file</li> <li>Drop your Markdown posts into <code>src/lib/posts</code></li> <li>Optionally, customize the styles in <code>static/css</code></li></ul> <p>GLHF! Details below. 👇</p> <p>(<em>Feel free to <a href="https://github.com/josh-collinsworth/sveltekit-blog-starter/issues/new" rel="nofollow">open an issue</a> if you come across one.</em>)</p> <h2 id="customization"><a aria-hidden="true" tabindex="-1" href="#customization"><span class="icon icon-link"></span></a>Customization</h2> <p>Be sure to update <code>src/lib/config.js</code> to reflect your site’s domain,
preferences, etc. This is also where the nav menu can be updated.</p> <p><strong>It’s very important to update this file with the specific details of your
site.</strong> Info from this file is used in your RSS feed and SEO meta tags, so don’t
launch without updating it.</p> <h2 id="adding-new-posts"><a aria-hidden="true" tabindex="-1" href="#adding-new-posts"><span class="icon icon-link"></span></a>Adding new posts</h2> <p>Adding new posts is as simple as dropping a new <code>.md</code> file into <code>src/lib/posts</code>.
New posts will automatically show up on the site, be added to the posts API, and
any category pages.</p> <p>A few demo Markdown posts are included, and highlight some of the features of
this starter. These demo posts can be updated or removed, but it may be best to
use one as a starting point, just for the frontmatter properties.</p> <p>If you want to use other frontmatter properties in the template (or just modify
the layout), make changes in <code>src/routes/blog/[post]/+page.svelte</code>.</p> <p>⚠️ <strong>Note: posts should have a <code>date</code> and an <code>excerpt</code> defined in the
frontmatter.</strong> They’re sorted by <code>date</code>, and use <code>excerpt</code> in page meta tags
(for SEO, social sharing, etc.) There are also other frontmatter properties used
to enhance the site experience, like the <code>coverWidth</code> and <code>coverHeight</code>, which
are used in the template to reserve space for the image, minimizing cumulative
layout shift.</p> <p>The starter will still work without <code>date</code> properties in your posts, but the
sorting won’t be right. Similarly, you can have posts without an <code>excerpt</code>, but
your SEO/social previews will be sub-optimal.</p> <p>Also: while there’s no link to it by default, <code>/blog/category</code> exists as an
archive of all your post categories.</p> <h3 id="pagination"><a aria-hidden="true" tabindex="-1" href="#pagination"><span class="icon icon-link"></span></a>Pagination</h3> <p>Pagination automatically kicks in once you have more posts than the <code>postsPerPage</code> option in <code>src/lib/config.js</code>. This means you won’t see the
pagination right away unless you either change <code>postsPerPage</code> to a very low
number, or add several more Markdown files to the <code>src/lib/posts</code> folder.</p> <p><strong>Note:</strong> both the normal <code>/blog</code> feed <em>and</em> the category feeds at <code>/category/[category]</code> are automatically paginated.</p> <h3 id="rss"><a aria-hidden="true" tabindex="-1" href="#rss"><span class="icon icon-link"></span></a>RSS</h3> <p>This starter also includes a basic RSS feed. It’s very minimal, so you may want
to tweak it depending on your XML feed needs, but it <em>does</em> work out of the box.</p> <p>Update the <code>config</code> details in <code>src/lib/config.js</code> to get your site’s unique
info correct. (You could also pull this info in other places, or add to it, to
keep things consistent, but that’s up to you.)</p> <h2 id="css"><a aria-hidden="true" tabindex="-1" href="#css"><span class="icon icon-link"></span></a>CSS</h2> <p><strong>By default, all CSS in this starter is global vanilla CSS.</strong> It’s located in <code>static/css</code> (linked from <code>+layout.svelte</code>).</p> <p>I didn’t use component <code>&lt;style&gt;</code> blocks because, while component-based scoped
CSS is very nice, it can also be hard to track down and update. Since this is a
starter, I felt it was best to keep all the styles together in one place, and
let you, the author, decide whether you want to keep them as they are, move to
scoped CSS instead, or use a mixture.</p> <p>(<em>Note: previous versions of this starter came with Sass pre-installed. I’ve
removed it now because it seems like vanilla CSS is almost entirely as powerful
as Sass now anyway, and because it’s probably easier for people who want it to
opt in than for those who don’t to opt out</em>.)</p> <h2 id="site-navigation-menus"><a aria-hidden="true" tabindex="-1" href="#site-navigation-menus"><span class="icon icon-link"></span></a>Site navigation menus</h2> <p>To add or remove pages from the site’s navigation menu (in both the header and
footer), edit the <code>navItems</code> array in <code>src/lib/config.js</code>. Items there will be
automatically added to the main menu in the header and footer, and the mobile
nav menu. They’ll also have proper classes and ARIA attributes to show when
they’re the current page.</p> <h2 id="colors"><a aria-hidden="true" tabindex="-1" href="#colors"><span class="icon icon-link"></span></a>Colors</h2> <p>This starter has a default color palette (Credit to <a href="https://coolors.co/palettes/trending" rel="nofollow">coolors.co</a>) but you can easily override
those in the CSS. The color variable values can be found in <code>static/css/vars.css</code>.</p> <h2 id="fonts"><a aria-hidden="true" tabindex="-1" href="#fonts"><span class="icon icon-link"></span></a>Fonts</h2> <p>Previously, fonts were loaded from Google Fonts, but now they’re hosted locally,
for moderately better performance and a 100% reduction in tracking.</p> <p>The fonts in question are <a href="https://brailleinstitute.org/freefont" rel="nofollow">Atkinson Hyperlegible</a> by the Braille
Institute, and <a href="https://github.com/tonsky/FiraCode" rel="nofollow">Fira Code</a> by Nikita
Prokopov. The fonts are open-source; please consider supporting the authors.</p> <p>The font files themselves are hosted in <code>static/fonts</code>. They are linked from the <code>fonts.css</code> file, and set in <code>typography.css</code>.</p> <h2 id="components"><a aria-hidden="true" tabindex="-1" href="#components"><span class="icon icon-link"></span></a>Components</h2> <p>This starter includes only a handful of structural components, for the header,
footer, site nav, posts lists (since lists of posts are repeated in several
locations), and pagination (plus a couple that are actually just SVG icons).</p> <p>You’re welcome and encouraged to create your own (using them in Markdown is
fun!); I just didn’t want to push authors too far in any component direction
right off the bat.</p> <h2 id="static-files"><a aria-hidden="true" tabindex="-1" href="#static-files"><span class="icon icon-link"></span></a>Static files</h2> <p>Things that should just live in the site root of the finished site (like a <code>robots.txt</code> file, favicon, or maybe images) should go in the <code>static</code> folder.
If you link to them, use the root path (e.g., <code>/images/my.png</code>, not <code>../static/images/my.png</code>).</p> <p>(Placeholder images credit <a href="https://unsplash.com" rel="nofollow">Unsplash</a>; photographer names
are in the file names.)</p> <h2 id="building-deploying-and-hosting"><a aria-hidden="true" tabindex="-1" href="#building-deploying-and-hosting"><span class="icon icon-link"></span></a>Building, deploying and hosting</h2> <p>The build command (from package.json) is simply:</p> <pre class="language-undefined"><!></pre> <p>You can use that as your build command if your repo is connected to a host like
Netlify or Vercel, which automatically deploys.</p> <p>Or, if you prefer, you can run <code>npm run build</code> locally to generate the static
files. That will result in a <code>build</code> folder you can upload anywhere a static
site can be hosted.</p> <p>Use <code>npm run preview</code> <em>after</em> a build to preview the built site locally.</p> <h2 id="adding-tailwind"><a aria-hidden="true" tabindex="-1" href="#adding-tailwind"><span class="icon icon-link"></span></a>Adding Tailwind</h2> <p><a href="https://tailwindcss.com/docs/guides/sveltekit" rel="nofollow">The directions for adding Tailwind can be found in the Tailwind docs, here</a>.</p> <p>The only thing worth noting is: this starter’s existing CSS files won’t be in
the Tailwind path after following those steps. You can either just delete them
and start from scratch; or, you can copy the CSS into your Tailwind <code>app.css</code> file. (Or, move the CSS files into <code>src/lib</code>, and import each one individually.)</p> <p>It’s up to you. Just note that Tailwind automatically applies some defaults, so
even if you <em>do</em> choose to keep this starter’s default styling, your site might
not look the same after installing Tailwind. (Headings, for example, just look
like plain text when using Tailwind, unless classes are applied.)</p> <h2 id="further-documentation"><a aria-hidden="true" tabindex="-1" href="#further-documentation"><span class="icon icon-link"></span></a>Further documentation</h2> <p>I assume at least a little bit of knowledge of SvelteKit and/or similar static
site generators here, but be sure to read <a href="https://kit.svelte.dev/docs" rel="nofollow">the SvelteKit docs</a> for more info.</p> <h2 id="contributing"><a aria-hidden="true" tabindex="-1" href="#contributing"><span class="icon icon-link"></span></a>Contributing</h2> <p>I’ve tried my best to make sure this starter is up to date with the latest
SvelteKit, but I’m sure improvements can be made. Feel free to <a href="https://github.com/josh-collinsworth/sveltekit-blog-starter" rel="nofollow">visit the repo</a> and submit a pull request, or <a href="https://joshcollinsworth.com/contact" rel="nofollow">contact me directly</a>.</p>`,1);function v(r){var t=g(),e=i(c(t),12),l=a(e);n(l,()=>`<code class="language-undefined">npx degit https://github.com/josh-collinsworth/sveltekit-blog-starter my-sveltekit-blog
cd my-sveltekit-blog
npm install
npm run dev -- --open</code>`),s(e);var o=i(e,84),d=a(o);n(d,()=>'<code class="language-undefined">npm run build</code>'),s(o),h(22),p(r,t)}export{v as default};
