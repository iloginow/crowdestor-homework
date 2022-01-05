export default {
  name: 'App',
  render(h) {
    return h('div', { class: 'app' }, [
      h('router-view'),
    ]);
  },
};
