---
title: Anti-ELIZA
---

*Conditioning away the human level of trust imparted to AI systems. Inspired by ELIZA. [Test it out.](/anti-eliza/)*

## The Problem of Anthropomorphization

Modern AI is pretty great. New systems are advancing at marvelous rates, improving year after year. Unfortunately, this technological progress has led to a very related, very human problem. Humans are treating AI like it's human. More specifically, humans are anthropomorphizing AI systems, attributing qualities like understanding, intentionality, and empathy to what are essentially glorified math equations.

Anthropomorphizing AI can lead to misunderstandings about the true nature and limitations of these systems. By believing AI is knowledgeable and understanding, humans tend to overestimate AI's capabilities. They entrust data processing formulas with their emotional needs and nuanced ethical dilemmas, neither of which these tools are equipped to handle. This misplaced trust in algorithms can lead to bad decisions, but more importantly, it shifts blame away from the user and the programmer.

## The Case of ELIZA

ELIZA was an experiment conducted by Joseph Weizenbaum in 1966. ELIZA simulated a Rogerian therapist using very, very simple code. In fact, the bulk of the ELIZA algorithm took only 7 lines of code for me to replicate. Since Rogerian therapists primarily take what the patient says and turn it into a question, a simple procedure does a decent job for the simulation. 

Even though ELIZA understands nothing, participants often felt a close, empathetic connection with the program. Weizenbaum's own secretary allegedly asked Weizenbaum to leave the room when talking to ELIZA. Users told ELIZA their problems and feelings, projecting human traits onto the not-at-all-human program.

ELIZA is a standout case when it comes to anthropomorphization. In fact, despite being orders of magnitude simpler, it outperformed GPT-3.5 in a Turing Test. To clarify, this program from the 1960s is better at pretending to be human than the 175 billion parameter behemoth from OpenAI.

## Nice to meet you, I'm Anti-ELIZA

To underscore the absurdity of attributing true understanding to AI, I would like to introduce you to Anti-ELIZA. Anti-ELIZA starts conversations like ELIZA, using standard Rogerian therapy tactics. However, as the conversation progresses, Anti-ELIZA gradually shifts to reminding the user that ELIZA is just a few lines of code and incapable of understanding anything. 

By transitioning from seeming empathy to blunt reminders that the program isn't conscious, Anti-ELIZA highlights the ease with which humans overestimate AI systems. Regardless of how convincing a conversation with AI like ELIZA may seem, the algorithm on the other side is devoid of sentience, comprehension, and emotion.

## References

1. [ELIZA, Joseph Weizenbaum](https://web.stanford.edu/class/cs124/p36-weizenabaum.pdf)
2. [ELIZA Wikipedia Page](https://en.wikipedia.org/wiki/ELIZA)
3. [Rogerian Therapy](https://www.ncbi.nlm.nih.gov/books/NBK589708/)
4. [ELIZA Beat GPT-3.5 in a Turing Test](https://arxiv.org/abs/2310.20216)

## The ELIZA Algorithm

```Python
def respond(self, statement):
    for pattern, responses in self.patterns:
        match = re.search(pattern, statement.strip(" .!?"), re.IGNORECASE)
        if match:
            response = random.choice(responses).format(*match.groups())
            return response
    return self.default
```