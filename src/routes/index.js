import VueRouter from 'vue-router'
import Home from '../Home.vue'
import Donor from '../Donor.vue'
import Receipt from '../Receipt.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/donor',
        name: 'Donor',
        component: Donor
    },{
        path: '/receipt',
        name: 'Receipt',
        component: Receipt
    }

]


export default new VueRouter ({
    mode: 'history',
    routes   
})