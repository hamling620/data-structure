interface DataInterface<T> {
    [index: number]: T   
}
class Stack<T> {
    private data: DataInterface<T> = {}
    private count: number = 0

    size () {
        return this.count
    }

    isEmpty () {
        return !this.count
    }

    clear () {
        this.data = {}
        this.count = 0
    }

    push (ele: T) {
        this.data[this.count] = ele
        this.count++
    }

    peek () {
        return this.data[this.count - 1]
    }

    pop () {
        if (this.isEmpty()) return
        let result = this.data[this.count - 1]
        delete this.data[this.count - 1]
        this.count--
        return result
    }

    toString () {
        if (this.isEmpty()) return ''
        let objString = `${this.data[0]}`
        for (let i = 1; i < this.count; i++) {
            objString += `, ${this.data[i]}`
        }
        return objString
    }
}
export default Stack