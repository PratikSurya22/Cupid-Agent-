import React from 'react';
import { X, Server, Database, Cpu, Globe, Shield, Terminal, Zap, Code } from 'lucide-react';

interface TechStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-neutral-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Technical Architecture & Scraping Stack
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                How CupidAgents scrapes LinkedIn & Instagram, synthesizes agents, and runs dating simulations.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 200 Char Executive Summary */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-rose-950/40 via-neutral-900 to-amber-950/40 border border-rose-500/30">
          <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Executive Overview (Under 200 Chars)</span>
          </div>
          <p className="text-sm sm:text-base font-editorial text-neutral-100 italic leading-relaxed">
            "An autonomous multi-agent dating network where AI personas synthesized from public LinkedIn & Instagram profiles date each other through live dialogue, ranking true compatibility for 25+ real people."
          </p>
        </div>

        {/* Core Stack Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          
          {/* LinkedIn Scraper */}
          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">LinkedIn Public Profile Scraper</h3>
                <span className="text-xs text-blue-400 font-mono-code">HTML / JSON-LD / OpenGraph</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>Public Ingestion:</strong> Connects to public vanity URLs without private authentication barriers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>Schema.org Parser:</strong> Extracts structured <code className="text-blue-300 font-mono-code text-xs">Person</code> JSON-LD entities, professional headlines, current positions, and educational credentials.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>OpenGraph Meta tags:</strong> Extracts verified title, summary blurbs, and public professional avatar assets.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong>Signal Extraction:</strong> Derives leadership style, career ambition, and intellectual pursuits.</span>
              </li>
            </ul>
          </div>

          {/* Instagram Scraper */}
          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-pink-500/10 border border-pink-500/30 rounded-lg text-pink-400">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Instagram Public Profile Scraper</h3>
                <span className="text-xs text-pink-400 font-mono-code">GraphQL / Web Query / CDN Meta</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-pink-400 font-bold">•</span>
                <span><strong>Public Profile Query:</strong> Scrapes public accounts via public web queries (<code className="text-pink-300 font-mono-code text-xs">/?__a=1&__d=dis</code>) and public profile meta headers.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-400 font-bold">•</span>
                <span><strong>Lifestyle & Aesthetic NLP:</strong> Scans bio text, recent public caption semantic topics, and tagged lifestyle activities.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-400 font-bold">•</span>
                <span><strong>Visual Energy Analysis:</strong> Identifies dominant palettes, outdoor/travel frequencies, pet presence, and candid hobbies.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-pink-400 font-bold">•</span>
                <span><strong>Signal Extraction:</strong> Derives weekend rituals, aesthetic vibe, humor style, and authentic leisure patterns.</span>
              </li>
            </ul>
          </div>

          {/* Agent Cognitive Architecture */}
          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Agent Cognitive Synthesis Layer</h3>
                <span className="text-xs text-amber-400 font-mono-code">Gemini 3.8 Flash & Agent Prompts</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Cross-Source Fusion:</strong> Reconciles the public LinkedIn ambition with the Instagram leisure/warmth persona.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Four Pillars Output:</strong> Synthesizes explicit <em>Needs</em>, concrete <em>Hobbies</em>, intellectual <em>Interests</em>, and behavioral <em>Qualities</em>.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Dating Persona Calibration:</strong> Injects dating philosophy, flirting style, dealbreakers, and green flags into the agent system prompt.</span>
              </li>
            </ul>
          </div>

          {/* Autonomous Dating Harness */}
          <div className="p-5 rounded-xl bg-neutral-950 border border-neutral-800">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Date Simulation & Ranking Engine</h3>
                <span className="text-xs text-rose-400 font-mono-code">Multi-Turn Dialogue & Vector Ranks</span>
              </div>
            </div>
            <ul className="text-xs sm:text-sm text-neutral-300 space-y-2 leading-relaxed">
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Turn-by-Turn Dates:</strong> Agents exchange real dialogue at chosen romantic venues while maintaining a private <em>Inner Monologue</em>.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Dynamic Chemistry Meter:</strong> Measures conversational cadence, emotional vulnerability, and banter response.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Global Matrix Rankings:</strong> Ranks all other people for any target individual across 5 weighted dimensions (Values 28%, Lifestyle 24%, Intellect 20%, Ambition 16%, Humor 12%).</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Pipeline Architecture Diagram */}
        <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-xl mb-6">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase text-neutral-400 tracking-wider mb-4">
            <Code className="w-4 h-4 text-rose-400" />
            <span>End-to-End Pipeline Dataflow</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-xs font-mono-code gap-3 text-center">
            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg w-full md:w-auto">
              <span className="text-blue-400 font-bold block">LinkedIn Profile</span>
              <span className="text-neutral-400 text-[11px]">Headline & Experience</span>
            </div>
            <span className="text-neutral-600 font-bold hidden md:inline">+</span>
            <div className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg w-full md:w-auto">
              <span className="text-pink-400 font-bold block">Instagram Profile</span>
              <span className="text-neutral-400 text-[11px]">Visuals, Bio, Rituals</span>
            </div>
            <span className="text-neutral-600 font-bold hidden md:inline">→</span>
            <div className="p-3 bg-neutral-900 border border-amber-500/30 rounded-lg w-full md:w-auto">
              <span className="text-amber-400 font-bold block">Agent Synthesis</span>
              <span className="text-neutral-400 text-[11px]">Needs, Hobbies, Qualities</span>
            </div>
            <span className="text-neutral-600 font-bold hidden md:inline">→</span>
            <div className="p-3 bg-neutral-900 border border-rose-500/30 rounded-lg w-full md:w-auto">
              <span className="text-rose-400 font-bold block">Live Agent Dates</span>
              <span className="text-neutral-400 text-[11px]">Dialogue & Inner Thoughts</span>
            </div>
            <span className="text-neutral-600 font-bold hidden md:inline">→</span>
            <div className="p-3 bg-neutral-900 border border-emerald-500/30 rounded-lg w-full md:w-auto">
              <span className="text-emerald-400 font-bold block">Ranked Fits</span>
              <span className="text-neutral-400 text-[11px]">Match Score #1 to #25</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition"
          >
            Close Documentation
          </button>
        </div>

      </div>
    </div>
  );
};
