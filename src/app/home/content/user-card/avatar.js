export default {
  name: 'home-content-user-card-avatar',
  props: {
    photoUrl: {
      type: String,
      default: () => '',
    },
    name: {
      type: String,
      default: () => '',
    },
    email: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    computedName() {
      return this.name || '';
    },
    computedEmail() {
      return this.email || '';
    },
    initials() {
      const regExp = /(\p{L}{1})\p{L}+/gu;
      const initials = [...this.computedName.matchAll(regExp)] || [];

      return `${initials.shift()?.[1] || ''}${initials.pop()?.[1] || ''}`
        .toUpperCase() || this.computedEmail.charAt(0).toUpperCase();
    },
  },
  render(h) {
    const self = this;

    const avatar = this.photoUrl
      ? h('img', {
        class: 'home-content-user-card-avatar-image',
        attrs: {
          src: self.photoUrl,
        },
      })
      : h('div', {
        class: 'home-content-user-card-avatar-initials',
      }, self.initials);

    return h('div', {
      class: 'home-content-user-card-avatar',
    }, [avatar]);
  },
};
