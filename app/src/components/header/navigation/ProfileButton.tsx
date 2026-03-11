import { useContext } from 'react';

import { AccountContext } from '../../../context/account-context';

import { Button } from '../../ui/Button';

export const ProfileButton = () => {
  const accountInfo = useContext(AccountContext);
  const handleClick = () => {
    //update profile
    //logout
  };
  return (
    <>
      {true ? (
        <Button text={'Harry'} onClick={handleClick} />
      ) : (
        <Button text={'Login'} />
      )}
    </>
  );
};
