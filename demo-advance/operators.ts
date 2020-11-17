// 操作符
interface Person1 {
  name: string;
}

interface Person2 {
  age: number
}

type Tom1 = Person1 & Person2
const tom1: Tom1 = {
  name: 'Tom',
  age: 14
}

type Tom2 = Person1 | Person2
const tom2: Tom2 = {
  name: 'Tom2',
  age: 12
}

// keyof获取一个类型的所有键，并返回一个联合类型
interface Person3 {
  name: string;
  age: number;
  say: (name: string) => string
}
type Tom3 = keyof Person3 // 'name' | 'age' | 'say'

// typeof 获取变量的类型
interface Person4 {
  name: string;
  age: number
}
const tom4: Person4 = {
  name: 'Tom4',
  age: 189
}
type Type4 = typeof tom4

