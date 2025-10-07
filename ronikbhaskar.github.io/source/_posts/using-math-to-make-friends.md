---
title: Using Math to Make Friends
description: >-
  About a year ago, I realized I was showing symptoms of the latest global epidemic: loneliness. Apparently, the best cure is friends. Rather than try and brute force this problem, I decided to use my skills as a mathematician to optimize this process. This is how to make friends optimally.
keywords: >-
  using math to make friends, optimal friendship, equation friendship, math
  friendship, friendship model, loneliness epidemic, social networks
date: 2025-10-05 02:30:21
tags:
---


About a year ago, I realized I was showing symptoms of the latest global epidemic. It developed slowly, but by the time I noticed, the condition had already taken hold. I had become the latest casualty of what is now being dubbed the Loneliness Epidemic. 

The symptoms were incessant: wallowing, restless solitude, and feeling alone on this planet. Fortunately, there are effective treatments, but you won't find them at a pharmacy. Instead, researchers identified a class of active ingredients that can be synthesized at home and used for long-term treatment. Those ingredients are friends.

Unfortunately, synthesizing friends is a laborious process, and I haven't done organic lab work in years. So, rather than trying to brute-force the problem, I turned to mathematics to optimize the process. If friendship is the cure, then perhaps a mathematical approach could help optimize the production process.

Standard treatment plans for loneliness typically recommend two, straightforward goals: have many friends and see them often. The goals are simple, but they're not easy. To achieve these two goals, I developed three questions:

1. Who should I befriend first?
2. How can I build a friendship efficiently?
3. Who should I befriend next?

I decided on these questions because they create a natural strategy for approaching the problem. Once the questions are answered, I can start with step 1, then repeat steps 2 and 3 until I have synthesized a sufficient number of friends. 

## 1. Selecting the First Friend

As someone with no friends at the moment, the first friend will be the hardest to make. This isn't about feeling nervous—it's mathematically more difficult, and I know that because of network theory. Network theory is the study of entities and their connections, and it's used to study things like power grids, airports, and social networks. One of the most common principles in network theory is that social networks follow a hub-and-spoke structure. In a hub-and-spoke network, there are a few well-connected individuals (hubs), and most others are less connected (spokes). Hubs are statistically better at building new connections than spokes, and since I have no connections, that makes me a spoke. 

While the math says the odds are against me, I can actually use this knowledge to my advantage. Technically, my first friend could be anyone, but if I choose a hub as my first friend, then this will give me massive advantages going forward.

The first advantage is triadic closure. Triadic closures are connections formed by mutual association. If I befriend person A, and person A knows person B, then A might say, "Hey, have you met my friend B?" and suddenly, I've made another friend. In this way, friendship is a positive feedback loop. The more friends you have, the easier it becomes to make even more friends. Befriending a hub accelerates this process. 

The second advantage is preferential attachment. Barabási and Albert showed that people who are already well-connected tend to gain new connections at a faster rate. This is separate from triadic closure, because even complete strangers to the network are still more likely to befriend hubs. If I befriend a hub, I will be exposed to more people at a faster rate simply by mutual association.

For these two reasons, the best choice for a first friend is a hub: someone who has many connections and naturally attracts more. Choosing an optimal first friend is critical, as it will determine the trajectory of my social network development. 

## 2. Modeling Friendship Dynamics

While network theory helps explain large-scale friendship patterns, it doesn't tell us how to build connections on an individual level. For my plan, I need to understand how to actually build connections with people. Building and maintaining friendships requires time and energy, but knowing how to allocate those resources efficiently is still unclear. I need a way to analyze different friendship strategies and measure which one is most effective.

To that end, I created a model for friendship strength, denoted by *f*, which varies over time *t* (in days). 

$$\frac{df}{dt} = -\frac{\alpha}{f} + E(t)$$

In this model, the first term represents **friendship decay**, because without effort, friendships will weaken over time. Strong friendships decay slowly, but weak ones fade quickly. The decay rate is determined by a constant *α > 0*. The second term, *E(t)*, represents **effort**, which is the energy put into maintaining a friendship. Naturally, this assumes that the effort is well-received by the other person.

A higher score means a stronger friendship, while a score of 0 means you’re strangers. This model is also compatible with standard social network models. Interpreted through the lens of a social network, if two people have a connection with a strength of *f*, then the inverse of *f* represents their distance in the network. Similarly, a friendship strength of 0 implies infinite distance, which again means they are complete strangers.

Using this model, we can test different strategies for the effort *E(t)* to determine which one is the most effective for building and maintaining friendships. I began where all friendships begin—the first impression. In my model, the first impression is represented by *f(0)*, which I set to 1 for simplicity. Now that we have *f(0)*, we can also determine the decay constant. I will assume that if I never follow up with someone after the first impression, they will likely forget me in about a month. This requires a decay constant of *α* = 0.0167.

Assuming I can invest 12 units of effort per year, I tested three strategies:

1. Frontloading: putting more effort at the beginning.
2. Uniform: evenly spacing effort throughout the year.
3. Backloading: starting slow, then increasing the effort over time.

For this simulation, each interaction uses the same amount of effort as the initial impression. This is clearly not a lot of effort, but because I want to get useful information from this simulation, underestimating effort is safer than overestimating. Below are the results of simulating a year of friendship with each strategy.

![](/images/friend-data.png)

While the equation and simulation may look abstract, the insight they reveal is deeply human: early effort matters most. Weak friendships decay too easily, but once the connection is strong enough, it decays very slowly. Thus, the optimal strategy is to invest heavily at the beginning of the friendship. Of course, it would be ridiculous for me to just stop seeing my friends, especially since one of my goals is to see them often, so the strategy will likely begin with frontloading, which will then transition to uniform effort after some period of time.

## 3. Expanding the Network

As mentioned earlier, one friend is not enough. In selecting my next friend, the most natural choice is someone in close proximity to my first friend. This is especially clear from the findings in section 1. However, while choosing someone close would be easy, that approach is suboptimal. Instead, I'll do the opposite. I will seek connections outside my existing circles.

Network theory shows that people tend to form local clusters, such as groups of coworkers or classmates. Befriending my first friend's friends would likely keep me in the same cluster, limiting my exposure to new connections. 

Instead, I will use an observation from the Watts-Strogatz model, which demonstrates the importance of non-local connections. When a network has just a few non-local connections, this can expose entire communities to each other simply by mutual association. Because of their importance in bringing people together, these non-local connections cause the "small world" effect, in which people who should have been far apart are suddenly very close. Since the small world effect is so important when being exposed to new people, I should focus on building small world connections. 

Therefore, my next friend should be non-local. Additionally, they should also be a hub for the reasons outlined in section 1. To be clear, I can—and will—still be friends with my friends' friends, but for optimal network expansion, I will prioritize well-connected people in entirely different social circles.

## Evaluation

Part of me developed this optimized friendship strategy as a joke about being a lonely mathematician. However, this method turned out to be surprisingly effective. I won't share every detail and outcome, but the results speak for themselves. I have friends, I spend time with them, and I no longer feel alone.

Yes, my approach was calculated and mechanical—antithetical to the way we're "supposed" to make friends, but in a world so heavily optimized for distraction and disconnection, it felt nice to fight back with a little optimization of my own. 

There are still days when I interact with no one, but now, I get to choose when those days happen. I don't wallow, I enjoy solitude when it comes, and most importantly, I don't feel alone on this planet. On the days I want to be with other people, I have friends I can turn to. Speaking of, if you'll excuse me, I have some friends to meet.

---

## References

1. [Network Theory](https://en.wikipedia.org/wiki/Network_theory)
2. [Barabási-Albert Model](https://en.wikipedia.org/wiki/Barabási–Albert_model)
3. [Watts-Strogatz Model](https://en.wikipedia.org/wiki/Watts–Strogatz_model)
4. [Triadic Closure](https://en.wikipedia.org/wiki/Triadic_closure)
5. [The Loneliness Epidemic](https://pmc.ncbi.nlm.nih.gov/articles/PMC10772224/)