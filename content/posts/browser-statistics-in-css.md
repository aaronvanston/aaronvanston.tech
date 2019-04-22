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

```html
<div class="container">
	<p class="stat__size-width">Size (Width): </p>
	<p class="stat__size-height">Size (Height): </p>
	<p class="stat__orientation">Orientation: </p>
	<p class="stat__medium">Medium: </p>
	<p class="stat__colour">Colour: </p>
	<p class="stat__resolution">Resolution: </p>
</div>
```

That’s our HTML code. Its just a series of `<p>` tags with a class that corresponds to the stat that are going to display. Lets take a further look at the orientation stat (this one is quite easy to show).

In our CSS compiled from a SCSS or SASS file we have:

```scss
/* ORIENTATION */
@media (orientation: landscape) {
	.stat__orientation:after { 
		content: "Landscape"
	}
}
@media (orientation: portrait) {
	.stat__orientation:after { 
		content: "Portrait"; 
	}
}
```

We are using the media query of ‘orientation‘ to determine if the browser is in landscape or portrait mode. On that condition we want to apply a content element **after** (using the :after selector) the existing text already displayed. This example is quite easy because it only really has two options to choose from. When we start getting into statistics such height and width which have almost infinite possibilities that’s when the code becomes inefficient .

For example, lets look at width:

```scss
/* WIDTH */
$width: 2000;

@for $i from 500 through $width {
	@media (min-width: #{$i}px) {
		.stat__size-width:after {
			content: "#{$i}px";
			}
	}
}

@media (min-width: 2001px) {
	.stat__size-width:after {
		content: "Greater than 2000px"; 
	} 
}

@media (max-width: 499px) {
	.stat__size-width:after {
		content: "Less than 500px"; 
	} 
}
```

This is where SASS really helps out as we are actually generating an individual media query for each pixel within a range. First we set a variable of the highest value in the range, in this case 2000.  Using a SASS for loop we generate the following code from a starting point of 500 through to our highest value of 2000 (these figures represent the width in pixels).

The code SASS generates is a media query that is set to min-width of that value (for example `min-width: 500px` is everything above and equal to 500px). Finally within this media query we set the content corresponding to that width. We set two more media queries to cover the screen sizes bellow and above the range of 500-2000px. I had actually set this range from 0-3000 for width and 0-2000 for height however codepen kinda freaked out and would not respond/timed out when they were this large (as they are literally generating 5000+ media queries at almost 3 lines each).

There are other media queries that I didn’t cover such as some TV specific ones for scan lines etc. I thought this was a fun little concept to display statistics in the browser with only CSS.