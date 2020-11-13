// 类型断言：手动指定一个值的类型
// 将一个联合类型断言为其中一个类型
interface Animal {
  name: string
}

interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string,
  swim(): void
}

function isFish(animal: Cat | Fish) {
  return typeof (animal as Fish).swim === 'function'
}

function swim(animal: Cat | Fish) {
  (animal as Fish).swim()
}

function testCat(cat: Cat) {
  return (cat as Animal)
}

function testAnimal(animal: Animal) {
  return (animal as Cat)
}

console.log('testCat', testCat({ name: '123', run() { console.log('run') } }))
console.log('testAnimal', testAnimal({ name: '123' }))
