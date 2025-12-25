---
title: Sum of Squares
description: >-
    If you're good at statistics, you aren't supposed to buy lottery tickets. The jackpot is never worth the odds. However, it turns out there's a lot more to gain than just the jackpot. You just need to go in with the right people. 
keywords: 'sum of squares, sum of unique squares, lottery ticket, lottery, sum of squares game, story'
---

Play the finished game [here](/sum-of-squares/).

---

If you're good at statistics, you aren't supposed to buy lottery tickets. The jackpot is never worth the odds. However, that doesn't stop my friend, who picks up a ticket every time the jackpot is over $1 billion.

"If it's over a billion, then I figure it's worth daydreaming about for a week," he'll say.

The ticket is only two dollars, so I decide to indulge him. I offer to pay for half of the ticket—$1—in exchange for 0% of his winnings. This is a lot of money we're talking about, so we make it official. We draft a contract and everything.

We buy the ticket, and as we're driving back, he starts reading off some of the numbers.

"22, 37—ooh, that’s a sum of squares. 41, that’s a sum of squares too. 43 isn’t a sum of squares, is it?"

"Of course it is. 25 plus 16 plus 1 plus 1."

"Ugh, FINE, but you repeated the 1. That’s cheating. What about unique squares?"

*What about unique squares?*

This question really stuck with me, so I started digging. There's a theorem that says every number can be expressed as the sum of 4 squares, but that doesn't help because those squares can repeat, so you could say 7 is 4 + 1 + 1 + 1. 

I could have looked up the answer to my question and realized it was solved over 60 years ago, but that's boring. Instead, I made my computer solve it—kinda. I figured I would look at the numbers that aren't sums of unique squares and hopefully find a pattern.

`>>> 2, 3, 6, 7, 8, ... 128`

*Huh, why did it stop at 128? Let me run the program up to 1,000.*

`>>> Maximum: 128`

*Still 128. How about 10,000?*

`>>> Maximum: 128`

*Alright, let's really push it. 1 million.*

`>>> Maximum: 128`

I'm positive I made a mistake in my code, so I check it a few times and run a bunch of tests, but it seems alright, so I tell my friend what I found.

`ME: yo, I think the list of numbers that can't be sums of unique squares is finite`

`FRIEND: wait no way its finite`

`ME: ¯\_(ツ)_/¯ it stops at 128`

`FRIEND: so what squares add to 129?`

`ME: 10, 5, 2`

`FRIEND: oh nice`

`ME: yeah, i kinda wanna make this a game now`

`FRIEND: right? try and figure out what squares add to the number? sell that to the nyt`

So that's what I do. Build the game, that is, not sell it to the NYT (yet... if you work at the Times, hit me up). It's [here](/sum-of-squares/) in case you wanted to play. It has a share feature, animations, sound effects, and it's surprisingly addicting. I daresay it's the best game I've built to date.

If you're good at statistics, you aren't supposed to buy lottery tickets. The jackpot is never worth the odds. However, it turns out there's a lot more to gain than just the jackpot. You just need to go in with the right people. 

---

*Disclaimer: This story contains references to the lottery for narrative purposes only. The author does not endorse gambling or any related activities.*

---

## References 

1. [Powerball 12/24/25](https://www.powerball.com/previous-results?gc=powerball&ed=2025-12-24&sd=2025-12-24)
2. [OEIS entry on all numbers that are not the sum of distinct squares](https://oeis.org/A001422)
3. [Complete Sequences of Polynomial Values](https://mathweb.ucsd.edu/~ronspubs/64_04_polynomial.pdf)
4. [Sum of Squares Game](/sum-of-squares/)