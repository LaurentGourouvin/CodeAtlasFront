<script setup lang="ts">
import { Menu, Container, Compass, Home, Star, CircleUser, LogOut, LogIn, Boxes, Handshake } from 'lucide-vue-next';
import { ref, watch } from "vue";

const isMenuOpen = ref<boolean>(false);
const toogleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

watch(isMenuOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

</script>

<template>
  <div class="container">
    <section class="header">
      <p>
        <Container /> Code Atlas
      </p>
      <Menu class="header-action" @click="toogleMenu" />
    </section>
    <aside class="sidebar" :class="{ open: isMenuOpen }">
      <ul class="menu-design">
        <li>
          <a href="#">
            <Home size="18" /> <span>Accueil</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Compass size="18" /> <span>Explorer</span>
          </a>
        </li>
        <li>
          <a href="#">
            <CircleUser size="18" /> <span>Mon compte</span>
          </a>
        </li>
        <li class="skillmap">
          <a href="#">
            <Boxes size="18" /> <span>Skill Map</span>
          </a>
        </li>
        <li class="login">
          <a href="#" class="login-link">
            <LogIn size="18" /> <span>Se connecter</span>
          </a>
        </li>

        <li>
          <a href="#">
            <Star size="18" /> <span>Favoris</span>
          </a>
        </li>
        <li>
          <a href="#">
            <Handshake size="18" /> <span>Remerciements</span>
          </a>
        </li>
        <li class="logout">
          <a href="#" class="logout-link">
            <LogOut size="18" /> <span>Se déconnecter</span>
          </a>
        </li>
      </ul>
    </aside>
    <div class="backdrop" :class="{ active: isMenuOpen }" @click="toogleMenu"></div>
    <main class="main">
      <section class="hero-image"></section>
      <section class="card">
        <h2>Apprends et Avances.</h2>
        <p>Bienvenue sur <b>Code Atlas</b>,
          la plateforme pensée pour t’accompagner dans ta montée en compétences en développement web.
          Visualise ta progression, explore de nouvelles technologies et construis ton propre parcours, à ton rythme.
          Frontend, backend, devops, bonnes pratiques... trace ta route vers l’expertise.</p>
        <span class="sign">Laurent</span>
        <footer class="card-footer">
          <div class="card-footer-wave"></div>
        </footer>
      </section>
      <section class="hero-image-dev"></section>
      <section class="card">
        <h2>Code Atlas t’aide si…</h2>
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
        <span class="sign">Laurent</span>
        <footer class="card-footer">
          <div class="card-footer-wave"></div>
        </footer>
      </section>
      <section class="hero-image-price"></section>
      <section class="card">
        <h2>Un prix ?</h2>
        <p>Pas de panique ! Tout ce que tu trouveras ici — mes astuces, mes retours (bons ou pas) — est 100 % gratuit.
        </p>
        <p>J’adore le <b>dev</b>, et j’adore partager. J’ai moi-même appris grâce à plein de ressources en libre accès…
          à mon tour de rendre la pareille !</p>
        <span class="sign">Laurent</span>
        <footer class="card-footer">
          <div class="card-footer-wave"></div>
        </footer>
      </section>
    </main>
    <footer class="footer">
      <p>Un pied de page</p>
    </footer>
  </div>
</template>

<style scoped></style>
