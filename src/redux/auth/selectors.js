export const selectUser = (state) => state.authData.user;
export const selectLoggedIn = (state) => state.authData.isLoggedIn;
export const selectRefreshing = (state) => state.authData.isRefreshing;
export const selectLoading = (state) => state.authData.isLoading;
export const error = (state) => state.authData.error;