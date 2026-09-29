import React from 'react';
import { Person } from '../types/dating';
import { ExternalLink, Heart, Sparkles, MessageSquareHeart, Award, Eye } from 'lucide-react';

interface ProfileCardProps {
  person: Person;
  onInspect: (person: Person) => void;
  onDate: (person: Person) => void;
  onRankings: (person: Person) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  person,
  onInspect,
  onDate,
  onRankings,
}) => {
  return (
    <div className="group relative rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-rose-500/40 transition-all duration-300 shadow-lg hover:shadow-rose-950/20 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner & Info */}
      <div className="p-5">
        <div className="flex items-start space-x-3.5 mb-4">
          <div className="relative">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-14 h-14 rounded-xl object-cover border border-neutral-700 group-hover:border-rose-500/50 transition"
            />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-neutral-900 rounded-full" title="Agent Active" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-base truncate tracking-tight group-hover:text-rose-300 transition">
                {person.name}
              </h3>
            </div>
            <p className="text-xs text-neutral-400 truncate">
              {person.role} · <span className="text-neutral-300 font-medium">{person.company}</span>
            </p>
            <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
              {person.agentAnalysis.qualities.archetype}
            </span>
          </div>
        </div>

        {/* The Two Official Links */}
        <div className="flex items-center space-x-2 mb-3.5 pb-3 border-b border-neutral-800/80">
          <a
            href={person.twoSources.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex-1 flex items-center justify-center space-x-1 py-1 px-2 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300 hover:bg-blue-900/40 text-[11px] font-medium transition"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
          <a
            href={person.twoSources.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex-1 flex items-center justify-center space-x-1 py-1 px-2 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:bg-pink-900/40 text-[11px] font-medium transition"
          >
            <span>Instagram</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Agent Analysis Snippet */}
        <div className="space-y-2 mb-4">
          <div>
            <div className="flex items-center space-x-1 text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-1">
              <Heart className="w-3 h-3 text-rose-400" />
              <span>Core Need</span>
            </div>
            <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
              "{person.agentAnalysis.needs[0]}"
            </p>
          </div>

          <div className="pt-1">
            <div className="flex items-center space-x-1 text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Hobbies & Passions</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {person.agentAnalysis.hobbies.slice(0, 2).map((h, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-neutral-800 text-[11px] text-neutral-300 border border-neutral-700/60"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="p-3 bg-neutral-950 border-t border-neutral-800/80 flex items-center justify-between gap-1.5">
        <button
          onClick={() => onInspect(person)}
          className="flex-1 py-1.5 px-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs font-semibold text-neutral-200 border border-neutral-700/70 flex items-center justify-center space-x-1 transition"
        >
          <Eye className="w-3.5 h-3.5 text-neutral-400" />
          <span>Profile</span>
        </button>

        <button
          onClick={() => onDate(person)}
          className="flex-1 py-1.5 px-2 rounded-lg bg-rose-600/90 hover:bg-rose-500 text-xs font-semibold text-white flex items-center justify-center space-x-1 transition shadow-sm"
        >
          <MessageSquareHeart className="w-3.5 h-3.5" />
          <span>Date</span>
        </button>

        <button
          onClick={() => onRankings(person)}
          className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700/70 transition"
          title="View Ranked Matches"
        >
          <Award className="w-4 h-4 text-amber-400" />
        </button>
      </div>

    </div>
  );
};
