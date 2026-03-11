import { NavLink } from 'react-router-dom';
import { Card } from './Card';

type TDashboardCardProps = {
  title: string;
  path: string;
};

export const DashboardCard = (props: TDashboardCardProps) => {
  return (
    <NavLink to={props.path}>
      <Card title={props.title} />
    </NavLink>
  );
};
