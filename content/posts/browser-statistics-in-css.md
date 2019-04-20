---
path: "/posts/browser-statistics-in-css"
date: "2015-04-12"
title: "Browser statistics in CSS"
---

I am fascinated with what you can do with just CSS. It is a trend now to see more and more projects utilising only CSS and HTML to accomplish something that was once only thought possible with JavaScript.


I have focused some of my recent side projects (which I will post here soon) around this idea of CSS instead of JavaScript. Most of these projects are purely experimenting and have no real application. My most recent one is browser statistics via CSS only.

I posted a [codepen](https://codepen.io/aaronvanston/pen/NPZMdo) snippet on this just yesterday:

`oembed: https://codepen.io/aaronvanston/pen/NPZMdo`

I will prefix this by saying that the code used to get these results is completely inefficient and again serves no real application, but hey it looks cool.

How this is accomplished is through a range of available media queries and SASS (CSS preprocessor) to do the grunt work of generating the thousands of styles required.

Lets take a look at a specific example:

`gist:6af0a8c886499662bae7#browser-stats.html`

That’s our HTML code. Its just a series of `<p>` tags with a class that corresponds to the stat that are going to display. Lets take a further look at the orientation stat (this one is quite easy to show).

In our CSS compiled from a SCSS or SASS file we have:

`gist:6af0a8c886499662bae7#browser-stats-2.css`

This is where SASS really helps out as we are actually generating an individual media query for each pixel within a range. First we set a variable of the highest value in the range, in this case 2000.  Using a SASS for loop we generate the following code from a starting point of 500 through to our highest value of 2000 (these figures represent the width in pixels).

The code SASS generates is a media query that is set to min-width of that value (for example `min-width: 500px` is everything above and equal to 500px). Finally within this media query we set the content corresponding to that width. We set two more media queries to cover the screen sizes bellow and above the range of 500-2000px. I had actually set this range from 0-3000 for width and 0-2000 for height however codepen kinda freaked out and would not respond/timed out when they were this large (as they are literally generating 5000+ media queries at almost 3 lines each).

There are other media queries that I didn’t cover such as some TV specific ones for scan lines etc. I thought this was a fun little concept to display statistics in the browser with only CSS.