---
title: 'The Connoisseur of Random: Lava Lamps are Protecting your Data'
date: 2022-10-15 17:25:50
tags:
---

Have you ever used the Canva website? How about Etsy, Walmart, or even Best Buy? If so, congrats! Your data is being protected by lava lamps.

Cloudflare is one of the largest global networks, securely providing you access to many of your favorite websites. In an attempt to generate more secure encryption keys, they turned to lava lamps. While lava lamps are deterministic—they follow an exact set of rules in a particular order—they are mathematically chaotic, meaning that approximate initial conditions won't tell you the final outcome. If you are even slightly off when trying to simulate a lava lamp, your results will be almost entirely inaccurate.

Additionally, Cloudflare uses a double pendulum and uranium decay to generate chaos, but that's beyond the scope of this archive.

Using lava lamps to generate random numbers isn't a new idea. Back in 1996, Lavarand began using lava lamps to generate random numbers. They took the data from images of lava lamp arrays, and used them as seeds for pseudorandom number generators. Naturally, the use of a pseudorandom number generator makes the process a bit less safe, but it's nice to see they were taking precautions.

Pseudorandom number generation is too well understood to be used in cryptography, so Cloudflare imposes two additional rules on their random number generation to keep your data secure. First, their numbers should pass statistical tests that prove unpredictability. If you can find patterns in your data, it's hard to call it random (I have another archive on the way about this topic). Second, if someone knows how part—not all—of the program works, they still shouldn't be able to predict the random numbers. 

So, the next time you're shopping on Etsy or Walmart.com, remember that you're safe. You have lava lamps protecting you. 

*Disclaimer: I am not affiliated with Cloudflare in any way, and these statements are entirely my own.*

---

## References

1. [Cloudflare Uses Lava Lamps](https://www.cloudflare.com/learning/ssl/lava-lamp-encryption/)
2. [Lavarand Web Archive](https://web.archive.org/web/19971210213248/http://lavarand.sgi.com/)