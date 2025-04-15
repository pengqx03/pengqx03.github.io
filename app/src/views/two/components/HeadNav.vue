<template>
    <div class="headNav">
        <router-link to="/two" style="color: #fff;text-decoration: none;">易云乐</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
.headNav {
    height: 60px;
    /* width: calc(100% - 240px); */
    width: 100%;
    background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);
    
    opacity: 0.6;

    display: flex;
    
    padding: 0 120px;

    font-size: 26px;

    line-height: 60px;

    color: #fff;

    justify-content: space-between;
}

.navItem:hover {
    padding: 6px;
    line-height: 48px;
    background-color: rgba(209, 209, 214, 0.23);
    cursor: pointer;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}


.el-dropdown-menu {
    width: 200px;
}
@media screen and (max-width: 760px) {
    .headNav {
        font-size: 24px;
        padding: 0 24px;
    }
}
</style>