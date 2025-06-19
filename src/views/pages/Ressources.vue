<script setup lang="ts">
import CardThankYou from '@/components/Card/CardThankYou.vue';
import { resourcesCardData } from '@/data/resourcesCardData';
</script>

<template>
    <section class="thank-you">
        <CardThankYou v-for="data in resourcesCardData" :thanks-to="data.thanksTo" :description="data.description"
            :url="data.url" />
    </section>
</template>

<style scoped lang="scss">
.thank-you {
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
}
</style>