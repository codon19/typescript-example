class Animal {
  static num = 12
  public name
  constructor(name) {
    this.name = name
  }
  static isAnimal(obj) {
    return obj instanceof Animal
  }
  getName() {
    return this.name
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }
  getName() {
    return `Hello${super.getName()}`
  }
}

const tom = new Cat('Tom')
console.log(tom.getName())

console.log(Animal.num)
