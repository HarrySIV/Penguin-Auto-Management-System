import { Routes, Route, Navigate } from 'react-router-dom';

import { Login } from './user/Login';
import { Dashboard } from './user/Dashboard';
import { CreateAccount } from './user/CreateAccount';
import { Contact } from './Contact';
import { Error } from './Error';
import { Profile } from './user/Profile';
import { Invoices } from './repair/Invoices';
import { Invoice } from './repair/Invoice';

export const PageRoutes = () => {
  const routes = (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoice/:id" element={<Invoice />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createaccount" element={<CreateAccount />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
  return <main>{routes}</main>;
};
