import { NavLink } from 'react-router-dom';
import { Card } from './Card';

type TDashboardCardProps = {
  title: string;
  path: string;
};

export const DashboardCard = (props: TDashboardCardProps) => {
  return (
    <NavLink to={props.path}>
      <Card
        title={props.title}
        className={`m-10 bg-slate-400 min-w-24 min-h-32 max-w-56 max-h-48`}
      />
    </NavLink>
  );
};
