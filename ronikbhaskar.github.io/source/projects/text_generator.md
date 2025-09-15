---
title: Text Generator
description: >-
    Language is weird. We keep making rules and breaking them, one phrase can mean 15 different things, and despite having tens of thousands of words at our disposal, we can't always convey exactly what we want to. Why not let machines take a stab at it?
---

Try generating some text [here](/text_generator). While I can't guarantee it'll be meaningful, it is a lot of fun.

This is a combined summary of the original project in Python, and the subsequent translation to JS.

## Background

Language is weird. We keep making rules and breaking them, one phrase can mean 15 different things, and despite having tens of thousands of words at our disposal, we can't always convey exactly what we want to.

Language is weird, and I love it. Let's say you start with the word "once." Whenever you see "once," you can usually follow it with "upon." If you see "upon," you can probably follow it with "a." Why not generate sentences and paragraphs with probabilities?

## Logic

Markov chains sound scary, but they're not. Remember the game Snakes and Ladders? When you're playing, you're always on a square on the board. When you roll the dice, you have certain probabilities of moving to different squares. Some have a really high probability, like going from 1 to 6, and others are impossible, like going from 1 to 100. That's exactly what a Markov chain is. From any given state (square), you have a given probability (dice) of moving to another state.

That's great and all, but where does language fit into this? Take that Snakes and Ladders game. Assign each square a word. Every time you land on a new word, you write it down. After playing a full game, you will have a long string of words. Some sections might sound meaningful, others might not. This project takes long pieces of text, pretends like they're recorded games of Snakes and Ladders, and tries to rebuild the board. On that new board, you can play as many games as you'd like, and most of the time, your string of words will be different.

## Code

The web project, with the original instructions for collaborators, can be found [here](https://github.com/ronikbhaskar/text_generator).

The original Python code can be found [here](https://github.com/ronikbhaskar/markov_text_generation). The README has a sample generated from Sun Tzu's *The Art of War*.

 ---

<p align="right"><a href="/projects/">Back to Projects →</a></p>