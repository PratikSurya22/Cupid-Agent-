// Browser Web Speech Synthesis audio engine for CupidAgents AI Voice Bot

class VoiceNarratorService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isMuted: boolean = false;
  private selectedVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const loadVoices = () => {
      const voices = this.synth?.getVoices() || [];
      // Prefer clear natural English voices
      const preferred = voices.find(
        v => (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Karen')) && v.lang.startsWith('en')
      ) || voices.find(v => v.lang.startsWith('en'));
      
      this.selectedVoice = preferred || voices[0] || null;
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.stop();

    if (this.isMuted) {
      if (onEnd) onEnd();
      return;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.selectedVoice) {
        utterance.voice = this.selectedVoice;
      }
      utterance.rate = 1.05; // Lively presentation tempo
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onend = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis error:', e);
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis failed to execute:', err);
      if (onEnd) onEnd();
    }
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (err) {
        // ignore
      }
    }
    this.currentUtterance = null;
  }

  public pause() {
    if (this.synth) {
      this.synth.pause();
    }
  }

  public resume() {
    if (this.synth) {
      this.synth.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stop();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }
}

export const voiceNarrator = new VoiceNarratorService();
