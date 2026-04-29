import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AccountContext, type TAccountInfo } from './context/account-context';
import { retrieveToken, storeToken } from './utility/account-token';
import { useHttpClient } from './hooks/http-hook';

import { Header } from './components/header/Header';
import { PageRoutes } from './pages/PageRoutes';

import { serverURL, testServerURL } from './utility/environment';

export function App() {
  const { sendRequest } = useHttpClient();
  const [accountInfo, setAccountInfo] = useState<TAccountInfo | null>(null);

  useEffect(() => {
    const fetchData = async (token: string) => {
      const response = await sendRequest(
        `${serverURL}/account/login`,
        'POST',
        JSON.stringify({
          token: token,
        }),
      );
      const data = response.account;
      const newToken = data.token;
      const accountData = {
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || '',
        token: response.token || '',
        vehicles: response.vehicles || [],
        invoices: response.invoices || [],
      };
      setAccountInfo(accountData);
      storeToken(newToken);
    };
    const storedToken = retrieveToken();
    if (storedToken) {
      try {
        fetchData(storedToken);
      } catch (err) {
        console.log(err);
      }
    }
  }, [sendRequest]);

  return (
    <AccountContext.Provider value={{ accountInfo, setAccountInfo }}>
      <div className={`bg-slate-100 min-w-screen min-h-screen`}>
        <BrowserRouter>
          <Header />
          <PageRoutes />
        </BrowserRouter>
      </div>
    </AccountContext.Provider>
  );
}
