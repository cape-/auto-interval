
var intervalID = setInterval(() => console.log("The Date.now() is ", Date.now()), 100)
setTimeout(clearInterval, 5000, intervalID) // Finish after 5s