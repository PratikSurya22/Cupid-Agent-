import React from 'react';
import { X, Play, Video, Clock, CheckCircle2, Eye, Sparkles, MessageSquareHeart, Award, ExternalLink } from 'lucide-react';

interface VideoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToSection: (section: 'people' | 'date' | 'rankings' | 'ingest') => void;
}

export const VideoGuideModal: React.FC<VideoGuideModalProps> = ({
  isOpen,
  onClose,
  onJumpToSection,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-neutral-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                3-Minute Demo Video Walkthrough Guide
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Official guide and timeline script for the required YouTube 3-minute submission.
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

        {/* Video Constraints */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6 text-xs sm:text-sm">
          <div className="flex items-center space-x-2 text-rose-400">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">Maximum Length: 3 Minutes (180s)</span>
          </div>
          <div className="flex items-center space-x-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>25+ Real People Preloaded</span>
          </div>
        </div>

        {/* Timeline Script */}
        <div className="space-y-4 mb-8">
          
          {/* Act 1: 0:00 - 0:45 */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono-code font-bold">
                  0:00 - 0:45
                </span>
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  Act 1: The Two Sources & Agent Analysis
                </h3>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onJumpToSection('people');
                }}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
              >
                <span>Jump to Profiles</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-2">
              <strong>Showcase:</strong> Open any person’s profile (e.g., Brian Chesky or Whitney Wolfe Herd). Point to the two official links: their public LinkedIn and public Instagram.
            </p>
            <ul className="text-xs text-neutral-400 space-y-1 list-disc list-inside">
              <li>Show what was extracted from LinkedIn: Career trajectory, ambition, work ethic.</li>
              <li>Show what was extracted from Instagram: Aesthetic vibe, weekend rituals, hobbies.</li>
              <li>Show the synthesized Agent Profile: <strong>Needs, Hobbies, Interests, and Qualities</strong> (Archetype & Energy balance).</li>
            </ul>
          </div>

          {/* Act 2: 0:45 - 1:45 */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-rose-500/30 bg-gradient-to-r from-rose-950/20 to-neutral-950">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 text-xs font-mono-code font-bold">
                  0:45 - 1:45
                </span>
                <h3 className="font-semibold text-white text-sm sm:text-base flex items-center space-x-1.5">
                  <span>Act 2: The Agents Actually Dating (Live Simulation)</span>
                  <MessageSquareHeart className="w-4 h-4 text-rose-400" />
                </h3>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onJumpToSection('date');
                }}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
              >
                <span>Jump to Date</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-2">
              <strong>Showcase:</strong> Click "Launch Date" between two agents (e.g., CheskyBot & WhitneyAgent at The Crown Penthouse).
            </p>
            <ul className="text-xs text-neutral-400 space-y-1 list-disc list-inside">
              <li>Watch them exchange authentic romantic dialogue tailored to their personalities.</li>
              <li>Expand the <strong>Agent Inner Monologue</strong> on each turn to show their private reasoning and dealbreaker checks.</li>
              <li>Show the real-time Chemistry Meter climbing and the final Date Verdict (Mutual Spark!).</li>
            </ul>
          </div>

          {/* Act 3: 1:45 - 2:30 */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-mono-code font-bold">
                  1:45 - 2:30
                </span>
                <h3 className="font-semibold text-white text-sm sm:text-base flex items-center space-x-1.5">
                  <span>Act 3: Compatibility Rankings For Every Person</span>
                  <Award className="w-4 h-4 text-amber-400" />
                </h3>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onJumpToSection('rankings');
                }}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
              >
                <span>Jump to Rankings</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-2">
              <strong>Showcase:</strong> Switch to the Rankings tab. Select any person to inspect their ranked leaderboard across all 25+ people.
            </p>
            <ul className="text-xs text-neutral-400 space-y-1 list-disc list-inside">
              <li>Show the match score ordering (e.g., 96% Match down to lowest fit).</li>
              <li>Show the 5-dimension breakdown: Lifestyle, Ambition, Intellectual, Values, and Humor.</li>
              <li>Show the "Why They Fit" and "Potential Friction" psychological breakdowns.</li>
            </ul>
          </div>

          {/* Act 4: 2:30 - 3:00 */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono-code font-bold">
                  2:30 - 3:00
                </span>
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  Act 4: Live Link Ingestion & Tech Stack
                </h3>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onJumpToSection('ingest');
                }}
                className="text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1"
              >
                <span>Try Ingestion</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-2">
              <strong>Showcase:</strong> Click "Ingest New Links", test 1-click sample or paste custom links.
            </p>
            <ul className="text-xs text-neutral-400 space-y-1 list-disc list-inside">
              <li>Show the live extraction terminal logs scraping LinkedIn and Instagram.</li>
              <li>Show the new Agent minted, instantly slotted into the dating pool, and getting ranked against the 25+ people!</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-neutral-800">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            Ready to present or record? Jump directly to any section of the app.
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                onClose();
                onJumpToSection('people');
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm flex items-center space-x-1.5 transition shadow-lg shadow-rose-950/40"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Explore Interactive App</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
