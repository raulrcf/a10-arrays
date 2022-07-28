
const arrayNum = [1,6,5,9]
const arrayNumCopia = arrayNum.slice()


const arrayStrings = ["joao","batata","queijo"]
const arrayStringsCopia = arrayStrings.slice()

const arrayMist = [3,"limao",true]
const arrayMistCopia = arrayMist.slice()


arrayNum.unshift(3)

console.log(arrayNum)
console.log(arrayNumCopia)

arrayStringsCopia.splice(2,1)


console.log(arrayStrings)
console.log(arrayStringsCopia)

arrayMistCopia.splice(1,1)


console.log(arrayMist)
console.log(arrayMistCopia)


















