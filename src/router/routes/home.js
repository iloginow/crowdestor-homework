const Home = () => import(
  /* webpackChunkName: "home" */
  '../../app/home'
);

export default {
  path: '/',
  component: Home,
};
