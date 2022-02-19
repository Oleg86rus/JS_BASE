function runCode() {
    console.log('before promise')
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise')

            resolve()
        }, 0)
    })
}

setTimeout(() => {
    console.log('Zero')
}, 0)

runCode().then(() => console.log('Zero Promise Invoked'))

console.log('One')


/*
Call Stack
console.log('before promise')
console.log('One')

Call queue
console.log('Zero')
console.log('Zero Promise')

Micro
console.log('Zero Promise Invoked') (т.к. он дополняет промис, то обозначается последним)
изначално делал ошибку, ставя его на 3 место.


1. before promise
2. One
3. Zero
4. Zero Promise
5. Zero Promise Invoked
 */