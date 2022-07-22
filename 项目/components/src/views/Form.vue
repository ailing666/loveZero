<template>
  <a-form :formConfig="formConfig" :formData="formData"></a-form>
</template>

<script>
var validatePass = (rule, value, callback) => {
  if (value === "12") {
    callback(new Error("不能输入12"));
  } else {
    callback();
  }
};
export default {
  name: "Form",
  components: {
    "a-form": () => import("@/components/form"),
  },
  data() {
    return {
      formData: {},
      formConfig: [
        {
          type: "input",
          label: "姓名",
          prop: "name",
          required: true,
          rules: [
            { min: 3, max: 6, message: "请输入3-6长度", trigger: "blur" },
          ],
        },
        { type: "select", label: "性别", prop: "sex", required: true },
        { type: "input", label: "手机号", prop: "phone", value_type: "phone" },
        { type: "input", label: "邮箱", prop: "email", value_type: "email" },
        {
          type: "input",
          label: "test",
          prop: "test",
          rules: [{ validator: validatePass, trigger: "blur" }],
        },
      ],
    };
  },
};
</script>

<style></style>
