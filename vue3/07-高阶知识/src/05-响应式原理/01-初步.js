const obj = {
  name: 'abc',
  age: 18,
};

// 依赖收集
const reactiveFns = [];
// 监听函数
function watchFn(fn) {
  // 将监听函数push到依赖收集的数组中
  reactiveFns.push(fn);
  fn();
}

watchFn(function foo() {
  console.log('foo function');
  console.log('foo:name', obj.name);
  console.log('foo:age', obj.age);
});

watchFn(function bar() {
  console.log('bar name', obj.name + ' hello');
  console.log('bar:function');
  console.log('bar:age', obj.age + 10);
});

console.log('name发生变化-----------------------');
// 修改obj的属性
obj.name = 'cba';
// 从依赖收集数组中执行每个监听的函数
reactiveFns.forEach(fn => {
  fn();
});