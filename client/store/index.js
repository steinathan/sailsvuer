export const state = () => ({
  user: {},
  drawer: null,
  error: {
    networkLost: false
  },
  user: {},
  loading: false,
  success: false //# indicates the general success of a successfull page 😀
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};
