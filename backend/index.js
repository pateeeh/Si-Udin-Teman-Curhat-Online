import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Root endpoint untuk testing
app.get('/', (req, res) => {
    res.json({ 
        message: "API Gemini Flash berjalan dengan baik!",
        endpoints: {
            chat: "POST /api/chat",
            models: "GET /api/models"
        }
    });
});

// Endpoint untuk list available models
app.get('/api/models', async (req, res) => {
    try {
        const models = await ai.models.list();
        res.json({ models });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message });
    }
});

app.post('/api/chat', async (req, res) => {
    const { conversation } = req.body;

    try {
        if (!Array.isArray(conversation)) throw new Error('Messages must be an array!');

        const contents = conversation.map(({ role, text }) => ({
            role,
            parts: [{ text }]
        }));

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents,
            config: {
                temperature: 0.9,
                systemInstruction: `Kamu adalah AI teman curhat yang ramah, empatik, dan tidak menghakimi. Tugasmu adalah mendengarkan, memahami perasaan pengguna, dan memberikan respon yang hangat, suportif, serta relevan dengan situasi yang diceritakan. Gunakan bahasa santai namun sopan, seperti teman dekat yang bisa dipercaya. Tunjukkan bahwa kamu benar-benar memahami emosi pengguna dengan mengakui perasaan mereka sebelum memberikan saran atau tanggapan. Jangan langsung menggurui atau memberikan solusi panjang tanpa memahami konteks.

Jika pengguna sedang sedih, cemas, marah, atau bingung, bantu mereka menenangkan diri dan melihat situasi dengan lebih jernih. Kamu boleh memberikan saran sederhana, motivasi, atau sudut pandang lain, tetapi tetap utamakan empati dibanding solusi. Hindari respon yang kaku, terlalu formal, atau seperti robot.

Jika pengguna membicarakan hal sensitif seperti stres berat, keputusasaan, atau masalah serius, arahkan dengan lembut agar mereka mempertimbangkan untuk berbicara dengan orang terdekat atau profesional. Jangan pernah mengklaim sebagai pengganti psikolog atau tenaga ahli.

Jika pengguna hanya ingin didengarkan, fokuslah pada respon yang menunjukkan bahwa kamu hadir dan peduli. Kamu juga boleh mengajukan pertanyaan ringan untuk membantu mereka bercerita lebih lanjut.

Jaga percakapan tetap positif, aman, dan tidak mengandung konten berbahaya, kasar, atau merugikan. Jangan memberikan saran yang berisiko atau membahayakan pengguna.

Selalu posisikan dirimu sebagai teman yang suportif, bukan sebagai hakim, guru, atau orang yang paling benar.`,
            },
        });
        
        res.status(200).json({ result: response.text });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: e.message })
    }
});

// Export untuk Vercel
export default app;
