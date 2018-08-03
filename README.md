# browserhack-demo

Demo of using Pulumi to deploy BrowserHack, a NetHack port for your browser.

BrowserHack is the port of NetHack to JavaScript by @coolwanglu.
The repo is here: https://github.com/coolwanglu/BrowserHack

The relevant code in this repo is the Pulumi program that hosts it on a website,
using Pulumi.

## Standing Up

```bash
pulumi stack init browserhack-demo

npm install
npm run build
npm run lint

pulumi update
```

## Background

```text
TODO: Explain the backstory here.
```

> This is fucking nuts!
> All of the game code is Nethack's original C: https://github.com/coolwanglu/BrowserHack/tree/master/src
>
> Porting is mainly accomplished by defining a windowing system for 'web' (mostly in C), right next to the definitions for 'X11', 'Qt', etc: https://github.com/coolwanglu/BrowserHack/tree/master/win
>
> And compiling through LLVM via Emscripten, resulting in a browser-runnable JS target: https://github.com/coolwanglu/BrowserHack/tree/gh-pages.
>
> Absolutely incredible work all around.

-- Toprated comment on [Hacker News](https://news.ycombinator.com/item?id=9363577)
