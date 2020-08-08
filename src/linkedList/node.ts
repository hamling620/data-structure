import { NodeProp } from './types'

class Node<T> {
    public element: T
    public next: NodeProp<T>
    constructor (element: T) {
        this.element = element
        this.next = null
    }
}

export default Node