// 可以只赋值其中一项
let tom: [string, number]
tom[0] = 'Tom'

// 但是当直接对元组类型的变量赋值时，就需要提供所有元组类型中指定的项
let tom2: [string, number] = ['Micky', 16]
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
tom2.push(3) 
tom2.push('str')