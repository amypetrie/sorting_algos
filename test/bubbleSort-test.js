const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('bubbleSort functionality', function() {
    it('can sort an array length three', function(){
      unsorted_array = [4,2,7]
      sorted_array = [2,4,7]

      result = bubbleSort(unsorted_array)

      assert.deepEqual(result, sorted_array)
    })
  })
})
