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