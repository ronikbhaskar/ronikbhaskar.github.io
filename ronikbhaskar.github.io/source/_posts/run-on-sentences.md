---
title: Run-on Sentences
description: >-
  By the end of this archive, I will write something that a modern,
  consumer-grade LLM could never produce, and I'll do it in one line of code. I
  won't abuse special characters or write gibberish. It'll be grammatically
  correct, semantically meaningful, and only use standard, keyboard characters.
keywords: run-on sentence, llms, grammatical structures, long sentences, context windows
date: 2024-04-29 23:17:58
tags:
---


By the end of this archive, I will write something that a modern, consumer-grade LLM could never produce, and I'll do it in one line of code. I won't abuse special characters or write gibberish. It'll be grammatically correct, semantically meaningful, and only use standard, keyboard characters. 

Before I can get to that line of code, however, we need to have a little grammar lesson. If you went to elementary or middle school in the States, you likely had an English teacher give a lesson on run-on sentences, strings of words that demand a break but never get one. From this lesson, students usually have two takeaways. First, run-on sentences are bad. Two, run-on sentences are just really, really long sentences. While run-on sentences are grammatically incorrect, it's not because they're long. Sentences can be long and still grammatically correct, but creating those kinds of sentences requires a lot of planning. Length is not the issue.

The issue lies in the structure of the sentence. Sentences contain one or more clauses—fragments that feel like complete ideas. Not all clauses can stand alone as sentences, but the ones that can are called "independent clauses." Two examples of independent clauses are "it was the best of times" and "it was the worst of times." If you properly join them together, you can get a longer, grammatically correct sentence: "It was the best of times, and it was the worst of times." Obviously, Charles Dickens didn't include "and" when he wrote *A Tale of Two Cities*, and he didn't use a semicolon either. In fact, the first sentence of that book is a run-on sentence, but Dickens wrote it so masterfully that it doesn't matter. 

Essentially, run-on sentences are just sentences that don't have enough connectors for their independent clauses. As such, if we manage all our conjunctions, we can write a sentence as long as we'd like. This all relates to LLMs; I promise.

When modern LLMs write, they have a fixed context window. After a certain number of words*, they can't continue writing. In addition, they're usually designed to finish each text generation with a period, so the sentence stops at the end of the context window. Sure, there are hacky ways to get around this, such as modifying the LLM token grammar to remove punctuation and forcing the LLM to only look at the last N words, but that's outside the scope of consumer products. Therefore, for practical purposes, LLMs can only write sentences as long as their context windows. Currently, this hovers around 100k tokens for state-of-the-art models.

So, in order to write something that LLMs can't, all I need to do is write a sentence that is more than 100k words long. Personally, the target of 100k words seems a bit small. Though my sentence will be grammatically correct, I want it to embody the idea of an extremely long, run-on sentence. For this reason, it'll be a marathon—26.2 miles—long. By my rough estimations, at 12 pt font with standard screen size, that will take about 10 million characters. 

With this length target in mind and the theme of a marathon, coming up with what to write is surprisingly straightforward. My [previous work](https://github.com/zainsarwar865/LLMTestBed) in exploiting grammatical properties of English when attacking LLMs definitely makes this easier. Essentially, I'll be abusing the most straightforward, repetitive independent clause structure: noun + verb + comma + "and" + noun + verb + comma + "and" + ... until we hit 10 million characters. As for what the actual content of the sentence will be, it's easier just to show you.

```Python
print(", and ".join(["I ran"] * 2730000) + ".")
```

I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran, and I ran...

Running this code in a REPL takes about 2 seconds, so if LLM context windows get any larger, I can just increase the clause count. I'll leave optimization for future Ronik to figure out. In any case, it's done. In one line of code, I generated text that LLMs can't.

The purpose of this exercise was never to write something meaningful. After a few seconds, you sort of get the gist of the sentence. Instead, it's an easy way to demonstrate that generative AI has limits. It's my job to understand the limits, risks, and vulnerabilities of new models, and sometimes it's hard to explain that to the people around me. Nearly everyone has some vested interest in the success of LLMs, and whenever I talk about finding their limits, I feel like I'm just spewing run-on sentences—piles of ideas that no one fully seems to comprehend. Hopefully, with Marathon 1.0, it'll be a bit easier.  

---

*The number of tokens in a context window is always greater than or equal to the number of words an LLM can generate in a context window, so even if you pretend every token is a word, that's still an upper bound that LLMs can't surpass.

## References

1. [*Syntactic Structures*, Noam Chomsky](https://www.ling.upenn.edu/courses/ling5700/Chomsky1957.pdf)
2. [Faulkner Long Sentence](https://mymodernmet.com/longest-run-on-sentence-william-faulkner/)
3. [*A Tale of Two Cities*, Charles Dickens](https://www.gutenberg.org/files/98/old/2city12p.pdf)