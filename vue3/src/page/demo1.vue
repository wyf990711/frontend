<template>
  <div>
    {{ msg }}---{{ count }}
    <button @click="count++">改变message</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
console.log("hello world");
// let msg = 'hello',
const count = ref(0);
</script>

<style lang="scss" scoped></style>
