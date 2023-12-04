---
title: Linear Transformation Visualizer
---

Learn a thing or two about linear algebra [here](/linear_transformation_visualizer) (or just play with numbers).

## Purpose

For part of my abstract linear algebra class, we were allowed to build a piece of software related to the course material. We spent so much time looking at grids of numbers and analyzing proofs, but I wanted to *see* how it all worked. So, I took it upon myself to learn vanilla JavaScript and write a web app capable of letting me see what was happening to the space as I transformed it.

Shoutout to Prof. Lanier.

## Engineering the App

I followed one tutorial on html and css and just stuck with the color scheme in the tutorial, which is why the screen is a mess of orange and blue.

**For the frontend, I used math.js and Plotly.** I wanted to make the project source lightweight, so I looked for libraries with CDNs. Plotly, while used for statistical visualizations, had a 3D mode, and vectors can be plotted as points, so translating the vectors to points / segments to plot was not difficult. Math.js gave me access to matrix multiplication and mathematical expression interpretation, which solved the majority of my logic problems immediately.

**The linear algebra was simple. The UI wasn't.** Coming up with pseudo-random methods of generating random matrices with certain constraints was not difficult. The matrix multiplication was already given to me by math.js. Even in my aspirations to embody one tenth of the Desmos' quality-of-life features, the variable with the slider took little time to get working. 

The big issue was responsiveness. The user shouldn't have to hit "Run" every time they make a change, because you shouldn't be slowed down by the speed of this tool. As a result, each text area and button and checkbox has a listener to make sure that the visualizer always keeps up with what you wrote. 

And if you wrote an invalid state, like a matrix with empty fields, the whole visual shouldn't shut down or change from what you had originally. Maybe you're just making a quick edit, and that change would distract you. For this reason, if you go from a valid to invalid input state, the visualizer stays at the previous valid state. Intuitively, it makes the most sense, and keeps everything looking clean.

The code is a mess, but it's there if you want to see it: [https://github.com/ronikbhaskar/linear_transformation_visualizer](https://github.com/ronikbhaskar/linear_transformation_visualizer)

 ---

<p align="right"><a href="/projects/">Back to Projects →</a></p>