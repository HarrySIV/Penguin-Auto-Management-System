import { themeColors } from '../../theme-colors';

import { ProfileButton } from './navigation/ProfileButton';

import { NavBar } from './navigation/NavBar';
import { Title } from './Title';

export function Header() {
  return (
    <div
      className={`flex flex-nowrap min-w-screen bg-${themeColors.lightOrange}`}
    >
      <Title />
      <NavBar />
      <ProfileButton />
    </div>
  );
}
