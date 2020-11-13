interface Animal {
  name: string
}

interface Cat {
  name: string
  run(): void
}

interface Fish {
  swim(): void
}

function testCat(cat: Cat) {
  return (cat as any as Fish)
}

function testAnimal(animal: Animal) {
  return (animal as Cat)
}

// let tom: Cat = {
//   name: 'Tom',
//   run() {
//     console.log('run')
//   }
// }

let animal: Animal = {
  name: 'Mickey'
}

let tom = animal as Cat

animal = tom as Cat
