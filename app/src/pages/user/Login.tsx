import { useContext, useState } from 'react';

import { serverURL } from '../../utility/environment';
import { AccountContext } from '../../context/account-context';
import { storeToken } from '../../utility/account-token';
import { useHttpClient } from '../../hooks/http-hook';
import { Button } from '../../components/ui/Button';

export function Login() {
  const { sendRequest } = useHttpClient();
  const accountInfo = useContext(AccountContext);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const response = await sendRequest(
        `${serverURL}/account/login`,
        'POST',
        loginData,
      );
      const data = response.data.account;
      storeToken(response.data.token);
      accountInfo?.setAccountInfo({
        firstName: data.firstName,
        lastName: data.lasttName,
        email: data.email,
        token: data.token,
      });
    } catch (err) {
      console.log(err);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="">
      <h1 className="">Penguin Auto Mechanic Shop</h1>
      <div className="">
        <h2 className="">Login</h2>
        <form>
          <input
            className=""
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <br />
          <br />

          <input
            className=""
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <br />
          <br />
          <Button className="" text="Login" onClick={handleLogin} />
          <br />
          <a href="/CreateAccount">Create an Account</a>
        </form>
      </div>
    </div>
  );
}
