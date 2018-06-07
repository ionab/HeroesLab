var assert = require('assert');
var Food = require('../food.js')


describe('Food', function(){
  var food1;

    beforeEach(function(){
      food1 = new Food("testName", 10)
    })

    it("should have a name", function(){
      assert.strictEqual(food1.name, "testName");
    })

    it("should have a replenishmentValue", function(){
      assert.strictEqual(food1.replenishmentValue, 10)
    })


})
