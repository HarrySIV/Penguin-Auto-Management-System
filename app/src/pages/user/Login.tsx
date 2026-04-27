import { useContext, useState } from 'react';

import { serverURL, testServerURL } from '../../utility/environment';
import { AccountContext } from '../../context/account-context';
import { storeToken } from '../../utility/account-token';
import { useHttpClient } from '../../hooks/http-hook';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { sendRequest } = useHttpClient();
  const navigate = useNavigate();
  const accountInfo = useContext(AccountContext);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const response = await sendRequest(
        `${testServerURL}/account/login`,
        'POST',
        JSON.stringify(loginData),
      );
      const data = response.account;
      storeToken(response.token);
      accountInfo?.setAccountInfo({
        firstName: data.firstName,
        lastName: data.lasttName,
        email: data.email,
        token: data.token,
      });
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      alert('Invalid email or password');
    }
  };

  return (
    <div className="m-10 p-10 bg-slate-400 w-fit h-fit">
      <h1 className="">Penguin Auto Mechanic Shop</h1>
      <div className="">
        <h2 className="">Login</h2>
        <form>
          <input
            className="border-black border-2"
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
            className="border-black border-2"
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <br />
          <br />
          <Button
            className="bg-slate-100 rounded-2xl"
            text="Login"
            onClick={handleLogin}
          />
          <br />
          <a href="/CreateAccount" className="text-blue-800">
            Create an Account
          </a>
        </form>
      </div>
    </div>
  );
}
