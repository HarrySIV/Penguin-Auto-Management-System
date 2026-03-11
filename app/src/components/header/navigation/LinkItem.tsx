import { NavLink } from 'react-router-dom';

type TLinkItemProps = {
  to: string;
  text: string;
};

export const LinkItem = (props: TLinkItemProps) => (
  <li className="flex align-middle">
    <NavLink to={props.to} className="px-4 align-middle">
      {props.text}
    </NavLink>
  </li>
);
