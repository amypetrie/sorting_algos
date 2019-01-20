const assert = require('chai').assert
const determineSwitch = require('../determineSwitch')

describe('switchFunction', function() {
  it('returns object with switched key and true value if a switch has occurred', function(){
    collection = [9,2,5,3,2,9,17,8,1,3,4]
    result = determineSwitch(collection)
    assert.deepEqual(result.switched, true)
  })

  it('returns object with switched key and false value if a switch has not occurred', function(){
    collection = [2,5,9,29,76,1928,28384]
    result = determineSwitch(collection)
    assert.deepEqual(result.switched, false)
  })

  it('returns object with value of the switched collection', function(){
    collection = [7,2,9,1]
    result = determineSwitch(collection)
    assert.deepEqual(result.collection, [2,7,1,9])
  })

})
