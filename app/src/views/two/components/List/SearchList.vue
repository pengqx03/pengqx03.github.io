<template>
  <div class="search-container">
    <input type="text" v-model="searchQuery" placeholder="Enter search term" />
    <button @click="performSearch">Search</button>

    <ul class="results-list">
      <li
        @click="playSong(item.id)"
        v-for="(item, index) in searchResults"
        :key="item.id"
        class="result-item"
      >
        <div>
          <span>{{ index + 1 }}. </span>
          <span class="result-name" v-html="truncateText(item.name)" :title="item.name"></span>
        </div>
        <div>{{ item.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      searchQuery: '舍离去',
      searchResults: [],
    };
  },
  methods: {
    performSearch() {
      if (!this.searchQuery.trim()) {
        alert('Please enter a search term.');
        return;
      }

      axios
        .get(`https://music163-jet.vercel.app/search?keywords=${this.searchQuery}&limit=10&timestamp=${Date.now()}`)
        .then((response) => {
          this.searchResults = response.data.result.songs || [];
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          alert('Failed to fetch search results. Please check the search term and try again.');
        });
    },
    playSong(id) {
      axios.post(`https://music163-jet.vercel.app/song/url/v1?id=${id}&level=exhigh`)
        .then((res) => {
          if (res.data.status === 400) {
            alert('Network busy. Please try again later.');
          } else if (!res.data.data || !res.data.data[0] || !res.data.data[0].url) {
            alert('Song resource does not exist.');
          } else {
            const songUrl = res.data.data[0].url;
            this.$store.dispatch('updateSongUrl', songUrl);
            this.getSongLrc(id);
          }
        })
        .catch((error) => {
          console.error('Error fetching song URL:', error);
          alert('Failed to fetch song resource. Please check the song ID and try again.');
        });
    },
    getSongLrc(id) {
        console.log('Song ID:', id)
        axios.post('https://music163-jet.vercel.app/lyric?id=' + id)
        .then(res => {
            const songLrc = res.data.lrc.lyric.replace(/\{[^}]*\}/gm, '')
                .replace(/,\]\},?/gm, '')
                .replace(/\](?!\s)/gm, '] ')
                .replace(/,/gm, '')
                .replace(/\] \}\}/gm, '')
                .trim();
            console.log('Filtered Lyrics1:', songLrc)
            this.$store.dispatch('updateSongLrc', songLrc);
        })
    },
    truncateText(text) {
      return text.length > 20 ? text.substring(0, 20) + '...' : text;
    },
  },
};
</script>
