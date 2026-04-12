# SiUdin AI - Teman Curhat Online

Aplikasi chatbot AI yang ramah dan empatik untuk menjadi teman curhat Anda. Dibangun dengan React, Express.js, dan Google Gemini AI.

## 📁 Struktur Project

```
siudin-ai/
├── backend/              # Express.js API
│   ├── index.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
├── frontend/             # React + Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── vercel.json          # Konfigurasi Vercel (Monorepo)
└── README.md
```

## 🚀 Setup Local

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env dan isi GEMINI_API_KEY
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📱 Fitur

- 💬 Chat interface seperti WhatsApp
- 🎭 Mood selector (Sedih, Marah, Overthinking, Bahagia)
- ✨ Animasi smooth dan modern
- 📱 Fully responsive (mobile & desktop)
- 💙 Desain dengan nuansa yang menenangkan
- ⌨️ Typing indicator
- 📝 Markdown support untuk AI responses

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express.js
- Google Gemini AI
- CORS enabled

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios
- React Markdown

## 📝 Catatan

- Privasi pengguna dijaga, percakapan tidak disimpan di server
- AI dirancang untuk memberikan dukungan emosional, bukan pengganti profesional

## 📧 Support

Jika ada pertanyaan atau issue, silakan buat issue di repository ini.

---