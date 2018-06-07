var Hero = function(name, health, food, talk){
  this.name = name;
  this.health = health;
  this.favfood = food;
  this.talk = function(){
    return "My name is: " + this.name;
  }
  this.tasks = [];
}

Hero.prototype.eatFood = function (food) {
  if (food.name === this.favfood){
    this.health += (food.replenishmentValue * 1.5);
  }
  else {
    this.health += food.replenishmentValue;
  }
};

Hero.prototype.sortTasksByDifficult = function () {
  return this.tasks.sort(function(a,b){
    return b.difficultyLevel - a.difficultyLevel;
  })
};

Hero.prototype.sortTasksByUrgency = function () {
  return this.tasks.sort(function(a,b){
    return b.urgencyLevel - a.urgencyLevel;
  })
};



module.exports = Hero;
