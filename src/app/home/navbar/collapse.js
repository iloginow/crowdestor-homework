import { mapGetters } from 'vuex';

export default {
  name: 'home-navbar-collapse',
  computed: {
    ...mapGetters({
      currentUserEmail: 'auth/currentUserEmail',
      userName: 'auth/userName',
    }),
  },
  methods: {
    async logOut() {
      const success = await this.$store.dispatch('auth/logOut');

      if (success) {
        this.$router.push('/auth');
      }
    },
    openDialog() {
      this.$store
        .dispatch('userManagement/selectUserByEmail', this.currentUserEmail);

      this.$bvModal.show('user-edit');
    },
  },
  render(h) {
    const self = this;

    return h('b-collapse', {
      props: {
        id: 'nav-collapse',
        isNav: true,
      },
    }, [
      h('b-navbar-nav', {
        class: 'home-navbar-collapse-nav',
      }, [
        h('b-nav-item', {
          class: 'home-navbar-collapse-nav-username',
          props: { href: '#' },
          on: {
            click: self.openDialog,
          },
        }, self.userName),
        h('b-button', {
          class: 'home-navbar-collapse-nav-button',
          on: { click: self.logOut },
        }, 'Sign out'),
      ]),
    ]);
  },
};
