module.exports.createList = function(head = null) {
  return {
    head: head,
    append(value) {
      const newNode = createNode(value)
      if (this.head === null) {
        this.head = newNode
        return this.head
      } else {
        let current = this.head
        while (current.next !== null) {
          current = current.next
        }
        current.next = newNode
        return current.next
      }
    },
    prepend(value) {
      const newNode = createNode(value)
      if (this.head === null) {
        this.head = newNode
        return this.head
      } else {
        newNode.next = this.head
        this.head = newNode
        return this.head
      }
    },
    size() {
      let size = 0
      if (this.head === null) {
        return size
      } else {
        let current = this.head
        while (current !== null) {
          current = current.next
          size += 1
        }
        return size
      }
    },
    getHead() {
      if (this.head === null) {
        return this.head
      } else {
        return this.head
      }
    },
    getTail() {
      if (this.head === null) {
        return this.head
      } else {
        let current = this.head
        while (current.next !== null) {
          current = current.next
        }
        return current
      }
    },
    at(index) {
      let current = this.head
      if (current === null) {
        return current
      }
      if (current.next !== null) {
        for (let curIdx = 0; curIdx < index; curIdx++) {
          current = current.next
        }
        return current
      }
    },
    pop() {
      if (this.head === null) {
        return this.head
      }
      if (this.head.next === null) {
        this.head = null
        return this.head
      }
      let current = this.head
      let previous = null
      while (current.next !== null) {
        previous = current
        current = current.next
      }
      previous.next = null
      return previous
    },
    contains(value) {
      let current = this.head
      if (current === null) {
        return false
      }
      while (current.next !== null) {
        if (current.value === value) {
          return true
        }
        current = current.next
      }
      return false
    },
    find(value) {
      let current = this.head
      let index = 0
      if (current === null) {
        return current
      }
      while (current !== null) {
        if (current.value === value) {
          return index
        }
        current = current.next
        index += 1
      }
      return null
    },
    toString() {
      let current = this.head
      let string = ''
      if (current === null) {
        return current
      }
      while (current !== null) {
        string += `( ${current.value} ) -> `
        current = current.next
      }
      return string + 'null'
    },
    insertAt(value, index) {
      let current = this.head
      let previous = null
      let newNode = createNode(value)   
      if (current === null && index === 0) {
        this.prepend(value)
        return this.head
      }
      for (let idx = 0; current !== null; idx++) {
        if (idx === index) {
          previous.next = newNode
          newNode.next = current
          return newNode
        }
        previous = current
        current = current.next
      }
    },
    removeAt(index) {
      if (this.head === null) {
        return this.head
      } 
      if (this.head !== null && index === 0) {
        this.head = this.head.next
        return this.head
      }
      let previous = this.head
      let current = previous.next
      for (let idx = 1; current !== null; idx++) {
        if (idx === index) {
          previous.next = current.next
          return previous
        }
        previous = current
        current = current.next
      }
    }
  }
}