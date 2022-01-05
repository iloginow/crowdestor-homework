import AuthCardFields from './fields';
import AuthCardControls from './controls';

export default {
  name: 'auth-card',
  render(h) {
    return h('b-card', {
      class: ['auth-card', 'text-center'],
      props: {
        title: 'Login',
        subTitle: 'Please enter your email and password',
      },
    }, [
      h(AuthCardFields),
      h(AuthCardControls),
    ]);
  },
};
