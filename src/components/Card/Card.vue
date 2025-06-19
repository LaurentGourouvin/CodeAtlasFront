<script setup lang="ts">
</script>

<template>
    <section class="card">
        <slot name="title" />
        <slot name="content" />
        <slot name="author" />

        <footer class="card-footer">
            <div class="card-footer-wave"></div>
        </footer>
    </section>
</template>

<style scoped lang="scss">
.card {
    position: relative;
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem .5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: #333;
    text-align: justify;
    z-index: 1;

    footer.card-footer {
        position: relative;
        height: 100px;
        margin: 2rem -1.5rem -1.5rem;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        overflow: hidden;


        @media (min-width: 768px) {
            height: 140px; // ou plus selon le rendu du SVG
        }

        .card-footer-wave {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('@/assets/images/layered-waves-haikei.svg') no-repeat center bottom;
            background-size: cover;
            opacity: 1;
            pointer-events: none;
        }
    }

    ::v-deep(h2) {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: #ffd60a;
    }

    ::v-deep(p) {
        font-size: 1rem;
        line-height: 1.6;
        color: #4f4f4f;
    }

    ::v-deep(b) {
        font-weight: 600;
    }

    @media (min-width: 768px) {
        // max-width: 600px;
        max-width: 35%;
        margin: 2rem auto;

        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
            transform: perspective(1000px) rotateX(2deg) rotateY(2deg);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            border: 1px solid #ffd60a;
        }
    }
}
</style>