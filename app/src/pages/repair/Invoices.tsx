import { LinkItem } from '../../components/header/navigation/LinkItem';

const DUMMYINVOICESDATA = [
  {
    date: Date.now(),
    total: 599.99,
    id: 1,
  },
  {
    date: Date.now(),
    total: 399.99,
    id: 2,
  },
];

export const Invoices = () => {
  return (
    <ul className="flex flex-wrap">
      {DUMMYINVOICESDATA.map((invoice) => (
        <LinkItem to={`/invoice/${invoice.id}`}>
          <div className="bg-slate-400 m-4 p-4">
            <h3>Date: {invoice.date}</h3>
            <h3>Total: {invoice.total}</h3>
          </div>
        </LinkItem>
      ))}
    </ul>
  );
};
