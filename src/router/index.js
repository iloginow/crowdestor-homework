import Vue from 'vue';
import VueRouter from 'vue-router';

// ROUTES
import home from './routes/home';
import auth from './routes/auth';

import authenticate from './hooks/authenticate';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    auth,
    home,
  ],
});

router.beforeEach(authenticate);

export default router;
