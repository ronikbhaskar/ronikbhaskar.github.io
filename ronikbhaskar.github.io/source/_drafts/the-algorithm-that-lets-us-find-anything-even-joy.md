---
title: The Algorithm That Lets Us Find Anything, Even Joy
tags:
---

In [a previous archive](/finding-joy-is-a-mathematically-difficult-problem), I made some loose statements about why joy might not be hard to find because you are *you*, and you know what you like. Despite how heartwarming the sentiment might have been, I understand if you were skeptical—I would be too. Today, I hope to remedy that skepticism by explaining how to actually find things, according to math.


The real problem with infinity is that it depends on which kind of infinity you're searching through. 
 - if countable, you can find exact thing
 - if uncountable, you have to have a threshold for "good enough"
    - you can make the threshold as precise as you want, and it the algorithm will still take the same amount of time to run

binary search
 - go back to finding joy is a mathematically difficult problem

exponential search: https://en.wikipedia.org/wiki/Exponential_search
binary search: https://en.wikipedia.org/wiki/Binary_search

```Python
def search(x, eps):
    """
    An algorithm to search for any number x
    within some tolerance eps.
    """
    guess = 0 # start by guessing 0

    if abs(guess - x) < eps:
        return guess
    
    ub = 1 if guess < x else -1
    lb = 0

    # grow exponentially
    while 1:
        if abs(ub - x) < eps:
            return ub
        
        # check if we have a finite range that contains x
        if (ub < x) != (lb < x):
            break

        lb = ub
        ub *= 2

    ub, lb = max(ub, lb), min(ub, lb)

    # binary search
    while 1:
        guess = (lb + ub) / 2

        if abs(guess - x) < eps:
            return guess
        elif x < guess:
            ub = guess
        else:
            lb = guess
```