import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUIStore = defineStore('ui', () => {
  const isMenuOpen = ref<boolean>(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  const closeMenu = () => {
    isMenuOpen.value = false;
  }

  return { isMenuOpen, toggleMenu, closeMenu };
});
