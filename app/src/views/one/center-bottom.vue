<template>
    <div class="container">
        <div id="echart1">
            <EchartOne />
        </div>
        <div id="echart2">
            <EchartTwo />
        </div>
        <div id="echart3">
            <EchartThree />
        </div>
    </div>
</template>
<script>
import EchartOne from './EchartOne.vue';
import EchartTwo from './EchartTwo.vue';
import EchartThree from './EchartThree.vue';

export default {
    components: {
        EchartOne,
        EchartTwo,
        EchartThree
    }
}
</script>
<style>
.container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
#echart1,
#echart2,
#echart3 {
    width: calc(100% / 3) - 32px;
    margin: 0 12px;
}
</style>