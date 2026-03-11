import { Card } from './Card';

type TDashboardCardProps = {
  make: string;
  model: string;
  year: string;
};

export const VehicleCard = (props: TDashboardCardProps) => {
  return <Card title={`${props.year} ${props.make} ${props.model}`} />;
};
