export enum Screen {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  SCANNER = 'SCANNER',
  PAYMENT_INPUT = 'PAYMENT_INPUT',
  PIN_ENTRY = 'PIN_ENTRY',
  PAYMENT_STATUS = 'PAYMENT_STATUS',
  HISTORY = 'HISTORY',
  PROFILE = 'PROFILE'
}

export interface Recipient {
  name: string;
  upiId: string;
  bankName?: string;
  avatarUrl?: string;
  verified?: boolean;
}

export interface TransactionContext {
  recipient: Recipient;
  amount: string;
  note: string;
  timestamp: number;
}
