interface Person {
  name: string,
  age?: number,
  readonly [propName: string]: string | number // 任意属性
}

// 一旦定义了任意属性，确定属性、可选属性的类型都必须是任意属性类型的子集

const tony: Person = {
  name: '12',
  age: 1,
  sex: 'male',
  status: 1
}
// tony.id = 'tnoy' 报错
// 只读属性，只读的约束是在第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

