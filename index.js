// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 🚀 指定图表的配置项和数据（基础柱状图）
// var option = {
//   title: {
//       text: 'ECharts 入门示例'
//   },
//   tooltip: {},
//   legend: {
//       data:['销量']
//   },
//   xAxis: {
//       data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//   },
//   yAxis: {},
//   series: [{
//       name: '销量',
//       type: 'bar',
//       data: [5, 20, 36, 10, 10, 20]
//   }]
// };

// 🚀 柱状图变种 (在图形上显示数值)
var option = {
  title: {
      text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
      data:['销量']
  },
  xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {},
  series: [{
      name: '销量',
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'insideTop'
        }
      },
      data: [5, 20, 36, 10, 10, 20]
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);