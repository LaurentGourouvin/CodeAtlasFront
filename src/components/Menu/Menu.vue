<script setup lang="ts">
import { Compass, Home, Star, CircleUser, LogOut, LogIn, Boxes, Handshake, Newspaper, CircleUserRound } from 'lucide-vue-next';
import { useUIStore } from '@/stores/ui';
import { useAuthStore } from '@/stores/auth';
import { useScrollMenuLock } from '@/composables/useScrollMenuLock';
import { useKeycloak } from '@/composables/useKeycloak';
const ui = useUIStore();
const authentication = useAuthStore();

useScrollMenuLock(() => ui.isMenuOpen);
const keycloak = useKeycloak();
const login = () => {
    keycloak.login();
}
</script>
<template>
    <aside class="sidebar" :class="{ open: ui.isMenuOpen }">
        <article class="sidebar_profil" v-if="authentication.isAuthenticated">
            <div class="sidebar_profil--avatar">
                <CircleUserRound :size="18" />
            </div>
            <div class="sidebar_profil--info">
                <p class="sidebar_profil--name">Laurent Gourouvin</p>
            </div>
        </article>

        <ul class="menu-design">
            <li>
                <a href="#">
                    <Home :size=18 /> <span>Accueil</span>
                </a>
            </li>
            <li class="login" v-if="!authentication.isAuthenticated" @click="login()">
                <a href="#" class="login-link">
                    <LogIn :size=18 /> <span>Se connecter</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <Compass :size=18 /> <span>Explorer</span>
                </a>
            </li>
            <li v-if="authentication.isAuthenticated">
                <a href="#">
                    <CircleUser :size="18" /> <span>Mon compte</span>
                </a>
            </li>
            <li class="skillmap" v-if="authentication.isAuthenticated">
                <a href="#">
                    <Boxes :size=18 /> <span>Skill Map</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <Newspaper :size=18 /> <span>Blog</span>
                </a>
            </li>
            <li v-if="authentication.isAuthenticated">
                <a href="#">
                    <Star :size=18 /> <span>Favoris</span>
                </a>
            </li>
            <li>
                <router-link to="/ressources">
                    <Handshake :size="18" />
                    <span>Ressources</span>
                </router-link>
            </li>
            <li class="logout" v-if="authentication.isAuthenticated" @click="authentication.setIsAuthenticated(false)">
                <a href="#" class="logout-link">
                    <LogOut :size=18 /> <span>Se déconnecter</span>
                </a>
            </li>
        </ul>
    </aside>
    <div class="backdrop" :class="{ active: ui.isMenuOpen }" @click="ui.toggleMenu()"></div>
</template>