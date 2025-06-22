<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { useUserStore } from '@/stores/user';
import type { KeycloakTokenParsed } from 'keycloak-js';
import { Star, CircleUser, LogOut, UserX, UserPen } from 'lucide-vue-next';
const userStore = useUserStore();
const user: KeycloakTokenParsed | null = userStore.userInfo;
const authStore = useAuthStore();
</script>
<template>
    <h2>
        <CircleUser :size="18" />
        Mon Compte
    </h2>

    <section class="user-summary">
        <h3>Rôles</h3>
        <article class="roles">
            <span v-for="role in userStore.roles" class="user-role">
                {{ role }}
            </span>
        </article>
    </section>

    <div class="user-summary">
        <p>Bonjour, <b class="name">{{ userStore.name }}</b></p>
        <p>Voici un résumé de vos informations :</p>
        <section>
            <ul>
                <li> Prénom : {{ user?.given_name }}</li>
                <li> Nom : {{ user?.family_name }}</li>
                <li> Username : {{ user?.preferred_username }}</li>
            </ul>
        </section>
    </div>

    <div class="user-action">
        <button>
            <UserPen :size=18 />Mettre à jour des informations
        </button>
        <button @click="authStore.logout()">
            <LogOut :size=18 /> Se déconnecter
        </button>
        <button>
            <UserX :size=18 />Cloturer le compte
        </button>
    </div>

    <div>
        <h2>
            <Star :size=18 /> Vos favoris
        </h2>
    </div>
</template>


<style scoped lang="scss">
h2 {
    color: #ffd60a;
    padding: 1.5rem;
    margin: 1rem auto;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    width: auto;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media(min-width: 768px) {
        width: 80%;
    }
}

h3 {
    color: #ffd60a;
}

.roles {
    display: flex;
}

.user-summary {
    max-width: 500px;
    padding: 1.5rem;
    background-color: #f9f9f9;
    border-left: 4px solid #ffd60a;
    border-radius: 8px;
    font-family: sans-serif;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;

    .name {
        color: #ffd60a;
        font-weight: 600;
    }

    p {
        margin-bottom: .6rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 1rem 0 0;
    }

    li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #e5e7eb;
    }

    li:last-child {
        border-bottom: none;
    }

    @media(min-width: 768px) {
        margin: 1.5rem auto;
        max-width: none;
        width: 80%;
    }

    .user-role {
        font-size: .8rem;
        padding: .5rem;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        margin: .5rem;
        display: block;
        width: fit-content;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    }
}

.user-action {
    margin-top: 2rem;
    margin-bottom: 2rem;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    button {
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
        font-weight: 500;
        border: none;
        border-radius: 6px;
        background-color: #ffd60a;
        color: #1a1a1a;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;

        &:hover {
            background-color: #e6c200;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        }

        &:active {
            transform: translateY(1px);
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
        }

        &:nth-child(2) {
            background-color: #f97316;
            color: white;

            &:hover {
                background-color: #ea580c;
            }
        }

        &:last-child {
            background-color: #ef4444;
            color: white;

            &:hover {
                background-color: #dc2626;
            }
        }
    }

    @media(min-width: 768px) {
        max-width: none;
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        button {
            display: flex;
            max-width: none;
        }
    }
}
</style>