import { DashboardCard } from '../../components/ui/DashboardCard';

export const Dashboard = () => {
  return (
    <>
      <h1 className="bg-slate-400">Dashboard</h1>
      <br />
      <div className="flex flex-wrap justify-start">
        <DashboardCard title="Profile" path="/profile" />
        <DashboardCard title="Invoices" path="/invoices" />
      </div>
    </>
  );
};
