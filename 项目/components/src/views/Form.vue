<template>
  <a-form
    :formConfig="formConfig"
    :formData="formData"
    :formButton="formButton"
    :before-submit="submitForm"
  >
    <template v-slot:classroom>
      <a-select :config="select_classroom">
        <template v-slot:select="slot">
          <div style="font-size: 30px">{{ slot.data.class_name }}</div>
        </template>
      </a-select>
    </template>
  </a-form>
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
    "a-select": () => import("@/components/control/select/index.vue"),
  },
  data() {
    return {
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
        {
          type: "select",
          label: "性别",
          prop: "sex",
          optionsMap: { label: "name", value: "id" },
          // 本地搜索
          filterable: true,
          options: [
            { name: "黄金糕", id: "选项1" },
            { name: "双皮奶", id: "选项2" },
          ],
        },
        { type: "input", label: "手机号", prop: "phone", value_type: "phone" },
        { type: "input", label: "邮箱", prop: "email", value_type: "email" },
        {
          type: "input",
          label: "简介",
          prop: "desc",
          rules: [{ validator: validatePass, trigger: "blur" }],
        },
        {
          type: "select",
          prop: "classroom",
          label: "教室",
          required: true,
          optionsMap: {
            label: "class_name",
            value: "id",
          },
          init: true,
          url: "/api/classroom/",
          keyword: "class_name",
          filterable: true,
          // 远程搜索
          remote: true,
          multiple: true,
        },
        {
          type: "slot",
          slotName: "classroom",
          prop: "slot_room",
          label: "slot教室",
          required: true,
        },
        {
          type: "checkbox",
          prop: "food",
          label: "食物",
          required: true,
          options: [
            { label: "苹果", value: "1" },
            { label: "杨梅", value: "2" },
            { label: "芒果", value: "3" },
          ],
        },
        {
          type: "radio",
          prop: "car",
          label: "交通工具",
          required: true,
          options: [
            { label: "汽车", value: "1" },
            { label: "高铁", value: "2" },
            { label: "飞机", value: "3" },
          ],
        },
        {
          type: "date",
          model: "datetimerange",
          prop: "createDate",
          // 自定义禁用规则
          disabled_data_rule: (time) => {
            // 大于今天的日期都不能选
            return time.getTime() > new Date();
          },
          disabled_data: true, // 禁用今天之前的日期
          disabled_today: true, // 禁用今天之前的日期，包括今天
          start_placeholder: "请选择开始创建日期",
          end_placeholder: "请选择结束创建日期",
          range: "至",
          label: "日期",
          required: true,
        },
      ],
      formData: {
        name: "",
        sex: "",
        phone: "18111111111",
        email: "",
        desc: "",
        classroom: "",
        slot_room: "",
        food: [],
        car: "",
        createDate: "",
      },
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
      select_classroom: {
        url: "/api/classroom/",
        optionsMap: {
          label: "class_name",
          value: "id",
        },
        init: true,
        callback: (data) => this.selectClassRoom(data),
      },
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
    selectClassRoom(data) {
      this.formData.slot_room = data;
    },
  },
};
</script>

<style></style>
