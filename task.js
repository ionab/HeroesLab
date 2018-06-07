// B. Create a constructor to create Task objects
//
// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed

var Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.complete = false;
}

module.exports = Task;
