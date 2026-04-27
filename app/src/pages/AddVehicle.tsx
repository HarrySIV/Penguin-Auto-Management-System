import { useState } from 'react';
import { useHttpClient } from '../hooks/http-hook';
import { Modal } from '../components/ui/Modal';

export function CreateVehicleModal() {
  const { sendRequest } = useHttpClient();
  const formData = useState({
    make: '',
    model: '',
    year: '',
  });
  return (
    <Modal className="m-10 p-10 bg-slate-400 w-fit h-fit">
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
    </Modal>
  );
}
