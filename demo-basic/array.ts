let fibonacci: number[] = [1, 2, 3]

let fibonacci2: Array<number> = [1, 1] // 数组泛型

interface NumberArray {
  [index: number]: number
}
let arr: NumberArray = [1, 122]

function sum() {
  const args: IArguments = arguments
}

const anyList: any[] = [1, '33', { name: 123 }]
