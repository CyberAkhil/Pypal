import React, { useEffect, useState } from 'react';
import { TransactionContext } from '../types';

interface PaymentStatusProps {
  transaction: TransactionContext;
  onHome: () => void;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ transaction, onHome }) => {
  const [status, setStatus] = useState<'processing' | 'success'>('processing');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('success');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#f6f8f6] h-full flex flex-col font-display text-[#0d1b12] relative">
      {/* Header */}
      <header className="flex items-center p-4 justify-between">
        <button onClick={onHome} className="flex size-10 items-center justify-center rounded-full hover:bg-black/5">
            <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-semibold leading-tight flex-1 text-center pr-10">Payment Status</h2>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="relative mb-10">
            {/* Success State */}
            {status === 'success' ? (
                 <div className="relative flex h-32 w-32 items-center justify-center">
                    <div className="absolute inset-0 bg-[#13ec5b] rounded-full animate-[ping_0.5s_ease-out]"></div>
                    <div className="absolute inset-0 bg-[#13ec5b] rounded-full"></div>
                    <span className="material-icons-round text-6xl text-white relative z-10 animate-[bounce_0.5s_infinite]">check</span>
                 </div>
            ) : (
                /* Processing State */
                <>
                    <div className="absolute inset-0 rounded-full bg-[#13ec5b]/20 scale-150 animate-pulse"></div>
                    <div className="relative flex h-32 w-32 items-center justify-center">
                        <div className="absolute inset-0 border-4 border-[#13ec5b]/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-[#13ec5b] rounded-full border-t-transparent animate-spin"></div>
                        <span className="material-symbols-outlined text-5xl text-[#13ec5b]">shield</span>
                    </div>
                </>
            )}
        </div>

        <div className="text-center space-y-2 mb-12">
            <h1 className="text-2xl font-bold tracking-tight">
                {status === 'success' ? 'Payment Successful!' : 'Processing Payment...'}
            </h1>
            <p className="text-[#4c9a66] text-sm font-medium">
                {status === 'success' ? `Transaction ID: ${Date.now()}` : 'Please do not close the app or go back'}
            </p>
        </div>

        {/* Card */}
        <div className="w-full bg-white border border-[#13ec5b]/10 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                     <div className="h-12 w-12 rounded-full bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] font-bold text-lg">
                        {transaction.recipient.name.substring(0,2).toUpperCase()}
                     </div>
                     <div>
                        <p className="text-xs text-[#4c9a66] uppercase tracking-wider font-semibold">Paying to</p>
                        <p className="font-bold text-lg leading-tight">{transaction.recipient.name}</p>
                     </div>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-black">₹{transaction.amount}</p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] text-[#4c9a66] font-bold uppercase tracking-widest">
                    <span>{status === 'success' ? 'Completed' : 'Securing Connection'}</span>
                    <span>{status === 'success' ? '100%' : '80%'}</span>
                </div>
                <div className="h-1.5 w-full bg-[#13ec5b]/10 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-[#13ec5b] rounded-full transition-all duration-500" 
                        style={{ width: status === 'success' ? '100%' : '80%' }}
                    ></div>
                </div>
            </div>
        </div>

        {status === 'success' && (
             <button onClick={onHome} className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg active:scale-95 transition-transform">
                Done
            </button>
        )}
      </main>
      
      <footer className="p-6 flex flex-col items-center gap-4 bg-white border-t border-[#13ec5b]/5">
         <div className="flex items-center gap-2 text-[#4c9a66] bg-[#13ec5b]/5 px-4 py-2 rounded-full border border-[#13ec5b]/10">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span className="text-xs font-bold uppercase tracking-widest">UPI Secure Transaction</span>
         </div>
         <div className="flex items-center gap-4 grayscale opacity-60">
             <div className="h-6 w-12 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBK2rhTzsbDwL255R9zlFu4Qgl1AEtYr0RxBfQ-7xEH7a2MbEjH58r38XMU-Hj9gBFKuWX5YBQcc17Ds_-kj-q5W96faHCDCsH6QhVcdZNRuP79wGYCidaTE7fIxgWy2lF8dGQOu_aHrAQn3QZVAcEm0dMyBLCHzvo8tCNIkU_g-ncYto6AgX1gzPZWacEEfygPNAHfhzDyPDE_q6MilP9F-Fiq1jEKiOy_V3tPHsZOkl6PG_T8ll4n9d3S-aW3QtQHtnog-VXgOq0)' }}></div>
         </div>
      </footer>
    </div>
  );
};

export default PaymentStatus;
