import Queue from './queue'
import Deque from './deque'

const queue = new Queue()

// console.log(queue.size())

queue.enqueue('hello')
queue.enqueue('world')

// console.log(queue.size())
// console.log(queue.toString())

queue.enqueue('good')
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.toString())

// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.toString())

queue.clear()
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.toString())

const deque = new Deque()
console.log(deque.size())

deque.addBack('hello')
deque.addBack('world')
console.log(deque.toString())

deque.addBack('good')
console.log(deque.size())
console.log(deque.isEmpty())
console.log(deque.toString())

console.log(deque.removeFront())
console.log(deque.removeBack())
console.log(deque.size())
console.log(deque.isEmpty())
console.log(deque.toString())

deque.addFront('bye')
console.log(deque.size())
console.log(deque.isEmpty())
console.log(deque.toString())


