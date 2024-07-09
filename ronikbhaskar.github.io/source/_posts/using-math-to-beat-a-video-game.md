---
title: Using Math to Beat a Video Game
date: 2024-06-10 22:37:16
tags:
description: >-
    A relative of mine often plays this game called Word Connect. Occasionally, they get stuck, so I decided to make a program that would help them out.
keywords: "word connect, efficient search algorithm, word encoding, Hamming weight"
---


A relative of mine often plays this game called Word Connect. In Word Connect, you connect tiles with letters to make words, and you have a fixed list of words you create. The challenge arises when you just can't figure out what word to make. Whenever this happens, my relative will ask me for help. As a native English speaker, I can usually think of some obscure words to solve the puzzle, but not always. Occasionally, I'll sit with the letters swirling around my head for hours, just trying to come up with something. My relative plays the game mostly to practice English, so they don't care about their score.

With this in mind, I decided to start ~~cheating~~ using math. To do this, I established a clearer objective. We start with a set of letters *S* and the length of the target word *len(w)*, and using those, we need to reconstruct the target word *w*. The easiest way to do this is just to iterate through every English word and check if it uses only the letters in *S*, but that's too easy. For the sake of the challenge, I wanted to pretend like there were super high volumes of English words, and iterating through strings was slow. Under these conditions, I needed a better method. I needed a smarter method.

I started by getting rid of unnecessary information that was limiting performance. Words are always spelled in order. You would never write "aegm" when using the word "game" because that's just incorrect. However, if we're checking to see whether words can be constructed from a set of letters, order does not matter. Knowing this, I created a simple encoding that only captures the letters in a word. It does not care about position or frequency. The way I did this was through 26-bit binary numbers. Each digit represents a character, and if the character is present in the word, then the corresponding digit is marked as a 1. For example,

$$\text{"add"} \rightarrow 1001$$

In this instance, the digit on the right represents "a", which is a 1. Moving to the left, the digits for "b" and "c" are both 0 because they aren't present in "add". Finally, the digit for "d" is a 1. After that, it's just zeros, so I'm not showing them. As you'll notice, "d" is marked with a 1 even though there are two "d"s. The encoding doesn't take frequency into account because it's not necessary. We can check for frequency after shortlisting words if needed.

Along with our encoding, we'll need to use a special property called the Hamming weight. The Hamming weight counts the number of 1's in a bitstring, so the Hamming weight of 1001 is 2. Armed with our new encodings and Hamming weights, we can very easily check if a given word can be constructed from our list of characters. Our target word *w* can be constructed from *S* if and only if the following equation is true.

$$ H \left (\phi \left ( S \right ) \right ) - H \left (\phi \left ( w \right ) \right ) = H \left (\phi \left ( S \right ) \oplus \phi \left ( w \right ) \right ) $$

Essentially, the difference in Hamming weights between *S* and *w* should be the same as their combined Hamming weight if we remove all the characters in common. There are very efficient methods for computing Hamming weights, and given our limited size of 67 million possible encodings, we could simply create a lookup table for each one with little memory impact. Additionally, the encodings *ϕ* for every English word can be pre-computed, and the encoding for *S* only needs to be computed once. We still need to iterate through the list of words, but each iteration will be significantly faster.

Using this method, along with some heuristics to limit the number of generated solutions, I was able to find Word Connect answers almost instantly. To test it out, I asked my relative what they were stuck on, and we solved the level with ease. The demonstration was super fun, so we decided to play another level. As we played, making words with digital scrabble tiles, we never ended up using the search algorithm. The program just stayed open on my laptop, until after a few minutes, it went to sleep.

---

## References

1. [Hamming weight](https://en.wikipedia.org/wiki/Hamming_weight)
2. [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance)