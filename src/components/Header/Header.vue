<script setup lang="ts">
import { Container, Menu } from 'lucide-vue-next'
const isMenuOpen = ref<boolean>(false);
const toogleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
    <div>
        <p>
            <Container /> Code Atlas
        </p>
        <Menu class="header-action" @click="toogleMenu" />
    </div>
</template>