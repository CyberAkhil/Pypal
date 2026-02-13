import React from 'react';

interface ProfileProps {
  onBack: () => void;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onBack, onLogout }) => {
  return (
    <div className="bg-[#f6f7f8] h-full font-display text-gray-900 relative overflow-y-auto no-scrollbar">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 flex justify-between items-center z-10 relative">
        <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-200 transition-colors">
            <span className="material-icons-round text-gray-600">arrow_back</span>
        </button>
        <h1 className="text-lg font-semibold text-gray-800">My Profile</h1>
        <button className="p-2 -mr-2 rounded-full hover:bg-gray-200 transition-colors">
            <span className="material-icons-round text-gray-600">more_vert</span>
        </button>
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#137fec] to-blue-300">
            <div className="p-1 bg-white rounded-full">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzxImQZcVMg_4WQ11YrzdR0JsRJWw1P4QLPO1yhg4O-XpkTPy7mj2MDMSWxkjasgB2aJYrIl6EmuofQ2YgzurFC63wB_hZGeCGscxsuJDc5U_LFwUj-r1PJ63XbtGynh_yXWrmBGrBUK-iZCKmzaEKb2W95ro4poKZEP_2O1oHkzS1XGjZHv-dRjyadpoY8gCXf3i7qJISwqg9JMT_qTNCFZO5q1Z53sVcJ188rjA27Oj-OHh-CabMsQmcp1iWZWDhmC89tQIsmT0" alt="Profile" className="w-24 h-24 rounded-full object-cover"/>
            </div>
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Sarah Jenkins</h2>
        <button className="mt-1 flex items-center space-x-1 px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors group">
            <span className="text-[#137fec] font-medium">sarah.j@okaxis</span>
            <span className="material-icons-round text-sm text-[#137fec] group-hover:scale-110 transition-transform">content_copy</span>
        </button>
      </div>

      <div className="px-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">Scan to pay</span>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaZDQfduQs0dPG-l5vn9qbgs61K26RAIZAlbGofdD699sBYPj4ETmhSv51lv4FmBX_07RvKRadFwKxyhn7A6sBfQmdjfjwhFG5cwvnLL6SkM2qos8RkEF7njP2kaTytMQEslKcvzMIT6aVgALNKTD52eQ2BMVj4Gls2OsMkX8FuHFe6fLjVIWAyjHp29q7zrL9AiEmBmRG34lEZzg0zXyeeOZJFLmo8PnN9xe87YDeUyBcCyC3YLjSjBg-t76qpF4T-pVr1eyp51k" alt="UPI" className="h-4 opacity-50 grayscale"/>
            </div>
            <div className="bg-white p-2 rounded-lg border border-gray-100">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs6sieCwJC5tJClExjDmJbcprrD1OHehEW3AkrkiLIKiln9rzpGLT1pgDZUr7dNM70xHUt6z5KmeqbLfrMmiBrVVDuUy383ifR48TTj8Hc2ozUMnuy8B_mMpswoSe0hQBUqHofQIV0SE1dReY492NDB58v6aQe9PjsaBC0ie-pkz0jdBt0psI5qMkdrGAL16AkNuUAvE1QsjXD199Uf-3vz5O146vxMfhhx3ZwzCnI-xy0kkdNsekMvYE_JOJRuJ-1VC7YWKk9WGo" alt="QR Code" className="w-48 h-48 mix-blend-multiply"/>
            </div>
            <div className="flex space-x-4 mt-8 w-full">
                <button className="flex-1 flex justify-center items-center py-3 px-4 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-gray-100 transition-colors">
                    <span className="material-icons-round mr-2 text-xl">share</span> Share
                </button>
                <button className="flex-1 flex justify-center items-center py-3 px-4 rounded-lg bg-[#137fec] text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                    <span className="material-icons-round mr-2 text-xl">download</span> Download
                </button>
            </div>
        </div>
      </div>

      <div className="px-6 mt-8">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 pl-1">Account</h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {['account_balance', 'settings', 'security', 'help_outline'].map((icon, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group text-left">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#137fec] group-hover:bg-[#137fec] group-hover:text-white transition-colors">
                            <span className="material-icons-round">{icon}</span>
                        </div>
                        <div>
                            <span className="block text-gray-800 font-medium">{['Bank Accounts', 'Payment Settings', 'Security', 'Help & Support'][i]}</span>
                            <span className="block text-xs text-gray-500 mt-0.5">Manage details</span>
                        </div>
                    </div>
                    <span className="material-icons-round text-gray-400">chevron_right</span>
                </button>
            ))}
        </div>
      </div>

      <div className="px-6 mt-8 mb-8">
        <button onClick={onLogout} className="w-full py-3 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 font-medium transition-colors text-sm">
            Log Out
        </button>
        <p className="text-center text-xs text-gray-400 mt-4">Version 2.4.0 (Build 302)</p>
      </div>
    </div>
  );
};

export default Profile;
