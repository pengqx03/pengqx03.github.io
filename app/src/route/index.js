import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
    },{
        path: '/one',
        name: 'One',
        component: () => import('../views/WorkOne.vue'),
    },{
        path: '/one/about',
        name: 'OneAbout',
        component: () => import('../views/one/AboutView.vue'),
    },{
        path: '/two',
        name: 'Two',
        component: () => import('../views/WorkTwo.vue'),
    },{
        path: '/three',
        name: 'Three',
        component: () => import('../views/WorkThree.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;