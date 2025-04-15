<template>
    <div></div>
</template>

<script>
import axios from 'axios';
export default {
    mounted() {
        this.initPlay()
    },
    methods: {
        async initPlay() {
            const cookie = localStorage.getItem('cookie')
            // console.log(cookie)
            const res = await axios({
                url: `https://music163-jet.vercel.app/login/status?cookie=${cookie}&timestamp=${Date.now()}`,
                method: 'post',
            })

            // console.log(res.data.data.account.id)

            if(res.data.data.account.id == '9862861087') {
                this.getList('12318082694')
            }
        },
        async getList(uid) {
            const res = await axios({
                url: `https://music163-jet.vercel.app/user/playlist?uid=${uid}&timestamp=${Date.now()}`,
                method: 'post'
            })
            // eslint-disable-next-line
            const data = {
                trackCount: '',
                updateTime: '',
                coverImgUrl: '',
                createTime: '',
                playCount: '',
                name: '',
                id: ''
            }

            const listId = res.data.playlist[0].id;

            console.log('歌单id: '+ listId)

            this.getDetail(listId)
        },
        async getDetail(id) {
            const res = await axios({
                url: `https://music163-jet.vercel.app/playlist/detail?id=${id}&timestamp=${Date.now()}`,
                method: 'post'
            })

            // console.log(res.data.privileges[0].id)

            this.getSong(res.data.privileges[0].id)
        },
        async getSong(id) {
            const res = await axios({
                url: `https://music163-jet.vercel.app/song/url/v1?id=${id}&level=exhigh`,
                method: 'post'
            })

            console.log(res.data.data[0].url)

            const url = res.data.data[0].url

            this.$store.dispatch('updateSongUrl', url);


            const res2 = await axios({
                url: `https://music163-jet.vercel.app/lyric?id=${id}`,
                method: 'post'
            })
            console.log(res2.data.lrc.lyric)

            const lrc = this.filterData(res2.data.lrc.lyric)
            
            
            this.$store.dispatch('updateSongLrc', lrc);

            this.$emit('init-song', lrc)
        },
        filterData(lrc) {
            return lrc.replace(/\{[^}]*\}/gm, '')
                .replace(/,\]\},?/gm, '')
                .replace(/\](?!\s)/gm, '] ')
                .replace(/,/gm, '') // 添加这一行来去除所有的逗号
                .replace(/\] \}\}/gm, '')
                .trim();
        },
  }
}
</script>