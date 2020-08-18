/**
 * @fileoverview Expose out setAutoInterval function.
 * @author Lautaro Capella <laucape@gmail.com>
 */

//------------------------------------------------------------------------------
// setAutoInterval
//------------------------------------------------------------------------------
 /**
 * The setAutoInterval() method, repeatedly calls a function, with an autobalanced time delay between each call.
 * Unlike setInterval(), this method corrects little time differences suffered by intervals, 
 * so every new call approaches the true Expected Time.
 * It returns a function, so you can remove the interval later by calling it. 
 *
 * @param {Function} func A function to be executed every delay milliseconds.  
 * @param {number} delay The time, in milliseconds, the timer should delay in between executions of the specified function or code. 
 * @param {...*} [args] Additional arguments which are passed through to the function specified by func once the timer expires.
 * @returns {Function} (clearAutoInterval) A function that, once executed, cancels the timed repeating action which was previously established by the setAutoInterval() call.
 * @author Lautaro Capella <laucape@gmail.com>
 */
var setAutoInterval = function (func, delay, ...args) {
    var firstCall = Date.now()
    var idx = 1
    var repeater = () => {
        nextInterval = firstCall + (++idx * delay) - Date.now() - 1
        setTimeout(repeater, nextInterval)
        func(...args)
    }
    setTimeout(repeater, delay)
    return () => repeater = () => { }
}
module.exports = { setAutoInterval: setAutoInterval }