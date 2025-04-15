<template>
    <div class="screenshot-page">
        <h1>校园助手截图展示</h1>
        <p>
            因小程序部署不便，故截图展示
        </p>
        <div class="image-gallery">
            <img src="./three/screenshot1.jpg" alt="截图1" />
            <img src="./three/screenshot2.jpg" alt="截图2" />
            <img src="./three/screenshot3.jpg" alt="截图3" />
            <img src="./three/screenshot4.jpg" alt="截图4" />
        </div>
    </div>
</template>

<script>
export default {
    name: "WorkThree",
};
</script>

<style scoped>
.screenshot-page {
    text-align: center;
    padding: 20px;
}

.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.image-gallery img {
    width: 200px;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>