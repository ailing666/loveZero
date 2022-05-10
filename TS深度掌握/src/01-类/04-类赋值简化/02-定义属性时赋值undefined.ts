class Person {
  // 方法二、在定义属性时给默认值undefined
  public name: string | undefined;
  public age: number | undefined;
  public phone: string | undefined;
  constructor(name_: string, age_: number, phone_: string) {
    // 构造器中需要赋值
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }

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
