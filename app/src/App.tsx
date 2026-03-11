import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AccountContext, type TAccountInfo } from './context/account-context';
import { retrieveToken, storeToken } from './utility/account-token';
import { useHttpClient } from './hooks/http-hook';
import { themeColors } from './theme-colors';

import { Header } from './components/header/Header';
import { PageRoutes } from './pages/PageRoutes';

import { serverURL } from './utility/environment';

export function App() {
  const { sendRequest } = useHttpClient();
  const [accountInfo, setAccountInfo] = useState<TAccountInfo | null>(null);

  useEffect(() => {
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
      <div className={`bg-${themeColors.light} min-w-screen min-h-screen`}>
        <BrowserRouter>
          <Header />
          <PageRoutes />
        </BrowserRouter>
      </div>
    </AccountContext.Provider>
  );
}
