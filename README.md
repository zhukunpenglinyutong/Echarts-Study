### 前言 🔥

> 一年多前参加 河北省大数据比赛的时候，学习过Echart, D3，但是当时的方向没有专一，对学习哪个没有明确方向，加上一年多来没怎么用过了，所以渐渐忘记了，所以打算用一天的事件好好整理下，这里作为一个学习项目来做，也算是自己的一个笔记

---

### 第一次提交（2019.4.9 11:09）| 创建基础柱状图 🚗

> 使用Echarts生成一个柱状图的过程非常的简单（下面简写）

```javascript
// 第一步：基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 第二步：指定图表的配置项和数据（==这里的配置就格外的重要了==）
var option = {
  // ......
};

// 第三步：使用刚指定的配置项和数据显示图表
myChart.setOption(option);
```

---

### 第二次提交（2019.4.9 11:25）| 了解 option 的基础配置（从柱状图开始剖析） 和 一些细节点 🚕

```javascript
var option = {
  title: { // 左上角展示的头部数据（默认左上角）
      text: 'ECharts 入门示例'
  },
  tooltip: {}, // 不是必填项，也不知道是干啥的
  legend: { // 显示上面中间展示出的 选择展示数据，似乎与series进行关联
      data:['销量']
  },
  xAxis: { // x轴显示的数据
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {}, // 数据好像是通过 series 获得，但是这个也是必填的
  series: [{ // 不知道什么意思，但感觉好重要🇨🇳的感觉，很多地方都与之相关联，这里应该是数据部分
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
};
```

> 注：Echarts的三个版本：完整版 echarts.js，常用版 echarts.common.js，精简版 echarts.simple.js

---