function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

const arr = createArray<string>(3, 'x')

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

swap<number, string>([1, null])

// 泛型约束
interface Lengthwise {
  length: number
}
// 使用extends约束泛型T必须符合Lengthwise的形状
function getLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

let myFn: <T extends Lengthwise>(arg: T) => T = getLength

getLength(new Array(1, 2))

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}

let target = 12
console.log(copyFields(target, 34))

