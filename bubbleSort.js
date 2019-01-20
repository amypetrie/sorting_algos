pry = require('pryjs')

const determineSwitch = require('./determineSwitch')

function bubbleSort(collection){
  var sorted = false;
  var status_switch = determineSwitch(collection);
  while (status_switch.switched == true){
    let next_round = status_switch.collection;
    status_switch = determineSwitch(next_round);
  }
  return status_switch.collection;
}

module.exports = bubbleSort
