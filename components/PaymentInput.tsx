import React, { useState } from 'react';
import { Recipient } from '../types';

interface PaymentInputProps {
  recipient: Recipient;
  onBack: () => void;
  onProceed: (amount: string, note: string) => void;
}

const PaymentInput: React.FC<PaymentInputProps> = ({ recipient, onBack, onProceed }) => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const handleNumClick = (num: string) => {
    if (amount.length < 7) {
        if (num === '.' && amount.includes('.')) return;
        setAmount(prev => prev + num);
    }
  };

  const handleBackspace = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const handlePay = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    onProceed(amount, note);
  };

  return (
    <div className="bg-[#f6f8f6] h-full flex flex-col items-center font-display text-gray-900 relative">
        {/* Header */}
        <div className="w-full px-4 pt-4 pb-2 flex justify-between items-center z-10">
            <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <span className="material-icons text-gray-800">arrow_back</span>
            </button>
            <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Money Transfer</div>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                <span className="material-icons text-gray-800">more_vert</span>
            </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center pt-6 px-6 w-full">
            {/* Recipient */}
            <div className="flex flex-col items-center space-y-3 mb-8">
                <div className="relative">
                    <img 
                        src={recipient.avatarUrl} 
                        alt={recipient.name} 
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {recipient.verified && (
                        <div className="absolute bottom-0 right-0 bg-[#13ec5b] text-black rounded-full p-1 border-2 border-white flex items-center justify-center">
                            <span className="material-icons text-[14px] font-bold">check</span>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold flex items-center justify-center gap-1">Paying {recipient.name}</h2>
                    <p className="text-sm text-gray-500 font-medium">{recipient.upiId}</p>
                    {recipient.bankName && (
                         <div className="mt-2 text-[10px] text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block font-semibold">
                            Banking Name: {recipient.bankName}
                        </div>
                    )}
                </div>
            </div>

            {/* Amount */}
            <div className="flex flex-col items-center w-full mb-6">
                 <div className="relative flex justify-center items-center">
                    <span className="text-5xl font-bold text-gray-900 mr-1">₹</span>
                    <span className="text-6xl font-extrabold text-gray-900 tracking-tight min-w-[20px]">
                        {amount || '0'}
                    </span>
                    {!amount && <span className="w-1 h-14 bg-[#13ec5b] ml-1 animate-pulse rounded-full absolute right-[-10px]"></span>}
                 </div>
            </div>

            {/* Note */}
            <div className="w-full max-w-xs relative group mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400">edit_note</span>
                </div>
                <input 
                    type="text" 
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border-none bg-white rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13ec5b]/50 shadow-sm text-center"
                    placeholder="Add a note (e.g. Dinner)"
                />
            </div>
        </div>

        {/* Keypad */}
        <div className="w-full pb-4 px-4 bg-[#f6f8f6]">
             <div className="grid grid-cols-3 gap-3 mb-24">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <button 
                        key={num} 
                        onClick={() => handleNumClick(num.toString())}
                        className="h-14 text-2xl font-medium rounded-lg text-gray-800 active:bg-gray-200 transition-colors"
                    >
                        {num}
                    </button>
                ))}
                <button onClick={() => handleNumClick('.')} className="h-14 text-2xl font-medium rounded-lg text-gray-800 active:bg-gray-200 transition-colors">.</button>
                <button onClick={() => handleNumClick('0')} className="h-14 text-2xl font-medium rounded-lg text-gray-800 active:bg-gray-200 transition-colors">0</button>
                <button onClick={handleBackspace} className="h-14 flex items-center justify-center rounded-lg text-gray-800 active:bg-gray-200 transition-colors">
                    <span className="material-icons">backspace</span>
                </button>
             </div>
        </div>

        {/* Bottom Sheet */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-[0_-5px_30px_-5px_rgba(0,0,0,0.1)] p-5 z-20 border-t border-gray-100">
             <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
             <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 p-1 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#004c8f]"></div>
                        <span className="relative text-white font-bold text-xs z-10">HDFC</span>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Paying from</p>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-sm text-gray-900">HDFC Bank **** 1234</span>
                            <span className="material-icons text-gray-400 text-sm">expand_more</span>
                        </div>
                    </div>
                </div>
                 <div className="text-right">
                    <p className="text-[10px] text-[#13ec5b] font-bold">Balance Checked</p>
                </div>
             </div>

             <button 
                onClick={handlePay}
                disabled={!amount}
                className="w-full bg-[#13ec5b] disabled:opacity-50 hover:bg-[#0bb542] text-black font-bold text-lg py-4 rounded-xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all"
             >
                <span className="material-icons text-xl">lock</span>
                Pay Securely ₹{amount || '0'}
             </button>

             <div className="mt-4 flex justify-center items-center space-x-2 text-[10px] text-gray-400">
                <span className="material-icons text-[12px]">shield</span>
                <span className="uppercase tracking-wider">Payments are 100% secure</span>
             </div>
        </div>
    </div>
  );
};

export default PaymentInput;
