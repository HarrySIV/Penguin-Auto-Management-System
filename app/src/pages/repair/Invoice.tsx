import { Modal } from '../../components/ui/Modal';

type TInvoiceProps = {
  email: string;
  id: number;
  amount: number;
  vehicle: {
    make: string;
    model: string;
    year: string;
  };
  repair: {
    repair: string;
    amount: number;
  };
};

export const Invoice = (props: TInvoiceProps) => {
  return (
    <Modal>
      <h1>{props.id}</h1>
    </Modal>
  );
};
