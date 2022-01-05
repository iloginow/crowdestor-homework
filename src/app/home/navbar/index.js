import HomeNavbarCollapse from './collapse';

export default {
  name: 'home-navbar',
  render(h) {
    return h('b-navbar', {
      class: 'home-navbar',
      props: {
        toggleable: 'lg',
        type: 'dark',
        variant: 'dark',
      },
    }, [
      h('b-navbar-brand', {
        props: { href: '#' },
      }, 'CROWDESTOR'),
      h('b-navbar-toggle', {
        props: {
          target: 'nav-collapse',
        },
      }),
      h(HomeNavbarCollapse),
    ]);
  },
};
