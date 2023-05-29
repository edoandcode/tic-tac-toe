<script setup>
import { RouterView } from 'vue-router'
import './style.css'
import AppHeader from '@/components/Header/AppHeader.vue';
</script>

<template>
  <AppHeader></AppHeader>
  <RouterView />
</template>

<style scoped>

</style>
