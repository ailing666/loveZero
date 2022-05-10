class Person {
  // 方法一、在构造器的参数前面加上public
  constructor(public name: string, public age: number, public phone: string) {}

  //方法默认的返回值为void
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`);
  }

  public getSum(age: number): number {
    return age * 10;
  }
}
const zs = new Person('zs', 23, '18922222222');
zs.doEat('ls', '武汉');
console.log(zs.getSum(23));
export {};
