<script setup lang="ts">
import { Container, Menu } from 'lucide-vue-next'
import { useUIStore } from '@/stores/ui';

const ui = useUIStore();

</script>
<template>
    <div class="header">
        <p>
            <Container /> Code Atlas
        </p>
        <Menu class="header-action" @click="ui.toggleMenu()" />
    </div>
</template>