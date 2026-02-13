import React, { useState } from 'react';
import { Screen, TransactionContext, Recipient } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Scanner from './components/Scanner';
import PaymentInput from './components/PaymentInput';
import PinEntry from './components/PinEntry';
import PaymentStatus from './components/PaymentStatus';
import History from './components/History';
import Profile from './components/Profile';
import { AnimatePresence, motion } from 'framer-motion';

const defaultRecipient: Recipient = {
  name: 'Rahul Sharma',
  upiId: 'rahul@okaxis',
  bankName: 'RAHUL V SHARMA',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsqhNOx9YjjF5wrRIltcLuKuDe74GDYsHviKG8bEVoOeaER8tnyIjofnQ9wcXkkcLw38tvBsTBelkA54CTSMzM7sNyGtxKLNJjj7WACxE45HKqOLh0SVzwgqQi0C0Wq2HREPZU928vIGBmlw6oxqXEkCuTvqCanaYbLCpPrcoFjg-YoQdbt5XYZ2GHlP5kPOkgPOTNlOsZlfDgIVmAe1au7DEm1DTK_saZZyRpRAb5j0uJRdciRoYpt4vNFgFU0iC4-2hJ2BZbi0c',
  verified: true
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const [transaction, setTransaction] = useState<TransactionContext>({
    recipient: defaultRecipient,
    amount: '',
    note: '',
    timestamp: Date.now(),
  });

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const startPayment = (recipient?: Recipient) => {
    setTransaction(prev => ({
      ...prev,
      recipient: recipient || defaultRecipient,
      amount: '',
      note: ''
    }));
    navigate(Screen.PAYMENT_INPUT);
  };

  const updateAmount = (amount: string, note: string) => {
    setTransaction(prev => ({ ...prev, amount, note }));
    navigate(Screen.PIN_ENTRY);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.LOGIN:
        return <Login onLogin={() => navigate(Screen.DASHBOARD)} />;
      case Screen.DASHBOARD:
        return (
          <Dashboard
            onScan={() => navigate(Screen.SCANNER)}
            onPayContact={() => startPayment()}
            onHistory={() => navigate(Screen.HISTORY)}
            onProfile={() => navigate(Screen.PROFILE)}
          />
        );
      case Screen.SCANNER:
        return (
          <Scanner
            onClose={() => navigate(Screen.DASHBOARD)}
            onScanSuccess={() => startPayment()}
          />
        );
      case Screen.PAYMENT_INPUT:
        return (
          <PaymentInput
            recipient={transaction.recipient}
            onBack={() => navigate(Screen.DASHBOARD)}
            onProceed={updateAmount}
          />
        );
      case Screen.PIN_ENTRY:
        return (
          <PinEntry
            transaction={transaction}
            onBack={() => navigate(Screen.PAYMENT_INPUT)}
            onSuccess={() => navigate(Screen.PAYMENT_STATUS)}
          />
        );
      case Screen.PAYMENT_STATUS:
        return (
          <PaymentStatus
            transaction={transaction}
            onHome={() => navigate(Screen.DASHBOARD)}
          />
        );
      case Screen.HISTORY:
        return <History onBack={() => navigate(Screen.DASHBOARD)} />;
      case Screen.PROFILE:
        return <Profile onBack={() => navigate(Screen.DASHBOARD)} onLogout={() => navigate(Screen.LOGIN)} />;
      default:
        return <Login onLogin={() => navigate(Screen.DASHBOARD)} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-900 font-inter">
      <div className="w-full max-w-md h-[100dvh] bg-white relative overflow-hidden shadow-2xl sm:rounded-3xl sm:h-[95vh] sm:my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
