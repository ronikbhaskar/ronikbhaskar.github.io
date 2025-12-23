---
title: Celestial Navigation, Part 5
date: 2025-12-23 00:30:38
tags:
description: >-
    Recently, a Hollywood studio filmed a movie on the university campus. Being stuck in the lab all day, I never saw any of the scenes being filmed, but the crew was a delight to talk to. The film is called Saturn Return, which is a reference to astrology and Saturn returning to the same position from when you were born (every ~29 years). I'm no expert on astrology, but the one thing I do know is that they really care about retrogrades.
keywords: "saturn return, saturn retrograde, retrograde math, astronomy vs astrology, planetary motion, celestial navigation"
---

## 1, Curiosity

Recently, a Hollywood studio filmed a movie on the university campus. Being stuck in the lab all day, I never saw any of the scenes being filmed, but the crew was a delight to talk to. The film is called *Saturn Return*, which is a reference to astrology and Saturn returning to the same position from when you were born (every ~29 years). I'm no expert on astrology, but the one thing I do know is that they really care about retrogrades.

Retrograde is a celestial problem where things in the sky move backwards. It arises when you assume everything revolves around the Earth—aka geocentrism. Under geocentrism, the planets will occasionally move backwards in the sky relative to the stars. This is just a perspective illusion, because the planets don't revolve around the Earth and are actually always moving forward, but it's a good illusion. It's such a good illusion, it fooled early astronomers like Ptolemy, who were forced to construct outrageously complex models for planetary motion because they assumed the Earth was the center of the universe. 

Saturn has a very noticeable retrograde period because it moves so slow relative to Earth. For a planet to appear retrograde to another, the planet closer to the Sun needs to be moving faster than the planet farther from the Sun. This way, the inner planet passes the outer planet, and the result looks like a planet moving backward. It's similar to passing someone on the highway; from your perspective, the other car is going backward, even though you're both moving forward on the road.

"Moving faster" isn't enough, though. I want to know the exact conditions for retrograde. What must be true of two planets to make retrograde possible? 

## 2, Excessive Mathematics

To figure this out, I decided to model it mathematically. For this, I'll use the Earth as the inner planet and Saturn as the outer planet. Both of them are some distance from the Sun, and like the hands of a clock, their angle with respect to the Sun (the center) changes at constant rates. I'll model their motion as circular (astrophysicists, feel free to laugh) and represent them with polar coordinates, parameterized by time. Here, *E* means Earth and *S* means Saturn. 

$$(r_E, \omega_E t) \text{  and  } (r_S, \omega_S t)$$

Now, we want to define retrograde. If retrograde means one planet looks like it's moving backward relative to the other, then the angle of the second planet to the first decreases. We can find the vector between the two and calculate its angle. Then, when the derivative of the angle with respect to time is negative, the planets are in retrograde with each other. Unfortunately, the angle is a bit messy.

$$\theta = \arctan \left ( \frac{r_S \sin (\omega_S t) - r_E \sin (\omega_E t)}{r_S \cos (\omega_S t) - r_E \cos (\omega_E t)}\right )$$

The first derivative w.r.t. time is messy, but we just want to know when the derivative is negative, not its exact value. Thus, by applying a function that is monotonic increasing on its continuous intervals, we can simplify everything. Essentially, I'll be using this statement.

$$ \frac{d\theta}{dt} < 0 \iff \frac{d \tan(\theta)}{dt} < 0$$

Using this, we get the following derivative:

$$\frac{d}{dt}\tan(\theta) = \frac{\left(r_{S}^{2}\omega_S-r_{E}r_{S}\left(\omega_S+\omega_E\right)\left(\sin\left(\omega_E t\right)\sin\left(\omega_S t\right)+\cos\left(\omega_E t\right)\cos\left(\omega_S t\right)\right)+r_{E}^{2}\omega_E\right)}{\left(r_{S}\cos\left(\omega_S t\right)-r_{E}\cos\left(\omega_E t\right)\right)^{2}}$$

Well, that's still a mess, despite our simplification, but we need this fraction to be less than zero. Retrograde occurs when the planets are passing, so their relative angles are small. Because the starting angle is arbitrary, we can let *t* be close to zero without loss of generality. Assuming you trust me to do the rest of the math unsupervised, we get the following condition for retrograde motion:

$$ r_E \omega_E > r_S \omega_S $$

Since ω represents angular velocity, and *r* represents radius, these products are just the magnitude of linear velocity, so they're just the planets' speeds. Therefore, for two planets to be capable of being in retrograde with each other, you need the speed of the inner planet to be greater than the speed of the outer planet. 

## 3, Conclusion

So, as it turns out, "moving faster" really was the exact answer. However, like retrograde, that depends on your perspective. If you're on the inner planet, you need to move faster. But if you're on the outer planet, you need to move slower. The instructions are directly opposite, and yet they provide the exact same result.

Recently, I went out to observe Saturn. At the time, it was moving forward—prograde, not retrograde. This wasn't my Saturn return. I still have a few years until then. While I wait, I have a few options. I can move faster or slower or forward or backward, but in the end, no matter what I do, I will get there. 

At least, that's what I assume. I'm no expert on astrology.

---

## References

1. [Filming on Campus](https://chicagomaroon.com/49019/news/netflix-film-saturn-return-shoots-on-uchicago-campus/)
2. [Saturn Return Astrology](https://web.archive.org/web/20151222074912/http://astrology.about.com/od/advancedastrology/p/SaturnReturn.htm)
3. [Ancient Greek Astronomy](https://www.loc.gov/collections/finding-our-place-in-the-cosmos-with-carl-sagan/articles-and-essays/modeling-the-cosmos/ancient-greek-astronomy-and-cosmology)