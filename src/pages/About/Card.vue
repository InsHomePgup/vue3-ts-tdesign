<template>
    <div class="card-container">
        <h2>关于页面的卡片组件</h2>
        <div class="card">
            <p>这是一个嵌套路由加载的卡片组件</p>
            <div class="card-content">
                <slot>默认内容</slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 这里可以添加组件逻辑
</script>

<style scoped>
.card-container {
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-content {
    margin-top: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
}
</style>