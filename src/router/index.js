import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import ItemMusicVue from "@/views/ItemMusic.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/itemMusic',
        name: 'ItemMusic',
        component: ItemMusicVue
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router