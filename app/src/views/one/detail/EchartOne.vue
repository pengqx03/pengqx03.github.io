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
                    text: '湿度一览图',
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
                    data: ['湿度'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['2025-1-1', '2025-1-2', '2025-1-3', '2025-1-4', '2025-1-5', '2025-1-6', '2025-1-7']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [40, 50, 60, 55, 40, 52, 48],
                    type: 'bar',
                    name: '湿度'
                    }
                ]
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