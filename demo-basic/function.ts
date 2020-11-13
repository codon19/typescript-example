function sum(x: number, y: number): number {
  return x + y
}

interface SearchListType {
  pageSize: Number,
  currentPage: Number
}
function getList(searchData: SearchListType): void {
  console.log(searchData)
}
getList({ pageSize: 10, currentPage: 1 })

let mySum: (x: number, y: number) => number = (x: number, y: number): number => x + y

interface SearchFunc {
  (source: string, subString: string): boolean
}
let searchListFunc: SearchFunc
searchListFunc = (source, subString) => source.search(subString) !== -1
searchListFunc('1', 'barber')

// 添加了默认值的参数会被识别为可选参数
function getFullName(firstName?: string, lastName: string = 'Cas'): string {
  return lastName ? `${firstName}  ${lastName}` : firstName
}

getFullName('tony')


function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join())
  } else {
    x.split('').reverse().join()
  }
}

reverse(123)
reverse('123')