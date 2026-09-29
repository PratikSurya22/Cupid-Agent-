import React, { useState, useEffect, useRef } from 'react';
import { Person, DateSession, DateTurn, Venue } from '../types/dating';
import { VENUES } from '../data/peopleDataset';
import { generateDateSimulation } from '../services/datingEngine';
import { 
  Play, Pause, FastForward, RotateCcw, Heart, Sparkles, 
  MapPin, Coffee, Wine, Compass, Ship, Flame, CheckCircle2, 
  ShieldAlert, Brain, ChevronDown, ChevronUp, UserCheck, MessageSquareHeart, Award
} from 'lucide-react';

interface DateSimulatorProps {
  people: Person[];
  initialPersonAId?: string;
  initialPersonBId?: string;
  onViewRankingsFor: (person: Person) => void;
}

export const DateSimulator: React.FC<DateSimulatorProps> = ({
  people,
  initialPersonAId,
  initialPersonBId,
  onViewRankingsFor,
}) => {
  const [personAId, setPersonAId] = useState<string>(
    initialPersonAId || people[0]?.id || 'brian-chesky'
  );
  const [personBId, setPersonBId] = useState<string>(
    initialPersonBId || people[1]?.id || 'whitney-wolfe-herd'
  );
  const [selectedVenueId, setSelectedVenueId] = useState<string>('soho-loft');

  const personA = people.find(p => p.id === personAId) || people[0];
  const personB = people.find(p => p.id === personBId) || people[1];

  // Full session generated
  const [session, setSession] = useState<DateSession>(() =>
    generateDateSimulation(personA, personB, selectedVenueId)
  );

  // Progressive turn playback state
  const [visibleTurnsCount, setVisibleTurnsCount] = useState<number>(2);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [expandedMonologues, setExpandedMonologues] = useState<Record<number, boolean>>({ 0: true, 1: true });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll as turns appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleTurnsCount]);

  // Handle Person or Venue change
  const handleRegenerate = (newAId = personAId, newBId = personBId, newVId = selectedVenueId) => {
    const a = people.find(p => p.id === newAId) || people[0];
    const b = people.find(p => p.id === newBId) || people[1];
    const newSession = generateDateSimulation(a, b, newVId);
    setSession(newSession);
    setVisibleTurnsCount(2);
    setIsPlaying(false);
    setExpandedMonologues({ 0: true, 1: true });
  };

  // Playback timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && visibleTurnsCount < session.turns.length) {
      timer = setTimeout(() => {
        setVisibleTurnsCount(prev => {
          const next = prev + 1;
          setExpandedMonologues(em => ({ ...em, [next - 1]: true }));
          return next;
        });
      }, 2200);
    } else if (visibleTurnsCount >= session.turns.length) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, visibleTurnsCount, session.turns.length]);

  const toggleMonologue = (index: number) => {
    setExpandedMonologues(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleNextTurn = () => {
    if (visibleTurnsCount < session.turns.length) {
      const next = visibleTurnsCount + 1;
      setVisibleTurnsCount(next);
      setExpandedMonologues(em => ({ ...em, [next - 1]: true }));
    }
  };

  const handleFastForward = () => {
    setVisibleTurnsCount(session.turns.length);
    const allExpanded: Record<number, boolean> = {};
    session.turns.forEach((_, i) => { allExpanded[i] = true; });
    setExpandedMonologues(allExpanded);
    setIsPlaying(false);
  };

  const handleReset = () => {
    setVisibleTurnsCount(2);
    setIsPlaying(false);
    setExpandedMonologues({ 0: true, 1: true });
  };

  const currentVenue = session.venue;
  const isDateCompleted = visibleTurnsCount >= session.turns.length;

  // Calculate dynamic current chemistry based on visible turns
  const activeChemistry = Math.round(
    40 + (visibleTurnsCount / session.turns.length) * (session.outcome.overallChemistry - 40)
  );

  return (
    <div className="space-y-6">
      
      {/* Date Header Controls & Venue Selector */}
      <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-5 pb-5 border-b border-neutral-800">
          
          {/* Pair Selectors */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            
            {/* Agent A */}
            <div className="flex items-center space-x-2.5 p-2 rounded-2xl bg-neutral-950 border border-neutral-800 w-full sm:w-auto">
              <img
                src={personA.avatar}
                alt={personA.name}
                className="w-10 h-10 rounded-xl object-cover border border-rose-500/40"
              />
              <div className="flex-1 min-w-[120px]">
                <label className="text-[10px] uppercase font-bold text-neutral-500 block">Agent A</label>
                <select
                  value={personAId}
                  onChange={e => {
                    const id = e.target.value;
                    setPersonAId(id);
                    handleRegenerate(id, personBId, selectedVenueId);
                  }}
                  className="bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer w-full"
                >
                  {people.map(p => (
                    <option key={p.id} value={p.id} disabled={p.id === personBId} className="bg-neutral-900 text-white">
                      {p.name} ({p.role.split(' ')[0]})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <span className="text-rose-500 font-bold text-lg hidden sm:inline">♥</span>

            {/* Agent B */}
            <div className="flex items-center space-x-2.5 p-2 rounded-2xl bg-neutral-950 border border-neutral-800 w-full sm:w-auto">
              <img
                src={personB.avatar}
                alt={personB.name}
                className="w-10 h-10 rounded-xl object-cover border border-amber-500/40"
              />
              <div className="flex-1 min-w-[120px]">
                <label className="text-[10px] uppercase font-bold text-neutral-500 block">Agent B</label>
                <select
                  value={personBId}
                  onChange={e => {
                    const id = e.target.value;
                    setPersonBId(id);
                    handleRegenerate(personAId, id, selectedVenueId);
                  }}
                  className="bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer w-full"
                >
                  {people.map(p => (
                    <option key={p.id} value={p.id} disabled={p.id === personAId} className="bg-neutral-900 text-white">
                      {p.name} ({p.role.split(' ')[0]})
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Venue Selector */}
          <div className="flex items-center space-x-3 w-full lg:w-auto">
            <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center space-x-2 text-xs text-neutral-300 w-full lg:w-auto">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">Dating Venue</span>
                <select
                  value={selectedVenueId}
                  onChange={e => {
                    const vId = e.target.value;
                    setSelectedVenueId(vId);
                    handleRegenerate(personAId, personBId, vId);
                  }}
                  className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer w-full"
                >
                  {VENUES.map(v => (
                    <option key={v.id} value={v.id} className="bg-neutral-900 text-white">
                      {v.name} · {v.type} ({v.city})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

        </div>

        {/* Venue Ambiance Banner */}
        <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentVenue.accentColor} border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`}>
          <div>
            <div className="flex items-center space-x-2 mb-0.5">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <h3 className="font-bold text-white text-sm sm:text-base">
                {currentVenue.name} · <span className="text-neutral-300 font-normal">{currentVenue.city}</span>
              </h3>
            </div>
            <p className="text-xs text-neutral-300 italic font-editorial">
              "{currentVenue.ambiance}"
            </p>
          </div>

          {/* Simulation Playback Controls */}
          <div className="flex items-center space-x-2 self-end sm:self-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={isDateCompleted}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition ${
                isPlaying 
                  ? 'bg-amber-600 text-white' 
                  : isDateCompleted 
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-rose-600 hover:bg-rose-500 text-white shadow'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pause' : isDateCompleted ? 'Completed' : 'Auto-Play Date'}</span>
            </button>

            <button
              onClick={handleNextTurn}
              disabled={isDateCompleted}
              className="px-2.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 disabled:opacity-40 text-xs font-semibold text-neutral-200 transition"
              title="Step to next conversational turn"
            >
              Next Turn
            </button>

            <button
              onClick={handleFastForward}
              className="p-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition"
              title="Fast Forward to Verdict"
            >
              <FastForward className="w-4 h-4" />
            </button>

            <button
              onClick={handleReset}
              className="p-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition"
              title="Reset Date"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Main Dialogue & Telemetry Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Dialogue Stream (7 cols on lg) */}
        <div className="lg:col-span-8 rounded-3xl bg-neutral-900 border border-neutral-800 p-4 sm:p-6 shadow-xl space-y-5">
          
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <MessageSquareHeart className="w-4 h-4 text-rose-400" />
              <span>Turn-by-Turn Date Dialogue & Cognitive Thoughts</span>
            </div>
            <span className="text-xs font-mono-code text-neutral-400">
              Turn {Math.min(visibleTurnsCount, session.turns.length)} of {session.turns.length}
            </span>
          </div>

          {/* Dialogue Turns */}
          <div className="space-y-5">
            {session.turns.slice(0, visibleTurnsCount).map((turn, index) => {
              const isSpeakerA = turn.speakerId === personA.id;
              const speaker = isSpeakerA ? personA : personB;
              const isMonologueExpanded = !!expandedMonologues[index];

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isSpeakerA ? 'items-start' : 'items-end'} space-y-2`}
                >
                  
                  {/* Speaker Label & Tag */}
                  <div className={`flex items-center space-x-2 text-xs ${isSpeakerA ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-7 h-7 rounded-lg object-cover border border-neutral-700"
                    />
                    <span className="font-bold text-white">
                      {speaker.name.split(' ')[0]}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono-code bg-neutral-800 text-neutral-300 capitalize">
                      [{turn.emotion}]
                    </span>
                    <span className="text-[10px] text-neutral-500 font-mono-code">
                      {turn.timestamp}
                    </span>
                  </div>

                  {/* Speech Bubble */}
                  <div
                    className={`max-w-[92%] sm:max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-md ${
                      isSpeakerA
                        ? 'bg-neutral-950 border border-neutral-800 text-neutral-100 rounded-tl-sm'
                        : 'bg-rose-950/30 border border-rose-500/30 text-rose-50 rounded-tr-sm'
                    }`}
                  >
                    <p className="font-editorial text-sm sm:text-base leading-relaxed">
                      "{turn.text}"
                    </p>
                  </div>

                  {/* Agent Inner Monologue / Reasoning Box */}
                  <div className={`max-w-[92%] sm:max-w-[85%] ${isSpeakerA ? 'self-start' : 'self-end'}`}>
                    <button
                      onClick={() => toggleMonologue(index)}
                      className="flex items-center space-x-1.5 text-[11px] font-mono-code text-amber-400 hover:text-amber-300 transition py-0.5"
                    >
                      <Brain className="w-3 h-3 text-amber-400" />
                      <span>Agent Inner Monologue & Needs Evaluation</span>
                      {isMonologueExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {isMonologueExpanded && (
                      <div className="mt-1 p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-[11px] font-mono-code text-amber-200/90 leading-relaxed">
                        <span className="text-amber-400 font-bold block mb-0.5 uppercase text-[9px] tracking-wider">
                          Private Agent Scratchpad:
                        </span>
                        {turn.innerMonologue}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}

            <div ref={chatEndRef} />
          </div>

          {/* Typing indicator when playing */}
          {isPlaying && visibleTurnsCount < session.turns.length && (
            <div className="flex items-center space-x-2 text-xs text-neutral-400 italic font-mono-code pt-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>Next agent is considering romantic reply & evaluating compatibility...</span>
            </div>
          )}

          {/* Date Verdict Banner (When Completed) */}
          {isDateCompleted && (
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-rose-950/60 via-neutral-900 to-amber-950/60 border border-rose-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  <span>Date Concluded: {session.outcome.postDateVerdict}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono-code">
                  Spark: {session.outcome.overallChemistry}%
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-editorial">
                <strong>Highlight:</strong> {session.outcome.highlightMoment}
              </p>
              <p className="text-xs text-neutral-400 font-editorial">
                <strong>Friction Note:</strong> {session.outcome.frictionPoint}
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onViewRankingsFor(personA)}
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-semibold text-white flex items-center space-x-1.5 transition"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>See How {personB.name.split(' ')[0]} Ranks in {personA.name.split(' ')[0]}'s Leaderboard</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Live Date Telemetry Sidebar (4 cols on lg) */}
        <div className="lg:col-span-4 space-y-5">
          
          {/* Real-time Chemistry Meter */}
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider">
                Live Chemistry Gauge
              </span>
              <span className="text-lg font-bold font-mono-code text-rose-400">
                {activeChemistry}%
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-neutral-950 border border-neutral-800 overflow-hidden mb-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 transition-all duration-500"
                style={{ width: `${activeChemistry}%` }}
              />
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Calculated dynamically as agents exchange dialogue, probe dealbreakers, and align on leisure rhythms.
            </p>
          </div>

          {/* Dimensional Breakdown */}
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-5 shadow-xl space-y-4">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider block">
              Compatibility Vectors
            </span>

            <div className="space-y-3">
              {Object.entries(session.outcome.compatibilityDimensions).map(([dim, score]) => (
                <div key={dim} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="capitalize text-neutral-300">{dim} Synergy</span>
                    <span className="font-mono-code text-rose-400">{score}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-neutral-950 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-rose-500/80"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Switch Profiles */}
          <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-5 shadow-xl">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider block mb-3">
              Date In Progress Between
            </span>

            <div className="space-y-2.5">
              <div className="flex items-center space-x-3 p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                <img src={personA.avatar} alt={personA.name} className="w-9 h-9 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-white text-xs truncate">{personA.name}</h4>
                  <p className="text-[11px] text-neutral-400 truncate">{personA.agentAnalysis.qualities.archetype}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 rounded-xl bg-neutral-950 border border-neutral-800">
                <img src={personB.avatar} alt={personB.name} className="w-9 h-9 rounded-lg object-cover" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-bold text-white text-xs truncate">{personB.name}</h4>
                  <p className="text-[11px] text-neutral-400 truncate">{personB.agentAnalysis.qualities.archetype}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
