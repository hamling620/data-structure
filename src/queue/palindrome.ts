import Deque from './deque'

function palindromeChecker (aString: string): boolean {
    if (!aString) return false

    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('') // 转化小写并去掉中间的空格
    let isEqual = true
    let firstChar, lastChar
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }
    while (deque.size() > 1) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            isEqual = false
            break
        }
    }

    return isEqual
}

console.log('a', palindromeChecker('a'))
console.log('abc', palindromeChecker('abc'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('level', palindromeChecker('level'))
console.log('Was it a car or cat I saw', palindromeChecker('Was it a car or cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))
