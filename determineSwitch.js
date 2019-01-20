pry = require('pryjs')

function determineSwitch(collection){
  var switch_status = false;
  var size = collection.length;
  var new_collection = new Array();
  var status_collection = {switch_status: new_collection}
  var i = 0;
  while (i < size){
    let value_1 = collection[i];
    let value_2 = collection[i+1];
    if (value_1 >= value_2){
      new_collection[i] = value_2;
      new_collection[i+1] = value_1;
      switch_status = true;
    }
    i++;
  }
  eval(pry.it)
  return status_collection;
}

module.exports = determineSwitch
