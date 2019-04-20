---
path: "/posts/most-impractical-phone-no-input"
date: "2016-12-02"
title: "Most impractical Phone no. input"
---

Out of curiosity, I went out of my way to build one of the most impractical mobile phone inputs.

![Impractical phone input](/isthisyournumber.gif "Is this your number?")

This came about because of this post on various very poor but funny mobile phone inputs:

`oembed: https://twitter.com/EstebanBianchi/status/794703734051901440`

I had an idea to see how long it would take a script to find your mobile phone number based on “Is this your number!?” questions.

This was the end result:

## Demo: very impractical Phone no. input

`oembed: https://codepen.io/aaronvanston/pen/MboYqZ`

[View the codepen demo in fullscreen here](http://codepen.io/aaronvanston/full/MboYqZ/)

**Note:** this is based off an Australian mobile number input (`04XX XXX XXX`)

The UI first presents you with a random number generated from `0 - 9999 999 999`, this makes for a rather cool and variable result.

From here you have one of three choices, higher (your number is higher than this number) , yes (this is your number!!) or lower (your number is lower than this). Selecting either higher or lower will return a new result corresponding to your choice.

## The most efficient at being inefficient

For example, let’s say you were presented `5555 555 555` and you selected lower, here is where the predictable smarts come in, it will now present you a number exactly halfway between the highest bracket (in this case as we selected lower, `5555 555 555` is the new highest bracket) and the lowest `0`.

This would present `2,777,777,777` (exactly half rounded down), if we said now higher, it would use this number as the new lowest possible choice and use this to calculate the halfway point between the highest bracket (as set before `5555 5555 555`).

This process goes on until it gets your number exactly right, and then you get the satisfaction of clicking yes (finally!). This method is one of **the most efficient methods** at honing in on the number you wish to input.

Through a small sample group of work colleagues, I have found that it typically gets the correct number in 31-34 guesses. If you give this a try, please let me know what you get!

**Happy clicking!**