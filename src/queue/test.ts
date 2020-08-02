import Queue from './queue'

const queue = new Queue()

console.log(queue.size())

queue.enqueue('hello')
queue.enqueue('world')

console.log(queue.size())
console.log(queue.toString())

queue.enqueue('good')
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())

queue.clear()
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())
