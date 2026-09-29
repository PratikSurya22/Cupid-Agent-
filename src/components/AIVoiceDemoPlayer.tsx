import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, X, Sparkles, 
  FastForward, Rewind, Heart, ShieldCheck, CheckCircle2,
  Lock, MessageSquareHeart, Clock, Timer, Lightbulb,
  Radio, Zap, Compass, ArrowRight, Eye, ChevronRight
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
  startSec: number;
  endSec: number;
  speechText: string;
  visualTheme: 'problem' | 'grounding' | 'simulation' | 'matrix' | 'future';
  hostMood: {
    emoji: string;
    state: string;
    vibe: string;
    expressionClass: string;
  };
  hotTake: {
    title: string;
    quote: string;
    stat: string;
  };
}

const TOTAL_DEMO_SECONDS = 180; // 3 minutes total

const DEMO_ACTS: DemoAct[] = [
  {
    id: 1,
    actTitle: 'The End of Swipe Fatigue',
    tagline: 'Why Modern Dating is Broken & The Autonomous Agent Paradigm',
    durationEstimate: '0:00 - 0:35',
    startSec: 0,
    endSec: 35,
    visualTheme: 'problem',
    hostMood: {
      emoji: '☕',
      state: 'Candid & Empathetic',
      vibe: 'Calling out the exhaustion of modern swiping',
      expressionClass: 'ring-rose-500/50'
    },
    hotTake: {
      title: "Host's Candid Confession",
      quote: "Modern dating apps didn't solve romance—they gamified our loneliness for ad revenue. It's time for real software to do the work.",
      stat: "85 min/day wasted on mindless swiping with a 92% ghosting rate"
    },
    speechText: "Hey there, welcome in! You know that sinking feeling when you open a dating app after a long workday, swipe for forty minutes, and end up matching with someone who only replies with 'hey'? Modern dating isn't just exhausting—it's broken. Millions of people burn out every month from superficial filters and awkward small talk. But CupidAgents is built on a radically new premise: what if you never had to swipe or suffer through awkward first dates again? Instead, an autonomous digital agent—deeply grounded in who you actually are—goes out into the network and dates on your behalf."
  },
  {
    id: 2,
    actTitle: 'The Dual-Source Grounding Rule',
    tagline: 'Why We Synthesize Only Two Official Public Footprints',
    durationEstimate: '0:35 - 1:10',
    startSec: 35,
    endSec: 70,
    visualTheme: 'grounding',
    hostMood: {
      emoji: '💡',
      state: 'Fascinated & Sharp',
      vibe: 'Deconstructing real psychological truth',
      expressionClass: 'ring-blue-500/50'
    },
    hotTake: {
      title: "Host's Grounding Secret",
      quote: "Nobody puts 'I spend 4 hours analyzing mid-century architecture on Sunday' on a dating bio. True compatibility lives at the crossroads of your career and your weekend recharge.",
      stat: "Dual-source grounding eliminates 100% of fake personas & bots"
    },
    speechText: "Now here's the rule that changes everything. We don't ask people to fill out fake personality quizzes or witty one-line bios that don't mean anything. Real human compatibility lives right at the intersection of two things: what you build during the week, and how you recharge on the weekend. That's why our system enforces a strict dual-source foundation. Public LinkedIn captures your intellectual ambition, career drive, and core life values. Public Instagram reveals your aesthetic taste, sense of humor, and weekend energy. By synthesizing both, the agent constructs an authentic cognitive twin with real communication styles and non-negotiable dealbreakers."
  },
  {
    id: 3,
    actTitle: 'Autonomous Dates & Inner Monologues',
    tagline: 'Multi-Turn Virtual Dates with Real-Time Psychological Probing',
    durationEstimate: '1:10 - 1:55',
    startSec: 70,
    endSec: 115,
    visualTheme: 'simulation',
    hostMood: {
      emoji: '🥂',
      state: 'Intrigued & Leaning In',
      vibe: 'Observing live conversational chemistry',
      expressionClass: 'ring-purple-500/50'
    },
    hotTake: {
      title: "Host's Mind-Reader Take",
      quote: "Watch how the agents don't just flatter each other. They privately test conflict styles and emotional availability before anyone commits to a real-life drink.",
      stat: "Multi-turn simulation evaluates over 25 psychological micro-signals"
    },
    speechText: "Now let's watch what actually happens inside an autonomous date. This isn't just two bots exchanging polite chit-chat. Our agents actually meet in rich ambient settings—like a rooftop lounge or an art gallery. They banter, probe each other's life philosophies, and test emotional intelligence. But what makes this truly revolutionary are the private inner monologues. With every single line spoken, each agent privately evaluates vulnerability, measures emotional chemistry, and scans for dealbreakers in real-time. Neither human has to waste an evening until deep psychological alignment is already proven."
  },
  {
    id: 4,
    actTitle: 'The 5-Dimensional Compatibility Matrix',
    tagline: 'Objective Psychological Alignment Across Five Core Vectors',
    durationEstimate: '1:55 - 2:30',
    startSec: 115,
    endSec: 150,
    visualTheme: 'matrix',
    hostMood: {
      emoji: '🎯',
      state: 'Analytical & Objective',
      vibe: 'Breaking down multi-vector alignment',
      expressionClass: 'ring-amber-500/50'
    },
    hotTake: {
      title: "Host's Compatibility Rule",
      quote: "A generic 85% match tells you nothing. If one partner lives for spontaneous chaos and the other needs structured routine, chemistry burns out fast. We expose the exact vectors.",
      stat: "5 core dimensions measured: Intellectual, Emotional, Lifestyle, Career, & Wit"
    },
    speechText: "When an autonomous date concludes, CupidAgents doesn't give you a lazy, meaningless percentage. It computes a comprehensive compatibility matrix across five foundational psychological dimensions: intellectual depth, emotional values, lifestyle rhythm, career ambition, and humor alignment. The system articulates exactly why two minds resonate, and just as crucially, it highlights potential friction points before anyone steps into a real-world date. You receive an objective, transparent match dossier so you only meet when the spark is genuine."
  },
  {
    id: 5,
    actTitle: 'The Autonomous Romance Network',
    tagline: 'Open Ingestion, Dynamic Twins, and The Zero-Swipe Era',
    durationEstimate: '2:30 - 3:00',
    startSec: 150,
    endSec: 180,
    visualTheme: 'future',
    hostMood: {
      emoji: '🚀',
      state: 'Visionary & Radiant',
      vibe: 'Welcoming you to the zero-swipe future',
      expressionClass: 'ring-emerald-500/50'
    },
    hotTake: {
      title: "Host's Vision for You",
      quote: "Imagine waking up on Saturday, opening CupidAgents, and finding a verified match dossier ready for coffee. That's the power of putting your AI twin to work.",
      stat: "Zero swiping. Zero superficial filters. 100% genuine connection."
    },
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

  // Lip-sync / speaking visualization animation state
  const [mouthOpen, setMouthOpen] = useState<boolean>(false);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  // Audio references
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;
  const isMutedRef = useRef<boolean>(isMuted);
  isMutedRef.current = isMuted;

  const currentAct = DEMO_ACTS[currentActIndex];

  // Natural blinking effect every 3.5 seconds
  useEffect(() => {
    if (!isOpen) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3600);
    return () => clearInterval(blinkInterval);
  }, [isOpen]);

  // Dynamic mouth movement viseme when speaking
  useEffect(() => {
    if (!isSpeaking) {
      setMouthOpen(false);
      return;
    }
    const mouthInterval = setInterval(() => {
      setMouthOpen(prev => !prev);
    }, 160);
    return () => clearInterval(mouthInterval);
  }, [isSpeaking]);

  // Audio chime tone using Web Audio API for smooth studio start
  const playStudioChime = useCallback(() => {
    if (typeof window === 'undefined' || isMutedRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.36);
    } catch {
      // Audio context may require user gesture or be unsupported
    }
  }, []);

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
    setMouthOpen(false);
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
              v.name.includes('Zira') ||
              v.name.includes('Female')
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

    // Play subtle studio chime
    playStudioChime();

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
  }, [isOpen, voicePersona, playbackSpeed, speakWithBrowserSpeech, stopAudio, playStudioChime]);

  // Trigger speech whenever currentActIndex changes or playback starts
  useEffect(() => {
    if (isOpen && isPlaying) {
      playActSpeech(currentActIndex);
    } else {
      stopAudio();
    }
  }, [isOpen, currentActIndex, isPlaying, voicePersona, playActSpeech, stopAudio]);

  // Overall demo elapsed timer (accurate master clock up to 180s)
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setElapsedSeconds(prev => {
        if (prev >= TOTAL_DEMO_SECONDS) return TOTAL_DEMO_SECONDS;
        const nextSec = prev + 1;
        
        // Auto-sync act index if elapsed seconds passes into next act threshold
        const matchingActIndex = DEMO_ACTS.findIndex(act => nextSec >= act.startSec && nextSec < act.endSec);
        if (matchingActIndex !== -1 && matchingActIndex !== currentActIndex && matchingActIndex > currentActIndex) {
          setCurrentActIndex(matchingActIndex);
        }
        
        return nextSec;
      });
    }, 1000 / playbackSpeed);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, playbackSpeed, currentActIndex]);

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
    setElapsedSeconds(DEMO_ACTS[index].startSec);
    if (!isPlaying) setIsPlaying(true);
  };

  // Restart presentation from Act 1
  const handleRestart = () => {
    stopAudio();
    setElapsedSeconds(0);
    setCurrentActIndex(0);
    setIsPlaying(true);
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const remainingSeconds = Math.max(0, TOTAL_DEMO_SECONDS - elapsedSeconds);
  const progressPercent = Math.min(100, Math.round((elapsedSeconds / TOTAL_DEMO_SECONDS) * 100));

  const personaDetails = {
    aria: {
      name: 'Dr. Aria Vance',
      role: 'Lead Cognitive Scientist & AI Host',
      personality: 'Warm, empathic, highly articulate behavioral expert',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      badgeBg: 'from-rose-500 to-pink-500',
      quoteTheme: 'border-rose-500/40 bg-rose-950/20 text-rose-300'
    },
    orion: {
      name: 'Orion Blake',
      role: 'Founding Systems Architect',
      personality: 'Passionate founder, systems thinker, anti-swipe advocate',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      badgeBg: 'from-indigo-500 to-blue-500',
      quoteTheme: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300'
    },
    nova: {
      name: 'Nova Sterling',
      role: 'Dating Anthropologist & Match Strategist',
      personality: 'Witty, perceptive, cuts straight through dating clichés',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      badgeBg: 'from-emerald-500 to-teal-500',
      quoteTheme: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300'
    }
  }[voicePersona];

  if (!isOpen) return null;

  return (
    // Locked Fullscreen Presentation Overlay - Client cannot wander away or navigate background
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto select-none">
      
      {/* Presentation Container */}
      <div className="relative w-full max-w-6xl min-h-[660px] max-h-[96vh] bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-neutral-100 ring-1 ring-white/10">

        {/* ========================================================
            MASTER TIMELINE & PROGRESS BAR (VERY PROMINENT AT TOP)
        ======================================================== */}
        <div className="w-full bg-neutral-950 border-b border-neutral-800/80 px-4 sm:px-6 pt-3 pb-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 mb-2">
            
            {/* Left: Presentation Act info & Live On-Air Pill */}
            <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-between sm:justify-start">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isSpeaking ? 'bg-rose-400' : 'bg-emerald-400'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${isSpeaking ? 'bg-rose-500' : 'bg-emerald-500'}`}></span>
                </span>
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-rose-400 flex items-center space-x-1.5">
                  <Radio className="w-3.5 h-3.5" />
                  <span>{isSpeaking ? 'AI HOST ON AIR' : isPlaying ? 'PLAYING KEYNOTE' : 'PRESENTATION PAUSED'}</span>
                </span>
              </div>

              <span className="hidden sm:inline text-neutral-600">|</span>

              <div className="text-xs font-mono-code text-neutral-300">
                <span className="text-white font-bold">Act {currentAct.id} of 5:</span> {currentAct.actTitle}
              </div>
            </div>

            {/* Right: THE MASTER DIGITAL TIMER (LARGE & PROMINENT) */}
            <div className="flex items-center space-x-3 bg-neutral-900/90 border border-neutral-700/80 rounded-2xl px-3.5 py-1.5 shadow-lg shadow-black/50">
              
              {/* Circular Dial Indicator */}
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-neutral-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-rose-500 transition-all duration-300 ease-linear"
                    strokeDasharray={`${progressPercent}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <Clock className="w-3 h-3 text-rose-400 absolute" />
              </div>

              {/* Digital Elapsed / Total Time */}
              <div className="flex flex-col text-right">
                <div className="flex items-baseline space-x-1.5 font-mono-code">
                  <span className="text-white font-extrabold text-sm sm:text-base tracking-wider">
                    {formatTime(elapsedSeconds)}
                  </span>
                  <span className="text-neutral-500 text-xs">/</span>
                  <span className="text-neutral-400 text-xs font-semibold">03:00</span>
                </div>
                <div className="text-[10px] font-mono-code text-amber-400 font-semibold tracking-tight">
                  -{formatTime(remainingSeconds)} remaining
                </div>
              </div>

              {/* Percentage Badge */}
              <div className="pl-1.5 border-l border-neutral-800">
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-mono-code font-bold">
                  {progressPercent}%
                </span>
              </div>
            </div>

          </div>

          {/* Master 5-Segment Visual Timeline with Act Labels */}
          <div className="w-full">
            <div className="relative h-2 w-full bg-neutral-900 rounded-full overflow-hidden flex border border-neutral-800">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 transition-all duration-300 ease-linear"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            
            {/* Act Milestones Under Bar */}
            <div className="flex justify-between items-center text-[10px] font-mono-code text-neutral-400 pt-1 px-1">
              {DEMO_ACTS.map((act, idx) => (
                <button
                  key={act.id}
                  onClick={() => jumpToAct(idx)}
                  className={`transition hover:text-white flex items-center space-x-0.5 ${
                    currentActIndex === idx ? 'text-rose-400 font-bold' : idx < currentActIndex ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  <span className="hidden sm:inline">Act {act.id}:</span>
                  <span>{formatTime(act.startSec)}</span>
                </button>
              ))}
              <span className="text-neutral-600">03:00</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            CENTRAL STAGE: HIGH-PRODUCTION VIDEO & PRESENTATION
        ======================================================== */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-6">

          {/* TOP SECTION: THE AI BOT HOST STUDIO & EXPRESSIVE AVATAR (LIFELIKE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            
            {/* HOST PRESENTER STUDIO CARD (LIFELIKE ANIMATED AVATAR) */}
            <div className="lg:col-span-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              
              {/* Studio Backdrop Lighting Glow */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Host Header: Identity & Mode */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span className="text-[10px] font-mono-code uppercase font-bold text-neutral-400">
                    Live Keynote Anchor
                  </span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase border ${personaDetails.tagColor}`}>
                  {personaDetails.name.split(' ')[0]}
                </span>
              </div>

              {/* Animated Host Visual Center */}
              <div className="py-3 flex flex-col items-center text-center">
                
                {/* The Expressive Animated Persona Cam */}
                <div className="relative mb-3">
                  
                  {/* Outer Pulsing Soundwave Glow when speaking */}
                  <div 
                    className={`w-28 h-28 rounded-full p-1 bg-gradient-to-tr ${personaDetails.badgeBg} transition-all duration-300 ${
                      isSpeaking ? 'ring-4 ring-rose-500/40 scale-105 shadow-xl shadow-rose-950/80' : 'ring-1 ring-neutral-700'
                    }`}
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900">
                      
                      {/* Avatar Image with organic breathing motion */}
                      <img 
                        src={personaDetails.avatar} 
                        alt={personaDetails.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isSpeaking ? 'scale-105' : 'scale-100'
                        }`}
                      />

                      {/* Realistic Natural Eye Blink Overlay */}
                      <div 
                        className={`absolute inset-0 bg-neutral-900/90 transition-opacity duration-75 pointer-events-none ${
                          isBlinking ? 'opacity-85' : 'opacity-0'
                        }`}
                      />

                      {/* Dynamic Lip-Sync Viseme Simulation */}
                      {isSpeaking && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                          <div 
                            className={`rounded-full bg-rose-950/90 border border-rose-500/60 transition-all duration-150 ${
                              mouthOpen ? 'w-5 h-3 shadow-md' : 'w-4 h-1'
                            }`}
                          />
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Live Speaking Equalizer Badge */}
                  {isSpeaking && (
                    <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-neutral-950 border border-emerald-500/60 flex items-center space-x-1 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-[9px] font-mono-code font-bold text-emerald-400 uppercase">Speaking</span>
                    </div>
                  )}

                  {/* Host Persona Quick Switcher Chips */}
                  <div className="absolute -top-1 -right-1 flex space-x-1">
                    {(['aria', 'orion', 'nova'] as VoicePersona[]).map(p => (
                      <button
                        key={p}
                        onClick={() => {
                          setVoicePersona(p);
                          stopAudio();
                        }}
                        className={`w-5 h-5 rounded-full text-[9px] font-bold uppercase transition flex items-center justify-center ${
                          voicePersona === p 
                            ? 'bg-rose-500 text-white shadow ring-1 ring-white' 
                            : 'bg-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                        title={`Switch host to ${p}`}
                      >
                        {p[0]}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Host Name & Bio */}
                <h4 className="text-sm font-bold text-white font-editorial tracking-wide">
                  {personaDetails.name}
                </h4>
                <p className="text-[11px] text-neutral-400 font-medium">
                  {personaDetails.role}
                </p>

                {/* Host's Real-Time Expressive Mood & Reaction Badge */}
                <div className="mt-2.5 px-3 py-1 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center space-x-2 text-xs">
                  <span className="text-sm">{currentAct.hostMood.emoji}</span>
                  <div className="text-left">
                    <div className="text-[10px] font-mono-code font-bold text-white uppercase">
                      {currentAct.hostMood.state}
                    </div>
                    <div className="text-[9px] text-neutral-400 line-clamp-1">
                      {currentAct.hostMood.vibe}
                    </div>
                  </div>
                </div>

              </div>

              {/* Host's Candid Side Commentary / Hot Take Bubble (MAKES IT FASCINATING) */}
              <div className={`mt-2 p-2.5 rounded-xl border text-left transition-all duration-300 ${personaDetails.quoteTheme}`}>
                <div className="flex items-center space-x-1.5 text-[10px] font-mono-code font-bold uppercase mb-1">
                  <Lightbulb className="w-3 h-3 text-amber-400" />
                  <span>{currentAct.hotTake.title}</span>
                </div>
                <p className="text-xs text-neutral-200 italic leading-snug">
                  "{currentAct.hotTake.quote}"
                </p>
                <div className="mt-1.5 pt-1.5 border-t border-neutral-800/60 flex items-center space-x-1 text-[10px] font-mono-code text-neutral-400">
                  <Zap className="w-2.5 h-2.5 text-amber-400" />
                  <span className="truncate">{currentAct.hotTake.stat}</span>
                </div>
              </div>

            </div>

            {/* MAIN STAGE VISUALIZER (ACT-SPECIFIC GRAPHICS & ARCHITECTURE) */}
            <div className="lg:col-span-8 rounded-2xl bg-neutral-950 border border-neutral-800/90 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between">
              
              {/* Ambient Background Glow */}
              <div className="absolute inset-0 bg-radial-gradient from-rose-500/10 via-transparent to-transparent pointer-events-none" />

              {/* SCENE 1: The End of Swipe Fatigue */}
              {currentAct.visualTheme === 'problem' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full">
                  <div className="p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800">
                    <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold font-mono-code mb-2.5 uppercase">
                      <X className="w-4 h-4 text-rose-500" />
                      <span>Traditional Swiping (Broken)</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-neutral-300">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        <span>85+ minutes per day lost to mindless swiping</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        <span>Over 90% of matches end in silence or ghosting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                        <span>Superficial bios disguise real lifestyle dealbreakers</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/40 via-neutral-900/80 to-neutral-900 border border-rose-500/30 ring-1 ring-rose-500/20 shadow-xl">
                    <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold font-mono-code mb-2.5 uppercase">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>The CupidAgents Paradigm</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-neutral-200">
                      <li className="flex items-center space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                        <span><strong>Autonomous AI Twin:</strong> Dates on your behalf 24/7</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span><strong>Two Grounding Sources:</strong> Public LinkedIn + Instagram</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Heart className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span><strong>Zero Time Wasted:</strong> Meet only when spark is proven</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* SCENE 2: The Dual-Source Grounding Rule */}
              {currentAct.visualTheme === 'grounding' && (
                <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto h-full justify-center">
                  <div className="flex items-center justify-center space-x-3 sm:space-x-5 w-full">
                    
                    {/* LinkedIn Box */}
                    <div className="flex-1 p-3.5 rounded-xl bg-neutral-900/90 border border-blue-500/30 text-left">
                      <div className="text-[10px] font-mono-code text-blue-400 font-bold uppercase mb-0.5">Source A</div>
                      <div className="text-sm font-bold text-white mb-1">Public LinkedIn</div>
                      <p className="text-xs text-neutral-400 leading-snug">
                        Intellectual ambition, work ethic, education, career values, and communication clarity.
                      </p>
                    </div>

                    {/* Merge Symbol */}
                    <div className="w-9 h-9 rounded-full bg-rose-600/30 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                      <Sparkles className="w-4 h-4 animate-spin" />
                    </div>

                    {/* Instagram Box */}
                    <div className="flex-1 p-3.5 rounded-xl bg-neutral-900/90 border border-pink-500/30 text-left">
                      <div className="text-[10px] font-mono-code text-pink-400 font-bold uppercase mb-0.5">Source B</div>
                      <div className="text-sm font-bold text-white mb-1">Public Instagram</div>
                      <p className="text-xs text-neutral-400 leading-snug">
                        Weekend rituals, aesthetic taste, travel energy, humor, and lifestyle rhythm.
                      </p>
                    </div>
                  </div>

                  {/* Cognitive Synthesis Result */}
                  <div className="w-full p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-700 flex items-center justify-between">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 items-center h-full">
                  <div className="space-y-2.5 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
                      <span className="font-semibold text-rose-400 flex items-center space-x-1">
                        <MessageSquareHeart className="w-3.5 h-3.5" />
                        <span>Live Multi-Turn Simulation</span>
                      </span>
                      <span className="text-emerald-400 font-mono-code">Resonance: 94%</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-200">
                        <span className="font-bold text-rose-300">Agent A:</span> "Building a company teaches you quickly that vision without empathy is just ego."
                      </div>
                      <div className="p-2 rounded-lg bg-neutral-950/80 border border-neutral-800 text-neutral-200">
                        <span className="font-bold text-amber-300">Agent B:</span> "Exactly. That's why I prioritize authentic vulnerability over curated perfection."
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center space-x-2 text-purple-300 text-xs font-bold font-mono-code mb-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Private Inner Monologue Engine</span>
                      </div>
                      <p className="text-xs text-neutral-300 italic mb-2">
                        "Agent A privately evaluating: Candidate demonstrates authentic founder resilience without defensiveness. Intellectual spark detected."
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-purple-400 font-mono-code pt-2 border-t border-purple-500/20">
                      <span>Dealbreakers: None triggered</span>
                      <span className="text-emerald-400 font-bold">✓ Mutual Second Date</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SCENE 4: 5-Dimensional Compatibility Matrix */}
              {currentAct.visualTheme === 'matrix' && (
                <div className="space-y-3 h-full flex flex-col justify-center">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="font-bold text-white uppercase tracking-wider font-mono-code">5-Dimensional Compatibility Matrix</span>
                    <span className="text-amber-400 font-semibold">Overall Match: 96% Deep Alignment</span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { label: 'Intellectual Depth', score: 98, desc: 'Shared curiosity & philosophical banter' },
                      { label: 'Emotional Values', score: 95, desc: 'Shared vulnerability & transparency' },
                      { label: 'Lifestyle Rhythm', score: 92, desc: 'Fast-paced weekday, peaceful weekend' },
                      { label: 'Career Ambition', score: 99, desc: 'High-agency founders & creators' },
                      { label: 'Humor & Wit', score: 94, desc: 'Bantering, self-aware, warm' },
                    ].map((dim, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-center">
                        <div className="text-lg font-bold text-white font-editorial">{dim.score}%</div>
                        <div className="text-[10px] font-semibold text-rose-400 truncate mb-0.5">{dim.label}</div>
                        <div className="text-[9px] text-neutral-400 leading-tight line-clamp-2">{dim.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-2 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                    <span><strong>Psychological Insight:</strong> High mutual appreciation for creative autonomy with zero codependency risk.</span>
                    <span className="text-emerald-400 font-bold shrink-0 ml-2">✓ Match Verified</span>
                  </div>
                </div>
              )}

              {/* SCENE 5: The Autonomous Romance Network */}
              {currentAct.visualTheme === 'future' && (
                <div className="flex flex-col items-center text-center space-y-3 max-w-xl mx-auto h-full justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-xl shadow-rose-950/60">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-editorial">
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

          </div>

          {/* ACTIVE SPOKEN SCRIPT SUBTITLE BOX (KINETIC TEXT HIGHLIGHT) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-inner space-y-2.5">
            <div className="flex items-center justify-between">
              
              {/* Soundwave Bars & Subtitle Header */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 h-5 px-2 bg-neutral-900 rounded-lg border border-neutral-800">
                  {[35, 75, 100, 60, 90, 45, 80, 50, 95].map((h, i) => (
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
                  Live Spoken Narration · {currentAct.durationEstimate}
                </span>
              </div>

              {/* Status pill */}
              <div className="flex items-center space-x-2 text-xs">
                {isSpeaking ? (
                  <span className="text-emerald-400 font-medium flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Broadcasting audio...</span>
                  </span>
                ) : isPlaying ? (
                  <span className="text-neutral-400">Loading next act...</span>
                ) : (
                  <span className="text-amber-400">Paused</span>
                )}
              </div>
            </div>

            {/* Kinetic Spoken Captions */}
            <p className="text-sm sm:text-base text-neutral-100 font-medium leading-relaxed italic">
              "{currentAct.speechText}"
            </p>
          </div>

          {/* ACT CHAPTER SELECTOR BAR */}
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

        {/* ========================================================
            BOTTOM BAR: PRESENTER CONTROLS & EXIT ACTION
        ======================================================== */}
        <div className="px-4 sm:px-6 py-3.5 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          
          {/* Play / Pause / Skip / Time Indicator */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={togglePlayPause}
              className="w-9 h-9 rounded-xl bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-lg shadow-rose-950/50"
              title={isPlaying ? 'Pause Presentation' : 'Play Presentation'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
            </button>

            <button
              onClick={() => {
                if (currentActIndex > 0) jumpToAct(currentActIndex - 1);
              }}
              disabled={currentActIndex === 0}
              className="p-2 rounded-lg hover:text-white hover:bg-neutral-900 transition disabled:opacity-30"
              title="Previous Act"
            >
              <Rewind className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (currentActIndex + 1 < DEMO_ACTS.length) jumpToAct(currentActIndex + 1);
              }}
              disabled={currentActIndex + 1 >= DEMO_ACTS.length}
              className="p-2 rounded-lg hover:text-white hover:bg-neutral-900 transition disabled:opacity-30"
              title="Next Act"
            >
              <FastForward className="w-4 h-4" />
            </button>

            <button
              onClick={handleRestart}
              className="p-2 rounded-lg hover:text-white hover:bg-neutral-900 transition"
              title="Restart from Beginning (0:00)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Time Indicator */}
            <div className="hidden sm:flex items-center space-x-2 font-mono-code text-xs text-neutral-300 ml-2">
              <Timer className="w-3.5 h-3.5 text-rose-400" />
              <span className="text-white font-bold">{formatTime(elapsedSeconds)}</span>
              <span className="text-neutral-500">/ 03:00</span>
            </div>
          </div>

          {/* Right Controls: Audio Mute, Speed, Return to App */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
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
              title={isMuted ? 'Unmute Host Audio' : 'Mute Host Audio'}
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

            {/* Exit / Explore App Button */}
            <button
              onClick={() => {
                stopAudio();
                onClose();
              }}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-500 hover:to-amber-400 text-white font-bold text-xs flex items-center space-x-1.5 transition shadow"
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
