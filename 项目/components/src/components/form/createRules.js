import { validatorPhone, validatorEmail } from "@/utils/validator";
export const createRules = (data) => {
  data.forEach((item) => {
    // 最终规则
    let rules_array = [];
    // 必填
    if (item.required) {
      const rule = {
        required: true,
        message: item.message || createMessage(item),
      };
      rules_array.push(rule);
    }
    // 校验手机号
    if (item.value_type && item.value_type === "phone") {
      const rule = { validator: validatorPhone, trigger: "change" };
      rules_array.push(rule);
    }
    // 校验邮箱
    if (item.value_type && item.value_type === "email") {
      const rule = { validator: validatorEmail, trigger: "change" };
      rules_array.push(rule);
    }
    // 自定义校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rules_array = rules_array.concat(item.rules);
    }
    item.rules = rules_array;
  });
  return data;
};

const createMessage = (data) => {
  let msg = "";
  switch (data.type) {
    case "input":
      msg = "请输入";
      break;
    case "select":
      msg = "请选择";
      break;
  }
  return `${msg}${data.label}`;
};
