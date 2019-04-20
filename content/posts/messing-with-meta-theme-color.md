---
path: "/posts/messing-with-meta-theme-color"
date: "2016-02-28"
title: "Messing with meta theme-color"
---


A few days ago I came across a website that changed my Chrome’s address bar a different colour, this feature I competently missed and was not aware of. After a some digging around I found its a new feature in Chrome 39 on Android lollipop+ called `theme-color`.

The theme color is set within a meta tag within the head, simply fill the content with a color and you’re all set!

`gist:b2063d1ae0f9d30bcb10#theme-colour.html`

I then wanted to test if this could be updated and if so how fast. Results are pretty good, I hooked it up to a button that on click will generate a random color apply that to `theme-color` and also the button border. Results:

![Changing meta-theme colours](https://media.giphy.com/media/ViAfZYAl3185y/giphy.gif)

You can grab this code from here: https://github.com/aaronvanston/Spread-the-Rainbow

Again make sure when testing its on an Android Lollipop+ with at least Chrome 39. 🙂