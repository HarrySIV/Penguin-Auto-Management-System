import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Appointment } from './Appointment';
import { useHttpClient } from '../../hooks/http-hook';
import { testServerURL } from '../../utility/environment';

export const AllAppointments = () => {
  const { sendRequest } = useHttpClient();
  const [appointments, setAppointments] = useState([]);
  const [activeAppointmentIndex, setActiveAppointmentIndex] = useState<
    number | null
  >(null);

  const getAppointments = async () => {
    try {
      const response = await sendRequest(
        `${testServerURL}/appointments/all`,
        'GET',
      );
      setAppointments([...response.appointments]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseAppointment = () => {
    setActiveAppointmentIndex(null);
  };
  return (
    <>
      {activeAppointmentIndex !== null ? (
        <Appointment
          appointment={appointments[activeAppointmentIndex]}
          handleCloseAppointment={handleCloseAppointment}
        />
      ) : null}
      <ul className="flex flex-wrap">
        {appointments.map((appointment, index) => (
          <div>
            <div className="bg-slate-400 m-4 p-4">
              <h3 className="text-slate-100">Customer: {appointment.email}</h3>
              <h3 className="text-slate-100">Date: {appointment.date}</h3>
              <h3 className="text-slate-100">
                Time: {appointment.time.toString()} {appointment.period}
              </h3>
              <Button
                text="view"
                onClick={() => setActiveAppointmentIndex(index)}
                className="bg-slate-100"
              />
            </div>
          </div>
        ))}
      </ul>
      <Button
        text="fetch"
        onClick={getAppointments}
        className="bg-slate-400 rounded-2xl"
      />
    </>
  );
};
