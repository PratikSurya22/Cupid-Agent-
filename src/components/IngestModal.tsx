import React, { useState } from 'react';
import { Person } from '../types/dating';
import { runScraperPipeline, ScrapingProgressLog, SAMPLE_PAIRS, SamplePair } from '../services/scraperPipeline';
import { X, Globe, Link2, Sparkles, Terminal, CheckCircle2, ArrowRight, Loader2, Zap } from 'lucide-react';

interface IngestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPersonAdded: (newPerson: Person) => void;
}

export const IngestModal: React.FC<IngestModalProps> = ({
  isOpen,
  onClose,
  onPersonAdded,
}) => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [isScraping, setIsScraping] = useState(false);
  const [logs, setLogs] = useState<ScrapingProgressLog[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelectSample = (sample: SamplePair) => {
    setLinkedinUrl(sample.linkedinUrl);
    setInstagramUrl(sample.instagramUrl);
    setError(null);
  };

  const handleStartIngest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkedinUrl.trim() || !instagramUrl.trim()) {
      setError('Please provide both an official LinkedIn URL and a public Instagram URL.');
      return;
    }

    setIsScraping(true);
    setLogs([]);
    setError(null);

    try {
      const newPerson = await runScraperPipeline(linkedinUrl, instagramUrl, log => {
        setLogs(prev => [...prev, log]);
      });

      // Brief delay to appreciate completion
      setTimeout(() => {
        setIsScraping(false);
        onPersonAdded(newPerson);
        onClose();
      }, 700);
    } catch (err: any) {
      setError(err?.message || 'Scraping pipeline encountered a connection issue.');
      setIsScraping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto text-neutral-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-400">
              <Link2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-editorial">
                Submit Member Profiles
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Connect your public LinkedIn and Instagram to deploy your autonomous dating agent.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isScraping}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition disabled:opacity-30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleStartIngest} className="space-y-5 mb-6">
          
          {/* Quick-Fill Sample Real Figures */}
          <div>
            <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2 flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Or 1-Click Test With Notable Public Figures</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SAMPLE_PAIRS.map(sample => (
                <button
                  type="button"
                  key={sample.name}
                  onClick={() => handleSelectSample(sample)}
                  className="p-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800/80 border border-neutral-800 text-left transition"
                >
                  <span className="text-xs font-bold text-white block">{sample.name}</span>
                  <span className="text-[11px] text-neutral-400">{sample.role} @ {sample.company}</span>
                </button>
              ))}
            </div>
          </div>

          {/* LinkedIn Input */}
          <div>
            <label className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1.5">
              Source 1: LinkedIn Public Profile URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={linkedinUrl}
                onChange={e => setLinkedinUrl(e.target.value)}
                placeholder="https://www.linkedin.com/in/username"
                disabled={isScraping}
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-blue-500 focus:outline-none text-white text-sm placeholder:text-neutral-600 transition"
              />
              <span className="absolute right-3 top-3 text-[11px] font-mono-code text-blue-400/80 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/20">
                Professional Record
              </span>
            </div>
          </div>

          {/* Instagram Input */}
          <div>
            <label className="text-xs font-bold text-pink-400 uppercase tracking-wider block mb-1.5">
              Source 2: Instagram Public Profile URL
            </label>
            <div className="relative">
              <input
                type="url"
                value={instagramUrl}
                onChange={e => setInstagramUrl(e.target.value)}
                placeholder="https://www.instagram.com/username"
                disabled={isScraping}
                className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 focus:border-pink-500 focus:outline-none text-white text-sm placeholder:text-neutral-600 transition"
              />
              <span className="absolute right-3 top-3 text-[11px] font-mono-code text-pink-400/80 bg-pink-950/60 px-2 py-0.5 rounded border border-pink-500/20">
                Visual & Lifestyle Record
              </span>
            </div>
          </div>

          {error && (
            <p className="text-xs text-rose-400 bg-rose-950/30 p-3 rounded-xl border border-rose-500/30">
              {error}
            </p>
          )}

          {/* Submit CTA */}
          <button
            type="submit"
            disabled={isScraping}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold text-sm flex items-center justify-center space-x-2 transition shadow-lg shadow-rose-900/30 disabled:opacity-50"
          >
            {isScraping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Running Scraper & Synthesizing Agent...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Extract Sources, Mint Agent & Run Autonomous Dates</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>

        </form>

        {/* Live Scraper Output Terminal (When Running) */}
        {logs.length > 0 && (
          <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-4 font-mono-code text-xs space-y-2 max-h-56 overflow-y-auto">
            <div className="flex items-center space-x-2 text-neutral-400 border-b border-neutral-800 pb-2">
              <Terminal className="w-3.5 h-3.5 text-rose-400" />
              <span className="uppercase tracking-wider text-[10px] font-bold">
                Scraper Extraction Logs
              </span>
            </div>
            {logs.map((log, i) => (
              <div key={i} className="flex items-start space-x-2 leading-relaxed">
                <span className="text-neutral-500 text-[10px] shrink-0 mt-0.5">[{log.timestamp}]</span>
                <span className={`text-[11px] ${
                  log.source === 'network_ready' ? 'text-emerald-400 font-bold' :
                  log.source === 'ai_synthesis' ? 'text-amber-300' :
                  log.source === 'linkedin' ? 'text-blue-300' :
                  log.source === 'instagram' ? 'text-pink-300' :
                  'text-neutral-300'
                }`}>
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
