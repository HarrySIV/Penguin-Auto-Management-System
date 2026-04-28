import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../hooks/http-hook';
import { AccountContext } from '../context/account-context';
import { testServerURL } from '../utility/environment';
import { Modal } from '../components/ui/Modal';
import { Button } from '../components/ui/Button';

type TCreateVehicleProps = {
  cancelHandler: () => void;
};

export function CreateVehicle(props: TCreateVehicleProps) {
  const { sendRequest } = useHttpClient();
  const accountInfo = useContext(AccountContext);

  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    email: accountInfo?.accountInfo?.email,
  });

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      const response = await sendRequest(
        `${testServerURL}/vehicles/create-vehicle`,
        'POST',
        JSON.stringify(formData),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal>
      <h2 className="m-4 p-4">Add Vehicle</h2>
      <form className="m-4 p-4">
        <input
          className="border-black border-2"
          type="text"
          placeholder="Make"
          required
          onChange={(e) => setFormData({ ...formData, make: e.target.value })}
        />
        &nbsp;
        <input
          className="border-black border-2"
          type="text"
          placeholder="Model"
          required
          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
        />
        <br></br>
        <br></br>
        <input
          className="border-black border-2"
          type="text"
          placeholder="Year"
          required
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        />
        <br></br>
        <br></br>
        <Button className="bg-slate-100/70" text="Add" onClick={handleSubmit} />
        <Button
          className="bg-red-600/70"
          text="cancel"
          onClick={props.cancelHandler}
        />
      </form>
    </Modal>
  );
}
