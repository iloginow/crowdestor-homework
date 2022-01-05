export default {
  name: 'home-content-user-card-list-group-item',
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: () => '',
    },
  },
  render(h) {
    const self = this;

    const value = this.value
      ? h('span', {
        class: 'home-content-user-card-list-group-item-value',
      }, self.value)
      : h('span', {
        class: 'home-content-user-card-list-group-item-value-na',
      }, 'Not available');

    return h('b-list-group-item', {
      class: 'home-content-user-card-list-group-item',
    }, [
      h('strong', {
        class: 'home-content-user-card-list-group-item-title',
      }, `${self.title}: `),
      value,
    ]);
  },
};
