# SiUdin AI - Frontend

Website modern untuk chatbot curhat dengan tampilan yang nyaman dan hangat.

## Fitur

- 💬 Chat interface seperti WhatsApp/Telegram
- 🎭 Mood selector (Sedih, Marah, Overthinking, Bahagia)
- ✨ Animasi smooth dan modern
- 📱 Fully responsive (mobile & desktop)
- 💙 Desain dengan nuansa cinta yang menenangkan
- ⌨️ Typing indicator saat AI sedang mengetik
- 🔄 Auto scroll ke pesan terbaru

## Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Copy `.env.example` ke `.env`:
```bash
cp .env.example .env
```

3. Edit `.env` dan sesuaikan URL API:
```
VITE_API_URL=http://localhost:3000
```

4. Jalankan development server:
```bash
npm run dev
```

5. Buka browser di `http://localhost:5173`

## Build untuk Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

## Deploy ke Vercel

1. Push ke GitHub
2. Import project di Vercel
3. Tambahkan environment variable `VITE_API_URL` dengan URL backend Anda
4. Deploy!

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios
