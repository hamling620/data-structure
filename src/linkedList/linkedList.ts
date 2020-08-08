import Node from './node'
import { NodeProp } from './types'

class LinkedList<T> {
    protected count: number = 0
    public head: NodeProp<T>

    push (element: T) {
        const node = new Node<T>(element)
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    removeAt (index: number): T {
        if (index < 0 || index >= this.size()) return
        let current = this.head
        if (index === 0) {
            this.head = current.next
        } else {
            let previous: NodeProp<T>
            for (let i = 0; i < index; i++) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.count--
        return current.element
    }

    getElementAt (index: number): T {
        if (index < 0 || index >= this.size()) return
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current.element
    }

    insert (element: T, index: number): boolean {
        if (index < 0 || index > this.size()) return false
        const node = new Node<T>(element)
        if (index === 0) {
            node.next = this.head
            this.head = node
        } else {
            let previous: NodeProp<T>
            let current = this.head
           for (let i = 0; i < index; i++) {
              previous = current
              current = current.next  
           } 
           previous.next = node
           node.next = current
        }
        this.count++
        return true
    }

    indexOf (element: T): number {
        let index = 0
        let current = this.head
        while (current && index < this.size()) {
            if (element === current.element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    remove (element: T): T {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size () {
        return this.count
    }

    isEmpty () {
        return !this.count
    }

    getHead () {
        return this.head
    }

    toString () {
        if (!this.head) return ''
        let current = this.head
        let objString = `${current.element}`
        while (current.next) {
            objString += `, ${current.next.element}`
            current = current.next
        }
        return objString
    }
}

export default LinkedList