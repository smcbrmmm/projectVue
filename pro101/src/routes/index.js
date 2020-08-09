import VueRouter from 'vue-router'
import Home from '../Home.vue'
import About from '../About.vue'
import Donor from '../Donor.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/donor',
        name: 'Donor',
        component: Donor
    }

]


export default new VueRouter ({
    mode: 'history',
    routes   
})