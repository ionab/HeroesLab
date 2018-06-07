var assert = require('assert');
var Task = require('../task.js')

describe ('Task', function(){
var task1;

  beforeEach(function(){
    task1 = new Task(5, 5, "testReward")
  })

  it("should have a difficulty level", function(){
    assert.strictEqual(task1.difficultyLevel, 5)
  });

  it("should have a urgency level", function(){
    assert.strictEqual(task1.urgencyLevel, 5)
  })

  it("should have a reward", function(){
    assert.strictEqual(task1.reward, "testReward")
  })

  it("should have a task which starts as incomplete", function(){
    assert.strictEqual(task1.complete, false)
  })


})
