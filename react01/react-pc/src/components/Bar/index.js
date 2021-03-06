import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

const echartInit = (node, xData, sData, title) => {
  const myChart = echarts.init(node)
  // 绘制图表
  myChart.setOption({
    title: {
      text: title
    },
    tooltip: {},
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: sData
      }
    ]
  })
}

const Bar = ({ style, xData, sData, title }) => {
  // 拿到dom
  const nodeRef = useRef(null)

  // 配置图表
  useEffect(() => {
    echartInit(nodeRef.current, xData, sData, title)
  }, [xData, sData, title])

  return (
    <div ref={nodeRef} style={style}></div>
  )
}

export default Bar