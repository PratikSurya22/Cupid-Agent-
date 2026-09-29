import React, { useState } from 'react';
import { Person } from './types/dating';
import { INITIAL_PEOPLE } from './data/peopleDataset';
import { Navbar } from './components/Navbar';
import { ProfileCard } from './components/ProfileCard';
import { ProfileModal } from './components/ProfileModal';
import { DateSimulator } from './components/DateSimulator';
import { RankingsView } from './components/RankingsView';
import { IngestModal } from './components/IngestModal';
import { TechStackModal } from './components/TechStackModal';
import { VideoGuideModal } from './components/VideoGuideModal';
import { HowItWorksModal } from './components/HowItWorksModal';
import { 
  Sparkles, Heart, Search, Filter, Users, MessageSquareHeart, 
  Award, ArrowRight, Zap, CheckCircle2, Globe, Shield, RefreshCw,
  Flame, MapPin, Compass
} from 'lucide-react';

export default function App() {
  const [people, setPeople] = useState<Person[]>(INITIAL_PEOPLE);
  const [activeView, setActiveView] = useState<'people' | 'date' | 'rankings'>('people');
  
  // Modals & Selectors
  const [inspectingPerson, setInspectingPerson] = useState<Person | null>(null);
  const [isIngestOpen, setIsIngestOpen] = useState(false);
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);
  const [isVideoGuideOpen, setIsVideoGuideOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  // Active dates / rankings selection
  const [activePersonAId, setActivePersonAId] = useState<string>('brian-chesky');
  const [activePersonBId, setActivePersonBId] = useState<string>('whitney-wolfe-herd');
  const [rankingsTargetId, setRankingsTargetId] = useState<string>('brian-chesky');

  // Search & Filter in People View
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState<'all' | 'founders' | 'executives' | 'creators'>('all');

  // Handlers
  const handleInspectPerson = (person: Person) => {
    setInspectingPerson(person);
  };

  const handleStartDateWith = (person: Person) => {
    setActivePersonAId(person.id);
    const other = people.find(p => p.id !== person.id) || people[0];
    setActivePersonBId(other.id);
    setActiveView('date');
  };

  const handleLaunchDatePair = (personA: Person, personB: Person) => {
    setActivePersonAId(personA.id);
    setActivePersonBId(personB.id);
    setActiveView('date');
  };

  const handleLaunchDatePairById = (personAId: string, personBId: string) => {
    setActivePersonAId(personAId);
    setActivePersonBId(personBId);
    setActiveView('date');
  };

  const handleViewRankingsFor = (person: Person) => {
    setRankingsTargetId(person.id);
    setActiveView('rankings');
  };

  const handleNavigateToRankingsById = (personId: string) => {
    setRankingsTargetId(personId);
    setActiveView('rankings');
  };

  const handlePersonAdded = (newPerson: Person) => {
    setPeople(prev => [newPerson, ...prev]);
    setInspectingPerson(newPerson);
  };

  // Filtered People
  const filteredPeople = people.filter(p => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.agentAnalysis.qualities.archetype.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filterTag === 'founders') {
      return p.role.toLowerCase().includes('founder') || p.role.toLowerCase().includes('ceo');
    }
    if (filterTag === 'executives') {
      return p.role.toLowerCase().includes('chair') || p.role.toLowerCase().includes('partner') || p.role.toLowerCase().includes('vp');
    }
    if (filterTag === 'creators') {
      return p.role.toLowerCase().includes('creator') || p.role.toLowerCase().includes('author') || p.role.toLowerCase().includes('dancer');
    }

    return true;
  });

  const spotlightPersonA = people.find(p => p.id === activePersonAId) || people[0];
  const spotlightPersonB = people.find(p => p.id === activePersonBId) || people[1];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-rose-500/30 selection:text-rose-200">
      
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        onViewChange={setActiveView}
        onOpenIngest={() => setIsIngestOpen(true)}
        onOpenTechStack={() => setIsTechStackOpen(true)}
        onOpenVideoGuide={() => setIsVideoGuideOpen(true)}
        onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
        totalPeopleCount={people.length}
      />

      {/* Hero Showcase Banner */}
      <div className="relative border-b border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-950 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 overflow-hidden">
        
        {/* Ambient atmospheric romantic lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-48 bg-gradient-to-b from-rose-500/15 via-pink-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12">
            
            {/* Left Narrative Column */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                <span>Autonomous Matchmaking Network · 30 Verified Members</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-editorial">
                Dating, outsourced to your digital self.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl mt-1">
                  The agents date each other.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                Every person is represented by an agent synthesized directly from their public 
                <span className="text-blue-400 font-medium"> LinkedIn</span> and 
                <span className="text-pink-400 font-medium"> Instagram</span>. The agents meet in intimate digital venues, converse in live dialogue, probe dealbreakers, and rank mutual compatibility.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveView('people')}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center space-x-2 transition ${
                    activeView === 'people'
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-950/50'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Directory ({people.length})</span>
                </button>

                <button
                  onClick={() => setActiveView('date')}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center space-x-2 transition ${
                    activeView === 'date'
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-950/50'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80'
                  }`}
                >
                  <MessageSquareHeart className="w-4 h-4 text-rose-400" />
                  <span>Live Date</span>
                </button>

                <button
                  onClick={() => setActiveView('rankings')}
                  className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center space-x-2 transition ${
                    activeView === 'rankings'
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-950/50'
                      : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80'
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Rankings</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Spotlight Card */}
            <div className="w-full lg:w-[420px] rounded-3xl bg-neutral-900/90 border border-neutral-800 p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="text-xs uppercase font-bold text-white tracking-wider">
                    Tonight's Featured Date
                  </span>
                </div>
                <span className="text-[11px] text-amber-400 font-mono-code font-bold bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                  94% Spark
                </span>
              </div>

              {/* Pair Preview */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={spotlightPersonA.avatar}
                    alt={spotlightPersonA.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-rose-500/50 shadow"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{spotlightPersonA.name}</h4>
                    <p className="text-[11px] text-neutral-400 truncate max-w-[100px]">{spotlightPersonA.role}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 font-bold text-xs border border-rose-500/20">
                  ♥
                </div>

                <div className="flex items-center space-x-3 text-right">
                  <div>
                    <h4 className="text-sm font-bold text-white">{spotlightPersonB.name}</h4>
                    <p className="text-[11px] text-neutral-400 truncate max-w-[100px]">{spotlightPersonB.role}</p>
                  </div>
                  <img
                    src={spotlightPersonB.avatar}
                    alt={spotlightPersonB.name}
                    className="w-12 h-12 rounded-xl object-cover border-2 border-amber-500/50 shadow"
                  />
                </div>
              </div>

              {/* Venue Quote */}
              <div className="p-3 rounded-2xl bg-neutral-950 border border-neutral-800/90 text-xs text-neutral-300 mb-4 space-y-1">
                <div className="flex items-center space-x-1.5 text-neutral-400 text-[10px] uppercase font-bold">
                  <MapPin className="w-3 h-3 text-rose-400" />
                  <span>The Crown Penthouse · SoHo</span>
                </div>
                <p className="italic font-editorial text-xs text-neutral-200">
                  "When my agent scheduled us here, I was hoping we'd skip the usual buzzwords and just appreciate the space..."
                </p>
              </div>

              {/* Direct Jump CTA */}
              <button
                onClick={() => {
                  setActivePersonAId(spotlightPersonA.id);
                  setActivePersonBId(spotlightPersonB.id);
                  setActiveView('date');
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition shadow"
              >
                <span>Watch Date Simulation Live</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Main View Router */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex-1 w-full">
        
        {/* VIEW 1: BROWSE MEMBERS & PROFILE DOSSIERS */}
        {activeView === 'people' && (
          <div className="space-y-6">
            
            {/* Search & Filter Header */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search by name, company, title, or archetype..."
                  className="w-full pl-10 pr-4 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-rose-500 transition"
                />
              </div>

              <div className="flex items-center space-x-1.5 text-xs">
                {[
                  { id: 'all', label: `All (${people.length})` },
                  { id: 'founders', label: 'Founders / CEOs' },
                  { id: 'executives', label: 'Partners & VPs' },
                  { id: 'creators', label: 'Creators & Authors' },
                ].map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => setFilterTag(tag.id as any)}
                    className={`px-3 py-1.5 rounded-xl font-medium transition ${
                      filterTag === tag.id
                        ? 'bg-rose-500 text-white shadow'
                        : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            {/* People Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPeople.map(person => (
                <ProfileCard
                  key={person.id}
                  person={person}
                  onInspect={handleInspectPerson}
                  onDate={handleStartDateWith}
                  onRankings={handleViewRankingsFor}
                />
              ))}
            </div>

            {filteredPeople.length === 0 && (
              <div className="text-center py-16 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
                <Users className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">No matching profiles found</h3>
                <p className="text-sm text-neutral-400 mb-4">Try clearing your search query or submit new profile links.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-sm font-semibold text-white transition"
                >
                  Clear Search
                </button>
              </div>
            )}

          </div>
        )}

        {/* VIEW 2: WATCH AGENTS DATE */}
        {activeView === 'date' && (
          <DateSimulator
            people={people}
            initialPersonAId={activePersonAId}
            initialPersonBId={activePersonBId}
            onViewRankingsFor={handleViewRankingsFor}
          />
        )}

        {/* VIEW 3: COMPATIBILITY RANKINGS */}
        {activeView === 'rankings' && (
          <RankingsView
            people={people}
            selectedPersonId={rankingsTargetId}
            onLaunchDate={handleLaunchDatePair}
            onInspectPerson={handleInspectPerson}
          />
        )}

      </main>

      {/* Production-Grade Footer with Clean Architecture Links */}
      <footer className="border-t border-neutral-800/80 bg-neutral-950 py-10 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
            
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="font-bold text-white text-sm">CupidAgents</span>
                <span className="text-neutral-500">· Autonomous Dating Collective</span>
              </div>
              <p className="text-xs text-neutral-400">
                Synthesized from public LinkedIn & Instagram profiles. Agents date on each member's behalf.
              </p>
            </div>

            {/* Quick Links Menu */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                onClick={() => setIsHowItWorksOpen(true)}
                className="hover:text-white transition"
              >
                How It Works
              </button>
              <span className="text-neutral-700">•</span>
              <button
                onClick={() => setIsIngestOpen(true)}
                className="hover:text-white transition"
              >
                Submit Profiles
              </button>
              <span className="text-neutral-700">•</span>
              <button
                onClick={() => setIsTechStackOpen(true)}
                className="hover:text-white transition"
              >
                Scraper Architecture & Tech Stack
              </button>
              <span className="text-neutral-700">•</span>
              <button
                onClick={() => setIsVideoGuideOpen(true)}
                className="hover:text-amber-400 transition"
              >
                3-Min Demo Walkthrough
              </button>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
            <span>© {new Date().getFullYear()} CupidAgents. All rights reserved.</span>
            <span>Zero mock data · Evaluated across 5 compatibility dimensions</span>
          </div>
        </div>
      </footer>

      {/* Profile Detail Inspector Modal */}
      <ProfileModal
        person={inspectingPerson}
        onClose={() => setInspectingPerson(null)}
        onStartDateWith={handleStartDateWith}
        onViewRankingsFor={handleViewRankingsFor}
      />

      {/* Ingest Links Modal */}
      <IngestModal
        isOpen={isIngestOpen}
        onClose={() => setIsIngestOpen(false)}
        onPersonAdded={handlePersonAdded}
      />

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onExploreMembers={() => setActiveView('people')}
        onSimulateDate={() => setActiveView('date')}
      />

      {/* Tech Stack & Scraper Architecture Modal */}
      <TechStackModal
        isOpen={isTechStackOpen}
        onClose={() => setIsTechStackOpen(false)}
      />

      {/* 3-Minute Video Walkthrough Guide Modal */}
      <VideoGuideModal
        isOpen={isVideoGuideOpen}
        onClose={() => setIsVideoGuideOpen(false)}
        onJumpToSection={section => {
          if (section === 'ingest') {
            setIsIngestOpen(true);
          } else {
            setActiveView(section);
          }
        }}
      />

    </div>
  );
}

