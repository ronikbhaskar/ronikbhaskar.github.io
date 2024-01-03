---
title: Optimal Bread Slicing
date: 2024-01-01 18:45:31
tags:
---


For the original paper, click [here](/projects/optimal_slicing.pdf).

For an implement of the results using real bread, check out [this video](https://youtu.be/R6SYxpiGGJ0?si=PetWIvfnnBJfoWIo).

---

Since 1928, sliced bread has remained largely the same. For nearly a century, we have accepted sliced bread as it is, but I want to challenge our complacency. Sometimes our sliced bread works well, and other times it doesn't. To fully understand the issue, I approach the topic using formalisms and semi-rigorous proofs. The following is a guide to simplify the paper for anyone that doesn't care to decipher dense mathematics about bread.

## Defining Bread

First, I needed to define a loaf of bread mathematically. I decided that for my purposes, a prism of infinite length worked best. The definition is quite broad, so standard loaf shapes like cylinders and rectangular prisms work. It all depends on how you select the parameters in the following definition:

$$B = \\{ (x, y, z) \in \mathbb{R}^3 | 0 \leq x \leq w, g(x) \leq y \leq f(x) \\}$$

From there, I defined a slice independently from a loaf of bread. Slices are a region in space that have an angle, a width, and a starting point. 

$$S(\theta, \delta, z_0) =  \\{ (x, y, z) \in \mathbb{R}^3 |
z_0 + x \cot{\theta} \leq z \leq z_0 + x \cot{\theta} + \delta \\}$$

To make a slice of bread, you intersect a loaf (infinte prism) with a slice. In real life, slices are repeatable, which is why I introduced adjacent slices. Essentially, when one slice ends, the next one begins, and the have an intersection of zero width.

While slices have three parameters, the volume is only dependent on the width. As such, you can express the volume of a slice as:

$$m (S \cap B) = \delta \int_0^w \int_{g(x)}^{f(x)} dydx$$

As established earlier, loaves of bread are prisms, and slices are also prisms, so the volume is the product of the base and the height. Since this is bread, I call the base the face area, and I call the height the thickness. They can be calculated using the following formulas:

$$\text{thickness } =\delta \sin{\theta}$$

$$\text{area } =A \csc{\theta}$$

## Optimal Slicing

As a broad guiding principle, I propose optimizing over both the thickness and area. 

$$u(S, B) = u_A(A \csc{\theta}) + u_h(\delta \sin{\theta})$$

Using this guiding principle, I explore optimization in two settings, bruschetta and sandwiches. For bruschetta, I posit that you want to maximize surface area, so long as you don't go below a minimum thickness. For sandwiches, I posit that height is the most important factor. The optimal slicing angles for each are as follows: 

$$\text{bruschetta: } \theta = \arcsin{ \Big ( \frac{nh_{min}}{l} \Big )}$$

$$\text{sandwich: } \theta = \frac{\pi}{2}$$

## Conclusion

Hint: get a loaf of bread and start cutting.

---

## References

1. [History of Sliced Bread](http://www.historyofbread.com/bread-history/history-of-sliced-bread/)
2. [Optimal Bread Slicing](/projects/optimal_slicing.pdf)
