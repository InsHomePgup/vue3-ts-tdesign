<template>
    <div>
        user
    </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";

const route = useRoute();
console.log(route.params)

</script>

<style scoped>

</style>
