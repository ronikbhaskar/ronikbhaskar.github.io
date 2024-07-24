---
title: Why AI Companies Pay Anguilla 32 Million Dollars a Year
date: 2024-07-22 00:50:08
tags:
description: >-
    The answer is top-level domains. Understanding what that means and why it's important will take a bit longer. It's a story about a market worth billions of dollars, Cold War era technology, and acronyms. To properly explain this, we need to go back to the beginning of the Internet.
keywords: "tld, top-level domain, domain names, DNS, internet history, .ai, Anguilla, Tuvalu"
---


The answer is top-level domains. Understanding what that means and why it's important will take a bit longer. It's a story about a market worth billions of dollars, Cold War era technology, and acronyms. To properly explain this, we need to go back to the beginning of the Internet.

In the mid-late 20th century, computer networking—the idea of computers communicating with each other—was becoming very popular among universities and research institutions. In these computer networks, in order to communicate with another device, you needed to know its address. Unfortunately, these addresses were long strings of numbers, which weren't very practical because you had to remember all these strange, numerical sequences for every computer you wanted to talk to. To remedy this, researchers started saving lists of addresses along with more memorable, readable names in a text file called HOSTS.TXT. This host file contained pairs of hostnames and addresses for every computer you knew. If you ever wanted to add a new contact, you just added it to the list. 

HOSTS.TXT was both simple and wildly inefficient. As ARPANET (not yet the Internet) continued to expand, the DoD worked on standardizing the host table and name-sharing systems, but it just wasn't enough. Over the next few decades, researchers continued to improve name systems. In 1983, the Domain Name System was created. Through this system, a network of servers would be used to manage efficient, up-to-date records of every hostname and the associated IP address. 

Consider the domain of this website: "ronikbhaskar.github.io". When you asked your computer to find my website, it couldn't just ask the Internet for the website directly. That domain name is just a trick humans use because IP addresses are hard to remember (and they change occasionally, but we won't get into that). Your computer needed to know the IP address of the webserver that hosts my website. It may already know, but if it forgot, it needs to ask a name server. Not all name servers are created equal. For example, the answer to "Where is ronikbhaskar.github.io?" resides in the name server that manages github.io. Of course, github.io is a busy domain, and it doesn't have time to answer all these questions about subdomain IP addresses. Instead, smaller DNS servers will keep records of recent queries and try to answer new ones before deferring to the name server of github.io. As you work your way closer to the domain's name server, the more authoritative the answers are. Up there, you start asking even more fundamental questions, not just "Where is ronikbhaskar.github.io?", but "Where is github.io?". The most fundamental question you can ask is, "Where is .io?".

It seems like a strange question, but it's not too dissimilar from how we approach normal addresses. If someone hands you an address, and you know the street, you'll only ask about the street number. If you don't know how to find the street, you'll ask about that beforehand. If you don't know where the city is, you'll ask about that. If you don't know how to find the state, you'll ask about that. At the highest level, if you can truly track down no information about where you're going, your first question will be, "Where is this country?". For domain names, top-level domains—.com, .org, .io—are the "countries" of the Internet. 

Extending this metaphor a bit further, these top-level domains, like countries, control which addresses can exist within them. They control the provinces of the region, and the provinces establish cities, and the cities build roads, and on those roads are buildings. The top-level domains control who has space within their territory. 

Since the Dot-Com boom, companies have been swallowing up domain names like Sooners in an Oklahoma land claims race. For decades, companies focused on getting a coveted .com domain. If someone took your name before you, you were stuck with a .net, which didn't command nearly the same respect. As the early 2000s progressed, .com domains for common names became incredibly difficult to acquire. Domain name companies even started running ad campaigns for alternate top-level domains. People started getting desperate, and desperation leads to innovation. You see, back when IANA—the Internet Assigned Numbers Authority—was creating all the top-level domains, they created ones for countries and independent states called ccTLDs—country code top-level domains. These two-letter ccTLDs work just as well as a .com, but they are administered by each region's government. Some governments realized they had very marketable TLDs and began selling domain names to willing customers.

The most famous country for this phenomenon is Tuvalu, earning 8% of its GNI from domain names. That may sound excessive, but Tuvalu won the IANA lottery with its famous ".tv" ccTLD. Tuvalu has earned lots of revenue from its domain names, and it's not the only country to do so. As podcasts became more popular, the Federated States of Micronesia started earning more through its ".fm" ccTLD. With the rise in AI companies, over $32 million went to Anguilla for its ".ai" ccTLD in 2023.

This part of the history of the Internet always brings me peace, not just because tiny island nations are getting money, but because it's a story of successfully regulating technology. The standards used to run the Internet today have been around for decades, and while there are imperfections, these systems have done so much good. In a time when technology is outpacing safety and regulation, it's nice to imagine that we will develop the standards that make modern AI usable and trustworthy for years to come.

---

## References

1. [Domain Name Market Overview](https://straitsresearch.com/report/domain-name-registrar-market)
2. [DNS History](https://www.cloudns.net/blog/dns-history-creation-first/)
3. [The History of IANA](https://www.internetsociety.org/ianatimeline/)
4. [DOD Internet Host Table Specification](https://www.ietf.org/rfc/rfc952.txt)
5. [Domain Names Specification](https://datatracker.ietf.org/doc/html/rfc1035)
6. [Tuvalu is a tiny island nation of 11,000 people. It’s cashing in thanks to Twitch.](https://www.washingtonpost.com/video-games/2019/12/23/tuvalu-is-tiny-island-nation-people-its-cashing-thanks-twitch/)
7. [The Tiny Caribbean Island That’s Making A Fortune From AI](https://www.forbes.com/sites/barrycollins/2024/01/31/the-tiny-caribbean-island-thats-making-a-fortune-from-ai/)