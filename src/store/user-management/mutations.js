import { initialState } from './state';

export function SET_USER_LIST(state, userList) {
  Object.assign(state, { userList });
}

export function SET_ERROR_MESSAGE(state, errorMessage) {
  Object.assign(state, { errorMessage });
}

export function CLEAR_ERROR_MESSAGE(state) {
  Object.assign(state, { errorMessage: '' });
}

export function ENTER_LOADING_STATE(state) {
  Object.assign(state, { isLoading: true });
}

export function EXIT_LOADING_STATE(state) {
  Object.assign(state, { isLoading: false });
}

export function RESET(state) {
  Object.assign(state, initialState());
}

export function SELECT_USER(state, userId) {
  const selectedUser = state.userList.find((user) => user.id === userId);
  const initialUser = initialState().selectedUser;
  Object.assign(state, { selectedUser: selectedUser || initialUser });
}

export function SELECT_USER_BY_EMAIL(state, userEmail) {
  const selectedUser = state.userList.find((user) => user.email === userEmail);
  const initialUser = initialState().selectedUser;
  Object.assign(state, { selectedUser: selectedUser || initialUser });
}

export function CLEAR_USER_SELECTION(state) {
  const { selectedUser } = initialState();
  Object.assign(state, { selectedUser });
}
