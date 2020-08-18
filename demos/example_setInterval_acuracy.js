const { setAutoInterval } = require('../setAutoInterval')
var i = 1
var delay = 100
var start = Date.now()
var intervalID = setInterval(() => {
    var eta = (i++ * delay) + start
    var now = Date.now()
    var diff = now - eta
    console.log("ETA", eta, " The Date.now() is ", now, diff > 0 ? "(+" : "(-", Math.abs(diff), "ms)")
}, delay)
setTimeout(clearInterval, 5000, intervalID) // Finish after 5s