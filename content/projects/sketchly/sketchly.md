---
path: "/projects/sketchly"
date: "2018-03-23"
title: "Sketchly"
subtitle: "Interactive story using drawings hack-day project"
hero: "./sketchly.png"
type: ["game"]
---

### [Play Sketchly](https://sketchly.netlify.com/)

Sketchly is an interactive story where the only inputs are drawing and your imagination. Sketchly was built by a team during a machine learning themed hack-day at REA Group.

Sketchly tech stack is Canvas + React + [Google Quickdraw](https://quickdraw.withgoogle.com/) API. The machine learning aspect of this was done via this API, in which Google has ingested 1000s of mouse drawn images to determine what the user is trying to draw.

The hardest part of building this came was actually coming up with an intertwined story. All of these story points or "Chapters" were stored in JSON file format, we navigated through each chapters keeping and kept state via URL redirections.
