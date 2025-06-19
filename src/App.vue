<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import WebComponentMenu from "@/components/Menu/Menu.vue";
</script>

<template>
  <div class="container">
    <Header />
    <WebComponentMenu />
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>Made by Gourouvin Laurent</p>
    </footer>
  </div>
</template>

<style scoped></style>
