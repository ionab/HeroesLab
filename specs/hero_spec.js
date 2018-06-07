var assert = require('assert');
var Hero = require('../hero.js');
var Tasks = require('../task.js');
var Food = require('../food.js')

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

  it("should be able to eat food, and health value should go up by the replenishmentValue", function(){
    food = new Food("testFood", 5)
    hero1.eatFood(food)
    assert.strictEqual(hero.health, 15)
  })

  it("should increase health by 1.5 * value if the food is their favourite food", function(){

  })

  it("should be able to sort task by difficulty", function(){

  })

  it("should be able to sort task by urgency", function(){

  })

  it("should be able to sort task by reward", function(){

  })

  it("should be able to view tasks that are marked as complete", function(){


  })

  it("should be able to view tasks that are marked as incomplete", function(){


  })






})
