<script setup>
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }

  depend() {
    if (reactiveFn) {
      this.reactiveFns.add(reactiveFn);
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn();
    });
  }
}

// 设置一个专门执行响应式函数的一个函数
let reactiveFn = null;
function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

// 负责通过obj的key获取对应的Depend对象
const objMap = new WeakMap();
function getDepend(obj, key) {
  // 根据对象obj, 找到对应的map对象
  let map = objMap.get(obj);
  if (!map) {
    map = new Map();
    objMap.set(obj, map);
  }

  // 根据key, 找到对应的depend对象
  let dep = map.get(key);
  if (!dep) {
    dep = new Depend();
    map.set(key, dep);
  }

  return dep;
}

/**
 *
 * @param {要监听的对象} obj
 */
 function reactive(obj) {
  const objProxy = new Proxy(obj, {
    set: function(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const dep = getDepend(target, key)
      // 通知
      dep.notify()
    },
    get: function(target, key, receiver) {
      const dep = getDepend(target, key)
      // 收集
      dep.depend()
      return Reflect.get(target, key, receiver)
    }
  })
  return objProxy
}


const obj = reactive({
  name: 'abc',
  age: 18,
});

watchFn(function foo() {
  console.log('foo function');
  console.log('foo:', obj.name);
  console.log('foo', obj.age);
  console.log('foo', obj.age);
});

watchFn(function bar() {
  console.log('bar function');
  console.log('bar:', obj.age + 10);
});

// 修改obj的属性
console.log('name发生变化-----------------------');
obj.name = 'cba';
// 通知执行

console.log('age发生变化-----------------------');
obj.age = 33;
const user = reactive({
  nickname: 'abc',
  level: 100,
});

watchFn(function () {
  console.log('nickname:', user.nickname);
  console.log('level:', user.level);
});
console.log('nickname-----------------------');
user.nickname = 'cba';
</script>
