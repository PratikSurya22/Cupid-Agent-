import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, X, Sparkles, 
  FastForward, Rewind, Radio, Mic, Headphones, ArrowRight,
  Flame, ShieldCheck, Heart, Users, Compass, Eye, CheckCircle2,
  Lock, Activity, Layers, MessageSquareHeart, Award, Cpu
} from 'lucide-react';
import { Person } from '../types/dating';

interface AIVoiceDemoPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  people: Person[];
  onInspectPerson: (person: Person) => void;
  onNavigateToDate: (personAId: string, personBId: string) => void;
  onNavigateToRankings: (personId: string) => void;
  onOpenIngest: () => void;
}

export interface DemoAct {
  id: number;
  actTitle: string;
  tagline: string;
  durationEstimate: string;
  speechText: string;
  visualTheme: 'problem' | 'grounding' | 'simulation' | 'matrix' | 'future';
}

const DEMO_ACTS: DemoAct[] = [
  {
    id: 1,
    actTitle: 'The End of Swipe Fatigue',
    tagline: 'Why Modern Dating is Broken & The Autonomous Agent Paradigm',
    durationEstimate: '0:00 - 0:35',
    visualTheme: 'problem',
    speechText: "Welcome to the future of human connection. Let's be honest for a moment: modern dating apps have become utterly exhausting. Millions of people spend hours every single day endlessly swiping on filtered photos, engaging in forced small talk, and burning out from ghosting. CupidAgents is built on a radically new premise: what if you never had to swipe or suffer through awkward introductory dates again? Instead, an autonomous digital agent—deeply grounded in who you actually are—goes out into the network and dates on your behalf."
  },
  {
    id: 2,
    actTitle: 'The Dual-Source Grounding Rule',
    tagline: 'Why We Synthesize Only Two Official Public Footprints',
    durationEstimate: '0:35 - 1:10',
    visualTheme: 'grounding',
    speechText: "Real human compatibility doesn't come from a superficial questionnaire or a witty one-line bio. True compatibility lives right at the intersection of two things: what you build during the week, and how you recharge on the weekend. That's why our system enforces a strict dual-source foundation. Public LinkedIn captures your professional drive, intellectual ambition, and core life values. Public Instagram reveals your aesthetic taste, sense of humor, and weekend energy. By synthesizing both, the agent constructs a rich cognitive persona with authentic communication patterns and non-negotiable dealbreakers."
  },
  {
    id: 3,
    actTitle: 'Autonomous Dates & Inner Monologues',
    tagline: 'Multi-Turn Virtual Dates with Real-Time Psychological Probing',
    durationEstimate: '1:10 - 1:55',
    visualTheme: 'simulation',
    speechText: "Here is where the magic happens. In our network, personal agents don't just calculate abstract scores—they actually go on live, multi-turn dates in ambient virtual settings. They banter, discuss life philosophies, and test each other's emotional intelligence. But what makes this truly revolutionary are private inner monologues. With every conversational exchange, each agent privately evaluates vulnerability, measures emotional chemistry, and scans for dealbreakers in real-time. Neither human has to waste an evening until deep psychological alignment is already proven."
  },
  {
    id: 4,
    actTitle: 'The 5-Dimensional Compatibility Matrix',
    tagline: 'Objective Psychological Alignment Across Five Core Vectors',
    durationEstimate: '1:55 - 2:30',
    visualTheme: 'matrix',
    speechText: "When an autonomous date concludes, CupidAgents doesn't give you a generic percentage. It computes a comprehensive compatibility matrix across five foundational psychological dimensions: intellectual depth, emotional values, lifestyle rhythm, career ambition, and humor alignment. The system articulates exactly why two minds resonate, and just as crucially, it highlights potential friction points before anyone steps into a real-world date. You receive an objective, transparent match dossier so you only meet when the spark is genuine."
  },
  {
    id: 5,
    actTitle: 'The Autonomous Romance Network',
    tagline: 'Open Ingestion, Dynamic Twins, and The Zero-Swipe Era',
    durationEstimate: '2:30 - 3:00',
    visualTheme: 'future',
    speechText: "The network is open and completely dynamic. Anyone can onboard a new profile in seconds simply by submitting their two official public links. Our ingestion engine synthesizes a digital twin and immediately begins testing compatibility across the entire dating pool. This is CupidAgents: intelligent, respectful, and autonomous matchmaking that protects your energy and honors your time. Sit back, let your agent do the heavy lifting, and step in only when the connection is real."
  }
];

type VoicePersona = 'aria' | 'orion' | 'nova';

export const AIVoiceDemoPlayer: React.FC<AIVoiceDemoPlayerProps> = ({
  isOpen,
  onClose,
  people,
  onInspectPerson,
  onNavigateToDate,
  onNavigateToRankings,
  onOpenIngest,
}) => {
  const [currentActIndex, setCurrentActIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [voicePersona, setVoicePersona] = useState<VoicePersona>('aria');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Audio references
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;
  const isMutedRef = useRef<boolean>(isMuted);
  isMutedRef.current = isMuted;

  const currentAct = DEMO_ACTS[currentActIndex];

  // Stop any playing audio or speech
  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, []);

  // Web Speech API fallback with natural voice selection
  const speakWithBrowserSpeech = useCallback((text: string, onComplete: () => void) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      onComplete();
      return;
    }

    window.speechSynthesis.cancel();
    if (isMutedRef.current) {
      setIsSpeaking(false);
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = (voicePersona === 'orion' ? 0.98 : 1.0) * playbackSpeed;
      utterance.pitch = voicePersona === 'aria' ? 1.0 : voicePersona === 'orion' ? 0.95 : 1.02;

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        if (voicePersona === 'aria') {
          const ariaVoice = voices.find(v => 
            v.lang.startsWith('en') && (
              v.name.includes('Natural') ||
              v.name.includes('Google US English') ||
              v.name.includes('Samantha') ||
              v.name.includes('Jenny') ||
              v.name.includes('Ava')
            )
          ) || voices.find(v => v.lang.startsWith('en-US')) || voices[0];
          utterance.voice = ariaVoice;
        } else if (voicePersona === 'orion') {
          const orionVoice = voices.find(v => 
            v.lang.startsWith('en') && (
              v.name.includes('Guy') ||
              v.name.includes('Google UK English Male') ||
              v.name.includes('Daniel') ||
              v.name.includes('David') ||
              v.name.includes('Male')
            )
          ) || voices.find(v => v.lang.startsWith('en-GB')) || voices[0];
          utterance.voice = orionVoice;
        } else {
          const novaVoice = voices.find(v => 
            v.lang.startsWith('en') && (
              v.name.includes('Victoria') ||
              v.name.includes('Karen') ||
              v.name.includes('Zira')
            )
          ) || voices[0];
          utterance.voice = novaVoice;
        }
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        if (isPlayingRef.current) {
          onComplete();
        }
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        if (isPlayingRef.current) {
          onComplete();
        }
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
      onComplete();
    }
  }, [voicePersona, playbackSpeed]);

  // Main speech play function: Continuous, unbroken execution
  const playActSpeech = useCallback(async (actIndex: number) => {
    stopAudio();

    if (!isOpen || !isPlayingRef.current) return;
    if (actIndex >= DEMO_ACTS.length) {
      setIsPlaying(false);
      return;
    }

    const act = DEMO_ACTS[actIndex];
    if (!act) return;

    const handleNextAct = () => {
      // Natural 700ms pause between acts for seamless storytelling
      setTimeout(() => {
        if (isPlayingRef.current) {
          if (actIndex + 1 < DEMO_ACTS.length) {
            setCurrentActIndex(actIndex + 1);
          } else {
            setIsPlaying(false);
          }
        }
      }, 700);
    };

    if (isMutedRef.current) {
      setIsSpeaking(false);
      return;
    }

    // Attempt Gemini TTS first for natural podcast quality
    const geminiVoice = voicePersona === 'aria' ? 'Kore' : voicePersona === 'orion' ? 'Puck' : 'Zephyr';
    const stylePrompt = voicePersona === 'aria'
      ? 'Warm, charismatic, natural keynote speaker with engaging storytelling rhythm'
      : voicePersona === 'orion'
      ? 'Confident, grounded tech founder explaining an innovative architecture clearly'
      : 'Vibrant, witty, intelligent host speaking with enthusiasm and conversational warmth';

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: act.speechText,
          voice: geminiVoice,
          style: stylePrompt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.audio && isPlayingRef.current) {
          const audio = new Audio(data.audio);
          audio.playbackRate = playbackSpeed;
          audioRef.current = audio;

          audio.onplay = () => setIsSpeaking(true);
          audio.onended = () => {
            setIsSpeaking(false);
            handleNextAct();
          };
          audio.onerror = () => {
            // Audio error fallback
            speakWithBrowserSpeech(act.speechText, handleNextAct);
          };

          await audio.play();
          return;
        }
      }
    } catch {
      // Fallback seamlessly to neural browser speech
    }

    speakWithBrowserSpeech(act.speechText, handleNextAct);
  }, [isOpen, voicePersona, playbackSpeed, speakWithBrowserSpeech, stopAudio]);

  // Trigger speech whenever currentActIndex changes or playback starts
  useEffect(() => {
    if (isOpen && isPlaying) {
      playActSpeech(currentActIndex);
    } else {
      stopAudio();
    }
  }, [isOpen, currentActIndex, isPlaying, voicePersona, playActSpeech, stopAudio]);

  // Overall demo elapsed timer (for visual counter up to 180s)
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setElapsedSeconds(prev => {
        if (prev >= 180) return 180;
        return prev + 1;
      });
    }, 1000 / playbackSpeed);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, playbackSpeed]);

  // Play / Pause Toggle
  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopAudio();
    } else {
      setIsPlaying(true);
      playActSpeech(currentActIndex);
    }
  };

  // Skip to specific Act
  const jumpToAct = (index: number) => {
    stopAudio();
    setCurrentActIndex(index);
    if (!isPlaying) setIsPlaying(true);
  };

  // Restart presentation from Act 1
  const handleRestart = () => {
    stopAudio();
    setElapsedSeconds(0);
    setCurrentActIndex(0);
    setIsPlaying(true);
  };

  const personaDetails = {
    aria: {
      name: 'Aria',
      title: 'Warm Keynote Host',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
    },
    orion: {
      name: 'Orion',
      title: 'Visionary Co-Founder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    nova: {
      name: 'Nova',
      title: 'Charismatic Matchmaker',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  }[voicePersona];

  if (!isOpen) return null;

  return (
    // Locked Fullscreen Presentation Overlay - Client cannot navigate away or click background
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto select-none">
      
      {/* Presentation Container */}
      <div className="relative w-full max-w-6xl min-h-[640px] max-h-[94vh] bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-neutral-100 ring-1 ring-white/10">

        {/* Presentation Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur">
          
          {/* Host & Mode Status */}
          <div className="flex items-center space-x-3.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-rose-500 via-pink-500 to-amber-400 shadow">
                <img 
                  src={personaDetails.avatar} 
                  alt={personaDetails.name} 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              {isSpeaking && (
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-neutral-950 animate-ping"></span>
              )}
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-white font-editorial text-base">
                  CupidAgents Keynote Walkthrough
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase border ${personaDetails.tagColor}`}>
                  Host: {personaDetails.name}
                </span>
                <span className="hidden sm:inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 text-[10px] font-mono-code">
                  <Lock className="w-2.5 h-2.5 text-amber-400" />
                  <span>Guided Presentation Mode</span>
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Act {currentAct.id} of 5: {currentAct.actTitle}
              </p>
            </div>
          </div>

          {/* Persona Switcher & Exit Button */}
          <div className="flex items-center space-x-3">
            
            {/* Host Voice Switcher */}
            <div className="hidden md:flex items-center bg-neutral-900 rounded-xl p-1 border border-neutral-800 text-xs">
              {(['aria', 'orion', 'nova'] as VoicePersona[]).map((persona) => (
                <button
                  key={persona}
                  onClick={() => {
                    setVoicePersona(persona);
                    stopAudio();
                  }}
                  className={`px-2.5 py-1 rounded-lg font-medium capitalize transition ${
                    voicePersona === persona 
                      ? 'bg-rose-600 text-white shadow-md' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {persona}
                </button>
              ))}
            </div>

            {/* Exit Presentation Button */}
            <button
              onClick={() => {
                stopAudio();
                onClose();
              }}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-xs font-semibold text-neutral-300 hover:text-white transition shadow"
              title="Exit presentation and return to interactive app"
            >
              <span>Exit Demo</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Central Stage: High-Production Visual Showcase */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between space-y-6">

          {/* Dynamic Scene Visualizer based on Current Act */}
          <div className="w-full rounded-2xl bg-neutral-950 border border-neutral-800 p-6 relative overflow-hidden min-h-[290px] flex flex-col justify-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-rose-500/10 via-transparent to-transparent pointer-events-none" />

            {/* SCENE 1: The End of Swipe Fatigue */}
            {currentAct.visualTheme === 'problem' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                  <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold font-mono-code mb-2 uppercase">
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Traditional Swiping (Broken)</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>Average 85 minutes per day lost to mindless swiping</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>Over 90% of matches end in ghosting or silence</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>Superficial bios disguise real psychological dealbreakers</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-950/40 via-neutral-900/80 to-neutral-900 border border-rose-500/30 ring-1 ring-rose-500/20 shadow-xl">
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono-code mb-2 uppercase">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>The CupidAgents Paradigm</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-neutral-200">
                    <li className="flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span><strong>Autonomous AI Twin:</strong> Dates and mingles on your behalf</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><strong>Two Truth Sources:</strong> Grounded in LinkedIn + Instagram</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span><strong>Zero Human Time Wasted:</strong> Meet only when chemistry is verified</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* SCENE 2: The Dual-Source Grounding Rule */}
            {currentAct.visualTheme === 'grounding' && (
              <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-3 sm:space-x-6 w-full">
                  
                  {/* LinkedIn Box */}
                  <div className="flex-1 p-4 rounded-xl bg-neutral-900/90 border border-blue-500/30 text-left">
                    <div className="text-[11px] font-mono-code text-blue-400 font-bold uppercase mb-1">Source A</div>
                    <div className="text-sm font-bold text-white mb-1">Public LinkedIn</div>
                    <p className="text-xs text-neutral-400 leading-snug">
                      Career trajectory, intellectual ambition, work ethic, education, and long-term values.
                    </p>
                  </div>

                  {/* Merge Symbol */}
                  <div className="w-10 h-10 rounded-full bg-rose-600/30 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                    <Sparkles className="w-5 h-5 animate-spin" />
                  </div>

                  {/* Instagram Box */}
                  <div className="flex-1 p-4 rounded-xl bg-neutral-900/90 border border-pink-500/30 text-left">
                    <div className="text-[11px] font-mono-code text-pink-400 font-bold uppercase mb-1">Source B</div>
                    <div className="text-sm font-bold text-white mb-1">Public Instagram</div>
                    <p className="text-xs text-neutral-400 leading-snug">
                      Weekend habits, aesthetic taste, travel rituals, humor, and natural lifestyle energy.
                    </p>
                  </div>
                </div>

                {/* Cognitive Synthesis Result */}
                <div className="w-full p-4 rounded-2xl bg-neutral-900/90 border border-neutral-700 flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-xs font-mono-code text-emerald-400 font-semibold">SYNTHESIZED PERSONA</div>
                    <div className="text-sm font-bold text-white">Full Psychological Dossier & Autonomous Dating Twin</div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-neutral-400">
                    <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">5-Vector Energy</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">Explicit Dealbreakers</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCENE 3: Autonomous Dating & Inner Monologues */}
            {currentAct.visualTheme === 'simulation' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Dialogue stream preview */}
                <div className="space-y-3 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                    <span className="font-semibold text-rose-400 flex items-center space-x-1">
                      <MessageSquareHeart className="w-3.5 h-3.5" />
                      <span>Live Simulation · The Crown Penthouse</span>
                    </span>
                    <span className="text-emerald-400 font-mono-code">Resonance: 94%</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-200">
                      <span className="font-bold text-rose-300">Agent A:</span> "Building a company teaches you quickly that vision without empathy is just ego."
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-200">
                      <span className="font-bold text-amber-300">Agent B:</span> "Exactly. That's why I prioritize authentic vulnerability over curated perfection."
                    </div>
                  </div>
                </div>

                {/* Inner Monologue Scanner */}
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center space-x-2 text-purple-300 text-xs font-bold font-mono-code mb-2">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Private Inner Monologue Engine</span>
                    </div>
                    <p className="text-xs text-neutral-300 italic mb-3">
                      "Agent A privately evaluating: Candidate demonstrates authentic founder resilience without defensiveness. Intellectual spark detected."
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-purple-400 font-mono-code pt-2 border-t border-purple-500/20">
                    <span>Dealbreakers: None triggered</span>
                    <span>Status: Mutual Second Date Spark</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCENE 4: 5-Dimensional Compatibility Matrix */}
            {currentAct.visualTheme === 'matrix' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-bold text-white uppercase tracking-wider font-mono-code">5-Dimensional Compatibility Matrix</span>
                  <span className="text-amber-400 font-semibold">Overall Match: 96% Deep Alignment</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {[
                    { label: 'Intellectual Depth', score: 98, desc: 'Shared curiosity & philosophical banter' },
                    { label: 'Emotional Values', score: 95, desc: 'Shared vulnerability & transparency' },
                    { label: 'Lifestyle Rhythm', score: 92, desc: 'Fast-paced weekday, peaceful weekend' },
                    { label: 'Career Ambition', score: 99, desc: 'High-agency founders & creators' },
                    { label: 'Humor & Wit', score: 94, desc: 'Bantering, self-aware, warm' },
                  ].map((dim, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center">
                      <div className="text-xl font-bold text-white font-editorial">{dim.score}%</div>
                      <div className="text-[11px] font-semibold text-rose-400 truncate mb-1">{dim.label}</div>
                      <div className="text-[10px] text-neutral-400 leading-tight line-clamp-2">{dim.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                  <span><strong>Psychological Insight:</strong> High mutual appreciation for creative autonomy with zero codependency risk.</span>
                  <span className="text-emerald-400 font-bold shrink-0 ml-2">✓ Verified Deep Fit</span>
                </div>
              </div>
            )}

            {/* SCENE 5: The Autonomous Romance Network */}
            {currentAct.visualTheme === 'future' && (
              <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-rose-950/60">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-editorial">
                    Dating, Outsourced to Your Digital Mind
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Continuous 24/7 autonomous exploration. Zero swiping. Zero superficial filters. Humans only connect when mutual spark is mathematically assured.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                    ⚡ 30+ Active Member Agents
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                    🔗 Instant Proxy Ingestion
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                    🛡️ Zero Bot / Catfish Guarantee
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Active Narration Box & Soundwave Visualizer */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-inner space-y-3">
            <div className="flex items-center justify-between">
              
              {/* Act Title & Live Soundwave */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 h-6 px-2 bg-neutral-900 rounded-lg border border-neutral-800">
                  {[40, 75, 100, 60, 90, 45, 80, 50, 95].map((h, i) => (
                    <span
                      key={i}
                      style={{
                        height: isSpeaking ? `${Math.max(20, h * (i % 2 === 0 ? 0.95 : 1.05))}%` : '20%',
                        transition: 'height 0.15s ease-in-out'
                      }}
                      className={`w-1 rounded-full ${
                        isSpeaking ? 'bg-gradient-to-t from-rose-500 to-amber-400' : 'bg-neutral-700'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono-code text-rose-400 font-bold uppercase tracking-wider">
                  {currentAct.durationEstimate} · Act {currentAct.id}: {currentAct.actTitle}
                </span>
              </div>

              {/* Status pill */}
              <div className="flex items-center space-x-2 text-xs">
                {isSpeaking ? (
                  <span className="text-emerald-400 font-medium flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Speaking continuous narration...</span>
                  </span>
                ) : isPlaying ? (
                  <span className="text-neutral-400">Loading next scene...</span>
                ) : (
                  <span className="text-amber-400">Presentation paused</span>
                )}
              </div>
            </div>

            {/* Spoken Text Transcript */}
            <p className="text-sm sm:text-base text-neutral-100 font-medium leading-relaxed italic">
              "{currentAct.speechText}"
            </p>
          </div>

          {/* Act Navigation Chips (Presenter Chapter Select) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {DEMO_ACTS.map((act, index) => {
              const isActive = index === currentActIndex;
              const isPast = index < currentActIndex;
              return (
                <button
                  key={act.id}
                  onClick={() => jumpToAct(index)}
                  className={`p-2.5 rounded-xl border text-left transition ${
                    isActive
                      ? 'bg-rose-600/20 border-rose-500 text-white shadow-lg ring-1 ring-rose-500/40'
                      : isPast
                      ? 'bg-neutral-950/80 border-neutral-800 text-neutral-400 hover:text-white'
                      : 'bg-neutral-950/40 border-neutral-800/60 text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-mono-code text-rose-400 font-bold">Act {act.id}</span>
                    <span className="text-[10px] text-neutral-500 font-mono-code">{act.durationEstimate}</span>
                  </div>
                  <div className="text-xs font-bold truncate">{act.actTitle}</div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Bottom Presentation Controls Bar */}
        <div className="px-6 py-4 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          
          {/* Play / Pause / Restart */}
          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-xl bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-lg shadow-rose-950/50"
              title={isPlaying ? 'Pause Presentation' : 'Play Presentation'}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>

            <button
              onClick={() => {
                if (currentActIndex > 0) jumpToAct(currentActIndex - 1);
              }}
              disabled={currentActIndex === 0}
              className="p-2 rounded-lg hover:text-white hover:bg-neutral-900 transition disabled:opacity-30"
              title="Previous Chapter"
            >
              <Rewind className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (currentActIndex + 1 < DEMO_ACTS.length) jumpToAct(currentActIndex + 1);
              }}
              disabled={currentActIndex + 1 >= DEMO_ACTS.length}
              className="p-2 rounded-lg hover:text-white hover:bg-neutral-900 transition disabled:opacity-30"
              title="Next Chapter"
            >
              <FastForward className="w-4 h-4" />
            </button>

            <button
              onClick={handleRestart}
              className="p-2 rounded-lg hover:text-white hover:bg-neutral-900 transition"
              title="Restart from Act 1"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Time Indicator */}
            <div className="font-mono-code text-xs text-neutral-300 ml-2">
              <span className="text-white font-bold">Act {currentActIndex + 1} / 5</span>
              <span className="text-neutral-500"> ({Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')})</span>
            </div>
          </div>

          {/* Right Controls: Audio Mute, Speed, Exit Presentation */}
          <div className="flex items-center space-x-3">
            {/* Mute */}
            <button
              onClick={() => {
                const nextMuted = !isMuted;
                setIsMuted(nextMuted);
                if (nextMuted) {
                  stopAudio();
                } else if (isPlaying) {
                  playActSpeech(currentActIndex);
                }
              }}
              className={`p-2 rounded-lg transition ${
                isMuted ? 'text-amber-400 bg-amber-400/10' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
              title={isMuted ? 'Unmute Host' : 'Mute Host'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Speed Multiplier */}
            <div className="flex items-center bg-neutral-900 rounded-lg p-0.5 border border-neutral-800 text-[11px] font-mono-code">
              {[1, 1.25].map(spd => (
                <button
                  key={spd}
                  onClick={() => setPlaybackSpeed(spd)}
                  className={`px-2 py-0.5 rounded font-bold transition ${
                    playbackSpeed === spd ? 'bg-rose-600 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>

            {/* Done / Return Button */}
            <button
              onClick={() => {
                stopAudio();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow"
            >
              <span>Explore Interactive App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
