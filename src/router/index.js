import Vue from 'vue'
import Router from 'vue-router'
import AreaCirculo from '@/components/AreaCirculo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/circulo',
      name: 'AreaCirculo',
      component: AreaCirculo
    }
  ]
})
