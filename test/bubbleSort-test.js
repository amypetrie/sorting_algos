const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('bubbleSort functionality', function(){
  it('can sort an array length three', function(){
    unsorted_array = [4,2,7]
    result = bubbleSort(unsorted_array)

    assert.deepEqual(result, [2,4,7])
  })

  it('can sort an array length 10', function(){
    unsorted_array = [4,2,7,1,3,9,0,5,8,6]
    result = bubbleSort(unsorted_array)

    assert.deepEqual(result, [0,1,2,3,4,5,6,7,8,9])
  })
})
