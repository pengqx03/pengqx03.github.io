<template>
  <div class="playList-container">
    <ul class="listMenu">
      <span @click="toggleNav('music')">歌单列表</span>
      <span @click="toggleNav('search')">搜索列表</span>
    </ul>
    <MusicList v-show="isShow == 'music'" @play-song="handlePlaySong" />
    <SearchList v-show="isShow == 'search'" @play-song="handlePlaySong" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MusicList from './MusicList.vue';
import SearchList from './SearchList.vue';

const isShow = ref('search'); // 默认显示歌单列表

const toggleNav = (nav) => {
  isShow.value = nav;
};
</script>

<style scoped>
.playList-container {
    text-align: center;
    padding: 12px 6px;
}

.listMenu {
    /* color: rgba(255, 255, 255, 0.6); */
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-bottom: 12px;
}
.listMenu span {
    padding: 6px;
}
.listMenu span:hover {
    color: #fff;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
}
.listSong {
    width: 100%;
}
.songItem {
    color: rgba(0, 0, 0, 0.7);
    font-size: 13px;
    display: flex;
    justify-content: space-between;
}
.songItem .name {
    display: inline-block;
}
.songItem:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
}
</style>