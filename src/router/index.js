import {createRouter, createWebHistory} from 'vue-router'
import Categoria1 from '../views.vue/Categoria1.vue'
import Categoria2 from '../views.vue/Categoria2.vue'
import Categoria3 from '../views.vue/Categoria3.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
        path: '/categoria1',
        name: '/Categoria1',
        componet: Categoria1,
    },
    {
        path: '/categoria2',
        name: '/Categoria2',
        componet: Categoria2,
    },
    {
        path: '/categoria3',
        name: '/Categoria3',
        componet: Categoria3,
    }
    ]
})
export default router