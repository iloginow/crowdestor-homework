import { mapGetters } from 'vuex';

export default {
  name: 'auth-card-fields-form-input',
  props: {
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      isLoading: 'auth/isLoading',
    }),
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
  render(h) {
    const self = this;

    return h('b-form-input', {
      class: 'auth-card-fields-form-input',
      props: {
        value: self.value,
        placeholder: self.placeholder,
        type: self.type,
        disabled: self.isLoading,
      },
      on: {
        input: self.onInput,
      },
    });
  },
};
