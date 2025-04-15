<template>
    <div class="container">
        <HeadNav />
        <div class="contain">
            <!-- 播放列表 -->
            <TotalList @play-song="handlePlaySong" class="playList"/>
            
            <InitPlay @init-song="handleInitSong"/>
            <!-- 歌词 -->
            <div class="box" ref="box">
                <ul ref="ul">
                    <!-- 歌词动态生成 -->
                    {{ songLrc }}
                </ul>
            </div>
            <!-- <audio ref="audio" src="./audio/obj_wo3DlMOGwrbDjj7DisKw_14096444297_c5a0_2580_a9e4_999a4f077c17e140ff120c643b5deb74.mp3" controls></audio> -->
        </div>

        <!-- 在这里放置你的组件内容 -->
        <!-- <div ref="bottomWindow" class="bottom-window" v-show="isBottomWindowVisible">
            <PlayList @play-song="handlePlaySong" class="playList"/>
        </div> -->
        
        <el-drawer
        :with-header="false"
        :visible.sync="drawer"
        direction="btt"
        size="70%">
            <TotalList @play-song="handlePlaySong"/>
        </el-drawer>


        <!-- <svg @click="moreBtn" class="moreMenu" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
            <path d="M25.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM6.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM25.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z" fill="#FFFFFF88"></path>
        </svg> -->
        <svg @click="drawer =!drawer" class="moreMenu" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
            <path d="M25.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM6.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM25.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z" fill="#FFFFFF88"></path>
        </svg>
            <span class="play-time-inner">
                <span ref="currentTimeSpan">00:00</span>
                <span ref="totalTimeSpan">00:00</span>
            </span>
        <div class="player-controller">
            <div class="play-control-btn">
                <span class="playPause">
                    <!-- 上一首 -->
                    <svg id="previous-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z" fill="#FFFFFF88"></path>
                    </svg>

                    <!-- 播放/暂停 -->
                    <svg @click="togglePlayPause" v-show="!isPlaying" class="play-pause-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M25.468 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z" :fill="isPlaying ? '#FFFFFF88' : '#FFFFFF'"></path>
                    </svg>
                    <svg @click="togglePlayPause" v-show="isPlaying" class="play-pause-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M21.468 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM10.28 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z" :fill="isPlaying ? '#FFFFFF' : '#FFFFFF88'"></path>
                    </svg>

                    <!-- 下一首 -->
                    <svg id="next-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M25.468 6.947c-0.326-0.172-0.724-0.151-1.030 0.057l-6.438 4.38v-3.553c0-0.371-0.205-0.71-0.532-0.884-0.326-0.172-0.724-0.151-1.030 0.057l-12 8.164c-0.274 0.186-0.438 0.496-0.438 0.827s0.164 0.641 0.438 0.827l12 8.168c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-3.556l6.438 4.382c0.169 0.115 0.365 0.174 0.562 0.174 0.16 0 0.321-0.038 0.468-0.116 0.327-0.173 0.532-0.514 0.532-0.884v-16.333c0-0.371-0.205-0.71-0.532-0.884z" fill="#FFFFFF88"></path>
                    </svg>
                </span>
                
                <!-- 修改进度条部分 -->
                <div ref="playBarWrap" @click="handClickBar" class="play-bar-wrap">
                    <div class="progress-bar" :style="{ width: handleLeft + '%' }"></div>
                    <div class="progress-handle"
                        ref="progressHandle"
                        @mousedown="onMouseDownHandle"
                        :style="{ left: handleLeft + '%' }"></div>
                </div>
                <span class="playModeBtn">
                    <!-- 音量 -->
                    <svg class="voiceBtn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M18.468 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM26.334 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z" fill="#FFFFFF88"/>
                    </svg>
                    <!-- 播放模式 (顺序/随机/单曲) -->
                    <svg @click="togglePlayMode" :class="{ 'active-mode': currentPlayMode === 'order' }" class="play-mode-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z" :fill="currentPlayMode === 'order' ? '#FFFFFF' : '#FFFFFF88'"/>
                    </svg>
                    <svg @click="togglePlayMode" :class="{ 'active-mode': currentPlayMode === 'random' }" class="play-mode-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M22.667 4l7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827 2.587 2.587h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653v-4zM2.667 8h6l3.76 3.76-2.827 2.827-2.587-2.587h-4.347v-4z" :fill="currentPlayMode === 'random' ? '#FFFFFF' : '#FFFFFF88'"/>
                    </svg>
                    <svg @click="togglePlayMode" :class="{ 'active-mode': currentPlayMode === 'single' }" class="play-mode-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M25.468 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z" :fill="currentPlayMode === 'single' ? '#FFFFFF' : '#FFFFFF88'"/>
                    </svg>

                    <!-- 循环模式 (列表循环/单曲循环/不循环) -->
                    <svg @click="toggleLoopMode" :class="{ 'active-mode': currentLoopMode === 'list-loop' }" class="loop-mode-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333z" :fill="currentLoopMode === 'list-loop' ? '#FFFFFF' : '#FFFFFF88'"/>
                    </svg>
                    <svg @click="toggleLoopMode" :class="{ 'active-mode': currentLoopMode === 'single-loop' }" class="loop-mode-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M9.333 9.333h13.333v4l5.333-5.333-5.333-5.333v4h-16v8h2.667v-5.333zM22.667 22.667h-13.333v-4l-5.333 5.333 5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8h-1.333l-2.667 1.333v1.333h2v5.333h2z" :fill="currentLoopMode === 'single-loop' ? '#FFFFFF' : '#FFFFFF88'"/>
                    </svg>
                    <svg @click="toggleLoopMode" :class="{ 'active-mode': currentLoopMode === 'no-loop' }" class="loop-mode-btn" xmlns="http://www.w3.org/2000/svg" width="40px" version="1.1" viewBox="0 0 32 32">
                        <path d="M2.667 7.027l1.707-1.693 22.293 22.293-1.693 1.707-4-4h-11.64v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v0.973h-2.667v-3.64l-4-4zM22.667 17.333h2.667v5.573l-2.667-2.667v-2.907zM22.667 6.667v-4l5.333 5.333-5.333 5.333v-4h-10.907l-2.667-2.667h13.573z" :fill="currentLoopMode === 'no-loop' ? '#FFFFFF' : '#FFFFFF88'"/>
                    </svg>
                </span>
            </div>
        </div>

        <!-- <audio id="audioPlayer" src="http://m801.music.126.net/20250413183010/936a8b81751021297209f3e7ee955864/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/26706693709/5dfd/2d3d/fb14/fbceaeb6e3a2d6b6d16f3a5cc2f88749.mp3?vuutv=JE310YDL0Kn2w0zHGjP7Pm07DnCGtz5EID66Z02bWIJFcAB4IMV+IGdV1pB0hpQXDmPN/IeiHfB2334GYC1Yty+z7ileqptNW4jCpWczS7uWZRd24Mu9/e/P12BYgtWMKsOZOnk0xwjatdt7XOHmgLeBaf/zh47uoESTjPPGe3Y="></audio> -->

        <audio
        id="audioPlayer"
        :src="songUrl"
        @loadedmetadata="updateDuration"
        @timeupdate="updateTimeAndProgress"
        @ended="handleSongEnded"
        ></audio>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import HeadNav from './two/components/HeadNav.vue';
import TotalList from './two/components/List/TotalList.vue';
import InitPlay from './two/components/Init/InitPlay.vue';
import "./two/css/main.css"
import { useStore } from 'vuex';

// 定义响应式变量
const drawer = ref(false);
const audioPlayer = ref(null);
const box = ref(null);
const ul = ref(null);
const progressHandle = ref(null);
const playBarWrap = ref(null);
const currentTimeSpan = ref(null);
const totalTimeSpan = ref(null);

const songUrl = ref(''); // 当前播放的音乐 URL
const songLrc = ref(''); // 当前播放的音乐歌词
const lrcData = ref([]); // 解析后的歌词数据
const activeIndex = ref(-1); // 当前高亮的歌词行索引
const handleLeft = ref(0); // 进度条的百分比
const isDragging = ref(false); // 是否正在拖动进度条
const currentListModeBtn = ref('always-list-btn'); // 当前播放列表模式按钮

const store = useStore();

// 监听 Vuex 中的 songUrl 和 songLrc 的变化
watch(() => store.state.songUrl, (newUrl) => {
  songUrl.value = newUrl;
//   console.log(songUrl.value);
});

watch(() => store.state.songLrc, (newLrc) => {
  songLrc.value = newLrc;
  // 在歌词更新后，可以调用解析歌词的逻辑
  parseLrc(newLrc);
});

// 切换播放/暂停
const isPlaying = ref(false);
const togglePlayPause = () => {
  if (!audioPlayer.value) return;
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

// 播放模式 (顺序/随机/单曲)
const currentPlayMode = ref('order'); // 'order', 'random', 'single'
const togglePlayMode = () => {
  const modes = ['order', 'random', 'single'];
  const currentIndex = modes.indexOf(currentPlayMode.value);
  currentPlayMode.value = modes[(currentIndex + 1) % modes.length];
};

// 循环模式 (列表循环/单曲循环/不循环)
const currentLoopMode = ref('list-loop'); // 'list-loop', 'single-loop', 'no-loop'
const toggleLoopMode = () => {
  const modes = ['list-loop', 'single-loop', 'no-loop'];
  const currentIndex = modes.indexOf(currentLoopMode.value);
  currentLoopMode.value = modes[(currentIndex + 1) % modes.length];
};

// 解析歌词
const parseLrc = (lrc) => {
    const lines = lrc.split('\n');
    const parsedData = [];
    
    for (const line of lines) {
        // 处理类似 [00:00.00] 歌词内容 的格式
        const timeMatch = line.match(/^\[(\d{2}):(\d{2})\.(\d{2,3})\]/);
        if (timeMatch) {
        const minutes = parseFloat(timeMatch[1]);
        const seconds = parseFloat(timeMatch[2]);
        const milliseconds = parseFloat(timeMatch[3]) / (timeMatch[3].length === 2 ? 100 : 1000);
        const time = minutes * 60 + seconds + milliseconds;
        
        // 获取歌词内容（去掉时间标签后的部分）
        const words = line.replace(/^\[\d{2}:\d{2}\.\d{2,3}\]/, '').trim();
        
        if (words) {
            parsedData.push({ time, words });
        }
        }
    }
    
    lrcData.value = parsedData;
    drawLyrics(); // 解析完成后绘制歌词
};

// 绘制歌词到页面
const drawLyrics = () => {
  if (!ul.value) return;
  
  // 清空现有歌词
  ul.value.innerHTML = '';
  
  // 创建歌词DOM元素
  const fragment = document.createDocumentFragment();
  
  lrcData.value.forEach((line, index) => {
    const li = document.createElement('li');
    li.textContent = line.words;
    li.dataset.index = index; // 存储索引便于查找
    
    // 如果是当前播放行，添加active类
    if (index === activeIndex.value) {
      li.classList.add('active');
    }
    
    fragment.appendChild(li);
  });
  
  ul.value.appendChild(fragment);
};

// 根据当前播放时间高亮对应歌词
const updateLyricHighlight = () => {
  if (!audioPlayer.value || !lrcData.value.length) return;
  
  const currentTime = audioPlayer.value.currentTime;
  
  // 找到当前应该高亮的歌词行
  let newActiveIndex = -1;
  for (let i = 0; i < lrcData.value.length; i++) {
    if (currentTime >= lrcData.value[i].time) {
      newActiveIndex = i;
    } else {
      break;
    }
  }
  
  // 如果当前高亮行有变化
  if (newActiveIndex !== activeIndex.value) {
    activeIndex.value = newActiveIndex;
    updateLyricDisplay();
  }
};

// 更新歌词显示（滚动和高亮）
const updateLyricDisplay = () => {
  if (!ul.value || activeIndex.value === -1) return;
  
  // 移除之前的高亮
  const activeElements = ul.value.querySelectorAll('.active');
  activeElements.forEach(el => {
    el.classList.remove('active');
    el.style.transform = 'scale(1)';
    el.style.color = '#ffffff88';
  });
  
  // 添加新的高亮
  const currentElement = ul.value.children[activeIndex.value];
  if (currentElement) {
    currentElement.classList.add('active');
    currentElement.style.color = '#FF9604';
    currentElement.style.transform = 'scale(1.2)';
    
    // 滚动到当前歌词
    const containerHeight = box.value.clientHeight;
    const elementHeight = currentElement.clientHeight;
    const elementOffset = currentElement.offsetTop;
    const scrollPosition = elementOffset - (containerHeight / 2) + (elementHeight / 2);
    
    ul.value.style.transform = `translateY(-${scrollPosition}px)`;
  }
};

// 格式化时间
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// 更新播放时间和进度条
const updateTimeAndProgress = () => {
  if (!audioPlayer.value || isDragging.value) return;
  
  const currentTime = audioPlayer.value.currentTime;
  const duration = audioPlayer.value.duration || 0;
  
  // 更新显示时间
  if (currentTimeSpan.value) {
    currentTimeSpan.value.textContent = formatTime(currentTime);
  }
  
  // 更新总时长（只在有变化时更新）
  if (totalTimeSpan.value && duration > 0) {
    totalTimeSpan.value.textContent = formatTime(duration);
  }
  
  // 更新进度条位置
  if (duration > 0) {
    const percentage = (currentTime / duration) * 100;
    handleLeft.value = Math.min(100, Math.max(0, percentage));
  }
  
  // 更新歌词高亮
  updateLyricHighlight();
};

// 更新音乐总时长
const updateDuration = () => {
  if (!audioPlayer.value) return;
  const duration = audioPlayer.value.duration;
  totalTimeSpan.value.textContent = formatTime(duration);
};

// 处理歌曲播放结束
const handleSongEnded = () => {
  if (currentLoopMode.value === 'single-loop') {
    // 单曲循环，重新播放
    audioPlayer.value.currentTime = 0;
    audioPlayer.value.play();
  } else if (currentLoopMode.value === 'list-loop') {
    // 列表循环，播放下一首
    // 这里需要根据你的播放列表逻辑来实现
    console.log('播放下一首');
  } else if (currentLoopMode.value === 'no-loop') {
    // 不循环，停止播放
    isPlaying.value = false;
  }
};

// 修改handClickBar方法（添加这个方法）
const handClickBar = (e) => {
  if (!audioPlayer.value || !playBarWrap.value) return;
  
  const rect = playBarWrap.value.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  
  if (audioPlayer.value.duration) {
    const percentage = (clickX / width) * 100;
    audioPlayer.value.currentTime = (percentage / 100) * audioPlayer.value.duration;
    handleLeft.value = percentage;
    updateTimeAndProgress();
  }
};

// 挂载时初始化
onMounted(() => {
  audioPlayer.value = document.getElementById('audioPlayer');
  currentTimeSpan.value = document.getElementById('currentTime');
  totalTimeSpan.value = document.getElementById('totalTime');
  
  // 确保DOM完全加载后再绑定事件
  nextTick(() => {
    if (audioPlayer.value) {
      audioPlayer.value.addEventListener('timeupdate', updateTimeAndProgress);
      audioPlayer.value.addEventListener('loadedmetadata', updateDuration);
      audioPlayer.value.addEventListener('ended', handleSongEnded);
    }
  });
});

// 销毁前移除监听
onBeforeUnmount(() => {
  audioPlayer.value?.removeEventListener('timeupdate', updateTimeAndProgress);
  audioPlayer.value?.removeEventListener('loadedmetadata', updateDuration);
  audioPlayer.value?.removeEventListener('ended', handleSongEnded);
});
</script>

<style>
/* Add this to your CSS */
#pause-btn, .play-mode-btn, .loop-mode-btn {
    display: none;
}
.play-mode-btn.active-mode, .loop-mode-btn.active-mode {
    display: inline-block;
}
</style>