# browserhack-demo

Play NetHack in your Browser!

[BrowserHack](https://github.com/coolwanglu/BrowserHack) is the port of NetHack to JavaScript by @coolwanglu.

BrowserHack is truely impressive, as it is a port of NetHack to a "new" OS platform, which is then compiled
using the LLVM frontend and the [Emcripten](https://github.com/kripken/emscripten) backend. The net result
is a legendary C-program running in your browser. (With other UI goodness done by @coolwanglu.) See relevant
[Hacker News thread](https://news.ycombinator.com/item?id=9363577).

My contribution is just writing a short Pulumi program to host it.

## Standing Up

```bash
# Dependencies
npm install
npm run build
npm run lint

# Deploy to Pulumi. You'll need to edit the code
# to change the domain settings, etc.
pulumi stack init browserhack-demo
pulumi update
```
