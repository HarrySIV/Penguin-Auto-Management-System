import { useNavigate } from 'react-router-dom';

import { ProfileButton } from './navigation/ProfileButton';

import { NavBar } from './navigation/NavBar';
import { Title } from './Title';
import { Button } from '../ui/Button';

export function Header() {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-nowrap min-w-screen bg-orange-100`}>
      <Button text="back" onClick={() => navigate(-1)} />
      <Title />
      <NavBar />
      <ProfileButton />
    </div>
  );
}
