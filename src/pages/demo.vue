<template>
  <div class="demo-page">
    <h2>TDesign 组件演示</h2>

    <!-- Button -->
    <section>
      <h3>Button 按钮</h3>
      <t-space>
        <t-button>默认按钮</t-button>
        <t-button theme="primary">主要按钮</t-button>
        <t-button theme="danger">危险按钮</t-button>
        <t-button variant="outline">描边按钮</t-button>
        <t-button :loading="loading" theme="primary" @click="toggleLoading">
          {{ loading ? '加载中' : '点击加载' }}
        </t-button>
      </t-space>
    </section>

    <!-- Input -->
    <section>
      <h3>Input 输入框</h3>
      <t-space direction="vertical" style="width: 300px">
        <t-input v-model="inputVal" placeholder="请输入内容" clearable />
        <t-input v-model="inputVal" placeholder="禁用状态" disabled />
        <t-textarea v-model="textareaVal" placeholder="多行文本" :rows="3" />
      </t-space>
    </section>

    <!-- Select -->
    <section>
      <h3>Select 选择器</h3>
      <t-select v-model="selectVal" placeholder="请选择" style="width: 200px" clearable>
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
    </section>

    <!-- Table -->
    <section>
      <h3>Table 表格</h3>
      <t-table :data="tableData" :columns="columns" row-key="id" stripe hover />
    </section>

    <!-- Dialog -->
    <section>
      <h3>Dialog 对话框</h3>
      <t-space>
        <t-button theme="primary" @click="dialogVisible = true">打开对话框</t-button>
        <t-button @click="showMessage">MessagePlugin 消息</t-button>
      </t-space>
      <t-dialog
        v-model:visible="dialogVisible"
        header="对话框标题"
        @confirm="dialogVisible = false"
      >
        这里是对话框的内容
      </t-dialog>
    </section>

    <!-- Tag & Badge -->
    <section>
      <h3>Tag / Badge</h3>
      <t-space>
        <t-tag theme="primary">主要标签</t-tag>
        <t-tag theme="success">成功标签</t-tag>
        <t-tag theme="warning">警告标签</t-tag>
        <t-tag theme="danger">危险标签</t-tag>
        <t-badge :count="5">
          <t-button>消息</t-button>
        </t-badge>
      </t-space>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next'

const loading = ref(false)
const inputVal = ref('')
const textareaVal = ref('')
const selectVal = ref('')
const dialogVisible = ref(false)

const options = [
  { value: '1', label: '选项一' },
  { value: '2', label: '选项二' },
  { value: '3', label: '选项三' },
]

const columns = [
  { colKey: 'id', title: 'ID', width: 80 },
  { colKey: 'name', title: '姓名' },
  { colKey: 'age', title: '年龄', width: 100 },
  { colKey: 'status', title: '状态' },
]

const tableData = [
  { id: 1, name: '张三', age: 28, status: '在职' },
  { id: 2, name: '李四', age: 32, status: '离职' },
  { id: 3, name: '王五', age: 25, status: '在职' },
]

function toggleLoading() {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}

function showMessage() {
  MessagePlugin.success('操作成功！')
}
</script>

<style scoped>
.demo-page {
  padding: 24px;
  max-width: 800px;
}

section {
  margin-bottom: 32px;
}

h2 {
  margin-bottom: 24px;
  font-size: 22px;
}

h3 {
  margin-bottom: 12px;
  font-size: 16px;
  color: #555;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}
</style>
