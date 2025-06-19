<script setup lang="ts">
import { ref, watch } from "vue";
import Header from "@/components/Header/Header.vue";
import WebComponentMenu from "@/components/Menu/Menu.vue";
import Home from "@/components/Home/Home.vue";

const isMenuOpen = ref<boolean>(false);
const toogleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

watch(isMenuOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

</script>

<template>
  <div class="container">
    <Header />
    <WebComponentMenu />
    <main class="main">
      <Home />
    </main>
    <footer class="footer">
      <p>Un pied de page</p>
    </footer>
  </div>
</template>

<style scoped></style>
