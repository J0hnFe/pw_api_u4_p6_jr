// Configurar libreria router y declarar todas las rutas de mi proyecto

import {createRouter, createWebHashHistory} from 'vue-router'

import EstudiantePage from '../pages/EstudiantePage.vue'
import EstudianteEliminar from '../pages/EstudianteEliminar.vue'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'
import BienvenidaPage from '../pages/BienvenidaPage.vue'

import NotFoundPage from '../pages/NotFoundPage.vue'
import BloqueadoPage from '../pages/BloqueadoPage.vue'

const routes = [
    {
        path: '/buscar/:id',
        component: EstudiantePage
    },

    {
        path: '/bloqueado',
        name: 'blo' ,
        component: BloqueadoPage
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
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'bloqueado',
        component: NotFoundPage
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// Programacion de guardianes
router.beforeEach((to, from, next) => {

    console.log('Guardianes')
    console.log(to)
    console.log(from)
    console.log(next) 

    let usuario = 'john';
    let resultado = true;

    const random = Math.random()*100
    console.log('Numero = ' + random)

    if(random>50) {
        console.log("Acceso permitido");
        next();
    } else {
        console.log("Acceso bloqueado");
        next({name: 'blo'});
    }
})

export default router