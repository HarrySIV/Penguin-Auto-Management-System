import { useContext, useState } from 'react';
import { AccountContext } from '../../context/account-context';
import { Button } from '../../components/ui/Button';
import { Invoice } from './Invoice';

export const Invoices = () => {
  const accountInfo = useContext(AccountContext);
  const [activeInvoice, setActiveInvoice] = useState<number | null>(null);
  const closeInvoice = () => {
    setActiveInvoice(null);
  };
  return (
    <>
      {activeInvoice !== null ? (
        <Invoice
          email={accountInfo?.accountInfo?.email}
          invoice={accountInfo!.accountInfo!.invoices[activeInvoice]}
          closeInvoice={closeInvoice}
        />
      ) : null}
      <ul className="flex flex-wrap">
        {accountInfo?.accountInfo?.invoices.map((invoice, index) => (
          <div>
            <div className="bg-slate-400 m-4 p-4">
              <h3>Date: {invoice.date.toString()}</h3>
              <h3>Invoice #: {invoice.id.toString()}</h3>
              <h3>Total: {invoice.total}</h3>
              <Button text="view" onClick={() => setActiveInvoice(index)} />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
