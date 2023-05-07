<script setup>
import Header from "./components/Header/Header.vue";
import Background from "./components/Background/Background.vue";
</script>

<template>
  <Header />
  <Background>
	  <router-view />
  </Background>
</template>

<style scoped>
</style>
