var assert = require('assert');
var Hero = require('../hero.js');
var Tasks = require('../task.js');


describe('Hero', function(){
  var hero1;

  beforeEach( function(){
    hero1 = new Hero("testName", 10, "testfood")
  })

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "testName")
  })

  it("it should have a health value", function(){
    assert.strictEqual(hero1.health, 10);
  })

  it("it should have a fav food", function(){
    assert.strictEqual(hero1.food, "testfood");
  })

  it("it should be able to speak", function(){
    assert.strictEqual(hero1.talk(), "My name is: testName");
  })

  it("it should have an array of tasks which start empty", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  })

})
