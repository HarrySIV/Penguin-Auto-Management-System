import { DashboardCard } from '../../components/ui/DashboardCard';

export const Dashboard = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <DashboardCard title="Profile" path="/profile" />
      <DashboardCard title="Invoices" path="/invoices" />
      <DashboardCard title="Vehicles" path="/vehicles" />
    </div>
  );
};
