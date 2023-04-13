import styled from "styled-components"
// 从一个单独的文件中引入变量
import {primaryColor,largeSize} from "./15-css/style/variables"

export const AppWrapper = styled.div`
  .footer {
    border: 1px solid orange;
  }
`

// 子元素单独抽取到一个样式组件,通过attrs给标签模板字符串中提供的属性
export const SectionWrapper = styled.div.attrs(props => ({
  tColor: props.color || "blue"
}))`
  border: 1px solid red;

  .title {
    /* 接受外部传入的props */
    font-size: ${props => props.size}px;
    color: ${props => props.tColor};

    &:hover {
      background-color: purple;
    }
  }

  .content {
    font-size: ${largeSize}px;
    color: ${primaryColor};
  }
`
