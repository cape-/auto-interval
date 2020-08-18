const { setAutoInterval } = require('../setAutoInterval')
var clearAutoInterval = setAutoInterval(() => console.log("The Date.now() is ", Date.now()), 100)
setTimeout(clearAutoInterval, 5000) // Finish after 5s