import { NavLink } from 'react-router-dom';

type TLinkItemProps = {
  to: string;
  children: string | React.ReactElement;
  className?: string;
};

export const LinkItem = (props: TLinkItemProps) => (
  <li className={'flex align-middle ' + props.className}>
    <NavLink to={props.to} className="px-4 align-middle">
      {props.children}
    </NavLink>
  </li>
);
