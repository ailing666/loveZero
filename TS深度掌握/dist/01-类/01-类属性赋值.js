"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'noname';
        this.age = 22;
        this.phone = '18911111111';
    }
    //方法默认的返回值为void
    Person.prototype.doEat = function (who, address) {
        console.log("".concat(this.name, "\u548C").concat(who, "\u5728").concat(address, "\u5403\u996D"));
    };
    return Person;
}());
var zs = new Person();
zs.name = 'zs';
zs.age = 23;
zs.phone = '18922222222';
zs.doEat('ls', '武汉');
console.log('zs', zs);
