import { useSelector } from 'react-redux';
import {
    authSelectors
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.getUsername);
  const user = useSelector(authSelectors.getIsRefresh);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};