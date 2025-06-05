import {createRouter, createWebHistory} from 'vue-router'
import mobilia from '../views.vue/Mobilia.vue'
import fragancias from '../views.vue/Fragancias.vue'
import comida from '../views.vue/Comida.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/mobilia',
        name: '/mobilia',
        componet: mobilia,
    },
    {
        path: '/fragancias',
        name: '/fragancias',
        componet: fragancias,
    },
    {
        path: '/comida',
        name: '/comida',
        componet: comida,
    }
    ]
})
export default router