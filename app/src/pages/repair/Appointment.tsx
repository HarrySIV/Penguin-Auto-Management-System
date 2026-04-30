import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';

type TAppointmentType = {
  appointment: {
    email: string;
    date: string;
    time: number;
    period: string;
  };
  handleCloseAppointment: () => void;
};

export function Appointment(props: TAppointmentType) {
  return (
    <Modal>
      <h3 className="text-slate-100">Customer: {props.appointment.email}</h3>
      <h3 className="text-slate-100">Date: {props.appointment.date}</h3>
      <h3 className="text-slate-100">
        Time: {props.appointment.time.toString()} {props.appointment.period}
      </h3>
      <Button
        text="close"
        onClick={props.handleCloseAppointment}
        className="bg-slate-100"
      />
    </Modal>
  );
}
