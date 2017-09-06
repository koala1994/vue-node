import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import order from '../pages/order'
import person from '../pages/person'
import recommend from '../pages/recommend'
import food from '../pages/food'
Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass:'active',
  routes: [
    {
      path: '/index',
      component: index
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/person',
      component: person
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/food',
      component: food
    }
  ]
})
