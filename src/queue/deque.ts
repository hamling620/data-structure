interface DataInterface<T> {
    [index: number]: T
}

class Deque<T> {
    private data: DataInterface<T> = {}
    private count: number = 0
    private lowCount: number = 0

    isEmpty () {
        return this.count - this.lowCount === 0
    }

    size () {
        return this.count - this.lowCount
    }

    clear () {
        this.data = {}
        this.count = 0
        this.lowCount = 0
    }

    toString () {
        if (this.isEmpty()) return ''
        let objString = `${this.data[this.lowCount]}`
        for (let i = this.lowCount + 1; i < this.count; i++) {
            objString += ` ${this.data[i]}`
        }
        return objString
    }

    addBack (ele: T) {
        this.data[this.count] = ele
        this.count++
    }

    addFront (ele: T) {
        if (this.isEmpty()) {
            this.addBack(ele)
        } else if (this.lowCount > 0) {
            this.data[this.lowCount - 1] = ele
            this.lowCount--
        } else {
            for (let i = this.count; i > 0; i--) {
                this.data[i] = this.data[i - 1]
            }
            this.count++
            this.lowCount = 0
            this.data[this.lowCount] = ele
        }
    }

    removeBack () {
        if (this.isEmpty()) return
        const result = this.data[this.count - 1]
        delete this.data[this.count - 1]
        this.count--
        return result
    }

    removeFront () {
        if (this.isEmpty()) return
        const result = this.data[this.lowCount]
        delete this.data[this.lowCount]
        this.lowCount++
        return result
    }

    peekFront () {
        return this.data[this.lowCount]
    }

    peekBack () {
        return this.data[this.count]
    }
}

export default Deque