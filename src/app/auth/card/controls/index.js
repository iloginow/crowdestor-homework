import { mapGetters } from 'vuex';
import AuthCardControlsButton from './button';

export default {
  name: 'auth-card-controls',
  computed: {
    ...mapGetters({
      isLoading: 'auth/isLoading',
    }),
  },
  methods: {
    async signIn() {
      const success = await this.$store.dispatch('auth/signIn');

      if (success) {
        this.$router.push('/');
      }
    },
    async signInWithGoogle() {
      const success = await this.$store.dispatch('auth/signInWithGoogle');

      if (success) {
        this.$router.push('/');
      }
    },
  },
  render(h) {
    const self = this;

    const nestedElements = this.isLoading
      ? [
        h('b-icon', {
          props: {
            icon: 'arrow-clockwise',
            animation: 'spin',
            fontScale: 5.7,
          },
        }),
      ] : [
        h(AuthCardControlsButton, {
          props: {
            title: 'Login',
          },
          on: {
            click: self.signIn,
          },
        }),
        h(AuthCardControlsButton, {
          props: {
            title: 'Sign in with Google',
          },
          on: {
            click: self.signInWithGoogle,
          },
        }),
      ];

    return h('div', {
      class: 'auth-card-controls',
    }, nestedElements);
  },
};
