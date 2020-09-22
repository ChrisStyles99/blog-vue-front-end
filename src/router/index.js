import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/all-blogs',
    name: 'All-blogs',
    component: () => import('../views/All-blogs.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../views/Post.vue')
  },
  {
    path: '/create-post',
    name: 'Create-post',
    component: () => import('../views/Create-post.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-post/:id',
    name: 'Edit-post',
    component: () => import('../views/Edit-post.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.isLoggedIn) {
      next('/login');
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    if(store.getters.isLoggedIn) {
      next('/profile');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
