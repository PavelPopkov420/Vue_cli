import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import DesignCardsView from '@/views/DesignCardsView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView

    },
    {
        path: '/article',
        name: 'article',
        component: ArticlesView
    },
    {
        path: '/design',
        name: 'design',
        component: DesignCardsView
    }
]

const router = new VueRouter({
    routes
})

export default router