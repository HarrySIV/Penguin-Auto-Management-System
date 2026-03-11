import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AccountContext } from '../context/account-context';

import { Login } from './user/Login';
import { Dashboard } from './user/Dashboard';
import { CreateAccount } from './user/CreateAccount';
import { Contact } from './Contact';
import { Error } from './Error';

export const PageRoutes = () => {
  const accountInfo = useContext(AccountContext);
  const routes = (
    <Routes>
      {false && (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </>
      )}
      {true && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/vehicles" element={<Dashboard />} />
          <Route path="/invoices" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </>
      )}
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
  return <main>{routes}</main>;
};
