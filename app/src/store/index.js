import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    songUrl: '',
    songLrc: '',
  },
  mutations: {
    SET_SONG_URL(state, url) {
      state.songUrl = url;
    },
    SET_SONG_LRC(state, lrc) {
      state.songLrc = lrc;
    },
  },
  actions: {
    updateSongUrl({ commit }, url) {
      commit('SET_SONG_URL', url);
    },
    updateSongLrc({ commit }, lrc) {
      // axios.get(`https://music163-jet.vercel.app/lyric?id=${id}`)
      //   .then((res) => {
      //     const lrc = res.data.lrc ? res.data.lrc.lyric : '';
      //     commit('SET_SONG_LRC', lrc);
      //   })
      //   .catch((error) => {
      //     console.error('Error fetching song lyrics:', error);
      //     commit('SET_SONG_LRC', ''); // 如果获取歌词失败，设置为空
      //   });
      commit('SET_SONG_LRC', lrc);
    },
  },
});