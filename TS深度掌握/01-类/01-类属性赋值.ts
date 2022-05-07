class Person {
  public name: string = 'noname';
  public age: number = 22;
  public phone: string = '18911111111';

  //方法默认的返回值为void
  public doEat(who: string, address: string): void {
    console.log(`${this.name}和${who}在${address}吃饭`);
  }
}

const zs = new Person();
zs.name = 'zs';
zs.age = 23;
zs.phone = '18922222222';

zs.doEat('ls', '武汉');
console.log('zs', zs);

export {};
