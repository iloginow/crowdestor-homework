export const initialState = () => ({
  userList: [],
  isLoading: false,
  errorMessage: '',
  selectedUser: {
    id: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    photoUrl: '',
  },
});

export default initialState();
