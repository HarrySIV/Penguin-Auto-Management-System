import { createContext } from 'react';

export type TAccountInfo = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  isAdmin?: boolean;
  vehicles: {
    make: string;
    model: string;
    year: string;
  }[];
  invoices: {
    repairs: {
      repair: string;
      amount: number;
    }[];
    id: number;
    total: number;
    date: Date;
    vehicle: {
      make: string;
      model: string;
      year: string;
    };
  }[];
  token: string | null;
};
export type TAccountContext = {
  accountInfo: TAccountInfo | null;
  setAccountInfo: React.Dispatch<React.SetStateAction<TAccountInfo | null>>;
};

export const AccountContext = createContext<TAccountContext | null>(null);
