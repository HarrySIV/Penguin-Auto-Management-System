import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AccountContext } from '../../context/account-context';
import { storeToken } from '../../utility/account-token';

import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { DashboardCard } from '../../components/ui/DashboardCard';

export const Dashboard = () => {
  const accountInfo = useContext(AccountContext);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggingOut(true);
  };
  const cancelHandler = () => {
    setIsLoggingOut(false);
  };
  const confirmLogout = () => {
    accountInfo?.setAccountInfo(null);
    storeToken('');
    navigate('/login');
  };

  useEffect(() => {
    if (!accountInfo?.accountInfo?.token) {
      navigate('/login');
    }
  }, [accountInfo?.accountInfo?.token, navigate]);
  return (
    <>
      {isLoggingOut ? (
        <Modal>
          <h3>Are you sure you want to logout?</h3>
          <Button
            text="logout"
            onClick={confirmLogout}
            className="bg-slate-100 rounded-2xl"
          />
          <Button
            text="cancel"
            onClick={cancelHandler}
            className="bg-red-600 rounded-2xl"
          />
        </Modal>
      ) : null}
      <h1 className="bg-slate-400">Dashboard</h1>
      <br />
      {accountInfo?.accountInfo?.isAdmin ? (
        <div className="flex flex-wrap justify-start">
          <DashboardCard title="Profile" path="/profile" />
          <DashboardCard title="Appointments" path="/appointments" />
          <DashboardCard title="Invoices" path="/invoices" />
          <DashboardCard title="Create Invoice" path="/invoices" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-start">
          <DashboardCard title="Profile" path="/profile" />
          <DashboardCard
            title="Schedule an Appointment"
            path="/schedule-appointment"
          />
          <DashboardCard title="Invoices" path="/invoices" />
        </div>
      )}
      <Button
        text="Logout"
        onClick={handleLogout}
        className="bg-red-600 h-12 rounded-2xl text-slate-200"
      />
    </>
  );
};
