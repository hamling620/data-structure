import Queue from './queue'

interface ReturnData<T> {
    elimated: T[],
    winner: T
}

function hotPotato<T> (list: T[], num: number): ReturnData<T> {
    const queue = new Queue<T>()
    const elimatedList: T[] = []
    for (let i = 0; i < list.length; i++) {
        queue.enqueue(list[i])
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        elimatedList.push(queue.dequeue())
    }

    return {
        elimated: elimatedList,
        winner: queue.dequeue()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = hotPotato(names, 7)
console.log(result)