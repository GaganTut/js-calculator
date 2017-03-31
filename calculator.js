/* jshint esversion: 6 */

/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
module.exports = (() => {
  let memory = 0;
  let total = 0;
  let calculator = {};

  function checkNum(num) {
    if (typeof num !== "number" || num === Infinity || isNaN(num)) {
      throw new Error("Valid Numbers Only");
    }
  }

  calculator.load = function(num) {
    checkNum(num);

    total = num;
    return total;
  };

  calculator.getTotal = function() {
    return total;
  };

  calculator.sum = function(num) {
    checkNum(num);
    total += num;
    return total;
  };

  calculator.difference = function(num) {
    checkNum(num);
    total -= num;
    return total;
  };

  calculator.product = function(num) {
    checkNum(num);
    total *= num;
    return total;
  };

  calculator.quotient = function(num) {
    checkNum(num);
    if (num === 0 || num === -0) {
      throw new Error("Can't Divide By Zero");
    }
    total /= num;
    return total;
  };

  calculator.getMemory = function() {
    return memory;
  };

  calculator.storeMemory = function(num) {
    checkNum(num);
    memory = num;
  };

  calculator.clearMemory = function() {
    memory = 0;
  };

  return calculator;
})();

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

