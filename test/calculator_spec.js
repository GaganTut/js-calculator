// import dependencies e.g. chai and the calculator module
/* jshint esversion: 6 */
const chai = require("chai");
const calc = require("../calculator.js");


// define two variables: `expect` and `should`.
const expect = chai.expect;
const should = chai.should;

// define a `describe` block. what are we testing? what should be name this suite? This is the "container" describe block.

describe("load", () => {

  it("should be a function", () => {
    expect(calc.load).to.be.a("function");
  });

  it("should return the number passed in", () => {
    expect(calc.load(5)).to.equal(5);
    expect(calc.load(-1)).to.equal(-1);
  });

  it("should not take in any non-numbers", () => {
    expect(calc.load.bind(null, null)).to.throw(Error);
    expect(calc.load.bind(null, [4,5])).to.throw(Error);
    expect(calc.load.bind(null, {4:5})).to.throw(Error);
    expect(calc.load.bind(null, undefined)).to.throw(Error);
  });

  it("should not take in any unrealistic numbers", () => {
    expect(calc.load.bind(null, NaN)).to.throw(Error);
    expect(calc.load.bind(null, Infinity)).to.throw(Error);
  });
});

describe("getTotal", () => {
  it("should be a function", () => {
    expect(calc.getTotal).to.be.a("function");
  });

  it("should return the loaded number", () => {
    calc.load(10);
    expect(calc.getTotal()).to.equal(10);
  });
});


  /**
   * each method should have it's own `describe` block
   */

  // define a `describe` block to test the `load` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `getTotal` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `add` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `subtract` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `multiply` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `divide` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `recallMemory` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `saveMemory` method and all these tests go INSIDE of this describe

  // define a `describe` block to test the `clearMemory` method and all these tests go INSIDE of this describe

  /**
   * FINAL BOSS
   */

  // define a `describe` block to test the `validation` features of your methods and all these tests go INSIDE of this describe
