import HomeNavbar from './navbar';
import HomeContent from './content';
import HomeDialog from './dialog';

export default {
  name: 'auth',
  mounted() {
    this.$store.dispatch('userManagement/getUsers');
  },
  render(h) {
    return h('div', {
      class: 'home',
    }, [
      h(HomeNavbar),
      h(HomeContent),
      h(HomeDialog),
    ]);
  },
};
