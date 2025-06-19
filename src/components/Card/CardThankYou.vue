<script setup lang="ts">
import type { CardThankYou } from '@/types/CardThankYou';
import { defineComponent } from 'vue';

defineComponent({
    name: 'CardThankYou'
})

const props = defineProps<CardThankYou>();
</script>
<template>
    <div class="card-thank-you">
        <p>Remerciement à {{ props.thanksTo }}</p>
        <img :src="props.imagePath" />
        <a href="#" target="_blank">Accéder à leur site</a>
    </div>
</template>



<style scoped>

</style>