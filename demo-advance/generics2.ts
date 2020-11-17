interface Person {
  name: string;
  age: number;
  sex: string;
}

function addUser<T extends Person>(userInfo: T): T {
  return userInfo
}
