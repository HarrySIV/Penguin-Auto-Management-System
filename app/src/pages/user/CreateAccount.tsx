import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { serverURL, testServerURL } from '../../utility/environment';
import { useHttpClient } from '../../hooks/http-hook';
import { AccountContext } from '../../context/account-context';

import { Button } from '../../components/ui/Button';
import { storeToken } from '../../utility/account-token';

export function CreateAccount() {
  const { sendRequest } = useHttpClient();
  const accountInfo = useContext(AccountContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const response = await sendRequest(
        `${serverURL}/account/create-account`,
        'POST',
        JSON.stringify(formData),
      );
      const data = response.account;
      const newToken = data.token;
      const accountData = {
        firstName: data.firstName as string,
        lastName: data.lastName as string,
        email: data.email as string,
        token: response.token as string,
      };
      accountInfo?.setAccountInfo(accountData);
      storeToken(newToken);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-10 p-10 bg-slate-400 w-fit h-fit">
      <h2 className="">Create Account</h2>
      <form className="">
        <input
          className="border-black border-2"
          type="text"
          placeholder="First Name"
          required
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        &nbsp;
        <input
          className="border-black border-2"
          type="text"
          placeholder="Last Name"
          required
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <input
          className="border-black border-2"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        &nbsp;
        <input
          className="border-black border-2"
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <br></br>
        <br></br>
        <Button className="" text="Register" onClick={handleSubmit} />
      </form>
    </div>
  );
}
