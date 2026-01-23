---
title: The Algorithm That Lets Us Find Anything, Even Joy
description: >-
  Binary and exponential search are powerful tools that can do more than just
  search lists. They allow us to conquer infinity, use impossibly large sources
  of knowledge, and most importantly, they can be used in the real world. Even
  the problem of finding joy in life can be tackled by using this simple
  algorithm.
keywords: >-
  binary search, fast searching, searching for joy, finding joy, algorithms in
  real life, searching algorithm
date: 2026-01-22 12:25:20
tags:
---


Imagine, for a moment, that you have misplaced your phone somewhere in your home. You might retrace your steps, looking in the most common areas, before resorting to a full sweep of the home. You look under beds, behind drawers, and between couch cushions, and after an hour of searching, you find it in the literal last place you would look: the fridge. 

Now, imagine that same scenario, except before beginning your search, your friend calls your phone, and you follow the sound directly to the fridge in under a minute.

Why was it faster when your friend called your phone? Either way, you still didn't know where your phone was until you found it. However, when your friend called your phone, you suddenly knew which direction to search in. Simply knowing which direction to search turned an impossible task into something manageable. As it turns out, this principle expands far beyond just searching for your phone.

In [a previous archive](/finding-joy-is-a-mathematically-difficult-problem), I made some loose statements about why joy might not be hard to find because you are *you*, and you know what you like. Despite how heartwarming the sentiment might have been, I understand if you were skeptical—I would be too. Today, I hope to remedy that skepticism by explaining how to actually find things quickly, according to math.

## The Basic Idea

Before we search for the hard things, like joy, let's search for something easier, like a word in a dictionary. Say we want to find the word "joy" in the dictionary. Merriam-Webster's mass-market dictionary has 75,000 definitions. If you started at the beginning of the dictionary and checked two definitions per second until you reached "joy", it would take you roughly 4 hours to find "joy" in the dictionary.

Spending 4 hours to find a word in a dictionary is, of course, absurd. Dictionaries wouldn't have stuck around for centuries if they were this hard to use. Instead, people find words in less than 30 seconds using one simple fact: the dictionary is in alphabetical order. Because of this, the general strategy for finding words is to open to a random page, check whether you're too high or too low in the alphabet, and adjust accordingly. Repeat this a few times, and you have your word. 

In many ways, the dictionary's alphabetical order is the same as calling your phone to find it. In both cases, you are told which direction to search in. Then, you guess where it is, and if you're wrong, you use the direction information and prior guesses to know where to move next. This process is so universal that mathematicians made an entire algorithm around it: binary search.

## The Algorithm

Binary search works like this: start with a list of things in order, like words in a dictionary. Next, guess that your thing is in the middle. You're probably wrong, but this guess tells you whether to search higher or lower in the list. If you need to go lower, delete the first half of the list and start your search again in the middle of the new list. Otherwise, delete the second half of the list and start your search again in the middle of the new list. Repeat this process until you've found your thing.

This probably seems simple, and in a lot of ways it is, but it's also unreasonably effective. If you had a list of a million things to search through, binary search would only need 20 steps to find it. That's 50,000x faster than going one-by-one, and as the number of things to search increases, the speedup also increases. Searching through a _**billion**_ things would only take 30 steps, which is 33,000,000x faster than going one-by-one.

## Searching Through Infinity

Even if the list is infinite, you can still search it quickly. This may seem paradoxical, because there's literally an infinite amount of stuff to search through, so how do you search at all? To do this, we have to take an extra step before binary search called exponential search. Start at the beginning of the list. Next, take bigger and bigger jumps down the list until you've passed the thing you're searching for. You'll know you've passed it because the direction you need to search changes. Cut off the list there, and now it's finite. Now that the list is finite, you can just use binary search.

There is one caveat to this, and that's the type of infinity you are searching through. For our purposes, there are two kinds of infinity to search through. The first kind is countable infinity. That's the same infinity as the numbers 1, 2, 3, ... because you can count each one without missing any. If you're dealing with that kind of infinity, then you're fine. You can find exactly what you're looking for with no problems.

The second kind of infinity is uncountable infinity. That's like all the numbers between 0 and 1, because you can't order then one at a time. Where would you even start? 0.1? But then there's also 0.11, and 0.111, and 0.1111, and so on, and you can't stop because 0.1111... repeating is a completely real number (it's 1/9). And you have to include all the irrational numbers, like π/6 and √0.5. Counting all of them just isn't possible without missing at least one ([proof](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument#Real_numbers)). If this is the kind of infinity you're dealing with, then you'll have to settle for "good enough". Before you start on your search, set a "good enough" threshold for how close you need to be, such as within 0.01. Then, when you search, you'll just stop once your answer is good enough. It's one of the unfortunate problems of finite existence, but at least you get to pick your own threshold for "good enough".

## Back to Finding Joy

Finding joy is still a difficult problem, but it's a bit easier to solve now. As a starting point, I hope you actually searched "joy" in the dictionary during that thought experiment, but in case you didn't, it's "a source or cause of delight". I'm not trying to solve for happiness or the meaning of life, just everyday delight. 

Now that we know what we're looking for, all we need to do is use binary search. Every time we come across something that we hoped would bring joy but didn't, we simply need to check the direction we should go in. Was it too outdoors or too indoors? Was it too social or too isolated? Was it too active or too sedentary? Just some basic information is enough to make the search exponentially faster. The best part is that you don't need to ask any special machine which way to go, because _**you**_ are your best algorithm for finding joy, just like I mentioned at the end of [a previous archive](/finding-joy-is-a-mathematically-difficult-problem).

The hardest part of this process is the first step: guessing. You are almost guaranteed to be wrong here, which makes it so scary to start. It's even worse knowing that throughout the entire search, you will be doing things that don't bring you joy, because as soon as you delight in what you do, your search is done. Telling anyone to try this sounds emotionally irresponsible. And yet, that is always the case when one searches for joy in their life. The process is painful, regardless of the algorithm you use. The best you can do is keep going and hope you finally find what you're looking for.

---

## References

1. [Binary Search](https://en.wikipedia.org/wiki/Binary_search)
2. [Exponential Search](https://en.wikipedia.org/wiki/Exponential_search)
3. [Merriam-Webster Mass-Market Dictionary](https://shop.merriam-webster.com/products/the-merriam-webster-dictionary-mass-market)
4. [First Alphabetical English Dictionary (probably)](https://extra.shu.ac.uk/emls/iemls/work/etexts/caw1604w_removed.htm)
5. [Definition of Joy](https://www.merriam-webster.com/dictionary/joy)

---

## Literal Algorithm for Searching through Infinity

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