import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Curriculum from './pages/Curriculum.vue'
import Contatti from './pages/Contatti.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/curriculum', component: Curriculum },
        { path: '/contatti', component: Contatti }
    ]
})

export default router