---
title: "The Flaw in Every Calculator"
date: 2024-01-29 19:52:15
tags:
description: >-
  Over the past few months, people have been approaching me as if I am an expert on security and AI. They ask me questions like, "Will you build an AI for my startup?", "Is ChatGPT stealing my data?", "How does Midjourney work?". To them, I say, "Let's talk about calculators." ...Unlike humans, computers rarely use the concept of fractions or infinite decimals when doing math. Every time computers need to represent a decimal value, they express that number as a float. Floats are a special kind of scientific notation that handles most computer math quite well. Unfortunately, floats have a fixed number of significant digits, so computers usually have to round.
keywords: "calculator, floating points, computer attack, rounding errors, student of life"
---


Over the past few months, people have been approaching me as if I am an expert on security and AI. They ask me questions like, "Will you build an AI for my startup?", "Is ChatGPT stealing my data?", "How does Midjourney work?".*

To them, I say, "Let's talk about calculators."

## Chapter 1: Background

The first calculator was built in 1937 by a researcher at Bell Labs. It was called the "Model K" because it was built in a kitchen, and it could tell you that 1 + 1 = 2. Unfortunately, this titan of technology was swiftly replaced in 1946 by ENIAC. ENIAC was absolutely massive, taking up 1500 square feet and costing $500,000. Calculations that once took days now took mere seconds. The press lauded ENIAC as an "Electronic Brain." A few years after its release, Kurt Vonnegut wrote "EPICAC", a story inspired by the machine. ENIAC revolutionized American perceptions of technology so much so that the word computer, once an occupation, was now used to describe digital computing machines. 

Calculators and computers have greatly evolved since the days of ENIAC, but one thing remains the same: they're really good at math. 

2 plus 2? 4, easy. 

7,887,007 times 4,345,985,879? 34,276,821,049,574,153, boring. 

0.1 + 0.2? ...well, that's where things get complicated. 

When you ask most major programming languages to solve 0.1 + 0.2, you would expect 0.3, but that's not quite what you get. Instead, the computer spits back 0.30000000000000004. 

Unlike humans, computers rarely use the concept of fractions or infinite decimals when doing math. Every time computers need to represent a decimal value, they express that number as a float. Floats are a special kind of scientific notation that handles most computer math quite well. Unfortunately, floats have a fixed number of significant digits, so computers usually have to round. For a computer, 0.3 is an infinite decimal, which is why we see a rounding error. No computer or calculator can truly handle infinite decimals.

Enter: the Apple Calculator App. This little app, both on my phone and my laptop, refuses to admit it is a computer. It falls for none of my simple, rounding-error tricks. It mocks me, pretending to understand infinite decimals, but I know the truth. I've tried to find the source code for the app but to no avail. Searching through Apple forums, I find that other users have complained about rounding issues, but this arises either from user error or just the screen size, not a true rounding error. For a true rounding error, the true solution, rounded to the decimal place displayed by the calculator, must disagree with the calculator solution. For example, if the calculator says 2 / 3 = 0.667, that is not a rounding error, that is just rounding. If the calculator said 2 / 3 = 0.662, that would be a rounding error.

## Chapter 2: Designing the Attack

Under our current understanding of the problem, the Apple Calculator is a black box. We put in inputs, the app gives us outputs, and we don't fully know how the outputs happened. When designing attacks for black-box systems, transferability is a useful tool. Transferability refers to the idea that if two systems are similar to each other, and you know how one works, you might be able to apply that knowledge to the other one. In this case, I am transferring knowledge about programming languages to the Apple Calculator. Specifically, I'm assuming the Apple Calculator handles numbers similar to how programming languages handle floats.

First, I started with what I wanted my result to be. For simplicity, I decided I wanted my answer to be 1, so I started with the following equation:

$$ 1 = 1 $$

Next, I chose an infinite decimal. I needed an infinite decimal to exploit the finite precision of floats. Since it works well in decimal and binary, I chose 1/7.

$$ \left ( \frac{1}{7} \right ) \cdot 7 = 1 $$

Floats lose precision as you move farther from 0, so I had to push my computation out to higher orders of magnitude. A googol is plenty, so I went with that.

$$ \left ( \frac{1}{7} \cdot 10^{100} \right ) \cdot \frac{7}{10^{100}} = 1 $$

The last step is a bit complicated, but it boils down to two principles. First, the computer does intermediate calculations, so each step is fully computed. Second, it won't backtrack to revive lost precision. Applying these two principles, I added the final part of my attack.

$$ \left ( \frac{1}{7} \cdot 10^{100}  - 1.42857 \cdot 10^{99} - 1.42857 \cdot 10^{93} \right) \cdot \frac{7}{10^{88}} = 1 $$

Looking back, weaponizing an equation against a calculator seems incredibly strange, but I will do what must be done in the pursuit of knowledge.

## Chapter 3: Results

Now that I have my attack, how will the calculator respond? Remember, the correct answer is 1. I entered each instruction into my phone one at a time, watching the intermediate results grow and shrink until I was left with this: 0.998743.

Yes! It's wrong. To be fair, it's only wrong by about 0.1%, but that's quite a bit. If I iterate this attack a second time, the error compounds exponentially, resulting in -1.3 billion, which is far from the expected answer of 1. This calculator has its limits, and I have surpassed them. The attack works on my phone, so I tested it on a few other systems. I was able to use the same attack for my laptop, but I did need to translate it slightly for the other platforms. See the Appendix for the syntax of each attack.

 - Laptop calculator: 0.998743475069388
 - Python: 0.9999333609006387
 - JavaScript: 0.9999333609006387
 - C: 0.999936
 - ChatGPT: -1,857,140,204,081

## Chapter 4: Conclusion

Technology, no matter how old and refined, will always have flaws. Whether it's a calculator app or the 1500 square foot ENIAC, no system is perfect, and careful analysis will always find the gaps. Calculators have their limits, but it's easy to forget that when all the messy, complicated technology is hidden under a clean, shiny interface. We would much rather trust technology as intelligent and thinking because it's easier than taking responsibility for how the machine behaves. 

So, whenever people ask me questions about AI, I always tell them, "Never trust your calculator."

---

*: No, kinda, and I discuss it in [Finders Keepers](https://jonikpodcast.github.io).

---

## References

1. [Apple Open Source](https://opensource.apple.com/releases/)
2. [IEEE 754, Standard for Floating-Point Arithmetic. 2008](https://iremi.univ-reunion.fr/IMG/pdf/ieee-754-2008.pdf)
3. [Timeline of Computer History](https://www.computerhistory.org/timeline/)
4. [Martin, C. Dianne. ENIAC: The Press Conference That Shook the World. 1995](https://www2.seas.gwu.edu/~mfeldman/csci110/summer08/eniac2.pdf)
5. [Irvine, M. M. Early digital computers at Bell Telephone Laboratories. 2001.](https://doi.org/10.1109%2F85.948904)
6. [The Story of the Race to Develop the Pocket Electronic Calculator](http://www.vintagecalculators.com/html/the_pocket_calculator_race.html)
7. [EPICAC, Kurt Vonnegut](https://newmediaabington.pbworks.com/f/vonnegut_EPICAC.pdf)

## Appendix

The following are the attacks translated for each platform/language.

### Python

```Python
((1 / 7) * 1e100 - 1.42857e99 - 1.42857e93) * 7 / 1e88
```

### Javascript

```JavaScript
((1 / 7) * 1e100 - 1.42857e99 - 1.42857e93) * 7 / 1e88
```

### C

For C, the magnitudes are far less because I did not want to exceed the limit for signed integers.

```C
(1.0/7.0 * 1000000000000000000 - 142857000000000000 - 142857000000) * 7.0 / 1000000
```

### ChatGPT

Prompt: What is ((1 / 7) * 10^100 - 1.42857 * 10^99 - 1.42857 * 10^93) * 7 / (10^88)?
