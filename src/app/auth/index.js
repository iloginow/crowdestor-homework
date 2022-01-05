import AuthCard from './card';

export default {
  name: 'auth',
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('auth/exitLoadingState');
    next();
  },
  render(h) {
    return h('div', { class: 'auth' }, [
      h(AuthCard),
    ]);
  },
};
