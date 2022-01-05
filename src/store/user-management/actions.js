import { getUserList, updateUser } from '../../firebase';

export async function getUsers({ commit, getters }) {
  const { errorMessage } = getters;

  try {
    commit('ENTER_LOADING_STATE');

    const userList = await getUserList();

    commit('SET_USER_LIST', userList);

    if (errorMessage) {
      commit('CLEAR_ERROR_MESSAGE');
    }
  } catch (error) {
    commit('SET_ERROR_MESSAGE', error.message);
  } finally {
    commit('EXIT_LOADING_STATE');
  }
}

export function reloadUserList({ dispatch, commit }) {
  commit('RESET');
  dispatch('getUserList');
}

export function selectUser({ commit }, id) {
  commit('SELECT_USER', id);
}

export function selectUserByEmail({ commit }, currentUserEmail) {
  commit('SELECT_USER_BY_EMAIL', currentUserEmail);
}

export function clearUserSelection({ commit }) {
  commit('CLEAR_USER_SELECTION');
}

export async function updateSelectedUser({
  dispatch,
  commit,
  getters,
  rootGetters,
}, user) {
  const { errorMessage } = getters;

  try {
    commit('ENTER_LOADING_STATE');

    await updateUser(user);

    await dispatch('getUsers');

    const currentUser = rootGetters['auth/currentUser'];

    if (currentUser.email === user.email) {
      dispatch('auth/updateCurrentUser', user, { root: true });
    }

    if (errorMessage) {
      commit('CLEAR_ERROR_MESSAGE');
    }
  } catch (error) {
    commit('SET_ERROR_MESSAGE', error.message);
  } finally {
    commit('EXIT_LOADING_STATE');
  }
}
