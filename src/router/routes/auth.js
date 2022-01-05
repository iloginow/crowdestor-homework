const Auth = () => import(
  /* webpackChunkName: "auth" */
  '../../app/auth'
);

export default {
  path: '/auth',
  component: Auth,
  meta: {
    isPublic: true,
  },
};
