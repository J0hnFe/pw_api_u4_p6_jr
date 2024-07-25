// Configurar libreria router y declarar todas las rutas de mi proyecto

import {createRouter, createWebHashHistory} from 'vue-router'

import EstudiantePage from '../pages/EstudiantePage.vue'
import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'

// Declarar arreglo de objetos que representarán alas pfj
const routes = [
    {
        path: '/buscar',
        component: EstudiantePage
    },

    {
        path: '/eliminar',
        component: EstudianteEliminar
    }, 

    {
        path: '/guardar',
        component: EstudianteGuardar
    }, 

    {
        path: '/',
        component: BienvenidaPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router