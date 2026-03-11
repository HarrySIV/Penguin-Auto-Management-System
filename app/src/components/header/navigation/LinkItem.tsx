import { NavLink } from 'react-router-dom';

type TLinkItemProps = {
  to: string;
  children: string | React.ReactElement;
};

export const LinkItem = (props: TLinkItemProps) => (
  <li className="flex align-middle">
    <NavLink to={props.to} className="px-4 align-middle">
      {props.children}
    </NavLink>
  </li>
);
