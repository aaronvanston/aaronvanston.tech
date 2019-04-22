---
path: "/posts/crafting-pure-css-tooltips"
date: "2016-09-11"
title: "Crafting pure CSS tooltips"
---

Building tooltips in a user interface typically meant including some JavaScript to create an event listener to bind to a hover/click action and show a bit of DOM. Gone are those days, for some time now we have been able to use CSS to craft these tooltips on its own two feet (the less JS for core interactive items the better!).

![Tooltip in action](/tooltip.gif)

Quite a few CSS libraries have been created to help you with this task, some offer customisation options on what the tooltip looks like, where it’s positioned and other various modifiers such as animations!

Some of these libraries can be found here:

- Hint.css
- Baloon.css

## But how?

So let’s get deep into the code to understand how these actually work. To get ourselves started I have created a code sample of the main structure prior to adding the CSS tooltips. You can go ahead copy/fork it or create your own example:

`oembed: https://codepen.io/aaronvanston/pen/pEjkNq`

From here we will add in the necessary CSS and (very little) HTML to create our tooltips.

To start let’s actually design our tooltip. Typical tooltips take on the form of a speech bubble, with a tail coming from the relevant content and then the bubble/block of text that provides further context to the user. We will build the tooltip in two parts, the tail and the block.

## The tooltip 

To make things easier we won’t start off with any of the fancy animations on hover etc. Instead, let’s first enable a way to target our styles for the tooltip, a neat trick is to use a data attribute which will eventually hold the content of out tooltip. Add `data-tip="This is a mighty fine tooltip"` to the anchor tag. You will notice nothing actually changes, now to add styles!

Our first bit of CSS will be applied directly to the data attribute itself to help align the tail and tooltip body. Apply the following styles

```css
[data-tip] {
  position: relative;
}
```

The `[data-tip]` targets all elements with the data attribute of “tip”. We apply the position relative, so the children elements can be positioned `relative` to it.

## The tail

Next the Tail Styles. To accomplish a tail and a message body, we will be using a CSS pseudo class of `:before` and `:after`. Create a CSS selector to target the `[data-tip]` before pseudo class and add the following CSS:


```css

[data-tip]:before {
  content: '';
  position: absolute;
  top: 100%;
  left: calc(50% - 6px);
  margin-top: -6px;
  pointer-events: none;
  border: 6px solid transparent;
  border-bottom-color: #333;
}
```

The pseudo `:before` and `:after` classes utilise a CSS property called content, meaning the content it will inject either before or after the selected element. In our case, we want no content so we include an empty string. We position `absolute` to our parent item, push our items height out with `top: 100%`, we position it exactly half way through the parent element (50% – the width of the tail which is 6px), we set the `pointer-event` to none to prevent it from targeting any mouse events, we set a `6px` transparent border around the entire element and finally set the bottom border to `#333` creating the triangle.

## The tooltip body

Now comes the interesting part. We will do something very similar to the tail however now we will use the `:after` and specify the tooltip in our content. Create another CSS selector on the `:after` pseudo class.

```css
[data-tip]:after {
  content: attr(data-tip);
  position: absolute;
  top: 100%;
  left: 50%;
  margin-top: 6px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.8em;
  padding: 0.5em 1em;
  z-index: 100;
  transform: translate(-50%, 0);
}
```

This is pretty much the same as the before with some differences, such as within content we are now specifying `attr(data-tip)` which brings in the text content of the data attribute data-tip (very cool!). In addition, we also have a transform `translate(-50%, 0);` on the `:after` class, this will center our element against the center of the link.

## Hide and Seek

A tooltip that always shows isn’t very useful. Let’s now add some CSS styles that can help bring our tooltip to life and animate it in on hover.

Firstly let’s create a selector that will target both :before and :after, you can do this by just comma separating them to apply it to both. You can move some of the previous styles that double up into this selector such as the `position`, `top` and `z-index`.

Inside this selector lets set the default state to hidden by setting our visibility to hidden and `opacity` to `0`;


```css
[data-tip]:before,
[data-tip]:after {
  position: absolute;
  top: 100%;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
}
```

Duplicate this current selector of both before and `:after`, add a `:hover` pseudo class to each (just before the `:before` and `:after`) and remove the styles inside this block. Like so:


```css
[data-tip]:hover:before,
[data-tip]:hover:after {
  visibility: visible;
  opacity: 1;
}
```

BAM! our tooltip is now functioning! It will now show and hide on hover!

## Animations

A project is not complete without any animations! Let’s transition our hide and show and add some movement in there!

For the sake of simplicity, we can add this `transition: all ease-out 0.2s;` to our `:before` and `:after` block selection (non-hover). This will animate all changing styles 0.2-second animation that eases in, in our case, it will just animate opacity. Let’s add some movement to polish it off.

To the `:before` selector add `transform: translateY(8px);` and then reset this back to 0px (`transform: translateY(0)`) by creating a hover selector for it.

As we already use a transform on the `:after`, we can simply append with a separated space to our existing transform like so: `transform: translateX(-50%) translateY(8px)` then once again reset on the `:hover`, however when we reset we need to keep the existing `translateX` so set it just to `transform: translateX(-50%);`

These will initial translate the tail and message body 8px in the Y direction and then transition them to 0 (normal position) during the fade in.

## Final result

`oembed: https://codepen.io/aaronvanston/pen/Zpbjyg`

And there we have it, a very simple pure CSS tooltip!