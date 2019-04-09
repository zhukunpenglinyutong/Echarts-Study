// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 🚀01 指定图表的配置项和数据（基础柱状图）
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

// 🚀02 基础柱状图变种 (在图形上显示数值)
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
//       label: {
//         normal: {
//           show: true,
//           position: 'insideTop'
//         }
//       },
//       data: [5, 20, 36, 10, 10, 20]
//   }]
// };

// 🚀03 桑基图Sankey
option = {
  series: {
      type: 'sankey',
      layout:'none',
      focusNodeAdjacency: 'allEdges',
      data: [{
          name: '瓯江口H区'
      }, {
          name: '3#高压变压器'
      }, {
          name: '4#高压变压器'
      }, {
          name: '1#低压变压器'
      }, {
          name: '2#低压变压器'
      }, {
          name: '5#号楼总配柜'
      }, {
          name: '空调外机冷却塔'
      }, {
          name: '合金-冲制-清洗车间'
      }, {
          name: '二层废水处理'
      }, {
          name: '三层制粉'
      }, {
          name: '四层制粉'
      }, {
          name: '空调外机'
      }, {
          name: '冷却塔'
      },{
          name: '合金车间'
      },{
          name: '冲制车间'
      },{
          name: '清洗车间'
      },{
          name: '合金车间总配柜'
      },{
          name: '安泰轧机'
      },{
          name: '建华挤压机'
      },{
          name: '大舟2000T挤压机'
      }],
      links: [{
          source: '瓯江口H区',
          target: '3#高压变压器',
          value: 70
      }, {
          source: '瓯江口H区',
          target: '4#高压变压器',
          value: 30
      }, {
          source: '3#高压变压器',
          target: '1#低压变压器',
          value: 70
      }, {
          source: '4#高压变压器',
          target: '2#低压变压器',
          value: 30
      }, {
          source: '1#低压变压器',
          target: '5#号楼总配柜',
          value: 30
      }, {
          source: '1#低压变压器',
          target: '合金-冲制-清洗车间',
          value: 20
      } , {
          source: '1#低压变压器',
          target: '空调外机冷却塔',
          value: 20
      } , {
          source: '5#号楼总配柜',
          target: '二层废水处理',
          value: 5
      } , {
          source: '5#号楼总配柜',
          target: '三层制粉',
          value: 15
      } , {
          source: '5#号楼总配柜',
          target: '四层制粉',
          value: 10
      }, {
          source: '空调外机冷却塔',
          target: '空调外机',
          value: 5
      }, {
          source: '空调外机冷却塔',
          target: '冷却塔',
          value: 15
      }, {
          source: '合金-冲制-清洗车间',
          target: '合金车间',
          value: 5
      } , {
          source: '合金-冲制-清洗车间',
          target: '冲制车间',
          value: 10
      } , {
          source: '合金-冲制-清洗车间',
          target: '清洗车间',
          value: 5
      }  , {
          source: '2#低压变压器',
          target: '合金车间总配柜',
          value: 30
      } , {
          source: '合金车间总配柜',
          target: '安泰轧机',
          value: 5
      }, {
          source: '合金车间总配柜',
          target: '建华挤压机',
          value: 15
      }, {
          source: '合金车间总配柜',
          target: '大舟2000T挤压机',
          value: 10
      }]
  }
}


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);