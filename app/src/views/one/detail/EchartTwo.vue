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
                    text: '风向预测图',
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
                    bottom: '5%',
                    left: 0,
                    orient: 'vertical',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: 'Access From',
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
                            { value: 2, name: '东风' },
                            { value: 1, name: '西风' },
                            { value: 2, name: '南风' },
                            { value: 2, name: '北风' },
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
                            text: '环形占比',
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