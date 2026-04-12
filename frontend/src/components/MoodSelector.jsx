const moods = [
  { id: 'sedih', label: 'Sedih', emoji: '😢', color: 'bg-blue-400 hover:bg-blue-500', description: 'Lagi down dan butuh didengarkan' },
  { id: 'marah', label: 'Marah', emoji: '😤', color: 'bg-orange-400 hover:bg-orange-500', description: 'Ada yang bikin kesel' },
  { id: 'overthinking', label: 'Overthinking', emoji: '😵', color: 'bg-purple-400 hover:bg-purple-500', description: 'Pikiran lagi kemana-mana' },
  { id: 'bahagia', label: 'Bahagia', emoji: '😊', color: 'bg-green-400 hover:bg-green-500', description: 'Pengen berbagi kebahagiaan' },
]

export default function MoodSelector({ onSelectMood }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="text-center mb-12">
          <div className="text-7xl mb-4 animate-bounce-slow">💙</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Si Udin
          </h1>
          <p className="text-xl text-gray-600">
            Teman Curhat Online yang Selalu Siap Dengerin Kamu
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Gimana perasaan kamu hari ini?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.id}
                onClick={() => onSelectMood(mood)}
                className={`${mood.color} transform transition-all duration-300 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1`}
              >
                <div className="text-5xl mb-3">{mood.emoji}</div>
                <div className="text-2xl font-bold mb-2">{mood.label}</div>
                <div className="text-sm opacity-90">{mood.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm space-y-2">
          <p className="flex items-center justify-center gap-2">
            <span className="text-lg">✨</span>
            <span>Cerita apa aja, aku siap dengerin tanpa menghakimi</span>
          </p>
          <p className="text-xs text-gray-400">Privasi kamu aman, percakapan tidak disimpan</p>
        </div>
      </div>
    </div>
  )
}
