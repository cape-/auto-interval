# setAutoInterval
setAutoInterval ([auto-interval](http://github.com/cape-/auto-interval)) is a newer
[ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
`setInterval` implementation which balances cumulative timing errors.

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

## What's the difference?

##### Comparison of gap between ETA (Expected Time) and Actual Run Time in `setInterval()` and `setAutoInterval()`. 

![Demo](/img/graph-comparison.png)

##### Time Table for setInterval()

![Demo](/img/demo_setInterval.png)

##### Time Table for setAutoInterval()

![Demo](/img/demo_setAutoInterval.png)


## Advantages

- Same function signature as `setInterval()`
- Ultra-lightweight
- Minimum code adaptation

## Demos and Tools

Demonstration is [here](http://github.com/cape-/auto-interval/examples).

![Demo](/img/demo_setAutoInterval_acuracy.png)

![Demo](/img/demo_setInterval_acuracy.png)

## License

Copyright (C) 2020 [Lautaro Capella](http://github.com/cape-)
 (twitter: [@PkuyApp](https://twitter.com/AppPkuy)).

