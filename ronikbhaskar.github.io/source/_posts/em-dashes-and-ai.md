---
title: Em Dashes and AI
description: >-
  Since 2023, the internet has been desperately searching for a way to separate
  real human writing from AI slop. Well, according to all the in-vogue internet
  gurus, the search is over. There is a new telltale sign that AI has been used,
  and it has been dubbed the "ChatGPT hyphen". According to them, it's a
  special, archaic bit of punctuation that no one in their right mind would ever
  use in real life, but AI just so happens to love it. It's not the normal
  hyphen that you see on your keyboard. It's longer—the length of an "m"—and it
  looks like this:
keywords: >-
  em dash, chatgpt hyphen, ai hyphen, detecting ai, em dash ai, llm tokens,
  common app, college application
date: 2025-09-27 22:53:51
tags:
---


The first part of this archive is a brief exploration of how the em dash influenced internet culture. The second part is a slightly technical exploration of why AI loves using em dashes.

## Part 1: The ChatGPT Hyphen

Since 2023, the internet has been desperately searching for a way to separate real human writing from AI slop. Well, according to all the in-vogue internet gurus, the search is over. There is a new telltale sign that something is AI, and it has been dubbed the "ChatGPT hyphen". According to them, it's a special, archaic bit of punctuation that no one in their right mind would ever use in real life, but AI just so happens to love it. It's not the normal hyphen that you see on your keyboard. It's longer—the length of an "m"—and it looks like this:
—

I discovered the ChatGPT hyphen in 2019, except back then, it was known as an em dash. The em dash came into my life for a very particular reason: college essays. Back in 2019, I was applying to college, and during that process, I wrote over 50 essays, each one with a word limit. This word limit caused me a lot of grief, as I trimmed my essays over and over while trying to maintain the less-than-original ideas I had written down. Unfortunately, this strategy of trimming had limited success, leaving the word limit still out of reach. Rather than do the reasonable thing and properly rewrite my essays, I chose the unreasonable option. I decided to reach the word limit by asking a ridiculous question: What is a word? 
—

As it turns out, the application portal had a very specific way of counting words. In the eyes of the application, words are just characters separated by spaces. That's the only restriction. I believed this definition could be exploited, but I wasn't sure how until I stumbled across a line in a book that used an em dash. When I read the line, I realized that the em dash didn't have a space after it. Commas use spaces. Periods use spaces. Colons and semi-colons use spaces. But not em dashes. And if there were no spaces, it would be counted as fewer words. From then on, I used em dashes in every essay I wrote. Every interruption—every appositive phrase—used em dashes to save on words. Pressing Option-Shift-minus on my keyboard to type an em dash became second nature, and I have used it in almost all of my writing since.
—

Fast forward to today, and em dashes are a mark of AI. Sure, it's cool to be good at using AI, but you get a lot more counter-cultural style points for claiming AI is beneath you, and that's what calling out the "ChatGPT hyphen" does. Calling out em dashes for being AI, giving it a nickname that uses "ChatGPT" in a pejorative manner, they're all signaling cues to claim some sort of intellectual superiority over people who use AI. It's very occasionally useful for telling when something was written by AI, but it's mainly just virtue signaling. There is real social power in calling out "ChatGPT hyphens".
—

As a brief aside, dashes are not hyphens. Hyphens are a separate piece of punctuation, often shorter than dashes, that are meant to combine two words into a single concept. For example, "the printing press was a fifteenth-century invention" is an example of a hyphen. Dashes, on the other hand, are a separate concept. Dashes are most often used for breaking sentences, inserting phrases, and interrupting thoughts. They were popularized in the early days of printing, more so a few centuries later in printings of Shakespeare's works. Since then, many of English's greatest writers have continued the legacy of dashes, most notably [Emily Dickinson](/ex-libris-select-poems-by-emily-dickinson).
—

Here, in the 21st century, em dashes have gone out of fashion for the majority of people, which is why it seems so strange when ChatGPT uses them. However, in light of the recent AI allegations against em dashes, a new group has joined the discourse: writers. The writing community has come out of its nooks to defend this poor piece of punctuation. Em dashes are actually a mainstream staple of writing, especially in literature. The only problem is that most people aren't writing dialogue-heavy stories on a day-to-day basis. Nor are people writing copious amounts of semi-informal prose. Honestly, most people just don't write much outside of work, so they don't use em dashes.
—

Hilariously, this backlash from writers has led to even more virtue signaling. Riding this wave of writers defending em dashes, there is now social posturing *against* the ChatGPT hyphen as evidence of AI. They argue people are too obsessed with small, insignificant tells of AI, and they don't understand how real writing works. Social media posts on this topic often sound like they're reclaiming the em dash from the ChatGPT hyphen haters. They're not reclaiming it from AI, mind you, just the ChatGPT hyphen haters. Somehow, the internet sped through the process of both introducing a pejorative symbol and subsequently reclaiming it, which would be a fascinating case study of social justice theory if I had the time. The best part is that this whole schism is a massive contradiction, because ChatGPT hyphen haters and em dash users are both against AI, and yet, they're also somehow against each other, because rejecting the dash means you're not a sheep, but using it means you write as a human.
—

Internet discourse is a messy, strange place, but it does allow people to engage with new ideas. As the em dash has come into the limelight, it has done to the internet what it does in writing. The very nature of the em dash is to interrupt, to disrupt, to force us to re-engage from a new angle. No thought is safe—no line of dialogue can be completed—in the presence of a single stroke. And now, the em dash is doing that once more. Not to lines in a screenplay or paragraphs in a novel, but to the entirety of internet discourse around AI. Everyone is being forced to reevaluate their expectations and see things from a different perspective. AI users need to wrestle with the scope of their literary consumption, and writers need to contend with ever-changing expectations for media. After 3 years of being exposed to AI, we thought that we understood it—that we had mastered it—but the em dash interrupted us and made us realize that our new problems with machines are far from over.
—

## Part 2: Digging Further

The writer in me wanted to leave the story there—an online moment about AI and punctuation. Unfortunately, the scientist in me had questions. Why would ChatGPT use so many em dashes? Will this behavior change? What can it tell us about AI? There are likely multiple reasons for this, but my hypothesis is that's nothing more than a byproduct of efficiency.
—

As you are probably aware by now, large language models (LLMs) are next-word prediction machines. You give it some text, it tells you what comes next. Except, it's not really a next-*word* predictor; it's a next-*token* predictor. Most people gloss over the whole "token" thing because they're basically just words. However, from prior experience, I know it can be beneficial to take the unreasonable approach to answering a problem. As such, I decided to start my investigation by asking a ridiculous question: What is a token?
—

Tokens are designed to represent text as efficiently as possible. To do this, they use an algorithm called byte-pair encoding to compress text into tokens. Typically, text data is stored character-by-character, but that's inefficient. Take the word "banana" for example. It has this "an" that is repeated twice. The algorithm looks at that and says, "It would be more efficient to create a new special character that represents 'an'." This sort of combined representation is called a token. Now, instead of being stored b-a-n-a-n-a, the word is stored b-an-an-a. Typically, AI companies are encoding billions of sentences, so the algorithm repeats this process thousands of times until it creates a completed vocabulary of tokens.
—

Understanding this encoding algorithm teaches us the intent behind each token in an LLM's vocabulary. The algorithm says that if an LLM created a token, then that sequence of characters happens so often that tokenizing it was efficient. Fortunately, OpenAI makes their token vocabulary publicly available, so I dug through the GPT-4 vocabulary. 
—

As a low-frequency bit of punctuation, you might expect there to be just one token for em dashes, but that is not the case. There are 44 tokens that contain an em dash in GPT-4's vocabulary. Not 1, not 2, but 44. Some of them have more than one em dash. There's an entire token that's just 16 em dashes back-to-back. For an "obscure" punctuation mark, that's a lot of tokens, especially given that everything GPT-4 can say in every language it knows requires only 100k tokens. Clearly, people use a lot of em dashes, and when LLMs like GPT-4 were trained on human writing, they noticed just how frequent they were.
—

It's one thing to have a lot of em dash tokens, but AI also has to be incentivized to use them. Lucky for us, this incentive is clear once you start reading all the tokens. Most of the tokens are an em dash followed by an actual word, like "—they" or "—including" or "—which". Of course, GPT-4 has separate tokens for these words without em dashes, but you know what it doesn't have? Tokens for these words with other punctuation. There is no ", they" token nor a ", which" token. If you want to have punctuation followed by another word, you typically need two tokens: one for the punctuation and another for the word. Since the em dash tokens do this in a single token, they're essentially twice as efficient. Using em dashes, AI can convey the same message with fewer tokens.
—

This still doesn't paint a full picture. If "—which" is a token, then certainly ", which" should be a token, simply based on how frequent it would be in internet training data. However, it seems this is a symptom of a bigger pattern. Somewhere in their encoding algorithms, AI companies decided that there shouldn't be any tokens with spaces in the middle, and I think I understand why. Ideally, AI companies want their tokens to be similar to words, and as we learned earlier, words are just characters separated by spaces. If you have a space in the middle of your token, it's no longer one word; it's multiple words. That's why em dash tokens are special. Commas use spaces. Periods use spaces. Colons and semi-colons use spaces. But not em dashes. If AI companies want to be efficient and stick to their no-spaces-in-the-middle rule, then using em dashes makes sense.
—

Back in 2019, I started using em dashes to be more efficient–to literally save on space. It seemed like a ridiculous premise at the time, but it worked. Today, AI is doing the same thing, not because it makes for good writing, but because AI companies know as much about language as a word counter on a college application portal. It's about being fast—saying everything efficiently—and that's what you get with an em dash, even if it is a little disruptive.

---

## References

1. [Dashes (Wikipedia)](https://en.wikipedia.org/wiki/Dash)
2. [Nicholas Okes Print of King Lear and origins](https://archive.org/details/textsofkingleart0001blay/page/n11/mode/2up)
3. [Hacker News discourse on the new GPT-ism](https://news.ycombinator.com/item?id=43500389)
4. [Self-Publishing Reddit Forum discussion on em dashes](https://www.reddit.com/r/AO3/comments/1lhlt2k/the_em_dash_dilemma/)
5. [Rolling Stone article on the rising anecdotal observations of em dashes by AI](https://www.rollingstone.com/culture/culture-features/chatgpt-hypen-em-dash-ai-writing-1235314945/)
6. [Early Reddit thread about ChatGPT overusing em dashes](https://www.reddit.com/r/ChatGPT/comments/1fuo1jf/has_anyone_noticed_how_chatgpt_tends_to_use_em/)
7. [Clip of what I believe to be the first mainstream use of the term "ChatGPT hyphen"](https://www.youtube.com/shorts/eqfyEK-WoUs)
8. [Meme history of ChatGPT hyphen](https://knowyourmeme.com/memes/chatgpt-em-dash)
9. [Paper that Popularized Byte-Pair Encoding Tokenizers (GPT 2)](https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
10. [Byte-Pair Encoding](https://en.wikipedia.org/wiki/Byte-pair_encoding)
11. [List of all GPT-4 Tokens](https://github.com/kaisugi/gpt4_vocab_list)