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

Backend berjalan di `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend berjalan di `http://localhost:5173`

## 🌐 Deploy ke Vercel

### Persiapan

1. Push ke GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Buka [vercel.com](https://vercel.com)
3. New Project → Import repository
4. Vercel akan auto-detect monorepo structure

### Environment Variables

Di Vercel dashboard, tambahkan:
- `GEMINI_API_KEY` = Your Gemini API Key

### Deploy

Klik Deploy! Vercel akan:
- Build backend di `/api`
- Build frontend di `/`
- Serve keduanya dari domain yang sama

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
- Untuk masalah serius, AI akan merekomendasikan konsultasi dengan profesional

## 📧 Support

Jika ada pertanyaan atau issue, silakan buat issue di repository ini.

---

**Dibuat dengan ❤️ untuk membantu Anda**
