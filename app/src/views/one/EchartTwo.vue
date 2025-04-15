<template>
    <div id="echart2"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            echart2: null
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            this.echart2 = echarts.init(document.getElementById('echart2'))
            const opt = {
                title: {
                    text: '晴天环状图',
                    left: 'center',
                    top: '16',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    bottom: '3%',
                    right: 0,
                    orient: 'vertical',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '天数',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            position: 'outside',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        labelLine: {
                            show: true
                        },
                        data: [
                            { value: 5, name: '北京' },
                            { value: 4, name: '上海' },
                            { value: 7, name: '广东' },
                            { value: 5, name: '广西' },
                            { value: 4, name: '深圳' }
                        ]
                    }
                ],
                graphic: [
                    {
                        type: 'text',
                        id: 'label',
                        left: 'center',
                        top: '45%',
                        style: {
                            text: '晴天占比',
                            fill: '#fff',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }
                    }
                ]
            }
            this.echart2.setOption(opt)
            
        }
    }
}
</script>
<style>
#echart2 {
    width: 100%;
    height: 320px;
}
</style>