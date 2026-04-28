import { createContext } from 'react';

export type TAccountInfo = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  vehicles: string[];
  token: string | null;
};
export type TAccountContext = {
  accountInfo: TAccountInfo | null;
  setAccountInfo: React.Dispatch<React.SetStateAction<TAccountInfo | null>>;
};

export const AccountContext = createContext<TAccountContext | null>(null);
