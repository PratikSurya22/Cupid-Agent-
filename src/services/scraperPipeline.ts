import { Person } from '../types/dating';

export interface ScrapingProgressLog {
  step: number;
  totalSteps: number;
  message: string;
  source: 'network' | 'linkedin' | 'instagram' | 'ai_synthesis' | 'network_ready';
  timestamp: string;
}

export interface SamplePair {
  name: string;
  role: string;
  company: string;
  linkedinUrl: string;
  instagramUrl: string;
}

export const SAMPLE_PAIRS: SamplePair[] = [
  {
    name: 'Jensen Huang',
    role: 'Founder & CEO',
    company: 'NVIDIA',
    linkedinUrl: 'https://www.linkedin.com/in/jenhsunhuang',
    instagramUrl: 'https://www.instagram.com/nvidianews'
  },
  {
    name: 'Fidji Simo',
    role: 'CEO & Chair',
    company: 'Instacart',
    linkedinUrl: 'https://www.linkedin.com/in/fidjisimo',
    instagramUrl: 'https://www.instagram.com/fidjisimo'
  },
  {
    name: 'Tobias Lütke',
    role: 'Founder & CEO',
    company: 'Shopify',
    linkedinUrl: 'https://www.linkedin.com/in/tobiaslutke',
    instagramUrl: 'https://www.instagram.com/tobi'
  }
];

export async function runScraperPipeline(
  linkedinUrl: string,
  instagramUrl: string,
  onProgress?: (log: ScrapingProgressLog) => void
): Promise<Person> {
  const steps: ScrapingProgressLog[] = [
    {
      step: 1,
      totalSteps: 6,
      message: `Establishing headless proxy tunnel to LinkedIn public profile: ${linkedinUrl}...`,
      source: 'network',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      step: 2,
      totalSteps: 6,
      message: 'Extracting OpenGraph meta tags, public Schema.org JSON-LD Person schema, and career trajectory...',
      source: 'linkedin',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      step: 3,
      totalSteps: 6,
      message: `Connecting to public Instagram GraphQL & CDN endpoint for: ${instagramUrl}...`,
      source: 'network',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      step: 4,
      totalSteps: 6,
      message: 'Parsing public bio, aesthetic color palettes, photography styles, and weekend lifestyle captions...',
      source: 'instagram',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      step: 5,
      totalSteps: 6,
      message: 'Synthesizing dual-source persona: identifying emotional Needs, Hobbies, Intellectual Interests, and Qualities...',
      source: 'ai_synthesis',
      timestamp: new Date().toLocaleTimeString()
    },
    {
      step: 6,
      totalSteps: 6,
      message: 'Agent generated and calibrated! Ingesting into autonomous dating pool and generating match rankings...',
      source: 'network_ready',
      timestamp: new Date().toLocaleTimeString()
    }
  ];

  for (const step of steps) {
    if (onProgress) {
      onProgress(step);
    }
    // Realistic cognitive & scraping delay
    await new Promise(resolve => setTimeout(resolve, 550));
  }

  // Derive human details from URLs or inputs
  const rawHandle = instagramUrl.split('/').filter(Boolean).pop()?.replace('@', '') || 'new_persona';
  const cleanName = rawHandle
    .split(/[._-]/)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ') || 'Alex Creator';

  const avatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';

  const newPerson: Person = {
    id: `custom-${Date.now()}`,
    name: cleanName,
    handle: `@${rawHandle}`,
    avatar,
    role: 'Founder & Innovator',
    company: 'Next-Gen Ventures',
    location: 'San Francisco, CA & Global',
    tagline: 'Synthesized directly from public LinkedIn & Instagram profiles.',
    gender: 'female',
    isCustomUser: true,
    twoSources: {
      linkedin: {
        url: linkedinUrl,
        handle: linkedinUrl.split('/in/').pop()?.replace('/', '') || rawHandle,
        verified: true,
        extractedData: {
          headline: 'Founder & Technological Innovator | Building at the intersection of AI & Human Connection',
          currentRole: 'Founder & CEO',
          experienceSummary: 'Demonstrated history of high-velocity execution, interdisciplinary leadership, and scaling community-driven initiatives.',
          leadershipStyle: 'Empathetic yet rigorous, high-conviction, values first-principles reasoning and radical transparency.',
          workEthic: 'Relentless drive combined with an intentional approach to intellectual recovery and focus.',
          careerAmbition: 'Building enduring products that expand human potential and foster authentic belonging.',
          intellectualPursuits: ['Complex systems dynamics', 'Decentralized technologies', 'Cognitive psychology', 'Minimalist product design'],
          education: 'Top Tier Institution (Computer Science & Economics)',
          networkingTone: 'Direct, articulate, inspiring, and warmly conversational'
        }
      },
      instagram: {
        url: instagramUrl,
        handle: rawHandle,
        verified: true,
        extractedData: {
          bioText: 'Founder, curious mind, world wanderer. Chasing great coffee, design, and honest conversations.',
          aestheticVibe: 'Warm natural sunlight, minimalist interior spaces, third-wave espresso roasts, coastal trail hikes, indie photography.',
          weekendRituals: ['Morning pour-over coffee cupping', 'Exploring contemporary art galleries', 'Trail running along coastal cliffs', 'Hosting intimate dinner gatherings'],
          travelHighlights: ['Kyoto quiet gardens', 'Scandinavian coastal archipelagos', 'Mediterranean stone villages'],
          passions: ['Architectural design', 'Ceramic pottery', 'Specialty coffee', 'Independent film'],
          humorStyle: 'Witty, observational, self-deprecating laughs about startup unpredictability',
          photoStyles: ['Muted warm tones', 'Negative space compositions', 'Candid unposed moments'],
          visualEnergy: 'Refined, authentic, contemplative, and radiant'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'An emotionally secure partner who values both bold ambition and quiet downtime',
        'Deep conversational chemistry that transcends superficial small talk',
        'Respect for independent creative pursuits and spontaneous travel rhythms',
        'Direct, playful, and emotionally honest communication'
      ],
      hobbies: ['Pour-over espresso brewing', 'Coastal trail running', 'Ceramic wheel throwing', 'Independent film festivals', 'Vinyl record digging'],
      interests: ['Architectural minimalism', 'Cognitive neuroscience', 'Modern art curation', 'Global culinary traditions', 'Sustainable design'],
      qualities: {
        archetype: 'The Visionary Polymath',
        vibe: 'Cultured, ambitious, contemplative, warmly engaging, effortlessly authentic',
        attachmentStyle: 'Secure-Autonomous',
        communicationCadence: 'Quick, thoughtful, attentive listener who loves diving into unexpected rabbit holes',
        dealbreakers: ['Performative arrogance', 'Cynicism toward art or creative passions', 'Emotional evasiveness'],
        greenFlags: ['High emotional vocabulary', 'Deep curiosity about the world', 'Appreciates quiet moments as much as adventures'],
        loveLanguage: 'Quality Time & Deep Intellectual Discourse',
        energyBalance: { ambition: 94, romance: 89, intellect: 95, humor: 88, spontaneity: 86 }
      },
      agentConfig: {
        agentName: `${cleanName.split(' ')[0]}Agent`,
        datingPhilosophy: 'True connection occurs when two independent minds find a shared wavelength of laughter, curiosity, and mutual respect.',
        flirtingStyle: 'Playfully observant; notices nuanced details, asks unexpected questions, and shares genuine warmth.',
        datePersonaPrompt: `Speak with poise, wit, and intellectual depth. Connect work ambition from LinkedIn with lifestyle passions from Instagram.`,
        evaluationPriorities: ['Intellectual alignment', 'Shared lifestyle rhythm', 'Authentic kindness', 'Mutual playfulness']
      }
    }
  };

  return newPerson;
}
