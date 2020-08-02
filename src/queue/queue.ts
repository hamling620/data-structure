interface DataInterface<T> {
    [index: number]: T
}

class Queue<T> {
    private data: DataInterface<T> = {}
    private count: number = 0
    private lowCount: number = 0

    isEmpty () {
        return this.count - this.lowCount === 0
    }

    size () {
        return this.count - this.lowCount
    }

    peek () {
        return this.data[this.lowCount]
    }

    enqueue (ele: T) {
        this.data[this.count] = ele
        this.count++
    }

    clear () {
        this.data = {}
        this.count = 0
        this.lowCount = 0
    }

    dequeue () {
        if (this.isEmpty()) return 
        const result = this.data[this.lowCount]
        delete this.data[this.lowCount]
        this.lowCount++
        return result
    }

    toString () {
        if (this.isEmpty()) return ''
        let objString = `${this.data[this.lowCount]}`
        for (let i = this.lowCount + 1; i < this.count; i++) {
            objString += `, ${this.data[i]}`
        }
        return objString
    }
}

export default Queue