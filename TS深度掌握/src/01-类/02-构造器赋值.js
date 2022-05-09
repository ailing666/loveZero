'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Person = /** @class */ (function () {
  // 构造器
  function Person(name_, age_, phone_) {
    this.name = 'noname';
    this.age = 22;
    this.phone = '18911111111';
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }
  //方法默认的返回值为void
  Person.prototype.doEat = function (who, address) {
    console.log(
      ''.concat(this.name, '\u548C').concat(who, '\u5728').concat(address, '\u5403\u996D')
    );
  };
  return Person;
})(); // 立执行函数，避免变量名被污染
var zs = new Person('zs', 23, '18922222222');
console.log('%czs: ', 'color: #ec40ef;', zs);
zs.doEat('ls', '武汉');
