import { initialState } from './state';

export function SET_EMAIL(state, email) {
  Object.assign(state, { email });
}

export function SET_PASSWORD(state, password) {
  Object.assign(state, { password });
}

export function SET_CURRENT_USER(state, currentUser) {
  Object.assign(state, { currentUser });
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
