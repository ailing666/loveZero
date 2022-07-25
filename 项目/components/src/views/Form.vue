<template>
  <a-form
    :formConfig="formConfig"
    :formData="formData"
    :formButton="formButton"
    :before-submit="submitForm"
  ></a-form>
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
        },
        { type: "select", label: "性别", prop: "sex" },
        { type: "input", label: "手机号", prop: "phone", value_type: "phone" },
        { type: "input", label: "邮箱", prop: "email", value_type: "email" },
        {
          type: "input",
          label: "test",
          prop: "test",
        },
      ],
      formButton: [
        // 确定按钮，取消按钮和其他按钮
        { label: "提交", key: "submit", type: "primary" },
        {
          label: "重置",
          key: "reset",
          type: "danger",
          callback: (data) => this.cancel(data),
        },
        {
          label: "下一步",
          key: "next",
          type: "primary",
          callback: (data) => this.next(data),
        },
      ],
    };
  },
  methods: {
    submitForm() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject();
        }, 2000);
      });
    },
    cancel(data) {
      console.log("%ccanceldata: ", "color: #a390ab;", data);
    },
    next(data) {
      console.log("%cnextdata: ", "color: #a390ab;", data);
    },
  },
};
</script>

<style></style>
