import HomeUserCardContentUserCardListGroupItem from './list-group-item';
import HomeUserCardContentUserCardAvatar from './avatar';

export default {
  name: 'home-content-user-card',
  props: {
    id: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: () => '',
    },
    email: {
      type: String,
      default: () => '',
    },
    name: {
      type: String,
      default: () => '',
    },
    photoUrl: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    openDialog() {
      this.$store.dispatch('userManagement/selectUser', this.id);
      this.$bvModal.show('user-edit');
    },
  },
  render(h) {
    const self = this;

    const listGroupItems = ['name', 'email', 'address']
      .map((item) => h(HomeUserCardContentUserCardListGroupItem, {
        props: {
          title: item,
          value: self[item],
        },
      }));

    return h('b-card', {
      class: 'home-content-user-card',
      props: { tag: 'button' },
      on: {
        click: self.openDialog,
      },
    }, [
      h('b-list-group', {
        class: 'home-content-user-card-list-group',
        props: { flush: true },
      }, [
        h(HomeUserCardContentUserCardAvatar, {
          props: {
            photoUrl: self.photoUrl,
            name: self.name,
            email: self.email,
          },
        }),
        ...listGroupItems,
      ]),
    ]);
  },
};
