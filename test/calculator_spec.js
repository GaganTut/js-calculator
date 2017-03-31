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

describe("sum", () => {
  it("should be a function", () => {
    expect(calc.sum).to.be.a("function");
  });

  it("should add parameter to total and return total", () => {
    calc.load(0);
    expect(calc.sum(5)).to.equal(5);
    expect(calc.sum(8)).to.equal(13);
    expect(calc.sum(-3)).to.equal(10);
  });

  it("should not accept non-numbers and unreal numbers", () => {
    expect(calc.sum.bind(null, Infinity)).to.throw(Error);
    expect(calc.sum.bind(null, NaN)).to.throw(Error);
    expect(calc.sum.bind(null, [645])).to.throw(Error);
  });
});

describe("difference", () => {
  it("should be a function", () => {
    expect(calc.difference).to.be.a("function");
  });

  it("should subtract parameter from total and return the total", () => {
    calc.load(0);
    expect(calc.difference(5)).to.equal(-5);
    expect(calc.difference(8)).to.equal(-13);
    expect(calc.difference(-33)).to.equal(20);
  });

  it("should not accept non-numbers and unreal numbers", () => {
    expect(calc.difference.bind(null, {"hello": 5})).to.throw(Error);
    expect(calc.difference.bind(null, NaN)).to.throw(Error);
    expect(calc.difference.bind(null, "whatever")).to.throw(Error);
  });
});

describe("product", () => {
  it("should be a function", () => {
    expect(calc.product).to.be.a("function");
  });

  it("should multiply parameter to the total and return the total", () => {
    calc.load(1);
    expect(calc.product(5)).to.equal(5);
    expect(calc.product(8)).to.equal(40);
    expect(calc.product(-0.25)).to.equal(-10);
  });

  it("should not accept non-numbers and unreal numbers", () => {
    expect(calc.product.bind(null, {50: -5})).to.throw(Error);
    expect(calc.product.bind(null, Infinity)).to.throw(Error);
    expect(calc.product.bind(null, "heyyyy")).to.throw(Error);
  });
});

describe("quotient", () => {
  it("should divide parameter from the total and return new total", () => {
    calc.load(20);
    expect(calc.quotient(4)).to.equal(5);
    expect(calc.quotient(0.5)).to.equal(10);
    expect(calc.quotient(-5)).to.equal(-2);
  });
  it("should not let you divide by 0", () => {
    expect(calc.quotient.bind(null, 0)).to.throw(Error);
    expect(calc.quotient.bind(null, -0)).to.throw(Error);
  });
});

describe("getMemory", () => {
  it("should return the number stored in memory", () => {
    expect(calc.getMemory()).to.equal(0);
  });
});

describe("storeMemory", () => {
  it("should store a number into the memory", () => {
    calc.storeMemory(15);
    expect(calc.getMemory()).to.equal(15);
    calc.storeMemory(-0.5);
    expect(calc.getMemory()).to.equal(-0.5);
  });
  it("should also filter only real numbers", () => {
    expect(calc.storeMemory.bind(null, NaN)).to.throw(Error);
  });
});

describe("clearMemory", () => {
  it("should clear the number in memory", () => {
    calc.storeMemory(15);
    calc.clearMemory();
    expect(calc.getMemory()).to.equal(0);
    calc.storeMemory(8);
    calc.clearMemory();
    expect(calc.getMemory()).to.equal(0);
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
