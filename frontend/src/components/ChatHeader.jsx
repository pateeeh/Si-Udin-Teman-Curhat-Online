export default function ChatHeader({ mood, onReset }) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary shadow-lg px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img 
          src="/logo.svg" 
          alt="SiUdin AI Logo" 
          className="w-12 h-12 rounded-full shadow-md"
        />
        <div>
          <h1 className="text-xl font-bold text-white">Si Udin</h1>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
            <p className="text-sm text-white/90">Teman Curhat Onlinemu</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        {mood && (
          <div className="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-sm text-white font-medium">{mood.label}</span>
          </div>
        )}
        <button
          onClick={onReset}
          className="text-white/90 hover:text-white hover:bg-white/20 transition-all p-2 rounded-full backdrop-blur-sm"
          title="Mulai dari awal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </div>
  )
}
