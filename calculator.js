/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function() {
  var _memory = 0;
  var _total = 0;
  var calculator = {};

  calculator.load = function(newTotal) {
    _total = newTotal;
    return _total;
  };
  calculator.getTotal = function() {
    return _total;
  };
  calculator.add = function(num) {
    _total += num;
    return _total;
  };
  calculator.subtract = function(num) {
    _total -= num;
    return _total;
  };
  calculator.multiply = function(num) {
    _total *= num;
    return _total;
  };
  calculator.divide = function(num) {
    _total /= num;
    return _total;
  };

  return calculator;
});


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

