<script setup lang="ts">
import type { RessourcesCard } from '@/types/RessourcesCard';
import { defineComponent } from 'vue';

defineComponent({
    name: 'CardThankYou'
})

const props = defineProps<RessourcesCard>();
</script>
<template>
    <div class="thank-card">
        <h2 class="thank-card--h2">{{ props.thanksTo }}</h2>
        <p class="thank-card--p">{{ props.description }}</p>
        <a class="thank-card--a" href="#" target="_blank">Accéder au site</a>
    </div>
</template>



<style scoped lang="scss">
.thank-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #333;
    z-index: 1;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;

    @media(min-width: 768px) {
        width: 30%;
    }

    &--h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: #ffd60a;
        text-align: center;
    }

    &--img {
        display: block;
        margin: auto;
        width: 20%;
    }

    &--p {
        font-size: 1rem;
        line-height: 1.6;
        color: #4f4f4f;
        text-align: justify;
        min-height: 100px;
    }

    &--a {
        display: block;
        padding: .5rem;
        background-color: #ffd60a;
        width: 50%;
        margin: auto;
        border-radius: 12px;
        text-decoration: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        color: #ffffff;
        text-align: center;
    }

    @media (min-width: 768px) {
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            border: 1px solid #ffd60a;
        }
    }
}
</style>