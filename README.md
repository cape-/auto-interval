# setAutoInterval
setAutoInterval ([auto-interval](http://github.com/cape-/auto-interval)) is a newer
[ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
setInterval implementation which balances cumulative timing errors.

### Example with setInterval

```js
var intervalID = setInterval(() => console.log("The Date.now() is ", Date.now()), 100)
setTimeout(clearInterval, 5000, intervalID) // Finish after 5s
```

### Example with setAutoInterval

```js
const { setAutoInterval } = require('../setAutoInterval')
var clearAutoInterval = setAutoInterval(() => console.log("The Date.now() is ", Date.now()), 100)
setTimeout(clearAutoInterval, 5000) // Finish after 5s
```

### Demos and Tools

Demonstration is [here](http://github.com/cape-/auto-interval/examples).

![Demo](https://f.cloud.github.com/assets/75759/46292as0/7aa6dd40-b4f5-11e2-9f07-9f4e8d0415f9.gif)


And there are tools constructed on Escope.

- [Esmangle](https://github.com/estools/esmangle) is a minifier / mangler / optimizer.
- [Eslevels](https://github.com/mazurov/eslevels) is a scope levels analyzer and [SublimeText plugin for scope context coloring](https://github.com/mazurov/sublime-levels) is constructed on it.
- [Esgoggles](https://github.com/keeyipchan/esgoggles) is JavaScript code browser.


### License

Copyright (C) 2020 [Lautaro Capella](http://github.com/cape-)
 (twitter: [@PkuyApp](https://twitter.com/AppPkuy)).

