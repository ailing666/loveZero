class ArrayList {
  constructor(public element: Array<object>) {}

  // get方法
  get(index: number) {
    return this.element[index];
  }

  // show方法
  show() {
    this.element.forEach(ele => {
      console.log(ele);
    });
  }

  // remove方法
  // 如果是根据数字【元素索引】去删除元素，remove方法返回的是一个数字
  // 如果是根据对象去删除元素，remove方法返回的是一个对象
  remove(value: number): number;
  remove(obj: object): object;
  remove(value: any): number | object {
    this.element = this.element.filter((ele, index) => {
      if (typeof value === 'number') {
        return value !== index;
      } else {
        return value !== ele;
      }
    });
    return value;
  }
}

let stuOne = { stuname: 'zs', age: 23 };
let stuTwo = { stuname: 'ls', age: 39 };
let stuThree = { stuname: 'ww', age: 31 };

let arrayList = new ArrayList([stuOne, stuTwo, stuThree]);
let res = arrayList.remove(1);
// let res = arrayList.remove(stuThree);

console.log('%cres: ', 'color: #1c9afa;', res);
arrayList.show();
export {};
