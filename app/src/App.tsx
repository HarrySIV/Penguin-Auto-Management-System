import { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import { AccountContext, type TAccountInfo } from './context/account-context';
import { retrieveToken, storeToken } from './utility/account-token';
import { useHttpClient } from './hooks/http-hook';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { CreateAccount } from './pages/CreateAccount';

import { serverURL } from './utility/environment';

export function App() {
  const { sendRequest } = useHttpClient();
  const [accountInfo, setAccountInfo] = useState<TAccountInfo | null>(null);

  const fetchData = async (token: string) => {
    const response = await sendRequest(`${serverURL}/account/login`, 'POST', {
      token: token,
    });
    const data = response.data;
    const newToken = data.token;
    const accountData = {
      firstName: data.firstName as string,
      lastName: data.lastName as string,
      email: data.email as string,
      token: data.token as string,
    };
    setAccountInfo(accountData);
    storeToken(newToken);
    console.log(accountData, newToken);
  };
  useEffect(() => {
    const storedToken = retrieveToken();
    console.log(storedToken);
    if (storedToken) {
      try {
        fetchData(storedToken);
      } catch (err) {}
    }
  }, []);

  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
      <Route path="/createaccount" element={<CreateAccount />} />
    </Routes>
  );
  return (
    <AccountContext.Provider value={{ accountInfo, setAccountInfo }}>
      <div className="website">
        <BrowserRouter>
          <main>{routes}</main>
        </BrowserRouter>
      </div>
    </AccountContext.Provider>
  );
}
