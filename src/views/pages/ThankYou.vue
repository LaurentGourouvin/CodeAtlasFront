<script setup lang="ts">
import CardThankYou from '@/components/Card/CardThankYou.vue';
import { thankYouCardData } from '@/data/thankYouCardData';
</script>

<template>
    <section class="card-thank">
        <CardThankYou v-for="data in thankYouCardData" :thanks-to="data.thanksTo" :image-path="data.imagePath"
            :url="data.url" />
    </section>
</template>

<style scoped lang="scss">
.card-card-thank {
    width: 50% !important;
}
</style>