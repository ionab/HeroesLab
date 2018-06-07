var Hero = function(name, health, food, talk){
  this.name = name;
  this.health = health;
  this.food = food;
  this.talk = function(){
    return "My name is: " + this.name;
  }
  this.tasks = [];
}

Hero.prototype.eatFood = function (food) {
  this.health += food.replenishmentValue
};
module.exports = Hero;
