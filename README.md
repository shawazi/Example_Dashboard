Using yarn, but you may need to follow one of the top answers here: https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os to get it running on your system.

Some high severity vulnerabilities (6 after audit fix) that can be addressed at a later date.

```
yarn
export NODE_OPTIONS=--openssl-legacy-provider
yarn start
```
