<script setup>
const obj = {
  name: 'abc',
  age: 18,
};

const reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
  fn();
}

watchFn(function foo() {
  console.log('foo function');
  console.log('foo:name', obj.name);
  console.log('foo:age', obj.age);
});

watchFn(function bar() {
  console.log('bar function');
  console.log('bar:name', obj.name + ' hello');
  console.log('bar:age', obj.age + 10);
});

// 修改obj的属性
console.log('name发生变化-----------------------');
obj.name = 'cba';
reactiveFns.forEach(fn => {
  fn();
});
</script>
