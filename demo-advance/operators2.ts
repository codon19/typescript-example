interface IA {
  a: string;
  b: number
}
type IAKeys = keyof IA // 'a' | 'b'
type IAValues = IA[keyof IA] // string | number

type Size = 'small' | 'default' | 'medium' | 'large'
type SizeMap = {
  [k in Size]: number
}
// 等价于
type SizeMap2 = {
  small: number;
  default: number;
  medium: number;
  large: number;
}

type Partial2<T> = { [P in keyof T]?: T[P] }
type Partial3 = Partial2<SizeMap2>

interface Fruit {
  readonly name: string,
  size: string
}
type PF = Partial2<Fruit>



/**
 * 第一步条件映射得到 => { a: never; b: never; c: 'c'; d: 'd' }
 * 
 * 第二步按索引取值得到 => never | never | 'c' | 'd' => 'c' | 'd'
 * 
 * 第三步按索引取值得到 => { c: (e: MouseEvent) => void; d: (e: TouchEvent) => void }
 * 
 */
interface SomeProps {
  a: string
  b: number
  c: (e: MouseEvent) => void
  d: (e: TouchEvent) => void
}


type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never
}

type FunctionPropKeys = GetKeyByValueType<SomeProps, Function>[keyof SomeProps]

type FunctionProps = {
  [K in FunctionPropKeys]: SomeProps[K]
}