import Vue from 'vue';
import Router from 'vue-router';
import Todo from '@/components/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo,
    },
  ],
});
