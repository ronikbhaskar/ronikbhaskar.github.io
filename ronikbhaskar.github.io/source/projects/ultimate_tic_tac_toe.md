---
title: Ultimate Tic Tac Toe
---

Play the game [here](/ultimate_tic_tac_toe). Grab a friend (or enemy) because this game requires two people.

<img src="misc_images/ultimate_tic_tac_toe_game.png" class="display-image" alt="A game of ultimate tic tac toe."> 

## Background

Tic Tac Toe is incredibly boring. For most people, the game is synonymous with "draw" or "tie" or "cat's game." At some point in middle school, I was introduced to Ultimate Tic Tac Toe, a game of Tic Tac Toe with nine smaller games of Tic Tac Toe happening inside of it. 

I didn't play it much because keeping track of the last moves and legal actions was a bit tedious, but it was a really fun way to pass the time. Rather than manage all the boring stuff on my own, I decided to let a computer do it for me.

## Rules

I explain the rules on the README for the project, but I've also included them below. You can access the source for the project [here](https://github.com/ronikbhaskar/ultimate_tic_tac_toe).

#### **x goes first...**

 - On the first move, **x** can play anywhere on the board.

#### **o goes second...**

 - **o** can only play in the section of the global board that corresponds to where **x** played in the local board.
   - ex. If **x** plays in the center of the top left board, then **o** can play anywhere in the center board.

#### **the game repeats...**

 - Now **x** is restricted to the section that corresponds to **o**'s last move.
 - If the corresponding section has been won (more on that later), or it is full, the player can play anywhere.

#### **until someone wins.**

 - If you get 3 in a row in a local board, you win that board.
 - If the local board is a draw, no one gets it.
 - Three local boards in a row, and you win the game.
 - If the game finishes without anyone getting 3 local boards in a row, it's a draw.

 ---

<p align="right"><a href="/projects/">Back to Projects →</a></p>