export interface NodeProp<T> {
    element: T
    next: NodeProp<T>
}