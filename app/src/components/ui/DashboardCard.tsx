import { Card } from './Card';
import { LinkItem } from '../header/navigation/LinkItem';

type TDashboardCardProps = {
  title: string;
  path: string;
};

export const DashboardCard = (props: TDashboardCardProps) => {
  return (
    <LinkItem to={props.path} className="fit">
      <Card
        title={props.title}
        className={`m-10 bg-slate-400 min-w-24 min-h-16 max-w-56 max-h-48 rounded 2xl p-4`}
      />
    </LinkItem>
  );
};
