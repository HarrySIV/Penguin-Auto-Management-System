import { NavLink } from 'react-router-dom';

import icon from '../../assets/icon.png';

export function Title() {
  return (
    <NavLink to="/">
      <img src={icon} className="max-h-52 max-w-52" />
    </NavLink>
  );
}
