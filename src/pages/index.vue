<template>
    <div>
        home
    </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted} from "vue";

const route = useRoute();
onMounted(() => {
    console.log(route.query);
})
</script>

<style scoped>

</style>
