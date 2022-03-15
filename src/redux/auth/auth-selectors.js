const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getErrorMessage = state => state.auth.errorMessage;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getIsFetchingCurrentUser,
  getErrorMessage,
};

export default authSelectors;
