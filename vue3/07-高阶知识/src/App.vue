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
let reactiveFn = null
function watchFn(fn) {
  reactiveFn = fn
  fn()
  reactiveFn = null
}

// 负责通过obj的key获取对应的Depend对象
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 根据对象obj, 找到对应的map对象
  let map = objMap.get(obj)
  if (!map) {
    map = new Map()
    objMap.set(obj, map)
  }

  // 根据key, 找到对应的depend对象
  let dep = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key, dep)
  }

  return dep
}


// 监听属性变化
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    // 设置值时通知监听
    set: function(newValue) {
      value = newValue
      // 根据key，找到对应的dep
      const dep = getDepend(obj, key)
      dep.notify()
    },
    get: function() {
      // 根据key，找到对应的dep
      const dep = getDepend(obj, key)
      // 将依赖了属性的函数，添加到reactiveFn中
      dep.addDepend(reactiveFn)
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
  console.log('bar:', obj.age + 10);
});

// 修改obj的属性
console.log('name发生变化-----------------------');
obj.name = 'cba';
// 通知执行

console.log('age发生变化-----------------------');
obj.age = 33;

</script>
