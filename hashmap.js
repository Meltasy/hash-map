const { createNode } = require('./node')
const { createList } = require('./linkedlist')

module.exports.createHashMap = function(arraySize, bucketsArray, loadFactor) {
  return {
    arraySize: size = 16,
    bucketsArray: bucketsArray = [...Array(arraySize)],
    loadFactor: loadFactor = 0.75,
    hash(key) {
      let hashCode = 0
      const primeNumber = 31
      for (let idx = 0; idx < key.length; idx++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(idx)) % this.arraySize
      }
      return hashCode
    },
    bucketsSize() {
      let sum = 0
      for (bucket of bucketsArray) {
        if (bucket !== undefined) {
          sum += 1
        }
      }
      return sum
    },
    // expandArray() {
    //   arraySize + 2
    //   console.log(arraySize)
    //   let newArray = this.entries()
    //   console.log(newArray)
    //   this.clear()
    //   bucketsArray = [...Array(arraySize)]
    //   console.log(arraySize, bucketsArray.length)
    //   for (let i = 0; i < newArray.length; i++) {
    //     // this.set(key, value)
    //     let index = this.hash(key)
    //     let bucket = bucketsArray[index]
    //     let item = createNode({ key, value })
    //     bucket = createList(item)
    //     bucketsArray[index] = bucket
    //   }
    // },
    set(key, value) {
      let index = this.hash(key)
      let bucket = bucketsArray[index]
      let item = createNode({ key, value })
      // let limit = arraySize * loadFactor
      // let bucketsSize = this.bucketsSize()
      if (!bucket) {
        bucket = createList(item)
        bucketsArray[index] = bucket
      } else if (!bucket && bucketsSize > limit) {
        // this.expandArray()
        bucket = createList(item)
        bucketsArray[index] = bucket
      } else {
        let current = bucket.head
        if (current.key === key) {
          current.value = value
          return
        }
        while (current.next !== null) {
          current = current.next
          if (current.key === key) {
            current.value = value
            return
          }
        }
        current.next = item
      }
    },
    get(key) {
      let index = this.hash(key)
      let bucket = bucketsArray[index]
      if (!bucket) {
        console.log('This bucket doesn\'t exist')
        return null
      } else {
        let current = bucket.head
        while (current !== null) {
          if (current.key === key) {
            return current.value
          }
          current = current.next
        }
        return null
      }
    },
    has(key) {
      return this.get(key) !== null
    },
    remove(key) {
      let index = this.hash(key)
      let bucket = bucketsArray[index]
      if (!bucket) {
        console.log('This bucket doesn\'t exist')
        return false
      }
      let current = bucket.head
      if (current.key === key) {
        if (current.next === null) {
          bucketsArray.splice(index, 1, undefined)
          return true
        } else {
          bucket.head = current.next
          return true
        }
      }
      while (current.next !== null) {
        let previous = current
        current = current.next
        if (current.key === key) {
          previous.next = current.next
          return true
        }
      }
      return false
    },
    length() {
      let sum = 0
      for (bucket of bucketsArray) {
        if (bucket !== undefined) {
          let current = bucket.head
          sum += 1
          while (current.next !== null) {
            current = current.next
            sum += 1
          }
        }
      }
      return sum
    },
    clear() {
      let index = 0
      for (bucket of bucketsArray) {
        if (bucket !== undefined) {
          bucketsArray.splice(index, 1, undefined)
        }
        index += 1
      }
    },
    keys() {
      let array = []
      for (bucket of bucketsArray) {
        if (bucket !== undefined) {
          let current = bucket.head
          array.push(current.key)
          while (current.next !== null) {
            current = current.next
            array.push(current.key)
          }
        }
      }
      return array
    },
    values() {
      let array = []
      for (bucket of bucketsArray) {
        if (bucket !== undefined) {
          let current = bucket.head
          array.push(current.value)
          while (current.next !== null) {
            current = current.next
            array.push(current.value)
          }
        }
      }
      return array
    },
    entries() {
      let array = []
      for (bucket of bucketsArray) {
        if (bucket !== undefined) {
          let current = bucket.head
          array.push([current.key, current.value])
          while (current.next !== null) {
            current = current.next
            array.push([current.key, current.value])
          }
        }
      }
      return array
    }
  }
}
