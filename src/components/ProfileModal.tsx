import React, { useState } from 'react';
import { Person } from '../types/dating';
import { 
  X, ExternalLink, Heart, Sparkles, Compass, ShieldAlert, 
  CheckCircle2, Flame, Brain, Coffee, UserCheck, MessageSquareHeart, 
  Activity, ArrowRight, Share2, Award
} from 'lucide-react';

interface ProfileModalProps {
  person: Person | null;
  onClose: () => void;
  onStartDateWith: (person: Person) => void;
  onViewRankingsFor: (person: Person) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  person,
  onClose,
  onStartDateWith,
  onViewRankingsFor,
}) => {
  const [activeTab, setActiveTab] = useState<'agent' | 'sources' | 'persona'>('agent');

  if (!person) return null;

  const { twoSources, agentAnalysis } = person;
  const energy = agentAnalysis.qualities.energyBalance;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-neutral-200">
        
        {/* Cover / Header Banner */}
        <div className="relative bg-gradient-to-r from-rose-950/60 via-neutral-900 to-amber-950/60 border-b border-neutral-800 p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900/80 border border-neutral-700/60 text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-rose-500/40 shadow-xl"
              />
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                Agent Live
              </span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {person.name}
                </h2>
                <span className="text-sm text-neutral-400 font-mono-code">
                  {person.handle}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-medium">
                  {agentAnalysis.qualities.archetype}
                </span>
              </div>
              <p className="text-sm text-neutral-300 font-medium">
                {person.role} <span className="text-rose-400">@ {person.company}</span> · {person.location}
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 italic font-editorial">
                "{person.tagline}"
              </p>
            </div>
          </div>

          {/* Official Source Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800/80">
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              The Two Verified Sources:
            </span>
            <a
              href={twoSources.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-900/60 text-xs font-medium transition"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>LinkedIn: {twoSources.linkedin.handle}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            <a
              href={twoSources.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-pink-950/60 border border-pink-500/40 text-pink-300 hover:text-white hover:bg-pink-900/60 text-xs font-medium transition"
            >
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
              <span>Instagram: @{twoSources.instagram.handle}</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 bg-neutral-950/80 px-6">
          <button
            onClick={() => setActiveTab('agent')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition ${
              activeTab === 'agent'
                ? 'border-rose-500 text-rose-400 bg-rose-500/5'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Agent Analysis (Needs, Hobbies, Qualities)
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition ${
              activeTab === 'sources'
                ? 'border-blue-500 text-blue-400 bg-blue-500/5'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            The Two Raw Sources Breakdown
          </button>
          <button
            onClick={() => setActiveTab('persona')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 transition ${
              activeTab === 'persona'
                ? 'border-amber-500 text-amber-400 bg-amber-500/5'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Agent Dating Persona & Prompt
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: AGENT ANALYSIS */}
          {activeTab === 'agent' && (
            <div className="space-y-6">
              
              {/* Needs Section */}
              <div>
                <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm uppercase tracking-wider mb-3">
                  <Heart className="w-4 h-4" />
                  <span>Core Relationship Needs (Synthesized by Agent)</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {agentAnalysis.needs.map((need, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start space-x-3"
                    >
                      <span className="p-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-mono-code font-bold mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                        {need}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hobbies & Passions */}
              <div>
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">
                  <Flame className="w-4 h-4" />
                  <span>Hobbies & Leisure Passions (Read From Instagram)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {agentAnalysis.hobbies.map((hobby, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium flex items-center space-x-1.5"
                    >
                      <Coffee className="w-3.5 h-3.5" />
                      <span>{hobby}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Intellectual Interests */}
              <div>
                <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">
                  <Brain className="w-4 h-4" />
                  <span>Intellectual Pursuits (Read From LinkedIn)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {agentAnalysis.interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium flex items-center space-x-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Qualities & Behavioral Balance */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-white font-bold text-sm uppercase tracking-wider">
                    <Activity className="w-4 h-4 text-rose-400" />
                    <span>Behavioral Qualities & Personality Matrix</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono-code">
                    {agentAnalysis.qualities.vibe}
                  </span>
                </div>

                {/* Energy Balance Bars */}
                <div className="space-y-3 mb-6">
                  {Object.entries(energy).map(([key, val]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="capitalize text-neutral-300">{key} Index</span>
                        <span className="font-mono-code text-rose-400">{val}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-500"
                          style={{ width: `${val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Green Flags and Dealbreakers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="flex items-center space-x-1.5 text-emerald-400 text-xs font-bold uppercase mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Green Flags</span>
                    </div>
                    <ul className="text-xs text-neutral-300 space-y-1">
                      {agentAnalysis.qualities.greenFlags.map((gf, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-emerald-400">•</span>
                          <span>{gf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
                    <div className="flex items-center space-x-1.5 text-rose-400 text-xs font-bold uppercase mb-2">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Dealbreakers</span>
                    </div>
                    <ul className="text-xs text-neutral-300 space-y-1">
                      {agentAnalysis.qualities.dealbreakers.map((db, idx) => (
                        <li key={idx} className="flex items-start space-x-1.5">
                          <span className="text-rose-400">•</span>
                          <span>{db}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: RAW SOURCES BREAKDOWN */}
          {activeTab === 'sources' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* LinkedIn Source Card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-blue-500/30">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <h3 className="text-base font-bold text-white">Source 1: LinkedIn Public</h3>
                  </div>
                  <a
                    href={twoSources.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 hover:underline flex items-center space-x-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Extracted Headline</span>
                    <p className="font-medium text-white">{twoSources.linkedin.extractedData.headline}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Leadership Style</span>
                    <p>{twoSources.linkedin.extractedData.leadershipStyle}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Work Ethic & Drive</span>
                    <p>{twoSources.linkedin.extractedData.workEthic}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Career Ambition</span>
                    <p>{twoSources.linkedin.extractedData.careerAmbition}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Education</span>
                    <p className="font-mono-code text-blue-300">{twoSources.linkedin.extractedData.education}</p>
                  </div>
                </div>
              </div>

              {/* Instagram Source Card */}
              <div className="p-5 rounded-2xl bg-neutral-950 border border-pink-500/30">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                    <h3 className="text-base font-bold text-white">Source 2: Instagram Public</h3>
                  </div>
                  <a
                    href={twoSources.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-400 hover:underline flex items-center space-x-1"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Public Bio</span>
                    <p className="font-medium text-white italic">"{twoSources.instagram.extractedData.bioText}"</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Aesthetic Vibe</span>
                    <p>{twoSources.instagram.extractedData.aestheticVibe}</p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Weekend Rituals</span>
                    <ul className="list-disc list-inside space-y-0.5 text-xs">
                      {twoSources.instagram.extractedData.weekendRituals.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Travel Highlights</span>
                    <p className="text-xs text-neutral-300">
                      {twoSources.instagram.extractedData.travelHighlights.join(' · ')}
                    </p>
                  </div>
                  <div>
                    <span className="text-neutral-500 uppercase text-[10px] font-bold block">Humor Style</span>
                    <p>{twoSources.instagram.extractedData.humorStyle}</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: AGENT PERSONA & PROMPT */}
          {activeTab === 'persona' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 uppercase text-[10px] font-bold block mb-1">
                  Agent Identifier & Dating Philosophy
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  {agentAnalysis.agentConfig.agentName}
                </h4>
                <p className="text-sm font-editorial text-neutral-200 italic leading-relaxed">
                  "{agentAnalysis.agentConfig.datingPhilosophy}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 uppercase text-[10px] font-bold block mb-1">
                  Flirting & Conversational Style
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {agentAnalysis.agentConfig.flirtingStyle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-amber-500/30">
                <span className="text-amber-400 uppercase text-[10px] font-bold block mb-1 font-mono-code">
                  System Persona Prompt (Injected Into Date Harness)
                </span>
                <pre className="text-xs font-mono-code text-neutral-300 bg-neutral-900 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {agentAnalysis.agentConfig.datePersonaPrompt}
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-neutral-500 uppercase text-[10px] font-bold block mb-2">
                  Agent Evaluation Priorities When Dating
                </span>
                <div className="flex flex-wrap gap-2">
                  {agentAnalysis.agentConfig.evaluationPriorities.map((p, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-medium text-neutral-200"
                    >
                      ✓ {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onViewRankingsFor(person);
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-sm font-semibold flex items-center justify-center space-x-2 transition"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>View Full Ranked Matches for {person.name.split(' ')[0]}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onStartDateWith(person);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-sm font-semibold flex items-center justify-center space-x-2 transition shadow-lg shadow-rose-900/30"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>Watch Agent Date on Their Behalf</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
