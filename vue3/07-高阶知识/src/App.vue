<script setup>
class Depend {
  constructor() {
    this.reactiveFns = [];
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn);
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn();
    });
  }
}

const obj = {
  name: 'abc',
  age: 18,
};

// 设置一个专门执行响应式函数的一个函数
const dep = new Depend();
function watchFn(fn) {
  // 将函数加入reactiveFns中
  dep.addDepend(fn);
  fn();
}

// 监听属性变化
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    // 设置值时通知监听
    set: function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})


watchFn(function foo() {
  console.log('foo function');
  console.log('foo:', obj.name);
  console.log('foo', obj.age);
});

watchFn(function bar() {
  console.log('bar function');
  console.log('bar:', obj.name + ' hello');
  console.log('bar:', obj.age + 10);
});

// 修改obj的属性
console.log('name发生变化-----------------------');
obj.name = 'cba';
// 通知执行

console.log('age发生变化-----------------------');
obj.age = 33;
</script>
