---
title: Full Stack Chat App
description: >-
    I built the chat app to look like a movie script. The header has an act number, the location is specified, we get a general description, and the rest that follows is the dialogue. It's a continuation of the dialogue happening all around me.
---

UPDATE: This project is very broken. It was fun while it lasted.

Chat with me [here](/chat). (You'll know it's me because my name is **bold**.)

## Designing the UI

I don't create in a vacuum. The people around me drastically influence my creations. Our conversations feel like dialogue in a script. There's a purpose to everything being said. It's driving the plot somewhere, and I would never reach the end without their help. 

My chat app doesn't look like Messages or WhatsApp or Slack or Discord because I don't see it as a chat app. It's a continuation of the dialogue happening all around me, which is why **I built the chat app to look like a movie script.** The header has an act number, the location is specified, we get a general description, and the rest that follows is the dialogue.

## Engineering the App

I'm incredibly grateful for the power and flexibility of GitHub pages (as you can tell by the URL). That being said, the documentation says they only support static sites, or so they claim. Depending on how much functionality you want from the site, you can do user authentication and even have hooks checking for database updates, updating the UI in real-time. 

**For the backend, I used Google Firebase.** Their free tier, the Spark plan, is incredibly powerful, and if you're getting enough traffic to exceed its limits, you have the demand to monetize your product. I don't expect heavy traffic, so the Spark plan is enough for me.

Firebase allows for for Google Authentication, along with plenty of other auth providers. This makes it mildly more difficult to spam the site with fake accounts, and the authentication redirect keeps auth traffic away from GitHub. It's a win-win.

**For the frontend, I used React.** This isn't an incredibly intense, so vanilla JS was an option, but React's libraries wrapping Firebase query snapshots made development much easier. 

There are tutorials and articles out there for building apps with React and Firebase, but relevant ones used Firebase v8 instead of v9, which transitions away from the namespacing. Luckily, Firebase's documentation covers translating v8 into v9.

 ---

<p align="right"><a href="/projects/">Back to Projects →</a></p>