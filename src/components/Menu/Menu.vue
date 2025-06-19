<script setup lang="ts">
import { Compass, Home, Star, CircleUser, LogOut, LogIn, Boxes, Handshake, Newspaper, CircleUserRound } from 'lucide-vue-next';
import { useUIStore } from '@/stores/ui';
import { useAuthStore } from '@/stores/auth';
const ui = useUIStore();
const authentication = useAuthStore();
</script>
<template>
    <aside class="sidebar" :class="{ open: ui.isMenuOpen }">
        <article class="sidebar_profil" v-if="authentication.getIsAuthenticated">
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
            <li class="login" v-if="!authentication.getIsAuthenticated" @click="authentication.setIsAuthenticated(true)" >
                <a href="#" class="login-link">
                    <LogIn :size=18 /> <span>Se connecter</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <Compass :size=18 /> <span>Explorer</span>
                </a>
            </li>
            <li v-if="authentication.getIsAuthenticated">
                <a href="#">
                    <CircleUser :size="18" /> <span>Mon compte</span>
                </a>
            </li>
            <li class="skillmap" v-if="authentication.getIsAuthenticated">
                <a href="#">
                    <Boxes :size=18 /> <span>Skill Map</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <Newspaper :size=18 /> <span>Blog</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <Star :size=18 /> <span>Favoris</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <Handshake :size=18 /> <span>Remerciements</span>
                </a>
            </li>
            <li class="logout" v-if="authentication.getIsAuthenticated" @click="authentication.setIsAuthenticated(false)">
                <a href="#" class="logout-link">
                    <LogOut :size=18 /> <span>Se déconnecter</span>
                </a>
            </li>
        </ul>
    </aside>
    <div class="backdrop" :class="{ active: ui.isMenuOpen }" @click="ui.toggleMenu()"></div>
</template>