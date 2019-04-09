### 第一次提交（2019.4.9 11:09）| 创建基础柱状图

> 在这里我了解到，使用Echarts生成一个柱状图的过程非常的简单

```javascript
// 第一步：基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 第二步：指定图表的配置项和数据
var option = {
  // ......
};

// 第三步：使用刚指定的配置项和数据显示图表
myChart.setOption(option);
```

---

