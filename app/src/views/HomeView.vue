<template>
    <div class="container">
        <!-- 头部 -->
        <div class="header">
            <div class="avatar">
                <img src="../assets/avatar.png" 
                     alt="开发者头像">
            </div>
            <h1 class="name">彭清玄</h1>
            <div class="info">
                <span>📱 15755775112</span>
                <span>📧 3396564370@qq.com</span>
                <span>💼 前端开发 | 4-6K | 随时到岗</span>
            </div>
        </div>

        <!-- 主体内容 -->
        <div class="content">
            <!-- 左边栏 -->
            <div class="scroll-area">
                <div class="card education-card">
                    <h2>🎓 教育背景</h2>
                    <h3>淮南联合大学 | 计算机应用技术</h3>
                    <p>2022.09 - 2025.06</p>
                    
                    <h3>主要成就：</h3>
                    <ul class="award-list">
                        <li>优秀毕业生 & 励志奖学金 & 校优秀干部</li>
                        <li>大学生职业规划大赛三等奖</li>
                    </ul>
                </div>

                <div class="card skills-card">
                    <h2>🛠 专业技能</h2>
                    <ul>
                        <li>熟悉uniapp开发</li>
                        <li>掌握 Vue2/Vue3 + Element UI 开发</li>
                        <li>熟练使用 Git/Docker/NPM 工具链</li>
                        <li>熟悉 Linux/Windows 系统宝塔运维</li>
                    </ul>
                </div>
            </div>

            <!-- 右边栏 -->
            <div class="scroll-area">
                <div class="card projects-card">
                    <h2>🚀 项目经验</h2>
                    <h3>气象数据可视化平台（2023.10）</h3>
                    <ul class="project-list">
                        <li>▸ 技术架构：Vite + ECharts + Element-Plus</li>
                        <li>▸ 静态数据实现数据可视化展示</li>
                        <li>▸ 项目演示：<a href="/one" target="_blank">https://pengqx03.github.io/one</a></li>
                    </ul>

                    <h3>基于网易API实现的音乐播放器（2024.12）</h3>
                    <ul class="project-list">
                        <li>▸ 技术架构：Vue2 + <a href="https://music163-jet.vercel.app/">NeteaseCloudMusicApi</a></li>
                        <li>▸ 项目演示：<a href="/two" target="_blank">https://pengqx03.github.io/two</a></li>
                    </ul>

                    <h3>小程序校园助手（查成绩、查课表）（2025.3）</h3>
                    <ul class="project-list">
                        <li>▸ 技术架构：Vue2 + Uniapp</li>
                        <li>▸ 项目演示：<a href="/three" target="_blank">https://pengqx03.github.io/three</a></li>
                    </ul>
                </div>

                <div class="card additional-card">
                    <h2>💼 附加信息</h2>
                    <ul>
                        <li>▸ 服务器运维经验（阿里云飞天计划）</li>
                        <li>▸ 英语能力：阅读英文技术文档</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --primary: #2b6ca3;
    --secondary: #3aa3db;
    --background: #f8f9fa;
    --accent: #ff6347; /* 新增一个鲜艳的红色 */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: var(--background);
    font-family: 'Segoe UI', '微软雅黑', sans-serif;
}

.container {
    width: 100%;
    max-width: 210mm; /* A4 width */
    height: 100vh;
    padding: 20px 30px;
    margin: 0 auto;
    background: white; /* Add background color */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
    border-radius: 8px; /* Optional rounded corners */
    scale: 0.9;
}

/* 头部样式 */
.header {
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--primary);
    margin-bottom: 15px;
}

.avatar {
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
    border-radius: 50%;
    border: 3px solid var(--secondary); /* 头像边框使用鲜艳的红色 */
    overflow: hidden;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.name {
    font-size: 24px;
    color: var(--primary);
    margin-bottom: 8px;
}

.info {
    display: flex;
    justify-content: center;
    gap: 15px;
    color: #666;
    font-size: 14px;
    flex-wrap: wrap;
}

/* 主体内容 */
.content {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 25px;
    height: calc(100vh - 170px);
    overflow: hidden;
}

.scroll-area {
    height: 100%;
    overflow-y: auto;
    padding-right: 15px;
}

/* 卡片样式 */
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

h2 {
    color: var(--primary);
    font-size: 18px;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid var(--secondary);
}

h3 {
    color: var(--primary);
    font-size: 15px;
    margin: 18px 0 10px;
}

ul {
    padding-left: 24px;
    list-style: none;
}

li {
    margin: 12px 0;
    font-size: 14px;
    line-height: 1.6;
    text-wrap: pretty;
}

.award-list li::before {
    content: "🏅";
    margin-right: 8px;
    color: var(--accent); /* 奖项图标使用鲜艳的红色 */
}

a {
    color: var(--secondary);
    text-decoration: none;
    border-bottom: 1px dotted var(--accent); /* 链接下划线使用鲜艳的红色 */
}

/* 移动端适配 */
@media (max-width: 1200px) {
    .container {
        max-width: 80%;
    }
}

@media (max-width: 768px) {
    /* 隐藏不需要的模块 */
    .skills-card,
    .additional-card {
        display: none !important;
    }
    .container {
        max-width: 100%;
        padding: 15px;
        height: auto;
        min-height: 100vh;
    }

    .content {
        grid-template-columns: 1fr;
        height: auto;
        gap: 0;
    }

    /* 突出显示核心内容 */
    .education-card,
    .projects-card {
        margin: 10px 0;
        box-shadow: 0 3px 8px rgba(0,0,0,0.1);
    }

    .scroll-area {
        height: auto;
        overflow: visible;
        padding-right: 0;
    }

    .card {
        margin-bottom: 15px;
    }

    li {
        font-size: 13.5px;
        margin: 10px 0;
    }

    /* 强制移动端不换行 */
    .project-list li {
        white-space: normal;
        text-overflow: clip;
        overflow: visible;
    }
    h2 {
        font-size: 20px !important;
    }
}
</style>