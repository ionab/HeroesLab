var Hero = function(name, health, food, talk){
  this.name = name;
  this.health = health;
  this.food = food;
  this.talk = function(){
    return "My name is: " + this.name;
  }
  this.tasks = [];
}
module.exports = Hero;
