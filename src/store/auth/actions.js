import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth, googleProvider, saveUserToFirestore } from '../../firebase';

export function updateEmail({ commit }, email) {
  commit('SET_EMAIL', email);
}

export function updatePassword({ commit }, password) {
  commit('SET_PASSWORD', password);
}

export function updateCurrentUser({ commit }, user) {
  commit('SET_CURRENT_USER', user);
}

export async function signIn({ commit, getters }) {
  const { email, password, errorMessage } = getters;

  try {
    commit('ENTER_LOADING_STATE');

    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = await saveUserToFirestore(userCredentials.user);

    commit('SET_CURRENT_USER', user);

    if (errorMessage) {
      commit('CLEAR_ERROR_MESSAGE');
    }

    commit('SET_PASSWORD', '');
    commit('SET_EMAIL', '');

    return true;
  } catch (error) {
    commit('SET_ERROR_MESSAGE', error.message);
    commit('EXIT_LOADING_STATE');
    return false;
  }
}

export async function signInWithGoogle({ commit, getters }) {
  const { errorMessage } = getters;

  try {
    commit('ENTER_LOADING_STATE');

    const result = await signInWithPopup(auth, googleProvider);

    const user = await saveUserToFirestore(result.user);

    commit('SET_CURRENT_USER', user);

    if (errorMessage) {
      commit('CLEAR_ERROR_MESSAGE');
    }

    commit('SET_PASSWORD', '');
    commit('SET_EMAIL', '');

    return true;
  } catch (error) {
    commit('SET_ERROR_MESSAGE', error.message);
    commit('EXIT_LOADING_STATE');
    return false;
  }
}

export async function logOut({ commit, getters }) {
  const { errorMessage } = getters;

  try {
    commit('ENTER_LOADING_STATE');

    await signOut(auth);

    commit('SET_CURRENT_USER', {});

    if (errorMessage) {
      commit('CLEAR_ERROR_MESSAGE');
    }

    return true;
  } catch (error) {
    commit('SET_ERROR_MESSAGE', error.message);

    return false;
  } finally {
    commit('EXIT_LOADING_STATE');
  }
}

export function exitLoadingState({ commit }) {
  commit('EXIT_LOADING_STATE');
}
