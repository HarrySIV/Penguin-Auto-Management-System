import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { serverURL } from '../../utility/environment';
import { useHttpClient } from '../../hooks/http-hook';

import { Button } from '../../components/ui/Button';

export function CreateAccount() {
  const { sendRequest } = useHttpClient();
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
      await sendRequest(
        `${serverURL}/account/create-account`,
        'POST',
        formData,
      );
      navigate('/login'); // Send them to login after registering
    } catch (err) {
      console.error('Registration failed', err);
    }
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">Create Account</h2>
        <form>
          <input
            className=""
            type="text"
            placeholder="First Name"
            required
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          &nbsp;
          <input
            className=""
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
            className=""
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          &nbsp;
          <input
            className=""
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
    </div>
  );
}
