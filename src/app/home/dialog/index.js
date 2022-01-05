import { mapGetters } from 'vuex';
import HomeDialogFormGroup from './form-group';

export default {
  name: 'home-dialog',
  data() {
    return {
      id: '',
      email: '',
      name: '',
      address: '',
      phone: '',
      photoUrl: '',
    };
  },
  computed: {
    ...mapGetters({
      selectedUser: 'userManagement/selectedUser',
    }),
  },
  methods: {
    clearUserSelection() {
      this.$store.dispatch('userManagement/clearUserSelection');

      this.id = '';
      this.name = '';
      this.email = '';
      this.address = '';
      this.phone = '';
      this.photoUrl = '';
    },
    fetchData() {
      this.id = this.selectedUser.id;
      this.name = this.selectedUser.name;
      this.email = this.selectedUser.email;
      this.address = this.selectedUser.address;
      this.phone = this.selectedUser.phone;
      this.photoUrl = this.selectedUser.photoUrl;
    },
    updateSelectedUser() {
      this.$store.dispatch('userManagement/updateSelectedUser', {
        id: this.id,
        email: this.email,
        name: this.name || '',
        address: this.address || '',
        phone: this.phone || '',
        photoUrl: this.photoUrl || '',
      });
    },
  },
  render(h) {
    const self = this;

    const formGroups = [
      'name',
      'address',
      'phone',
      'photoUrl',
    ].map((item) => h(HomeDialogFormGroup, {
      props: {
        label: item,
        value: self[item],
      },
      on: {
        input: (value) => {
          self[item] = value;
        },
      },
    }));

    return h('b-modal', {
      props: { id: 'user-edit', title: self.email },
      on: {
        hide: self.clearUserSelection,
        show: self.fetchData,
        ok: self.updateSelectedUser,
      },
    }, formGroups);
  },
};
