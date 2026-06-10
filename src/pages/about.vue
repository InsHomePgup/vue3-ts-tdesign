<template>
    <div class="about-container">
        <h1>关于页面</h1>
        <p>这是一个包含嵌routine的路由的页面</p>
        
        <div class="nav-links">
            <RouterLink to="/about/card">显示卡片</RouterLink>
        </div>
        
        <!-- 嵌套路由的出口 -->
        <RouterView />
    </div>
</template>

<script setup lang="ts">
// 这里可以添加组件逻辑
</script>

<style scoped>
.about-container {
    padding: 20px;
}

.nav-links {
    margin: 20px 0;
}

.nav-links a {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.nav-links a:hover {
    background-color: #45a049;
}
</style>
