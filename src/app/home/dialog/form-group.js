export default {
  name: 'home-dialog-form-group',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    computedLabel() {
      return `${this.label.charAt(0).toUpperCase()}${this.label.slice(1)}`;
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
  render(h) {
    const self = this;

    return h('b-form-group', {
      class: 'home-dialog-form-group',
      props: {
        label: self.computedLabel,
        labelFor: self.label,
        labelColsSm: '3',
        labelAlignSm: 'right',
      },
    }, [
      h('b-form-input', {
        class: 'home-dialog-form-group-input',
        props: {
          id: self.label,
          value: self.value,
        },
        on: {
          input: self.onInput,
        },
      }),
    ]);
  },
};
