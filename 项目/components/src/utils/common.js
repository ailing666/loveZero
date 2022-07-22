export const autoControlModules = () => {
  // 自动化的规则，通type属性，自动读到目录组件
  const modules = {};
  const files = require.context("@/components/control", true, /index.vue$/);
  files.keys().forEach((item) => {
    const key = item.split("/");
    const name = key[1];
    // 组件集成
    modules[`com-${name}`] = files(item).default;
  });
  return modules;
};
