import React, { useState, useMemo } from 'react';
import { Person, MatchScore } from '../types/dating';
import { getRankedMatchesForPerson } from '../services/datingEngine';
import { 
  Award, Heart, Sparkles, MessageSquareHeart, ExternalLink, 
  Filter, ArrowRight, ShieldAlert, CheckCircle2, TrendingUp, User
} from 'lucide-react';

interface RankingsViewProps {
  people: Person[];
  selectedPersonId?: string;
  onLaunchDate: (personA: Person, personB: Person) => void;
  onInspectPerson: (person: Person) => void;
}

export const RankingsView: React.FC<RankingsViewProps> = ({
  people,
  selectedPersonId,
  onLaunchDate,
  onInspectPerson,
}) => {
  const [currentTargetId, setCurrentTargetId] = useState<string>(
    selectedPersonId || people[0]?.id || 'brian-chesky'
  );
  const [sortBy, setSortBy] = useState<'overall' | 'lifestyle' | 'ambition' | 'intellect' | 'humor'>('overall');

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedPersonId) {
      setCurrentTargetId(selectedPersonId);
    }
  }, [selectedPersonId]);

  const targetPerson = people.find(p => p.id === currentTargetId) || people[0];

  // Compute rankings
  const rankedMatches: MatchScore[] = useMemo(() => {
    if (!targetPerson) return [];
    const baseRanked = getRankedMatchesForPerson(targetPerson, people);

    if (sortBy === 'overall') return baseRanked;

    return [...baseRanked].sort((a, b) => {
      if (sortBy === 'lifestyle') return b.breakdown.lifestyleFit - a.breakdown.lifestyleFit;
      if (sortBy === 'ambition') return b.breakdown.ambitionSynergy - a.breakdown.ambitionSynergy;
      if (sortBy === 'intellect') return b.breakdown.intellectualBanter - a.breakdown.intellectualBanter;
      if (sortBy === 'humor') return b.breakdown.humorChemistry - a.breakdown.humorChemistry;
      return b.overallScore - a.overallScore;
    });
  }, [targetPerson, people, sortBy]);

  return (
    <div className="space-y-6">
      
      {/* Target Selector & Subject Banner */}
      <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
          
          {/* Target Profile Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <img
              src={targetPerson.avatar}
              alt={targetPerson.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-rose-500/50 shadow-md"
            />
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-0.5">
                <Award className="w-4 h-4" />
                <span>Showing Ranked Matches For:</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {targetPerson.name}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300">
                {targetPerson.role} @ <span className="font-semibold text-white">{targetPerson.company}</span> · {targetPerson.location}
              </p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
                  {targetPerson.agentAnalysis.qualities.archetype}
                </span>
                <span className="text-xs text-neutral-400">
                  {rankedMatches.length} autonomous candidates evaluated
                </span>
              </div>
            </div>
          </div>

          {/* Target Selector Dropdown */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-neutral-950 border border-neutral-800">
              <label className="text-[10px] uppercase font-bold text-neutral-500 block mb-1">
                Switch Target Person
              </label>
              <select
                value={currentTargetId}
                onChange={e => setCurrentTargetId(e.target.value)}
                className="bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer w-full"
              >
                {people.map(p => (
                  <option key={p.id} value={p.id} className="bg-neutral-900 text-white">
                    {p.name} ({p.role.split(' ')[0]})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => onInspectPerson(targetPerson)}
              className="px-4 py-3 rounded-2xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition"
            >
              Inspect Profile
            </button>
          </div>

        </div>

        {/* Sort & Filter Controls */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2 text-neutral-400 font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>Sort Compatibility By:</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'overall', label: 'Overall Match Score' },
              { id: 'lifestyle', label: 'Lifestyle Rhythm' },
              { id: 'ambition', label: 'Ambition Synergy' },
              { id: 'intellect', label: 'Intellectual Banter' },
              { id: 'humor', label: 'Humor Chemistry' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSortBy(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  sortBy === tab.id
                    ? 'bg-rose-500 text-white shadow'
                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Ranked Matches List */}
      <div className="space-y-4">
        {rankedMatches.map((match, index) => {
          const candidate = match.candidate;
          const isTop3 = index < 3;

          return (
            <div
              key={candidate.id}
              className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                isTop3
                  ? 'bg-gradient-to-r from-neutral-900 via-neutral-900 to-rose-950/20 border-rose-500/40 shadow-lg'
                  : 'bg-neutral-900/90 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                
                {/* Rank & Candidate Overview */}
                <div className="flex items-start sm:items-center space-x-4 flex-1">
                  
                  {/* Rank Badge */}
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-mono-code font-bold text-base shrink-0 shadow-md ${
                      index === 0
                        ? 'bg-amber-400 text-neutral-950 ring-2 ring-amber-300'
                        : index === 1
                        ? 'bg-neutral-300 text-neutral-950'
                        : index === 2
                        ? 'bg-amber-700 text-white'
                        : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    #{index + 1}
                  </div>

                  {/* Avatar */}
                  <img
                    src={candidate.avatar}
                    alt={candidate.name}
                    className="w-14 h-14 rounded-xl object-cover border border-neutral-700 shrink-0"
                  />

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-white text-base sm:text-lg truncate">
                        {candidate.name}
                      </h3>
                      <span className="text-xs text-neutral-400 font-mono-code">
                        {candidate.handle}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300">
                      {candidate.role} · <span className="text-neutral-400">{candidate.company}</span>
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-800 text-neutral-300 font-medium">
                        {candidate.agentAnalysis.qualities.archetype}
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        {candidate.location}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Match Score & Actions */}
                <div className="flex items-center space-x-4 self-end lg:self-center w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-neutral-800">
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                      Compatibility
                    </span>
                    <span className={`text-2xl font-bold font-mono-code ${
                      match.overallScore >= 90 ? 'text-rose-400' : match.overallScore >= 80 ? 'text-amber-400' : 'text-neutral-300'
                    }`}>
                      {match.overallScore}%
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onInspectPerson(candidate)}
                      className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold transition"
                    >
                      Profile
                    </button>

                    <button
                      onClick={() => onLaunchDate(targetPerson, candidate)}
                      className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow"
                    >
                      <MessageSquareHeart className="w-3.5 h-3.5" />
                      <span>Watch Date</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Psychological Fit & Friction Analysis */}
              <div className="mt-4 pt-4 border-t border-neutral-800/80 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Why They Fit (Agent Synthesis)</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed font-editorial text-xs sm:text-sm">
                    {match.whyTheyFit}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="flex items-center space-x-1.5 text-amber-400 font-semibold mb-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Potential Friction Point</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed font-editorial text-xs sm:text-sm">
                    {match.potentialFriction}
                  </p>
                </div>
              </div>

              {/* Dimensional Breakdown Mini Bars */}
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2">
                {[
                  { label: 'Lifestyle', val: match.breakdown.lifestyleFit },
                  { label: 'Ambition', val: match.breakdown.ambitionSynergy },
                  { label: 'Intellect', val: match.breakdown.intellectualBanter },
                  { label: 'Values', val: match.breakdown.valuesAlignment },
                  { label: 'Humor', val: match.breakdown.humorChemistry },
                ].map(b => (
                  <div key={b.label} className="p-2 rounded-lg bg-neutral-950 text-[10px]">
                    <div className="flex justify-between text-neutral-400 mb-0.5">
                      <span>{b.label}</span>
                      <span className="font-mono-code font-bold text-neutral-200">{b.val}%</span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-rose-500"
                        style={{ width: `${b.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
