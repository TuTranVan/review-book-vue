import Vue from 'vue'
import Router from 'vue-router'
import Books from '@/components/Books'
import ShowBook from '@/components/ShowBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Books',
      component: Books
    },
    {
      path: '/books/:id',
      name: 'ShowBook',
      component: ShowBook
    }
  ]
})
