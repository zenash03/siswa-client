import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/',
        name : 'siswa.index',
        component: () => import('./views/siswa/Index.vue')
    },
    {
        path : '/create',
        name : 'siswa.create',
        component: () => import('./views/siswa/Create.vue')
    },
    {
        path : '/edit/:id',
        name : 'siswa.edit',
        component: () => import('./views/siswa/Edit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;