import { mapGetters } from 'vuex';
import HomeContentUserCard from './user-card';

export default {
  name: 'home-content',
  computed: {
    ...mapGetters({
      userList: 'userManagement/userList',
      isLoading: 'userManagement/isLoading',
    }),
  },
  render(h) {
    const userCards = this.userList.map((user) => h(HomeContentUserCard, {
      props: {
        id: user.id,
        address: user.address,
        email: user.email,
        name: user.name,
        photoUrl: user.photoUrl,
      },
    }));

    const content = this.isLoading
      ? [
        h('div', { class: 'home-content-loader' }, [
          h('b-icon', {
            props: {
              icon: 'arrow-clockwise',
              animation: 'spin',
              fontScale: 5.7,
            },
          }),
        ]),
      ] : userCards;

    return h('div', { class: 'home-content' }, content);
  },
};
