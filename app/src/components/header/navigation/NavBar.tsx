import { useContext } from 'react';

import { LinkItem } from './LinkItem';

import { AccountContext } from '../../../context/account-context';

export const NavBar = () => {
  const accountInfo = useContext(AccountContext);
  const loggedInRoutes = (
    <>
      <LinkItem to="/dashboard" text="Dashboard" />
      <LinkItem to="/contact" text="Contact" />
    </>
  );
  return (
    <ul className={`flex flex-nowrap align-middle`}>
      {accountInfo?.accountInfo?.token ? loggedInRoutes : loggedInRoutes}
      {/* change to loggedInRoutes : null for production */}
    </ul>
  );
};
