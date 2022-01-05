export default {
  name: 'auth-card-controls-button',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
  render(h) {
    const self = this;

    return h('b-button', {
      class: 'auth-card-controls-button',
      props: {
        variant: 'primary',
      },
      on: { click: self.onClick },
    }, self.title);
  },
};
