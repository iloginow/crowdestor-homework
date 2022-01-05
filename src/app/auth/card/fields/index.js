import { mapGetters, mapActions } from 'vuex';
import AuthCardFieldsFormInput from './form-input';

export default {
  name: 'auth-card-fields',
  computed: {
    ...mapGetters({
      email: 'auth/email',
      password: 'auth/password',
    }),
  },
  methods: {
    ...mapActions({
      updateEmail: 'auth/updateEmail',
      updatePassword: 'auth/updatePassword',
    }),
  },
  render(h) {
    const self = this;

    return h('div', {
      class: 'auth-card-fields',
    }, [
      h(AuthCardFieldsFormInput, {
        props: {
          value: self.email,
          type: 'email',
          placeholder: 'Email',
        },
        on: {
          input: self.updateEmail,
        },
      }),
      h(AuthCardFieldsFormInput, {
        props: {
          value: self.password,
          type: 'password',
          placeholder: 'Password',
        },
        on: {
          input: self.updatePassword,
        },
      }),
    ]);
  },
};
