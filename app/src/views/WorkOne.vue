<template>
  <div class="contents">
    <div id="topLine">
      <h2 class="titleText">气象数据可视化平台</h2>
    </div>
    <div class="content_center">
      <dv-border-box-11 class="content_center_top">
        <CenterTop />
      </dv-border-box-11>
      <dv-border-box-10 class="content_center_bottom">
        <CenterBottom />
      </dv-border-box-10>
    </div>
  </div>
</template>

<script>
import CenterTop from './one/center-top.vue';
import CenterBottom from './one/center-bottom.vue';

export default {
  components: {
    CenterTop,
    CenterBottom
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
.contents {
  display: flex;
  flex-direction: column; /* 设置为垂直排列 */
  color: #fff;
  overflow-y: hidden;
  overflow-x: hidden;
  background: url("../assets/img/page_bg.png") 50% no-repeat;
  background-size: cover;
  height: 100vh; /* 设置高度为视口高度 */
}

#topLine {
  width: 100%;
  height: 60px;
  background: url("../assets/img/top.png") 50% no-repeat;
  background-size: cover;
}

#topLine .titleText {
  text-align: center;
  line-height: 60px;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 6px;
  width: 100%;
  background: linear-gradient(92deg, #0072FF 35%, #00EAFF 50%, #01AAFF 65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content_center {
  height: calc(100vh - 60px); /* 根据顶部高度动态调整 */
  width: 1080px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.content_center_top {
  height: 500px;
}

.content_center_bottom {
  height: 315px;
  margin-top: 24px;
}
</style>