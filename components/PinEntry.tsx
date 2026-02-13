import React, { useState } from 'react';
import { TransactionContext } from '../types';

interface PinEntryProps {
  transaction: TransactionContext;
  onBack: () => void;
  onSuccess: () => void;
}

const PinEntry: React.FC<PinEntryProps> = ({ transaction, onBack, onSuccess }) => {
  const [pin, setPin] = useState('');

  const handleNumClick = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      onSuccess();
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-between bg-white font-manrope relative overflow-hidden select-none">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#135bec]/5 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative pt-12 px-6 flex flex-col items-center text-center z-10 flex-grow justify-center">
        {/* Avatar */}
         <div className="mb-4 relative">
            <div className="w-16 h-16 rounded-full bg-[#135bec]/10 flex items-center justify-center text-[#135bec] text-xl font-bold">
                {transaction.recipient.name.substring(0,2).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 border-2 border-white rounded-full p-1">
                <span className="material-icons-round text-white text-[10px] block">check</span>
            </div>
         </div>

         <p className="text-xs font-bold text-gray-400 mb-1 tracking-wide uppercase">Paying to</p>
         <h2 className="text-xl font-bold text-gray-900 mb-2">{transaction.recipient.name}</h2>
         <div className="flex items-baseline justify-center text-[#135bec]">
            <span className="text-2xl font-semibold mr-1">₹</span>
            <span className="text-5xl font-extrabold tracking-tighter">{transaction.amount}</span>
         </div>
         <p className="text-xs text-gray-400 mt-2">Ref: {Date.now()} • HDFC Bank</p>

         {/* PIN Dots */}
         <div className="mt-10 w-full">
            <div className="flex items-center justify-center gap-6 mb-6">
                {[0, 1, 2, 3].map(i => (
                    <div 
                        key={i}
                        className={`w-4 h-4 rounded-full transition-all duration-200 ${
                            i < pin.length 
                            ? 'bg-[#135bec] scale-110 shadow-md' 
                            : 'border-2 border-gray-300'
                        } ${i === pin.length ? 'border-[#135bec] border-2 animate-pulse' : ''}`}
                    ></div>
                ))}
            </div>
            <p className="text-sm font-medium text-gray-500 mb-2">Enter 4-digit UPI PIN</p>
         </div>
      </div>

      {/* Keypad */}
      <div className="bg-gray-50/80 backdrop-blur-sm pb-6 pt-4 px-6 rounded-t-3xl border-t border-gray-100">
         <div className="flex items-center justify-center gap-1.5 mb-6 opacity-70">
            <span className="material-icons-round text-[#135bec] text-sm">verified_user</span>
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Secure by UPI</span>
         </div>

         <div className="grid grid-cols-3 gap-y-3 gap-x-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <button 
                    key={num}
                    onClick={() => handleNumClick(num.toString())}
                    className="h-16 w-full flex items-center justify-center rounded-2xl text-2xl font-semibold text-gray-800 hover:bg-gray-200/50 active:scale-95 transition-all duration-150"
                >
                    {num}
                </button>
            ))}
            <div className="h-16 w-full"></div>
            <button onClick={() => handleNumClick('0')} className="h-16 w-full flex items-center justify-center rounded-2xl text-2xl font-semibold text-gray-800 hover:bg-gray-200/50 active:scale-95 transition-all duration-150">0</button>
            <button onClick={handleBackspace} className="h-16 w-full flex items-center justify-center rounded-2xl text-gray-800 hover:bg-gray-200/50 active:scale-95 transition-all duration-150 group">
                <span className="material-icons-round text-2xl text-gray-400 group-hover:text-[#135bec] transition-colors">backspace</span>
            </button>
         </div>

         <div className="mt-4 flex justify-center pb-2">
            <button 
                onClick={handleSubmit}
                disabled={pin.length !== 4}
                className={`w-14 h-14 bg-[#135bec] text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center active:scale-90 transition-all duration-200 ${pin.length !== 4 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
            >
                <span className="material-icons-round text-3xl">check</span>
            </button>
         </div>
      </div>
    </div>
  );
};

export default PinEntry;
