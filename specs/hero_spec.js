var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js')

describe('Hero', function(){
  var hero1;

  beforeEach( function(){
    hero1 = new Hero("testName", 10, "testFood")
  })

  it("should have a name", function(){
    assert.strictEqual(hero1.name, "testName")
  })

  it("it should have a health value", function(){
    assert.strictEqual(hero1.health, 10);
  })

  it("it should have a fav food", function(){
    assert.strictEqual(hero1.favfood, "testFood");
  })

  it("it should be able to speak", function(){
    assert.strictEqual(hero1.talk(), "My name is: testName");
  })

  it("it should have an array of tasks which start empty", function(){
    assert.strictEqual(hero1.tasks.length, 0);
  })

  it("should be able to eat food, and health value should go up by the replenishmentValue", function(){
    food = new Food("someFood", 5)
    hero1.eatFood(food)
    assert.strictEqual(hero1.health, 15)
  })

  it("should increase health by 1.5 * value if the food is their favourite food", function(){
    food = new Food("testFood", 5);
    hero1.eatFood(food);
    assert.strictEqual(hero1.health, 17.5)
  })

  it("should be able to sort task by difficulty", function(){
    task1 = new Task(5, 5, "testReward1");
    task2 = new Task(4, 4, "testReward1");
    task3 = new Task(3, 3, "testReward1");
    task4 = new Task(2, 2, "testReward1");
    task5 = new Task(1, 1, "testReward1");
    hero1.tasks.push(task1);
    hero1.tasks.push(task2);
    hero1.tasks.push(task3);
    hero1.tasks.push(task4);
    hero1.tasks.push(task5);
    hero1.sortTasksByDifficult()
    assert.strictEqual(hero1.tasks[0], task1)
  })

  it("should be able to sort task by urgency", function(){
    task1 = new Task(5, 5, "testReward1");
    task2 = new Task(4, 4, "testReward1");
    task3 = new Task(3, 3, "testReward1");
    task4 = new Task(2, 2, "testReward1");
    task5 = new Task(1, 1, "testReward1");
    hero1.tasks.push(task1);
    hero1.tasks.push(task2);
    hero1.tasks.push(task3);
    hero1.tasks.push(task4);
    hero1.tasks.push(task5);
    hero1.sortTasksByUrgency();
    assert.strictEqual(hero1.tasks[0], task1)
  })

  xit("should be able to sort task by reward", function(){
    task1 = new Task(5, 5, "e");
    task2 = new Task(4, 4, "b");
    task3 = new Task(3, 3, "c");
    task4 = new Task(2, 2, "d");
    task5 = new Task(1, 1, "a");
    hero1.tasks.push(task1);
    hero1.tasks.push(task2);
    hero1.tasks.push(task3);
    hero1.tasks.push(task4);
    hero1.tasks.push(task5);
    hero1.sortTasksByReward();
    assert.strictEqual(hero1.tasks[0], task5)

  })

  it("should be able to mark a task as complete", function(){
    task1.complete = true;
    assert.strictEqual(task1.complete, true)
  })

  it("should be able to mark a task as complete by index", function(){
    task1 = new Task(5, 5, "e");
    task2 = new Task(4, 4, "b");
    task3 = new Task(3, 3, "c");
    task4 = new Task(2, 2, "d");
    task5 = new Task(1, 1, "a");
    hero1.tasks.push(task1);
    hero1.tasks.push(task2);
    hero1.tasks.push(task3);
    hero1.tasks.push(task4);
    hero1.tasks.push(task5);
    hero1.tasks[2].complete = true;
    assert.strictEqual(hero1.tasks[2].complete, true)
  })

  it("should be able to view tasks that are marked as complete", function(){
  task1 = new Task(5, 5, "e");
  task2 = new Task(4, 4, "b");
  task3 = new Task(3, 3, "c");
  task4 = new Task(2, 2, "d");
  task5 = new Task(1, 1, "a");
  hero1.tasks.push(task1);
  hero1.tasks.push(task2);
  hero1.tasks.push(task3);
  hero1.tasks.push(task4);
  hero1.tasks.push(task5);
  hero1.tasks[2].complete = true;
  hero1.tasks[3].complete = true;
  hero1.tasks[4].complete = true;
  hero1.tasks[1].complete = true;
  assert.strictEqual(hero1.completeTasks().length, 4)

  })

  it("should be able to view tasks that are marked as incomplete", function(){

    task1 = new Task(5, 5, "e");
    task2 = new Task(4, 4, "b");
    task3 = new Task(3, 3, "c");
    task4 = new Task(2, 2, "d");
    task5 = new Task(1, 1, "a");
    hero1.tasks.push(task1);
    hero1.tasks.push(task2);
    hero1.tasks.push(task3);
    hero1.tasks.push(task4);
    hero1.tasks.push(task5);
    hero1.tasks[2].complete = true;
    hero1.tasks[3].complete = true;
    hero1.tasks[4].complete = true;
    hero1.tasks[1].complete = true;
    assert.strictEqual(hero1.incompleteTasks().length, 1)


  })






})
