<script setup lang="ts">
import NotFoundImage from "@/assets/images/404-amico.svg"
import router from "@/router";
const backHistory = () => {
    router.back();
}
</script>
<template>
    <div class="not-found-page">
        <img :src="NotFoundImage" alt="Error 404 image">
        <button @click="backHistory()">Revenir en arrière</button>
    </div>
</template>



<style scoped lang="scss">
.not-found-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    button {
        padding: .8rem;
        background-color: #ffd60a;
        border: none;
        color: white;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }

    @media(min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 35%;
        justify-content: center;
        align-items: center;
        margin: auto;
    }
}
</style>