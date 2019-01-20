const assert = require('chai').assert
const determineSwitch = require('../determineSwitch')

describe('switchFunction', function() {
  it('returns true as the first element if a switch has occurred', function(){
    collection = [9,2,5,3,2,9,17,8,1,3,4]
    result = determineSwitch(collection)
    assert.deepEqual(result.first, true)
  })

  it('returns false as the first element if a switch has not occurred', function(){
    collection = [2,5,9,29,76,1928,28384]
    result = determineSwitch(collection)
    assert.deepEqual(result.first, false)
  })

})
