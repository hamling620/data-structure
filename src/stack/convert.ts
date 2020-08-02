import Stack from './stack'
type convertFunc = (number: number, base: number) => string

/**
 * 
 * @description 将一个十进制数转化为任意进制
 * @param number 需要转换的数
 * @param base 转化的进制
 */
const convertNumber: convertFunc = (number, base) => {
    const stack = new Stack<number>()
    let remain: number
    const digits: string = '0123456789abcdef'
    const arr: string[] = []

    while (number) {
        remain = Math.floor(number % base)
        stack.push(remain)
        number = Math.floor(number / base)
    }

    while(stack.size()) {
        arr.push(digits[stack.pop()])
    }

    return arr.join('')
}

console.log(convertNumber(100, 2))
console.log(convertNumber(100, 8))
console.log(convertNumber(100, 10))
console.log(convertNumber(100, 16))
console.log(convertNumber(10, 2))