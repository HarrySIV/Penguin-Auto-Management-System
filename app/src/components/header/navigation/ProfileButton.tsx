import { useContext } from 'react';

import { AccountContext } from '../../../context/account-context';

import { Button } from '../../ui/Button';
import { LinkItem } from './LinkItem';

export const ProfileButton = () => {
  const accountInfo = useContext(AccountContext);
  return (
    <div>
      {accountInfo?.accountInfo?.token ? (
        <LinkItem to={'/dashboard'} className={'bg-slate-100'}>
          Harry
        </LinkItem>
      ) : (
        <Button text={'Login'} />
      )}
    </div>
  );
};
