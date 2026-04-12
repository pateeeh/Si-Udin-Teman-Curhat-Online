# SiUdin AI - Backend

API backend untuk SiUdin AI Chatbot menggunakan Express.js dan Google Gemini AI.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Copy `.env.example` ke `.env`:
```bash
cp .env.example .env
```

3. Isi API key Gemini di `.env`:
```
GEMINI_API_KEY=your_api_key_here
```

4. Jalankan server:
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## Endpoints

- `GET /` - Health check
- `GET /api/models` - List available models
- `POST /api/chat` - Chat dengan Gemini

### Contoh Request:
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "conversation": [
      {
        "role": "user",
        "text": "Halo, apa kabar?"
      }
    ]
  }'
```

## Deploy ke Vercel

Backend sudah dikonfigurasi untuk deploy ke Vercel. Pastikan:
1. Push ke GitHub
2. Import di Vercel
3. Tambah environment variable `GEMINI_API_KEY`
4. Deploy!
