import { getCurrentUser, saveUserToFirestore } from '../../firebase';
import store from '../../store';

export default async function authenticate(to, from, next) {
  const requiresAuth = to.matched.some((record) => !record.meta.isPublic);

  if (requiresAuth) {
    const user = await getCurrentUser();

    if (user) {
      if (!store.getters['auth/currentUser'].email) {
        const userData = await saveUserToFirestore(user);
        store.dispatch('auth/updateCurrentUser', userData);
      }

      next();
    } else {
      next('/auth');
    }
  } else {
    next();
  }
}
