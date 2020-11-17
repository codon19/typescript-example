// 类型别名

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  return typeof n === 'string' ? n : n()
}

const tom: Name = getName('Tom')
console.log('tom', tom)

const mickey: Name = getName(() => 'Mickey')
console.log('mickey', mickey)

type Str = string
type Num = number
type Something = Str | Num
function getSomething(something: Something): Str {
  return something.toString()
}

type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
  ele.addEventListener(event, () => {
    console.log('event', event)
  })
}

handleEvent(document.getElementById('hello'), 'mousemove');
