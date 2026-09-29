import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google GenAI if API key exists
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Audio cache to avoid re-generating common script lines
const audioCache = new Map<string, string>();

// API route for natural AI voice generation using Gemini 3.8 Flash Lite TTS
app.post('/api/tts', async (req, res) => {
  try {
    const { text, voice = 'Kore', style = 'Warm, engaging, natural conversational host' } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text prompt is required' });
    }

    const cacheKey = `${voice}_${style}_${text.trim()}`;
    if (audioCache.has(cacheKey)) {
      return res.json({
        success: true,
        audio: audioCache.get(cacheKey),
        source: 'cache',
      });
    }

    if (!ai) {
      return res.json({
        success: false,
        reason: 'NO_API_KEY',
        message: 'No server Gemini API key configured. Browser neural voice fallback will be used.',
      });
    }

    // Call Gemini 3.8 Flash Lite TTS
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: text.trim(),
              speechMetadata: {
                style,
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (base64Audio) {
      const audioUri = `data:audio/wav;base64,${base64Audio}`;
      // Cache the result (keep max 100 items in memory)
      if (audioCache.size > 100) {
        const firstKey = audioCache.keys().next().value;
        if (firstKey) audioCache.delete(firstKey);
      }
      audioCache.set(cacheKey, audioUri);

      return res.json({
        success: true,
        audio: audioUri,
        source: 'gemini-tts',
      });
    }

    return res.json({
      success: false,
      reason: 'EMPTY_AUDIO',
      message: 'No audio returned from Gemini TTS',
    });
  } catch (error: any) {
    console.warn('Gemini TTS warning (falling back to browser speech):', error?.message || error);
    return res.json({
      success: false,
      reason: 'TTS_ERROR',
      message: error?.message || 'Error executing Gemini TTS',
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(apiKey),
    timestamp: new Date().toISOString(),
  });
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    // Development: mount Vite as middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve built static files
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
