import React, { useState } from 'react';

interface DashboardProps {
  onScan: () => void;
  onPayContact: () => void;
  onHistory: () => void;
  onProfile: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onScan, onPayContact, onHistory, onProfile }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <div className="bg-[#f6f7f8] font-inter text-gray-800 h-full flex flex-col relative">
      {/* Header */}
      <header className="pt-8 pb-4 px-6 flex justify-between items-center bg-white sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer" onClick={onProfile}>
            <img 
              alt="User Profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/20 p-0.5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBUfEspZFk9E4qs_7wtPr8PKwZn6ntN_sGwzeSNM9LGN3egpxgefmroa7K13yFpUhkISZKbxr7V9owPd5X22nfKgr_jJu8ZeiA2saarsX4oIBf9Dk4mJlRnneW7gAa1j8lDtlRcHs7jgA7J8V2EkuN58kF6LT2p5s72rs6Ja4hccpQX7MmV8Pp3nSZnkqy42PWhYZMRsOX5k6S_yv8QwIg0tHnu-U74i9QhWhFGLdArEET4b7L5llmVrcqkpfT1kGgl1TIOF70p3k"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div>
            <h1 className="text-xs font-medium text-gray-500">Welcome back</h1>
            <p className="text-sm font-bold text-gray-900 leading-tight">Alex Morgan</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            <span className="material-icons-round text-[20px]">notifications_none</span>
          </button>
          <button 
            className="p-2 rounded-full bg-blue-50 text-[#137fec] hover:bg-blue-100 transition"
            onClick={onScan}
          >
            <span className="material-icons-round text-[20px]">qr_code_scanner</span>
          </button>
        </div>
      </header>

      <main className="px-5 space-y-6 pt-4 flex-1 overflow-y-auto pb-24 no-scrollbar">
        {/* Hero Card */}
        <section className="bg-gradient-to-br from-[#137fec] to-[#0e63b8] rounded-2xl p-6 text-white shadow-lg shadow-blue-500/30 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-blue-100 text-xs font-medium uppercase tracking-wider mb-1">Total Balance</p>
                        <div className="flex items-center gap-2">
                            <h2 className="text-3xl font-bold tracking-tight">
                                {balanceVisible ? '$24,562.00' : '••••••••'}
                            </h2>
                            <button onClick={() => setBalanceVisible(!balanceVisible)} className="opacity-70 hover:opacity-100 transition">
                                <span className="material-icons-round text-lg">
                                    {balanceVisible ? 'visibility_off' : 'visibility'}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                        <p className="text-[10px] font-medium">UPI ID: alex@bank</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <button className="flex items-center gap-2 group/btn">
                        <div className="p-1.5 bg-white/10 rounded-full group-hover/btn:bg-white/20 transition">
                            <span className="material-icons-round text-sm">account_balance</span>
                        </div>
                        <span className="text-xs font-medium">Check Bank</span>
                    </button>
                    <button className="flex items-center gap-2 group/btn">
                        <div className="p-1.5 bg-white/10 rounded-full group-hover/btn:bg-white/20 transition">
                            <span className="material-icons-round text-sm">account_balance_wallet</span>
                        </div>
                        <span className="text-xs font-medium">Wallet Balance</span>
                    </button>
                </div>
            </div>
        </section>

        {/* Quick Actions */}
        <section>
            <h3 className="text-xs font-bold text-gray-900 mb-4 px-1 uppercase tracking-wide">Quick Actions</h3>
            <div className="flex justify-between items-start">
                <button onClick={onScan} className="flex flex-col items-center gap-2 w-[18%] group">
                    <div className="w-14 h-14 rounded-2xl bg-[#137fec] text-white flex items-center justify-center shadow-md shadow-blue-500/30 group-active:scale-95 transition-all">
                        <span className="material-icons-round text-2xl">qr_code_scanner</span>
                    </div>
                    <span className="text-[10px] font-medium text-center leading-tight text-gray-700">Scan QR</span>
                </button>
                <button onClick={onPayContact} className="flex flex-col items-center gap-2 w-[18%] group">
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#137fec] flex items-center justify-center shadow-sm border border-gray-100 group-active:scale-95 transition-all">
                        <span className="material-icons-round text-2xl">contacts</span>
                    </div>
                    <span className="text-[10px] font-medium text-center leading-tight text-gray-700">To Contact</span>
                </button>
                <button className="flex flex-col items-center gap-2 w-[18%] group">
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#137fec] flex items-center justify-center shadow-sm border border-gray-100 group-active:scale-95 transition-all">
                        <span className="material-icons-round text-2xl">dialpad</span>
                    </div>
                    <span className="text-[10px] font-medium text-center leading-tight text-gray-700">To Number</span>
                </button>
                <button className="flex flex-col items-center gap-2 w-[18%] group">
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#137fec] flex items-center justify-center shadow-sm border border-gray-100 group-active:scale-95 transition-all">
                        <span className="material-icons-round text-2xl">account_balance</span>
                    </div>
                    <span className="text-[10px] font-medium text-center leading-tight text-gray-700">To Bank</span>
                </button>
                 <button className="flex flex-col items-center gap-2 w-[18%] group">
                    <div className="w-14 h-14 rounded-2xl bg-white text-[#137fec] flex items-center justify-center shadow-sm border border-gray-100 group-active:scale-95 transition-all">
                        <span className="material-icons-round text-2xl">person</span>
                    </div>
                    <span className="text-[10px] font-medium text-center leading-tight text-gray-700">Self</span>
                </button>
            </div>
        </section>

        {/* People */}
        <section>
            <div className="flex justify-between items-center mb-4 px-1">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">People</h3>
                <button className="text-xs font-semibold text-[#137fec]">View all</button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5 snap-x">
                {['Sarah', 'Mike', 'John D.', 'Emma', 'David'].map((name, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 min-w-[64px] snap-start cursor-pointer group" onClick={onPayContact}>
                        <div className="relative">
                           <img 
                            className="w-14 h-14 rounded-full object-cover border-2 border-transparent group-hover:border-[#137fec] transition p-0.5 bg-white"
                            src={`https://i.pravatar.cc/150?u=${name}`} 
                            alt={name}
                           />
                        </div>
                        <span className="text-xs font-medium text-gray-700 truncate w-full text-center">{name}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* Bills */}
        <section>
            <h3 className="text-xs font-bold text-gray-900 mb-4 px-1 uppercase tracking-wide">Recharge & Bills</h3>
             <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="grid grid-cols-4 gap-y-6 gap-x-2">
                    {[
                        {icon: 'smartphone', label: 'Mobile', color: 'text-blue-600', bg: 'bg-blue-50'},
                        {icon: 'lightbulb', label: 'Electricity', color: 'text-yellow-600', bg: 'bg-yellow-50'},
                        {icon: 'satellite_alt', label: 'DTH', color: 'text-red-600', bg: 'bg-red-50'},
                        {icon: 'credit_card', label: 'Credit Card', color: 'text-indigo-600', bg: 'bg-indigo-50'},
                        {icon: 'directions_car', label: 'FastTag', color: 'text-teal-600', bg: 'bg-teal-50'},
                        {icon: 'local_fire_department', label: 'Gas', color: 'text-orange-600', bg: 'bg-orange-50'},
                        {icon: 'water_drop', label: 'Water', color: 'text-cyan-600', bg: 'bg-cyan-50'},
                        {icon: 'grid_view', label: 'More', color: 'text-gray-500', bg: 'bg-gray-50'},
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 cursor-pointer group">
                             <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition duration-300`}>
                                <span className="material-icons-round text-xl">{item.icon}</span>
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-end z-30">
        <button className="flex flex-col items-center gap-1 w-16 text-[#137fec]">
            <span className="material-icons-round text-2xl">home</span>
            <span className="text-[10px] font-medium">Home</span>
        </button>
        <div className="relative -top-6">
            <button 
                onClick={onScan}
                className="w-14 h-14 rounded-full bg-[#137fec] text-white flex items-center justify-center shadow-lg shadow-blue-500/40 hover:scale-105 transition-transform"
            >
                <span className="material-icons-round text-2xl">qr_code_scanner</span>
            </button>
        </div>
        <button 
            onClick={onHistory}
            className="flex flex-col items-center gap-1 w-16 text-gray-400 hover:text-gray-600 transition"
        >
            <span className="material-icons-round text-2xl">history</span>
            <span className="text-[10px] font-medium">History</span>
        </button>
      </nav>
    </div>
  );
};

export default Dashboard;
