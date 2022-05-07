class Person {
  public name: string = 'noname';
  public age: number = 22;
  public phone: string = '18911111111';

  // 构造器
  constructor(name_: string, age_: number, phone_: string) {
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }

  //方法默认的返回值为void
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`);
  }
}
const zs = new Person('zs', 23, '18922222222');
console.log('%czs: ', 'color: #ec40ef;', zs);

zs.doEat('ls', '武汉');
