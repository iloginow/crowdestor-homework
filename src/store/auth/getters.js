export const email = (state) => state.email;

export const password = (state) => state.password;

export const errorMessage = (state) => state.errorMessage;

export const isLoading = (state) => state.isLoading;

export const currentUser = (state) => state.currentUser || {};

export const currentUserEmail = (state, getters) => getters
  .currentUser.email || '';

export const userName = (state, getters) => {
  const { name } = getters.currentUser;
  const userEmail = getters.currentUser.email;

  return name || userEmail || '';
};
