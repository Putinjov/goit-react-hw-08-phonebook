const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefresh = state => state.auth.isRefreshing;

export const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getIsRefresh,
};