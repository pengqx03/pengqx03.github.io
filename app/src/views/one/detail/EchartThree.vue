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
                    text: '气温走向图',
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
                    data: ['温度'],
                    top: 18,
                    right: 0,
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
                    smooth: true,
                    data: [5, 6, 4, 3, 7, 8, 9],
                    type: 'line',
                    name: '温度'
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