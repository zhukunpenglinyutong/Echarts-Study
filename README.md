### 前言 🔥🔥🔥

> 2017年参加 河北省大数据比赛的时候，学习过Echart, D3，但是当时的方向没有专一，对学习哪个没有明确方向，加上一年多来没怎么用过了，所以渐渐忘记了，所以打算用一天的事件好好整理下，这里作为一个学习项目来做，也算是自己的一个笔记

---

### 第一次提交（2019.4.9 11:09）| 创建基础柱状图  🚗

> 使用Echarts生成一个柱状图的过程非常的简单（下面简写）

```javascript
// 第一步：基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 第二步：指定图表的配置项和数据（🇨🇳这里的配置就格外的重要了）
var option = {
  // ......
};

// 第三步：使用刚指定的配置项和数据显示图表
myChart.setOption(option);
```

![image](https://github.com/zhukunpenglinyutong/Echarts-Study/blob/master/imgs/1-1.png)

---

### 第二次提交（2019.4.9 11:25）| 了解 option 的基础配置（从柱状图开始剖析） 和 一些细节点  🚕

> 突然发现Echarts官网 有个配置项的地方，里面就是讲 🇨🇳option怎么配置🇨🇳：https://echarts.baidu.com/option.html

```javascript
var option = {
  title: { // 左上角展示的头部数据（默认左上角）
      text: 'ECharts 入门示例'
  },
  tooltip: {}, // 提示框组件，不是必填项
  legend: { // 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示 (填多个可以生成多柱状图📊)
      data:['销量']
  },
  xAxis: { // 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
  },
  yAxis: {}, // 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，在柱状图中这个也是必填的
  series: [{ // 系列列表。每个系列通过 type 决定自己的图表类型
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
  }]
};
```

> 注：Echarts的三个版本：完整版 echarts.js，常用版 echarts.common.js，精简版 echarts.simple.js

---

### 第三次提交（2019.4.9 13:03）| 堆叠条形图（柱状图变种）分析（并在基础柱状图上显示数值，见 index.js 🚀02） 🚙

> 因为我目前工作中用到这个了，所以先行分析一下 😝😝😝

```javascript

option = {
  tooltip : { // 提示框
    trigger: 'axis',
    axisPointer : { // 坐标轴指示器，坐标轴触发有效 🔥 原来默认显示的提示框是一条直线，在这里可以配置，选择那一行很宽的提示效果
      type : 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
      data: ['直接访问', '邮件营销']
  },
  grid: { //直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis:  {
      type: 'value' // 'value' 数值轴，适用于连续数据 | 'time' 时间轴, 'category' 类目轴, 'log' 对数轴
  },
  yAxis: {
      type: 'category', // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据
      data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  series: [
    {
      name: '直接访问', // 显示的名字，提示的时候用到，并且和上面 legend 关联
      type: 'bar', // 类型，没得说
      stack: '总量', // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置。
      label: {
        normal: { // 控制显示文字的，但是官网文档中没有这个的解释 ❓
            show: true,
            position: 'insideRight' // 文字显示的地方
        }
      },
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      type: 'bar',
      stack: '总量',
      label: {
          normal: {
              show: true,
              position: 'insideRight'
          }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
}

```

![image](https://github.com/zhukunpenglinyutong/Echarts-Study/blob/master/imgs/3-1.png)
![image](https://github.com/zhukunpenglinyutong/Echarts-Study/blob/master/imgs/3-2.jpg)

---

### 第四次提交（2019.4.9 13:33） | 双折线图（也就是多折现图）分析  🚌

```javascript

option = {
  title: { // 右上角的标题，没什么可说的
    text: '折线图堆叠'
  },
  tooltip: { // 提示框，没设置其他的就默认是直线
    trigger: 'axis' // 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用 | 还有选项 'item'，'none'
  },
  legend: { // 图例组件 没什么可说的
    data:['邮件营销','联盟广告']
  },
  grid: { // 这里的效果还是不太理解
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: { // 工具栏 | 内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具
    feature: { // 各工具配置项
      saveAsImage: {} // 导出图片
    }
  },
  xAxis: { // 🔥 基本改变 X Y 轴显示的数据，就能指定展示的方向
    type: 'category',
    boundaryGap: false,
    data: ['周一','周二','周三','周四','周五','周六','周日']
  },
  yAxis: { // 'value' 数值轴，适用于连续数据 | 'time' 时间轴, 'category' 类目轴, 'log' 对数轴
    type: 'value'
  },
  series: [
    {
      name:'邮件营销',
      type:'line',
      stack: '总量', // 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置 | ❓ 就是这个总量，一直懵逼中ing
      data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
      name:'联盟广告',
      type:'line',
      stack: '总量',
      data:[220, 182, 191, 234, 290, 330, 310]
    }
  ]
}

```

![image](https://github.com/zhukunpenglinyutong/Echarts-Study/blob/master/imgs/4-1.png)

---

### 第五次提交（2019.4.9 14:11）| 桑基图Sankey（基本使用） 🏎

> 搞这个的原因，还是工作中用到了 ⌨️ 完整版见 index.js 🚀03

```javascript

option = {
  series: {
      type: 'sankey', // 桑基图Sankey
      layout:'none',
      focusNodeAdjacency: 'allEdges',
      data: [{ // 🇨🇳 data的第一个 是根节点，剩下的才和links对应
          name: '瓯江口H区'
      }, {
          name: '3#高压变压器'
      }, {
          name: '4#高压变压器'
      }],
      links: [{
          source: '瓯江口H区',
          target: '3#高压变压器',
          value: 100 // 这个会跟同一级下面的进行比较
      }, {
          source: '瓯江口H区',
          target: '4#高压变压器',
          value: 10
      }]
  }
}

```

![image](https://github.com/zhukunpenglinyutong/Echarts-Study/blob/master/imgs/5-1.png)
![image](https://github.com/zhukunpenglinyutong/Echarts-Study/blob/master/imgs/5-2.png)

---

### 第六次提交（2019.4.9 14:26）| 阶段总结 🔥

> 🔥 为什么复习一遍 Echarts 呢？主要是公司现在的项目用到了，但是有些东西我还是不会，所以来搞一下，学习了这两三个小时，我大致会使用 柱状图，折线图，桑吉图这三种，还了解了一些配置，例如提示框，图例组件，x/y轴配置，数据项配置，也知道在哪里查询：[🇨🇳option怎么配置🇨🇳](https://echarts.baidu.com/option.html) 所以说，本项目暂时告一段落，以后进行一些小幅度的修改，等到合适的时候，进行系统性的学习，和深入的探索

`朱昆鹏 2019.4.9 于 北京智雨物联`