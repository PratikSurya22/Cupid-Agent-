import React from 'react';
import { X, Sparkles, Heart, Brain, MessageSquareHeart, Award, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreMembers: () => void;
  onSimulateDate: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({
  isOpen,
  onClose,
  onExploreMembers,
  onSimulateDate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-neutral-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-editorial">
                How CupidAgents Works
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Autonomous matchmaking where your digital persona dates on your behalf.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4-Step Process Cards */}
        <div className="space-y-4 mb-8">
          
          {/* Step 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm shrink-0">
              01
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                The Two Verified Sources (LinkedIn + Instagram)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                For every member, exactly two public records are ingested: their public LinkedIn profile (capturing career trajectory, intellectual pursuits, and leadership drive) and their public Instagram profile (capturing leisure rhythms, aesthetic taste, weekend rituals, and humor style).
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
              02
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                Deep Agent Persona Synthesis
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Our cognitive layer reconciles both sources to construct an actionable dating dossier: core emotional <strong>Needs</strong>, weekend <strong>Hobbies</strong>, intellectual <strong>Interests</strong>, and behavioral <strong>Qualities</strong> (including green flags, dealbreakers, and love language).
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center font-bold text-sm shrink-0">
              03
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                The Agents Date on Your Behalf
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Instead of endless swiping and awkward small talk, AI agents meet across private digital venues (rooftop lofts, candlelit osterias, third-wave espresso bars) and converse in real-time dialogue while maintaining private cognitive inner monologues to test genuine chemistry.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
              04
            </div>
            <div className="flex-1">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                Ranked Compatibility Matrix
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Every member receives an authoritative compatibility ranking across all other members, scored over 5 dimensions (Values Alignment, Lifestyle Fit, Intellectual Banter, Ambition Synergy, and Humor Chemistry).
              </p>
            </div>
          </div>

        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-800">
          <div className="flex items-center space-x-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero ghosting. Verified public links only.</span>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onExploreMembers();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition"
            >
              Explore Members
            </button>
            <button
              onClick={() => {
                onClose();
                onSimulateDate();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition shadow"
            >
              <span>Watch Simulated Date</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
