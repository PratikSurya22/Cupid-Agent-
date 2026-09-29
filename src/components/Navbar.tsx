import React from 'react';
import { Heart, Plus, Users, MessageSquareHeart, Award, HelpCircle, Code2, Video } from 'lucide-react';

interface NavbarProps {
  activeView: 'people' | 'date' | 'rankings';
  onViewChange: (view: 'people' | 'date' | 'rankings') => void;
  onOpenIngest: () => void;
  onOpenTechStack: () => void;
  onOpenVideoGuide: () => void;
  onOpenHowItWorks: () => void;
  totalPeopleCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onViewChange,
  onOpenIngest,
  onOpenTechStack,
  onOpenVideoGuide,
  onOpenHowItWorks,
  totalPeopleCount,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Bar */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => onViewChange('people')}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-950/50 group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white text-base sm:text-lg tracking-tight font-editorial">
                  CupidAgents
                </span>
                <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono-code uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Autonomous</span>
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 hidden sm:block">
                The Autonomous Dating Collective
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 p-1 bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-inner">
            <button
              onClick={() => onViewChange('people')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
                activeView === 'people'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Members ({totalPeopleCount})</span>
            </button>

            <button
              onClick={() => onViewChange('date')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
                activeView === 'date'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <MessageSquareHeart className="w-3.5 h-3.5" />
              <span>Simulated Dates</span>
            </button>

            <button
              onClick={() => onViewChange('rankings')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-2 transition ${
                activeView === 'rankings'
                  ? 'bg-rose-500 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Rankings</span>
            </button>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={onOpenHowItWorks}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 border border-transparent hover:border-neutral-800 transition"
              title="How CupidAgents Works"
            >
              <HelpCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>How It Works</span>
            </button>

            <button
              onClick={onOpenIngest}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 text-white text-xs font-semibold flex items-center space-x-1.5 transition shadow-lg shadow-rose-950/60 hover:scale-[1.02]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Submit Profile</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Tabs */}
        <div className="flex md:hidden items-center justify-between pb-3 pt-1 border-t border-neutral-900">
          <div className="flex items-center space-x-1 w-full justify-between">
            <button
              onClick={() => onViewChange('people')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center ${
                activeView === 'people' ? 'bg-rose-500 text-white' : 'text-neutral-400'
              }`}
            >
              Members ({totalPeopleCount})
            </button>
            <button
              onClick={() => onViewChange('date')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center ${
                activeView === 'date' ? 'bg-rose-500 text-white' : 'text-neutral-400'
              }`}
            >
              Live Dates
            </button>
            <button
              onClick={() => onViewChange('rankings')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center ${
                activeView === 'rankings' ? 'bg-rose-500 text-white' : 'text-neutral-400'
              }`}
            >
              Rankings
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

