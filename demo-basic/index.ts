function sayHello(person: string): void {
  console.log('hello:', person)
}
const user: string = 'tony'
sayHello(user)

const num: number = 123 

const isDone: boolean = Boolean(1)

let u: undefined = undefined

let n: null = null

let anyVal: any = '123'
anyVal = 123
console.log(anyVal.name)

let unionVal: string | number = '123'
console.log(unionVal.length)

function getString(something: string | number): string {
  return something.toString()
}