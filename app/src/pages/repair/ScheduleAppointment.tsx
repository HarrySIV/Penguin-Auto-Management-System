import { useContext, useState } from 'react';
import { AccountContext } from '../../context/account-context';
import { Button } from '../../components/ui/Button';
import { serverURL } from '../../utility/environment';
import { useHttpClient } from '../../hooks/http-hook';
import { useNavigate } from 'react-router-dom';

export const ScheduleAppointment = () => {
  const navigate = useNavigate();
  const { sendRequest } = useHttpClient();
  const accountInfo = useContext(AccountContext);
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: 8,
    period: 'AM',
    email: accountInfo?.accountInfo?.email,
  });
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setAppointmentData({
      ...appointmentData,
      email: accountInfo?.accountInfo?.email,
    });
    try {
      const response = await sendRequest(
        `${serverURL}/appointment/create`,
        'POST',
        JSON.stringify(appointmentData),
      );
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="m-10 p-10 bg-slate-400 w-fit h-fit rounded-2xl">
      <h1 className="text-slate-100">Schedule an Appointment</h1>
      <input
        className="border-black border-2 m-2 bg-slate-100"
        type="date"
        placeholder="Date"
        min={new Date().toJSON().slice(0, 10)}
        required
        onChange={(e) =>
          setAppointmentData({ ...appointmentData, date: e.target.value })
        }
      />
      <br />
      <input
        className="border-black border-2 m-2 bg-slate-100"
        type="number"
        min={1}
        max={12}
        placeholder="Time"
        required
        onChange={(e) =>
          setAppointmentData({
            ...appointmentData,
            time: parseInt(e.target.value),
          })
        }
      />
      <select
        className="bg-slate-100"
        onChange={(e) => {
          setAppointmentData({ ...appointmentData, period: e.target.value });
        }}
      >
        <option>AM</option>
        <option>PM</option>
      </select>
      <br />
      <Button
        text="submit"
        onClick={(e) => handleSubmit(e)}
        className="bg-slate-100"
      />
    </form>
  );
};
