import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [mobile, setMobile] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length > 0) {
      onLogin();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white relative">
      {/* Status Bar Area */}
      <div className="h-12 w-full flex justify-between items-center px-6 pt-2 z-20 absolute top-0 left-0 text-gray-900">
        <span className="font-semibold text-sm">9:41</span>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-sm">signal_cellular_alt</span>
          <span className="material-icons text-sm">wifi</span>
          <span className="material-icons text-sm">battery_full</span>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-12 pb-6 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 w-full flex flex-col items-center px-8">
          <div className="w-56 h-56 relative mb-6">
            <img 
              alt="Secure Wallet Illustration" 
              className="w-full h-full object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxNRutem5zsW2nVVOLeq_jwS8A_xv56eghz4R59zUCyjpN9kEOd5-jvN_hbwW7rXi8N9x5PpNhGKX6bIFSrW7dtf8iqKc9nhiSWg62w5GQT9sZnH05y7pt6wqpXUSxxm_LoAT-XEQM1DhiaJEmYf7vrottuXv1jeP-3ZnQvUs-sMSXYO_zJG_ZxvzQpGKL7ETLUwU8j_nfux0riXRP-paFHS2W8cOWtamj3-rBNTQhFqC-on5frHApBYxlLPy2ww_y8ftt_R5YNnc"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2 tracking-tight">
            Secure Login
          </h1>
          <p className="text-center text-gray-500 text-sm max-w-[260px] leading-relaxed">
            Verify your number to access your secure digital wallet instantly.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full px-6 pb-8 bg-white z-10 rounded-t-3xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="flex justify-center -mt-3 mb-8">
          <div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm border border-emerald-100">
            <span className="material-icons-round text-sm mr-1">gpp_good</span>
            Bank-Grade Security
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 ml-1" htmlFor="mobile">
              Mobile Number
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                <div className="flex items-center text-gray-700 font-medium pr-3 border-r border-gray-200 h-6">
                  <img alt="India Flag" className="w-5 h-auto mr-2 rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsWbxItWlc_vPeS-DBuSr0NkF4k00DCNbWgjI1jK5eg3LP2DzmEwO0R77dXkAAwqVkDUman05YOjgTcHbKILw9wDQLAGj3BovSydB4FwU7EB8Ybt60DFz-zQ-wM0uPoxfSJO2EKZt8NUZeUaNi7bsty8HI2X7wYDoOwXCjqqNdzJxG0iDI-tW2QXwm4FIsAOOQfCAhHCCQy5KaIEzfFidAQCCIYQTEQILTQPOKzs58tB3aLot5VyNG6kjV_sO_xF4cPajne49GRuY"/>
                  +91
                </div>
              </div>
              <input 
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="block w-full pl-24 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-lg font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] transition-all shadow-sm"
                placeholder="98765 00000"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="material-icons-round text-gray-400 text-xl">smartphone</span>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#137fec] hover:bg-[#0e62b8] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            <span className="mr-2">Proceed Securely</span>
            <span className="material-icons-round text-white group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </form>

        <div className="mt-8 mb-4 flex flex-col items-center justify-center opacity-80">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">Powered by</p>
          <div className="flex items-center space-x-2 opacity-70">
            <div className="h-6 flex items-center">
              <div className="flex font-bold text-gray-600 italic text-lg tracking-tight">
                <span className="text-orange-500">BHIM</span><span className="text-green-600 ml-1">UPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
