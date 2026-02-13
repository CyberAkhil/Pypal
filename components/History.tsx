import React from 'react';

interface HistoryProps {
  onBack: () => void;
}

const History: React.FC<HistoryProps> = ({ onBack }) => {
  const transactions = [
    { id: 1, name: 'Starbucks Coffee', date: '10:42 AM • Beverages', amount: '-$5.50', type: 'debit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwgW5_Xl0Z7joHJ4HxDfEEmqwyBa79k9diEQEHfXzXUxsNIOH4_-T_fNwKOvuNFJc_Qp4q0NvAeWK3oLRCCSb73TPN-nc5_5BXzb0OSAUFhfgtR3dgpfNi9YxnNBBZbQwN1UJOodrNQ78onQVwgV3ANpd9QFGSm9o6TlATwxPqqrlUPVRpvCU2T8fv_BZFRJcv8SGkkXkoPmbK3Fn-O0lf7wkzVkeifQRgDTdrgDoZDw4folJgPc2Ri0kn0iSLwHWxB0F0w7WNDUI' },
    { id: 2, name: 'Alice Smith', date: '9:15 AM • Dinner split', amount: '+$20.00', type: 'credit', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoUT5NngIFmy_yzUAzi_ZpXPLTn8MdJSwrrNeMlA3Iu1bBDI3jIg3gMypHogNZIwdo6Je6jXOtS14xHnUE-4oPIDwRT64PhwnuGxwGqlxcJWU05S8odkScqeJC3f44zDMoK3pbu_7YlP9GChk-iOoLeTxb2CUeCm1vaaEB8CKKCK0R7M5higptXLs8Vkr3R9HKu6l29cym7MwXkWNXbxcvllD3yIPtfKxx77gfqUidZSW7Raj4nWIfFMl9muVmmiY0xXsPYvcgYNQ' },
    { id: 3, name: 'Amazon Purchase', date: '8:20 AM • Shopping', amount: '-$42.99', type: 'debit', initial: 'AZ', color: 'orange' },
  ];

  return (
    <div className="bg-[#f6f8f6] h-full flex flex-col font-inter">
      {/* Header */}
      <header className="bg-white z-20 sticky top-0 pb-2 shadow-sm">
        <div className="px-4 py-3 flex items-center justify-between">
            <button onClick={onBack} className="p-2 -ml-2 rounded-full active:bg-gray-100 transition-colors">
                <span className="material-icons text-gray-900">arrow_back_ios_new</span>
            </button>
            <h1 className="text-lg font-bold text-gray-900 flex-1 text-center pr-8">Transaction History</h1>
            <div className="w-8"></div>
        </div>

        <div className="px-4 mt-2">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-3 border-none rounded-lg leading-5 bg-[#f6f7f8] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#13ec5b] focus:bg-white transition-all shadow-sm" placeholder="Search by name or number" type="text"/>
            </div>
        </div>

        <div className="px-4 mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-2">
            <button className="px-4 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-full shadow-sm whitespace-nowrap">All</button>
            <button className="px-4 py-1.5 bg-[#f6f7f8] text-gray-600 text-sm font-medium rounded-full border border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">Debited</button>
            <button className="px-4 py-1.5 bg-[#f6f7f8] text-gray-600 text-sm font-medium rounded-full border border-transparent hover:border-gray-200 whitespace-nowrap transition-colors">Credited</button>
            <button className="px-4 py-1.5 bg-[#f6f7f8] text-gray-600 text-sm font-medium rounded-full border border-transparent hover:border-gray-200 whitespace-nowrap transition-colors flex items-center gap-1">
                Date <span className="material-icons text-sm">expand_more</span>
            </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-2 pb-20 no-scrollbar">
        <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 mb-3 sticky top-0 bg-[#f6f8f6] py-2 z-10 uppercase tracking-wide">Today</h2>
            
            {transactions.map(tx => (
                <div key={tx.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-none group active:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${tx.color === 'orange' ? 'bg-orange-100' : 'bg-gray-100'} overflow-hidden flex items-center justify-center relative shadow-sm`}>
                            {tx.img ? (
                                <img src={tx.img} alt={tx.name} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-orange-600 font-bold text-lg">{tx.initial}</span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900 leading-tight">{tx.name}</span>
                            <span className="text-xs text-gray-500 mt-0.5">{tx.date}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className={`block text-sm font-bold ${tx.type === 'credit' ? 'text-[#13ec5b]' : 'text-gray-900'}`}>{tx.amount}</span>
                    </div>
                </div>
            ))}
        </div>
      </main>
      
      <div className="absolute bottom-6 right-6 z-30">
        <button className="w-14 h-14 bg-[#13ec5b] text-black rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform">
            <span className="material-icons">download</span>
        </button>
      </div>
    </div>
  );
};

export default History;
