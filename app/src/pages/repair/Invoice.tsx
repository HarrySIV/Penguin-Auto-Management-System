import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';

type TInvoiceProps = {
  email: string | null | undefined;
  closeInvoice: () => void;
  invoice: {
    id: number;
    total: number;
    date: Date;
    vehicle: {
      make: string;
      model: string;
      year: string;
    };
    repairs: {
      repair: string;
      amount: number;
    }[];
  };
};

export const Invoice = (props: TInvoiceProps) => {
  const invoice = props.invoice;
  return (
    <Modal>
      <h1>Invoice {invoice.id}</h1>
      <h3>Customer: {props.email}</h3>
      <h3>Date: {invoice.date.toString()}</h3>
      <h3>Vehicle: </h3>
      <h3>Make: {invoice.vehicle.make}</h3>
      <h3>Model: {invoice.vehicle.model}</h3>
      <h3>Year: {invoice.vehicle.year}</h3>
      {invoice.repairs.map((repair) => (
        <div key={repair.repair}>
          <h3>{repair.repair} </h3>
          <h3>${repair.amount}</h3>
        </div>
      ))}
      <h3>Total: {invoice.total}</h3>
      <Button text="close" onClick={props.closeInvoice} />
    </Modal>
  );
};
