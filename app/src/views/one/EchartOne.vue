<template>
    <div id="echart1"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            echart1: null
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            this.echart1 = echarts.init(document.getElementById('echart1'))
            const opt = {
                title: {
                    text: '气温对比图',
                    left: 'center',
                    top: '16',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'cross',
                    }
                },
                legend: {
                    top: 16,
                    right: 0,
                    data: ['温度'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                dataset: [
                    {
                    dimensions: ['city', 'temp'],
                    source: [
                        ['北京', -1],
                        ['上海', 3],
                        ['广东', 8],
                        ['深圳', 7],
                        ['广西', 6]
                    ]
                    },
                    {
                    transform: {
                        type: 'sort',
                        config: { dimension: 'temp', order: 'asc' }
                    }
                    }
                ],
                xAxis: {
                    
                },
                yAxis: {
                    type: 'category',
                    axisLabel: { interval: 0, rotate: 30 }
                },
                series: {
                    type: 'bar',
                    encode: { y: 'city', x: 'temp' },
                    datasetIndex: 1,
                    name: '温度',
                    label: {
                        show: true,
                        position: 'right',
                        color: '#fff',
                        formatter: function (params) {
                            const value = params.value;
                            
                            return `${value}℃`;
                        }
                    },
                    itemStyle: {
                        color: function(pamras) {
                        var colorList = ['#c23531','#2f4554', '#61a0a8','#d48265','#91c7ae','#749f83', '#ca8622', '#bda29a']
                        return colorList[pamras.dataIndex]
                        }
                    }
                }
            }
            this.echart1.setOption(opt)
            
        }
    }
}
</script>
<style>
#echart1 {
    width: 100%;
    height: 320px;
}
</style>