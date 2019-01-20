function determineSwitch(collection){
  var switch_status = false;
  var size = collection.length;
  var i = 0;
  while (i < size){
    let value_1 = collection[i];
    let value_2 = collection[i+1];
    if (value_1 >= value_2){
      collection[i] = value_2;
      collection[i+1] = value_1;
      switch_status = true;
    }
    i++;
  }
  let status_collection = {"switched": switch_status, "collection": collection};
  return status_collection;
}

module.exports = determineSwitch
