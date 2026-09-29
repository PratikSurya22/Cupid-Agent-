export interface TwoSources {
  linkedin: {
    url: string;
    handle: string;
    verified: boolean;
    extractedData: {
      headline: string;
      currentRole: string;
      experienceSummary: string;
      leadershipStyle: string;
      workEthic: string;
      careerAmbition: string;
      intellectualPursuits: string[];
      education: string;
      networkingTone: string;
    };
  };
  instagram: {
    url: string;
    handle: string;
    verified: boolean;
    extractedData: {
      bioText: string;
      aestheticVibe: string;
      weekendRituals: string[];
      travelHighlights: string[];
      passions: string[];
      humorStyle: string;
      photoStyles: string[];
      visualEnergy: string;
    };
  };
}

export interface AgentAnalysis {
  needs: string[];
  hobbies: string[];
  interests: string[];
  qualities: {
    archetype: string;
    vibe: string;
    attachmentStyle: string;
    communicationCadence: string;
    dealbreakers: string[];
    greenFlags: string[];
    loveLanguage: string;
    energyBalance: {
      ambition: number;
      romance: number;
      intellect: number;
      humor: number;
      spontaneity: number;
    };
  };
  agentConfig: {
    agentName: string;
    datingPhilosophy: string;
    flirtingStyle: string;
    datePersonaPrompt: string;
    evaluationPriorities: string[];
  };
}

export interface Person {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  role: string;
  company: string;
  location: string;
  tagline: string;
  gender: 'male' | 'female' | 'non-binary';
  twoSources: TwoSources;
  agentAnalysis: AgentAnalysis;
  isCustomUser?: boolean;
}

export interface Venue {
  id: string;
  name: string;
  type: string;
  ambiance: string;
  city: string;
  icon: string;
  accentColor: string;
}

export interface DateTurn {
  speakerId: string;
  speakerName: string;
  text: string;
  emotion: 'charmed' | 'probing' | 'laughing' | 'pensive' | 'flirty' | 'guarded' | 'vulnerable';
  innerMonologue: string;
  chemistryDelta: number;
  timestamp: string;
}

export interface DateSession {
  id: string;
  personAId: string;
  personBId: string;
  venue: Venue;
  status: 'planning' | 'in_progress' | 'completed';
  turns: DateTurn[];
  outcome: {
    overallChemistry: number; // 0 - 100
    decisionA: 'second_date' | 'casual_friends' | 'polite_pass';
    decisionB: 'second_date' | 'casual_friends' | 'polite_pass';
    mutualDecision: 'mutual_spark' | 'one_sided_crush' | 'platonic_match' | 'incompatible';
    postDateVerdict: string;
    highlightMoment: string;
    frictionPoint: string;
    compatibilityDimensions: {
      intellectual: number;
      lifestyle: number;
      ambition: number;
      humor: number;
      vulnerability: number;
    };
  };
}

export interface MatchScore {
  candidatePersonId: string;
  candidate: Person;
  rank: number;
  overallScore: number;
  breakdown: {
    lifestyleFit: number;
    ambitionSynergy: number;
    intellectualBanter: number;
    valuesAlignment: number;
    humorChemistry: number;
  };
  whyTheyFit: string;
  potentialFriction: string;
  sharedGround: string[];
  datingPrediction: string;
}
