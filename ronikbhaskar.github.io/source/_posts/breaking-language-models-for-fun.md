---
title: Breaking Language Models for Fun
description: >-
  Training a machine learning model is easy. Correctly training a machine
  learning model is hard. Every choice you make, from start to finish, has an
  impact on how your model will perform. You won't know whether you trained it
  right or not until after you're done, when someone finds an issue in your
  finished model. That someone is me.
keywords: llm, adversarial examples, attacking machine learning models, ml security
date: 2024-05-13 23:25:09
tags:
---

Training a machine learning model is easy. Correctly training a machine learning model is hard. Every choice you make, from start to finish, has an impact on how your model will perform. You won't know whether you trained it right or not until after you're done, when someone finds an issue in your finished model. That someone is me.

The other day, I stumbled across a free-to-use profanity detector. The developer made an API so you can use his model for free without running anything locally. If nothing else, I applaud the developer's effort to create free, accessible software. 

While I was using the software, I did make some observations about its behavior. As expected, standard profanity is flagged as such. There were, however a few innocuous phrases that were flagged as profane. Here are some examples:

 - "do not prick yourself with that pin"
 - "asdfasdf asdf"
 - "a son of"
 - "asldfjlas lsjaflks asldfl;a sf"
 - "this profanity detector is just so incredibly, horribly"
 - "son of a"
 - "oh god, this is a total"
 - "you absolute piece of"
 - "censor this"

I have more, but this seems like a representative sample. There are some actual sentences, some phrases with negative sentiment, and plain gibberish. It took me maybe 10 minutes to find these, and that was without any automation. I can understand that in some extreme cases, you may want to flag a few of these, but most of these phrases are nowhere near as bad as the model thinks they are. 

To be clear, this is a very popular project. It has over 1,000 stars on GitHub. I'm not trying to belittle the project. I'm just trying to use it as an example that others may be able to learn from. Hopefully, what others will learn is that machine learning can be tricky. In this case, the model is skewed towards expecting profanity, which has resulted in some level of bias. This may come from a skewed dataset, an improper loss function, or just the inherent randomness in stochastic training processes. 

The exact specifics of the problem aren't particularly important because there is no perfect fix to this problem. Instead, understand the scope of your machine learning model. Define proper use cases. Use thorough testing to understand its limitations. Realize that statistical machines are occasionally wrong, and you need to calculate how much a wrong prediction could cost you or someone else. 

It's possible the developer went through all this, and this model was the final result. In that case, congrats on such a popular project. Regardless, the next time you hear someone building a profanity detector, make sure it doesn't get fooled by phrases like "asdfasdf asdf".

---

## References

1. [the profanity detector in question](https://www.profanity.dev)