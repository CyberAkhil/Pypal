import React, { useEffect } from 'react';

interface ScannerProps {
  onClose: () => void;
  onScanSuccess: () => void;
}

const Scanner: React.FC<ScannerProps> = ({ onClose, onScanSuccess }) => {
  // Simulate auto-scan after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onScanSuccess();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onScanSuccess]);

  return (
    <div className="h-full w-full bg-black relative overflow-hidden flex flex-col font-display">
      {/* Background Feed Simulation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuC6P4L6RsTuNnvAlj8To6JJnGWFjf0ReoUSWhGUmm1y0IwJ8KWOop5CUk6BcYsxkMj3Im90XBcD7tiVPTj7TRaENGGj_9pxfzIfIMScsnDZqGlqNGmtBfCoDiVjugWV8b1F-eojxWUDiRZE1aOcv4osN3h04NKka5g2WxY4Z2ZhZS7kT7qDBgN0s2rRAhkFW2c2eoH5UiVXV3NNKjRZc7U71FM-l1-H5qDhnmetgAiGFzgbRiXXa_qvNmP--X2V0Ex7GzUYYrBmX2M)' }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[#102216]/80 flex flex-col items-center justify-between p-6">
        {/* Header */}
        <header className="w-full flex items-center justify-between pt-8 pb-4 z-20 text-white">
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <span className="material-icons-round text-3xl">close</span>
            </button>
            <h1 className="text-xl font-bold tracking-wide">Scan to Pay</h1>
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <span className="material-icons-round text-2xl">help_outline</span>
            </button>
        </header>

        {/* Scan Area */}
        <main className="flex-1 w-full flex flex-col items-center justify-center relative">
            <div className="relative w-64 h-64" onClick={onScanSuccess}>
                <div className="absolute -top-12 w-full text-center">
                    <p className="text-white/80 text-sm font-medium bg-black/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm">
                        Align QR code within frame
                    </p>
                </div>
                <div className="w-full h-full relative cursor-pointer">
                    {/* Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#0df259] rounded-tl-lg shadow-[0_0_15px_rgba(13,242,89,0.5)]"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#0df259] rounded-tr-lg shadow-[0_0_15px_rgba(13,242,89,0.5)]"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#0df259] rounded-bl-lg shadow-[0_0_15px_rgba(13,242,89,0.5)]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#0df259] rounded-br-lg shadow-[0_0_15px_rgba(13,242,89,0.5)]"></div>
                    {/* Scan Line */}
                    <div className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-[#0df259] to-transparent shadow-[0_0_20px_rgba(13,242,89,0.8)] animate-scan opacity-80"></div>
                </div>
            </div>

            <div className="mt-12 flex items-center gap-8">
                <button className="group flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-95 transition-transform">
                        <span className="material-icons-round text-[#0df259] text-2xl">qr_code_2</span>
                    </div>
                    <span className="text-xs font-medium tracking-wide text-white/90">My Code</span>
                </button>
                 <button className="group flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center active:scale-95 transition-transform">
                        <span className="material-icons-round text-white text-2xl">flash_on</span>
                    </div>
                    <span className="text-xs font-medium tracking-wide text-white/90">Flash</span>
                </button>
            </div>
        </main>

        <footer className="w-full pb-8 pt-4">
             <button className="w-full relative overflow-hidden group bg-[#162e1e] hover:bg-[#162e1e]/80 border border-white/10 backdrop-blur-md p-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200">
                <span className="material-icons-round text-[#0df259] text-xl">image</span>
                <span className="font-bold text-white tracking-wide">Upload from Gallery</span>
            </button>
        </footer>
      </div>
    </div>
  );
};

export default Scanner;
