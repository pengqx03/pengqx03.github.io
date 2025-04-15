<template>
    <div id="echart3"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            echart3: null
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            this.echart3 = echarts.init(document.getElementById('echart3'))
            const opt = {
                title: {
                    text: '湿度对比图',
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
                    data: ['湿度'],
                    top: 18,
                    right: 0,
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['北京', '上海', '广东', '广西', '深圳']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [45, 51, 66, 32, 48],
                    type: 'line',
                    name: '湿度'
                    }
                ]
            }
            this.echart3.setOption(opt)
            
        }
    }
}
</script>
<style>
#echart3 {
    width: 100%;
    height: 320px;
}
</style>