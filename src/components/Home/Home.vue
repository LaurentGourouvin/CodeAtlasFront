<script setup lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/Card/Card.vue";

defineComponent({
    name: "Home"
});

</script>
<template>
    <section class="hero-image"></section>
    <Card>
        <template #title>
            <h2>Apprends et Avances.</h2>
        </template>

        <template #content>
            <p>Bienvenue sur <b>Code Atlas</b>,
                la plateforme pensée pour t’accompagner dans ta montée en compétences en développement web.
                Visualise ta progression, explore de nouvelles technologies et construis ton propre parcours, à ton
                rythme.
                Frontend, backend, devops, bonnes pratiques... trace ta route vers l’expertise.</p>
        </template>

        <template #author>
            <span class="sign">Laurent</span>
        </template>
    </Card>
    <section class="hero-image-dev"></section>

    <Card>
        <template #title>
            <h2>Code Atlas t’aide si…</h2>
        </template>
        <template #content>
            <p>
                Tu veux <b>progresser sans te disperser</b>, comprendre comment chaque techno s’articule dans un tout,
                et avancer avec intention plutôt qu’au hasard.
            </p>
            <p>
                Ce n’est <b>pas un site de formation</b>.
                C’est un espace où je partage mes propres astuces, mes découvertes, mes erreurs aussi —
                bref, ce qui m’aide à monter en compétence au quotidien.
            </p>
            <p>
                À toi de piocher ce qui te parle, ou de tracer ta propre route à partir de là.
            </p>
        </template>
        <template #author>
            <span class="sign">Laurent</span>
        </template>
    </Card>
    <section class="hero-image-price"></section>
    <Card>
        <template #title>
            <h2>Un prix ?</h2>
        </template>

        <template #content>
            <p>Pas de panique ! Tout ce que tu trouveras ici — mes astuces, mes retours (bons ou pas) — est 100%
                gratuit.
            </p>
            <p>J’adore le <b>dev</b>, et j’adore partager. J’ai moi-même appris grâce à plein de ressources en libre
                accès…
                à mon tour de rendre la pareille !</p>
        </template>

        <template #author>
            <span class="sign">Laurent</span>
        </template>
    </Card>
</template>


<style lang="scss" scoped></style>