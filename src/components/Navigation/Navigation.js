import { Loader } from 'components/loader/loader';
import { useAuth } from 'hooks';
import { lazy, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';
import { BiHome, BiAlignLeft } from 'react-icons/bi';

const UserMenu = lazy(() => import('components/Usermenu/Usermenu'));

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    &.active {
      color: orange;
    }
  `;
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            <BiHome name='Home' color=' rgb(18, 135, 189)' size='30px' />
          </StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink className={css.nav__link} to="/contacts" end>
                <BiAlignLeft color=' rgb(18, 135, 189)' size='30px'/>
              </StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink className={css.nav__link} to="/register" end>
                Register
              </StyledLink>
              <StyledLink className={css.nav__link} to="/login" end>
                Login
              </StyledLink>
            </>
          )}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
