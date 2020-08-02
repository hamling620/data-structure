import Stack from './stack'

type baseballFunc = (arr: string[]) => number
type valueHandler = (stack: Stack<number>) => void
type specialKey = '+' | 'D' | 'C'
interface ValueMap {
    '+': valueHandler
    'D': valueHandler
    'C': valueHandler,
    'default': (stack: Stack<number>, item: string) => void
}

// 策略模式
const getValue = function() {
    const valueMap: ValueMap = {
        '+' (stack) {
            if (stack.size() > 1) {
                let prev1 = stack.pop()
                let prev2 = stack.pop()
                stack.push(prev2)
                stack.push(prev1)
                stack.push(prev1 + prev2)
            } else if (stack.size() === 1) {
                stack.push(stack.peek())
            } else {
                stack.push(0)
            }
        },
        'D' (stack) {
            stack.push(stack.peek() * 2)
        },
        'C' (stack) {
            stack.pop()
        },
        'default' (stack, item) {
            stack.push(+item)
        }
    }
    return (stack: Stack<number>, value: string) => {
        if (!Number.isNaN(+value)) {
            valueMap['default'](stack, value)
        } else {
            valueMap[value as specialKey](stack) 
        } 
    }
}()

const baseballGame: baseballFunc = arr => {
    const stack = new Stack<number>()
    
    for (let value of arr) {
        getValue(stack, value)   
    }

    console.log(stack.toString())

    let total: number = 0
    while (stack.size()) {
        total += stack.pop()
    }
    return total
}

console.log(baseballGame(['5', '2', 'C', 'D', '+']))