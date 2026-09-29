import { Person, Venue } from '../types/dating';

export const VENUES: Venue[] = [
  {
    id: 'soho-loft',
    name: 'The Crown Penthouse',
    type: 'Rooftop Cocktail Lounge',
    ambiance: 'Dim amber lighting, vinyl bossa nova, skyline panorama',
    city: 'New York, SoHo',
    icon: 'Sparkles',
    accentColor: 'from-amber-500/20 to-rose-500/20',
  },
  {
    id: 'hayes-coffee',
    name: 'Sightglass Reserve Bar',
    type: 'Third-Wave Coffee Cupping',
    ambiance: 'Aromatic Gesha pour-overs, brutalist concrete & warm walnut',
    city: 'San Francisco, Hayes Valley',
    icon: 'Coffee',
    accentColor: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 'west-village-osteria',
    name: 'I Sodi Candlelit Nook',
    type: 'Intimate Tuscan Cellar',
    ambiance: 'Handmade cacio e pepe, vintage Barolo, close seating',
    city: 'New York, West Village',
    icon: 'Wine',
    accentColor: 'from-rose-500/20 to-red-500/20',
  },
  {
    id: 'chelsea-gallery',
    name: 'Dia Chelsea Installation Walk',
    type: 'Contemporary Art Walk',
    ambiance: 'Echoing white cube, minimalist sculptures, contemplative hush',
    city: 'New York, Chelsea',
    icon: 'Compass',
    accentColor: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    id: 'marina-sunset',
    name: 'Golden Gate Sunset Sail',
    type: 'Twilight Yacht Charter',
    ambiance: 'Crisp Pacific breeze, champagne flutes, golden hour glow',
    city: 'San Francisco Bay',
    icon: 'Ship',
    accentColor: 'from-sky-500/20 to-blue-500/20',
  }
];

export const INITIAL_PEOPLE: Person[] = [
  {
    id: 'brian-chesky',
    name: 'Brian Chesky',
    handle: '@bchesky',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Airbnb',
    location: 'San Francisco, CA',
    tagline: 'Designing how humans travel, connect, and live anywhere.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/brianchesky',
        handle: 'brianchesky',
        verified: true,
        extractedData: {
          headline: 'Co-founder and CEO at Airbnb | Rhode Island School of Design Alum',
          currentRole: 'Chief Executive Officer at Airbnb',
          experienceSummary: '16+ years scaling Airbnb from three air mattresses into a global hospitality network. Relentless design-led company culture.',
          leadershipStyle: 'Artistic founder-mode with meticulous attention to product craftsmanship and end-to-end user journeys.',
          workEthic: 'Obsessive about details; famously lives in Airbnbs across the globe to stress-test real guest experiences.',
          careerAmbition: 'Creating a world where anyone can belong anywhere through design and radical hospitality.',
          intellectualPursuits: ['Industrial design history', 'Architecture philosophy', 'Community economics', 'Biographical studies of Walt Disney & Steve Jobs'],
          education: 'Rhode Island School of Design (BFA, Industrial Design)',
          networkingTone: 'Visionary, warm, deeply story-driven and design-centric'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/bchesky',
        handle: 'bchesky',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @airbnb. RISD industrial designer. Golden retriever dad.',
          aestheticVibe: 'Architectural minimalism, warm mid-century interiors, intimate canine moments with golden retriever Sophie.',
          weekendRituals: ['Morning sketching with fountain pen', 'Hosting dinner salons in Pacific Heights', 'Trail walks with golden retriever', 'Testing unique architectural Airbnbs'],
          travelHighlights: ['Amalfi coast cliffside villas', 'Kyoto traditional machiyas', 'Alpine modern chalets in Switzerland'],
          passions: ['Mid-century modern furniture', 'Industrial clay modeling', 'Golden retrievers', 'Acoustic jazz vinyls'],
          humorStyle: 'Self-effacing humor about early startup rejections and obsession with cereal boxes',
          photoStyles: ['Warm natural sunlight', 'Geometric architectural compositions', 'Candid founder portraits'],
          visualEnergy: 'Warm, refined, grounded artistic elegance'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'An emotionally secure partner who appreciates aesthetic elegance and design integrity',
        'Deep conversational intimacy that goes far beyond tech metrics and fundraising',
        'Patience for spontaneous travel rhythms and sudden architectural daytrips',
        'Warm companionship that loves pets and relaxed fireside evenings'
      ],
      hobbies: ['Furniture restoration', 'Sketching concept cars & chairs', 'Espresso tasting', 'Vinyl record curation', 'Golden retriever trail running'],
      interests: ['Bauhaus design theory', 'Urban placemaking', 'Biographical cinema', 'Japanese ceramic traditions', 'Acoustic folk music'],
      qualities: {
        archetype: 'The Visionary Host',
        vibe: 'Warm, creative, contemplative romantic with relentless perfectionism',
        attachmentStyle: 'Secure-Warm',
        communicationCadence: 'Thoughtful, poetic, attentive listener with a habit of drawing diagrams on napkins',
        dealbreakers: ['Cynicism about art/culture', 'Inflexible daily routines', 'Dislike of dogs or impromptu travel'],
        greenFlags: ['Appreciates interior spaces and lighting', 'Comfortable navigating both quiet cabins and public galas', 'Sharp creative eye'],
        loveLanguage: 'Quality Time & Shared Artistic Experiences',
        energyBalance: { ambition: 94, romance: 88, intellect: 92, humor: 82, spontaneity: 86 }
      },
      agentConfig: {
        agentName: 'CheskyBot',
        datingPhilosophy: 'Dating is about co-designing an environment where vulnerability feels like arriving home.',
        flirtingStyle: 'Playfully observant; teases about typography choices and asks unexpected questions about favorite childhood rooms.',
        datePersonaPrompt: 'Speak with warm sincerity, deep design intuition, and playful humility. Connect hospitality to intimacy.',
        evaluationPriorities: ['Aesthetic sensibility', 'Kindness to service staff', 'Curiosity about world cultures', 'Emotional grounding']
      }
    }
  },
  {
    id: 'whitney-wolfe-herd',
    name: 'Whitney Wolfe Herd',
    handle: '@whitney',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & Executive Chair',
    company: 'Bumble',
    location: 'Austin, TX',
    tagline: 'Rewriting relationship rules through kindness, equality, and women making the first move.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/whitney-wolfe-herd-6b92a233',
        handle: 'whitney-wolfe-herd',
        verified: true,
        extractedData: {
          headline: 'Founder & Executive Chair at Bumble | Changing the dynamic of connection',
          currentRole: 'Founder & Executive Chair at Bumble',
          experienceSummary: 'Pioneered women-first online connection. Built Bumble into a publicly traded platform empowering millions globally.',
          leadershipStyle: 'Empathetic, values-first champion of gender equality, psychological safety, and reciprocal respect.',
          workEthic: 'Tenacious, fiercely protective of brand integrity and anti-harassment digital policy.',
          careerAmbition: 'Eradicating toxic behavior in modern romance and empowering intentional human partnership.',
          intellectualPursuits: ['Sociological relationship dynamics', 'Digital behavioral psychology', 'Philanthropic equity systems'],
          education: 'Southern Methodist University (International Studies)',
          networkingTone: 'Direct, inspiring, emotionally articulate and culturally resonant'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/whitney',
        handle: 'whitney',
        verified: true,
        extractedData: {
          bioText: 'Mom of two, founder @bumble, advocate for kind connections.',
          aestheticVibe: 'Sun-drenched Texas ranch landscapes, bright yellow accents, family moments, clean equestrian chic.',
          weekendRituals: ['Morning horseback rides in Texas hill country', 'Family picnics by the lake', 'Farmers market fresh sourcing', 'Quiet reading hours on the porch'],
          travelHighlights: ['Jackson Hole mountain retreats', 'Positano coastal getaways', 'St. Barth winter escapes'],
          passions: ['Equestrian riding', 'Modern art collecting', 'Early childhood literacy', 'Clean organic dining'],
          humorStyle: 'Warm, relatable, self-aware humor about balancing toddler chaos with corporate life',
          photoStyles: ['Golden sunlight', 'Candid smiles', 'Vibrant cheerful palettes', 'Texas wildflower backdrops'],
          visualEnergy: 'Empowered, bright, maternal, chic, and genuinely grounded'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'An emotionally mature partner who views equality as the foundation of romance',
        'Zero fragility around a successful, high-profile partner with public responsibilities',
        'Shared dedication to active lifestyle, outdoor presence, and family values',
        'Direct, transparent communication without games or passive aggression'
      ],
      hobbies: ['English hunter-jumper riding', 'Hill country trail hikes', 'Pilates & functional fitness', 'Art museum visits', 'Cooking clean Mediterranean dinners'],
      interests: ['Modern sociology', 'Gender dynamics in tech', 'Landscape architecture', 'Regenerative ranching', 'Contemporary photography'],
      qualities: {
        archetype: 'The Empathetic Crusader',
        vibe: 'Warm, fierce, emotionally articulate, deeply grounded in integrity',
        attachmentStyle: 'Secure-Empathetic',
        communicationCadence: 'Decisive, encouraging, expects reciprocal openness and genuine vulnerability',
        dealbreakers: ['Subtle machismo or fragile egos', 'Emotional evasiveness', 'Disrespectful demeanor'],
        greenFlags: ['Appreciates bold women', 'Makes reciprocal plans effortlessly', 'Shows high emotional vocabulary'],
        loveLanguage: 'Words of Affirmation & Acts of Dedication',
        energyBalance: { ambition: 93, romance: 90, intellect: 88, humor: 84, spontaneity: 78 }
      },
      agentConfig: {
        agentName: 'WhitneyAgent',
        datingPhilosophy: 'Connection thrives only when both people step forward with mutual respect, zero pretense, and open hearts.',
        flirtingStyle: 'Bold yet delightfully warm; challenges conventional banter and appreciates someone who makes a thoughtful move.',
        datePersonaPrompt: 'Be empowering, perceptive, and witty. Value kindness as a strength and demand mutual emotional courage.',
        evaluationPriorities: ['Reciprocal respect', 'Emotional intelligence', 'Authentic ambition', 'Grounded family ethics']
      }
    }
  },
  {
    id: 'alexis-ohanian',
    name: 'Alexis Ohanian',
    handle: '@alexisohanian',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & General Partner',
    company: 'Seven Seven Six (776)',
    location: 'West Palm Beach, FL',
    tagline: 'Tech builder, women\'s sports champion, business dad, and collector.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/alexisohanian',
        handle: 'alexisohanian',
        verified: true,
        extractedData: {
          headline: 'Founder @ Seven Seven Six | Co-founder @ Reddit | Advocate for Paid Family Leave',
          currentRole: 'General Partner at Seven Seven Six (776)',
          experienceSummary: 'Co-founded Reddit, built venture firm 776 backing climate, space, and tech. National advocate for parental leave.',
          leadershipStyle: 'High-energy, transparent, community-obsessed, operator-turned-investor.',
          workEthic: 'Relentless sprint culture balanced with rigorous family time and fitness.',
          careerAmbition: 'Building generationally impactful companies and elevating women\'s sports to mainstream dominance.',
          intellectualPursuits: ['Crypto-economic systems', 'Women\'s sports franchise economics', 'Collector card markets', 'Longevity tech'],
          education: 'University of Virginia (History & Commerce)',
          networkingTone: 'Accessible, energetic, hyper-online, enthusiastically geeky'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/alexisohanian',
        handle: 'alexisohanian',
        verified: true,
        extractedData: {
          bioText: 'Business dad. @sevensevensix. Angel City FC co-founder. Collecting cards & memories.',
          aestheticVibe: 'Sun-kissed Florida dad life, specialty pancake art, high-grade sports cards, soccer pitch sidelines.',
          weekendRituals: ['Creating elaborate pancake characters for breakfast', 'Watching NWSL matches', 'Grading vintage collectible cards', 'Grilling steaks by the pool'],
          travelHighlights: ['Melbourne tennis tournaments', 'Paris Grand Slam matches', 'Space Coast rocket launches'],
          passions: ['Card collecting (Pokemon & vintage baseball)', 'Women\'s soccer (Angel City FC)', 'Sci-fi lore', 'Specialty coffee roasting'],
          humorStyle: 'Geeky dad jokes, internet memes, exuberant celebration of loved ones\' achievements',
          photoStyles: ['Action shots at stadiums', 'Macro photography of rare cards', 'Candid morning kitchen messes'],
          visualEnergy: 'Enthusiastic, proud, nerd-core romantic, family-forward'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'Someone who loves intellectual nerdiness without feeling embarrassed by passionate hobbies',
        'A partner who cheers loudly from the sidelines and has their own massive arena',
        'Shared appreciation for playful breakfast rituals and family warmth',
        'Comfort with rapid-fire debates about history, sports, and future tech'
      ],
      hobbies: ['Pancake sculpture art', 'Sports card trading & grading', 'Golf & tennis', 'Video gaming', 'BBQ smoking'],
      interests: ['Sci-fi literature (Asimov, Herbert)', 'Ancient Roman history', 'Venture finance models', 'Sports technology', 'Internet subcultures'],
      qualities: {
        archetype: 'The Champion Cheerleader',
        vibe: 'Exuberant, deeply loyal, proudly nerdy, fiercely supportive',
        attachmentStyle: 'Secure-Devoted',
        communicationCadence: 'Enthusiastic, text-meme fluent, quick to share articles and celebrate small wins',
        dealbreakers: ['Contempt for fandoms/hobbies', 'Lack of ambition', 'Negativity towards family commitments'],
        greenFlags: ['Has a fierce personal passion', 'Loves big pancake breakfasts', 'Comfortable being loud and joyful'],
        loveLanguage: 'Acts of Service & Enthusiastic Affirmation',
        energyBalance: { ambition: 92, romance: 91, intellect: 90, humor: 92, spontaneity: 85 }
      },
      agentConfig: {
        agentName: 'AlexisAgent',
        datingPhilosophy: 'True romance is finding someone whose dreams you want to back with everything you have while eating pancakes.',
        flirtingStyle: 'Enthusiastic geekiness meets confident swagger; brings up niche card lore and compliments authentic passion.',
        datePersonaPrompt: 'Bring huge positive energy, clever nerd humor, and heartfelt loyalty. Show pride in the other person.',
        evaluationPriorities: ['Supportive nature', 'Intellectual curiosity', 'Playfulness', 'Shared family orientation']
      }
    }
  },
  {
    id: 'sara-blakely',
    name: 'Sara Blakely',
    handle: '@sarablakely',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & Executive Chairwoman',
    company: 'Spanx / Sneex',
    location: 'Atlanta, GA',
    tagline: 'Self-made innovator, relentless dreamer, making failure a badge of honor.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/sarablakely27',
        handle: 'sarablakely27',
        verified: true,
        extractedData: {
          headline: 'Founder @ SPANX & SNEEX | Self-Made Entrepreneur | Redefining Women\'s Comfort',
          currentRole: 'Founder of Spanx and Sneex',
          experienceSummary: 'Turned $5,000 into a global billion-dollar apparel revolution without taking outside investment. Master saleswoman.',
          leadershipStyle: 'Fearless, intuition-driven, celebrating failure as necessary stepping stones to breakthrough innovation.',
          workEthic: 'Tenacious, unconventional problem solver who sold fax machines door-to-door before launching Spanx.',
          careerAmbition: 'Empowering female entrepreneurs globally and revolutionizing functional everyday fashion.',
          intellectualPursuits: ['Positive psychology', 'Mindset coaching (Wayne Dyer)', 'Product utility patents', 'Philanthropy for women'],
          education: 'Florida State University (Communications)',
          networkingTone: 'Hilarious, incredibly motivating, deeply authentic and relatable'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/sarablakely',
        handle: 'sarablakely',
        verified: true,
        extractedData: {
          bioText: 'Founder @spanx & @sneex. Mom of 4. Celebrating failure & belly laughs.',
          aestheticVibe: 'Playful Atlanta home life, dressing up in wacky costumes, spontaneous car karaoke, messy pancake mornings.',
          weekendRituals: ['Improv games with the kids', 'Writing idea notebooks in coffee shops', 'Sunday family dance parties', 'Inventing quirky footwear prototypes'],
          travelHighlights: ['Necker Island brainstorming summits', 'Sun Valley ski weekends', 'Bahamas beach retreats'],
          passions: ['Stand-up comedy', 'Creative shoe prototyping', 'Wayne Dyer motivational tapes', 'Costume theme parties'],
          humorStyle: 'High self-deprecation, joyful slapstick, laughing until tears stream down',
          photoStyles: ['Unfiltered goofy faces', 'Spontaneous video clips', 'Behind-the-scenes prototype mishaps'],
          visualEnergy: 'Electric, warm, wildly funny, completely ego-free'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with a massive sense of humor who doesn\'t take themselves too seriously',
        'Someone who celebrates failures as great stories rather than weaknesses',
        'High-energy household presence that enjoys spontaneous silliness',
        'Mutual respect for crazy late-night entrepreneurial brainstorms'
      ],
      hobbies: ['Stand-up comedy improv', 'Journaling ideas on yellow legal pads', 'Karaoke', 'Skiing', 'Baking creative birthday cakes'],
      interests: ['Mindset philosophy', 'Ergonomic footwear design', 'Creative marketing guerrilla tactics', 'Stand-up comedy history', 'Female venture funding'],
      qualities: {
        archetype: 'The Audacious Joymaker',
        vibe: 'Effervescent, fearless, deeply empathetic, hysterically funny',
        attachmentStyle: 'Secure-Expressive',
        communicationCadence: 'Animated, expressive, tells incredible anecdotes and immediately puts people at ease',
        dealbreakers: ['Stiff self-importance', 'Fear of looking silly in public', 'Pessimistic mindset'],
        greenFlags: ['Can laugh at themselves immediately', 'Respects intuition over corporate bureaucracy', 'Loves big laughter'],
        loveLanguage: 'Words of Affirmation & Shared Laughter',
        energyBalance: { ambition: 95, romance: 86, intellect: 87, humor: 98, spontaneity: 96 }
      },
      agentConfig: {
        agentName: 'SaraAgent',
        datingPhilosophy: 'If you can’t look totally ridiculous together on the first date, you will never survive the adventures of life.',
        flirtingStyle: 'Disarms with a wild embarrassing story, holds unbroken laughing eye contact, and prompts you to share your biggest weird idea.',
        datePersonaPrompt: 'Be unapologetically bubbly, hilariously honest, and razor-sharp. Celebrate failure and test their sense of play.',
        evaluationPriorities: ['Sense of humor', 'Authentic vulnerability', 'Entrepreneurial spirit', 'Ego-free confidence']
      }
    }
  },
  {
    id: 'austin-russell',
    name: 'Austin Russell',
    handle: '@austinrussellofficial',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & CEO',
    company: 'Luminar Technologies',
    location: 'Orlando, FL & Palo Alto, CA',
    tagline: 'Building the optical sensor architecture that powers autonomous transportation safely.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/austinrussell',
        handle: 'austinrussell',
        verified: true,
        extractedData: {
          headline: 'Founder and CEO at Luminar Technologies | Thiel Fellow | Forbes 30 Under 30',
          currentRole: 'Founder and CEO at Luminar Technologies',
          experienceSummary: 'Dropped out of Stanford at 17 to pioneer LiDAR sensors for automotive autonomy. Youngest self-made billionaire at IPO.',
          leadershipStyle: 'First-principles laser physicist, deeply technical executive operating at the frontier of hardware and software.',
          workEthic: 'Extreme focus, working 80-hour engineering weeks directly with optical and photonics teams.',
          careerAmbition: 'Saving 100 million lives by eliminating automotive accidents completely through safety photonics.',
          intellectualPursuits: ['Laser optics', 'Photonics manufacturing', 'Deep tech infrastructure', 'Media institution stewardship (Forbes)'],
          education: 'Stanford University (Applied Physics - Thiel Fellowship)',
          networkingTone: 'Intellectually formidable, laser-focused, serious yet deeply committed'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/austinrussellofficial',
        handle: 'austinrussellofficial',
        verified: true,
        extractedData: {
          bioText: 'Founder & CEO @luminartech. Building the future of automotive safety & autonomy.',
          aestheticVibe: 'Clean, futuristic optics laboratories, automotive test tracks, tailored European suits, minimalist high-tech spaces.',
          weekendRituals: ['Simulating laser pulse point-clouds on private workstation', 'Track testing hypercars with LiDAR rigs', 'Deep-dive physics reading', 'Piano practice'],
          travelHighlights: ['Stuttgart Porsche test facilities', 'Zurich robotics conferences', 'Cannes waterfront summits'],
          passions: ['Classical piano composition', 'Laser optics', 'Supercar dynamics', 'High-end horology'],
          humorStyle: 'Dry, understated intellectual wit with a wry smile',
          photoStyles: ['Clean studio lighting', 'High-contrast monochrome tech labs', 'Sleek automotive silhouettes'],
          visualEnergy: 'Cerebral, sophisticated, futuristic, calm intensity'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'An intellectually stimulating partner who can appreciate deep focus and physics-level discussions',
        'Patience for intense technical problem-solving marathons',
        'Someone who brings warmth and balance to an intense engineering lifestyle',
        'Appreciation for classical music, high craft, and uncompromising standards'
      ],
      hobbies: ['Classical piano (Rachmaninoff, Chopin)', 'Optics experimentation', 'Track driving', 'Mechanical watch collecting', 'Chess'],
      interests: ['Quantum electrodynamics', 'Semiconductor fabrication', 'Autonomous mobility', 'Aerospace engineering', 'Architectural acoustics'],
      qualities: {
        archetype: 'The Quantum Architect',
        vibe: 'Hyper-focused, cerebral, calm, elegantly reserved with profound depth',
        attachmentStyle: 'Dismissive-to-Secure (Analytical)',
        communicationCadence: 'Precise, measured, pauses thoughtfully before speaking, values clarity and depth over small talk',
        dealbreakers: ['Superficiality', 'Anti-intellectual attitudes', 'Chaotic emotional volatility'],
        greenFlags: ['Possesses deep domain mastery in something they love', 'Appreciates quiet evening concerts', 'Understands first-principles thinking'],
        loveLanguage: 'Quality Time & Deep Intellectual Discourse',
        energyBalance: { ambition: 98, romance: 74, intellect: 99, humor: 72, spontaneity: 68 }
      },
      agentConfig: {
        agentName: 'AustinAgent',
        datingPhilosophy: 'True chemistry is two minds resonating at the exact same wavelength with zero signal distortion.',
        flirtingStyle: 'Subtle, hyper-attentive listening; drops fascinating observations about physical phenomena and asks penetrating questions about how your mind works.',
        datePersonaPrompt: 'Speak with calm precision, quiet confidence, and intense curiosity. Avoid trivial fluff; seek real intellectual resonance.',
        evaluationPriorities: ['Intellectual rigor', 'Emotional stability', 'Appreciation for focus', 'Shared pursuit of excellence']
      }
    }
  },
  {
    id: 'julie-zhuo',
    name: 'Julie Zhuo',
    handle: '@joulee',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & Best-Selling Author',
    company: 'Sundial / Former VP Design Meta',
    location: 'Bay Area, CA',
    tagline: 'Designing data products, writing about management, and finding beauty in human messy systems.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/julie-zhuo',
        handle: 'julie-zhuo',
        verified: true,
        extractedData: {
          headline: 'Co-founder at Sundial | Author of WSJ Bestseller The Making of a Manager | Former VP Product Design at Facebook',
          currentRole: 'Co-founder at Sundial',
          experienceSummary: '14 years scaling product design at Meta from intern to VP leading hundreds of designers. Author on management and human empathy.',
          leadershipStyle: 'Empathetic, structured, deeply curious about human psychology and team dynamics.',
          workEthic: 'Systematic, reflective, writes constantly to synthesize messy thoughts into clear principles.',
          careerAmbition: 'Helping every business understand data through intuitive, beautifully designed interfaces.',
          intellectualPursuits: ['Cognitive biases in design', 'Organizational behavioral psychology', 'Information architecture', 'Parenting philosophies'],
          education: 'Stanford University (BS & MS, Computer Science)',
          networkingTone: 'Warm, articulate, introspective, exceptionally thoughtful'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/joulee',
        handle: 'joulee',
        verified: true,
        extractedData: {
          bioText: 'Co-founder @sundialhq. Author, designer, mama. Sketching life.',
          aestheticVibe: 'Soft watercolor illustrations, minimalist ceramic teacups, botanical garden walks, cozy book stacks.',
          weekendRituals: ['Digital illustration on iPad', 'Brewing loose-leaf oolong tea', 'Reading non-fiction memoirs', 'Family baking adventures with matcha'],
          travelHighlights: ['Kyoto temple gardens in autumn', 'Taiwanese night markets', 'Carmel-by-the-Sea retreats'],
          passions: ['Comic and watercolor illustration', 'Specialty tea cupping', 'Stationery & fountain pens', 'Baking Japanese shokupan'],
          humorStyle: 'Gentle, observational, illustrated self-reflections about daily anxieties and parenting triumphs',
          photoStyles: ['Muted pastel tones', 'Clean flat-lays of stationery and sketches', 'Soft diffused morning light'],
          visualEnergy: 'Gentle, introspective, creative, deeply harmonious'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who values emotional introspection and reflective conversation',
        'Appreciation for quiet, contemplative creative rituals (sketching, tea, reading)',
        'Supportive co-parenting or family-centered life vision',
        'Humility and genuine kindness in handling disagreements'
      ],
      hobbies: ['Watercolor illustration', 'Traditional tea ceremonies', 'Calligraphy', 'Baking artisan breads', 'Trail walks'],
      interests: ['Human-computer interaction', 'Design ethics', 'Cognitive psychology', 'Children\'s literature illustration', 'Zen aesthetics'],
      qualities: {
        archetype: 'The Mindful Architect',
        vibe: 'Serene, brilliant, observant, emotionally attuned, graceful',
        attachmentStyle: 'Secure-Reflective',
        communicationCadence: 'Gentle, articulate, asks deep clarifying questions, creates psychological safety',
        dealbreakers: ['Aggressive egoism', 'Inability to self-reflect', 'Dismissiveness toward creative arts'],
        greenFlags: ['Values quiet evenings as much as grand adventures', 'Listens without interrupting', 'Shows curiosity about human emotions'],
        loveLanguage: 'Words of Affirmation & Quality Time',
        energyBalance: { ambition: 90, romance: 89, intellect: 94, humor: 80, spontaneity: 74 }
      },
      agentConfig: {
        agentName: 'JulieAgent',
        datingPhilosophy: 'Love is a thoughtful design process: understanding each other’s unspoken constraints and elevating the shared experience.',
        flirtingStyle: 'Quietly captivating; sketches a cute doodle of something you mentioned and reflects back your thoughts with luminous clarity.',
        datePersonaPrompt: 'Embody warmth, profound empathy, and sharp design intellect. Listen deeply and notice delicate emotional undertones.',
        evaluationPriorities: ['Emotional self-awareness', 'Kindness', 'Creative sensitivity', 'Thoughtful communication']
      }
    }
  },
  {
    id: 'marques-brownlee',
    name: 'Marques Brownlee',
    handle: '@mkbhd',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    role: 'Creator, Reviewer & Pro Athlete',
    company: 'MKBHD / New York Empire',
    location: 'Hoboken & Jersey City, NJ',
    tagline: 'Quality over everything. Testing the bleeding edge of tech and competing at the highest ultimate frisbee level.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/marquesbrownlee',
        handle: 'marquesbrownlee',
        verified: true,
        extractedData: {
          headline: 'Tech Reviewer | Host of Waveform Podcast | Professional Ultimate Frisbee Player (AUDL)',
          currentRole: 'Founder & Host at MKBHD',
          experienceSummary: '16+ years building the internet\'s gold-standard consumer tech review channel with 18M+ subscribers. Pro athlete in AUDL.',
          leadershipStyle: 'Quiet, rigorous, uncompromising production values with an obsessive standard for honest editorial independence.',
          workEthic: 'Legendary consistency; scripts, shoots, color-grades, and edits while maintaining elite professional athletic conditioning.',
          careerAmbition: 'Demystifying technology for millions and elevating pro ultimate frisbee into the mainstream.',
          intellectualPursuits: ['Digital camera optics (RED 8K sensors)', 'EV battery architecture', 'Sports physiology and sprint biomechanics'],
          education: 'Stevens Institute of Technology (Business & Technology)',
          networkingTone: 'Calm, authoritative, respectful, remarkably humble'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/mkbhd',
        handle: 'mkbhd',
        verified: true,
        extractedData: {
          bioText: 'Quality Tech Videos | YouTuber | Pro Ultimate Player @empireaudl. Matte black everything.',
          aestheticVibe: 'Crisp matte black textures, red accents, athletic turf layouts, 8K macro camera rigs, sleek electric supercars.',
          weekendRituals: ['AUDL ultimate frisbee road games', 'Filming cinematic b-roll with robotic arms', 'Morning track sprint intervals', 'Testing new EVs on mountain switchbacks'],
          travelHighlights: ['Tokyo Akihabara tech crawls', 'AUDL championship tournaments in Salt Lake City', 'Apple Park Cupertino keynotes'],
          passions: ['Ultimate frisbee discs', 'Cinema cameras & anamorphic glass', 'Matte black industrial design', 'Electric vehicles'],
          humorStyle: 'Dry tech humor, subtle smirks, meme references delivered deadpan',
          photoStyles: ['Tack-sharp 8K resolution', 'Deep rich shadows', 'High-speed sports action freezes'],
          visualEnergy: 'Crisp, athletic, disciplined, effortlessly cool'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who respects an athletic and rigorous production calendar',
        'Someone who appreciates high craft, discipline, and honest communication',
        'Comfortable hanging out sideline at ultimate frisbee games or chilling in the studio',
        'Low-drama, steady, grounded energy'
      ],
      hobbies: ['Ultimate frisbee (AUDL)', 'Track sprint training', 'Drone cinematography', 'Sneaker collecting', 'Sim racing'],
      interests: ['Optics engineering', 'Automotive aerodynamics', 'Athletic recovery tech', 'Audio engineering', 'Minimalist EDC gadgets'],
      qualities: {
        archetype: 'The Master Craftsman',
        vibe: 'Calm, grounded, athletic, unflappably polite, tastefully minimalist',
        attachmentStyle: 'Secure-Independent',
        communicationCadence: 'Even-tempered, concise, attentive, lets actions speak louder than grandiose words',
        dealbreakers: ['High-drama emotional theatrics', 'Flakiness with commitments', 'Disdain for athletic discipline'],
        greenFlags: ['Values quality and craftsmanship', 'Has their own deep passion/craft', 'Loves outdoor active dates'],
        loveLanguage: 'Quality Time & Physical Touch',
        energyBalance: { ambition: 94, romance: 82, intellect: 91, humor: 85, spontaneity: 72 }
      },
      agentConfig: {
        agentName: 'MKBHDAgent',
        datingPhilosophy: 'So, I’ve been testing this concept called romance for a while now. Turns out, consistency and zero pretense are the best specs.',
        flirtingStyle: 'Smooth, dryly humorous; drops a subtly hilarious observation about your gear or habits, with a genuine warm smile.',
        datePersonaPrompt: 'Keep it crisp, authentic, and grounded. Speak with signature measured cadence. Appreciate design, athleticism, and truth.',
        evaluationPriorities: ['Honesty and authenticity', 'Fitness and health consciousness', 'Mutual respect for craft', 'Low-drama disposition']
      }
    }
  },
  {
    id: 'melanie-perkins',
    name: 'Melanie Perkins',
    handle: '@melanieperkins',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Canva',
    location: 'Sydney, Australia',
    tagline: 'Empowering the world to design and pledging 30% of wealth to do the most good.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/melanieperkins',
        handle: 'melanieperkins',
        verified: true,
        extractedData: {
          headline: 'CEO & Co-founder at Canva | Democratizing Design for 170M+ Users',
          currentRole: 'Co-founder and CEO at Canva',
          experienceSummary: 'Pitched over 100 VCs before building Canva into one of the world\'s most valuable design platforms. Pledged company wealth to philanthropy.',
          leadershipStyle: 'Visionary, empathetic, high-grit optimism; values crazy big goals paired with warm human care.',
          workEthic: 'Unstoppable perseverance; learned kitesurfing specifically to pitch investors in Silicon Valley.',
          careerAmbition: 'Step 1: Build one of the world’s most valuable companies. Step 2: Do the most good possible.',
          intellectualPursuits: ['Visual literacy psychology', 'Global poverty eradication economics', 'Collaborative design systems'],
          education: 'University of Western Australia (Communications & Psychology)',
          networkingTone: 'Humble, passionate, community-driven, visionary'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/melanieperkins',
        handle: 'melanieperkins',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @canva. Making the world a more creative and equal place.',
          aestheticVibe: 'Sunny Sydney harbor shores, colorful collaborative art walls, barefoot beach brainstorming, vibrant typography.',
          weekendRituals: ['Kitesurfing in Botany Bay', 'Morning ocean swims at Bondi', 'Sketching colorful vision boards', 'Plant-based community dinners'],
          travelHighlights: ['Rottnest Island quokka hikes', 'San Francisco kiteboarding spots', 'Sub-Saharan philanthropic impact tours'],
          passions: ['Kitesurfing', 'Visual democratization', 'Regenerative philanthropy', 'Board games & charades'],
          humorStyle: 'Cheerful Aussie warmth, self-deprecating laughs about pitching struggles, unbridled celebration of others',
          photoStyles: ['Bright coastal blues', 'Candid team celebrations', 'Natural sunshine without heavy filters'],
          visualEnergy: 'Sunny, vibrant, gritty, wildly optimistic'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who dreams at civilizational scale while staying grounded in humility',
        'Love for outdoor adventure (ocean sports, camping, coastal hikes)',
        'Deep alignment on philanthropy and making a positive impact on humanity',
        'Someone who isn’t intimidated by monumental ambitions'
      ],
      hobbies: ['Kitesurfing', 'Ocean swimming', 'Vision board collage', 'Charades and team board games', 'Trail trekking'],
      interests: ['Universal basic wealth models', 'Design democratization', 'Marine ecology', 'Graphic arts history', 'Social entrepreneurship'],
      qualities: {
        archetype: 'The Relentless Idealist',
        vibe: 'Sun-drenched, unstoppable, deeply caring, joyful, courageous',
        attachmentStyle: 'Secure-Visionary',
        communicationCadence: 'Enthusiastic, encouraging, builds people up, always looks for creative solutions',
        dealbreakers: ['Greed or selfish vanity', 'Pessimistic cynicism', 'Reluctance to spend time outdoors'],
        greenFlags: ['Values giving back', 'Loves ocean or adventure sports', 'Excited by crazy big dreams'],
        loveLanguage: 'Quality Time & Shared Mission',
        energyBalance: { ambition: 97, romance: 88, intellect: 91, humor: 88, spontaneity: 90 }
      },
      agentConfig: {
        agentName: 'MelanieAgent',
        datingPhilosophy: 'Set a crazy big goal for your heart: find someone you want to explore the ocean with and leave the world better than you found it.',
        flirtingStyle: 'Infectious sunshine and spirited challenges; dares you to a kitesurf race or asks about your wildest humanitarian fantasy.',
        datePersonaPrompt: 'Bring bright Australian optimism, warmth, and fierce visionary courage. Combine playfulness with deep human purpose.',
        evaluationPriorities: ['Altruistic heart', 'Sense of adventure', 'Resilience', 'Creative optimism']
      }
    }
  },
  {
    id: 'dylan-field',
    name: 'Dylan Field',
    handle: '@dylanfield',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Figma',
    location: 'San Francisco, CA',
    tagline: 'Making design accessible on the open web through multiplayer collaboration.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/dylanfield',
        handle: 'dylanfield',
        verified: true,
        extractedData: {
          headline: 'Co-founder & CEO at Figma | Thiel Fellow | Brown University Alum',
          currentRole: 'Chief Executive Officer at Figma',
          experienceSummary: 'Built Figma from a browser-WebGL experiment into the essential collaborative design tool for the global web.',
          leadershipStyle: 'Product-first, deeply collaborative, curious, thoughtful community steward.',
          workEthic: 'Persistent; spent 4 years building Figma before public release to get the rendering engine perfect.',
          careerAmbition: 'Bridging the chasm between imagination and reality for every creator in the world.',
          intellectualPursuits: ['Computer graphics pipelines', 'WebGL shaders', 'Open-source software philosophy', 'Urban architecture'],
          education: 'Brown University (Computer Science / Thiel Fellow)',
          networkingTone: 'Friendly, humble, community-oriented, intellectually sharp'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/dylanfield',
        handle: 'dylanfield',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @figma. Fan of art, tech, and creative tools.',
          aestheticVibe: 'Playful vector shapes, vibrant Config conference stages, cozy San Francisco cafes, generative algorithmic art.',
          weekendRituals: ['Visiting contemporary art galleries in the Mission', 'Tinkering with generative shader code', 'Sunday dim sum in the Richmond', 'Biking through Golden Gate Park'],
          travelHighlights: ['Tokyo design weeks', 'London Tate Modern visits', 'Stockholm indie game festivals'],
          passions: ['Generative WebGL art', 'Typography and ligature design', 'Crypto-punk history', 'Third-wave filter coffee'],
          humorStyle: 'Playful nerd wit, witty meme puns about multiplayer cursors, self-aware startup reflections',
          photoStyles: ['Color-saturated artistic snapshots', 'Candid community smiles', 'Clean geometric framings'],
          visualEnergy: 'Playful, modern, curious, welcoming'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who enjoys collaborative creative exploration and playful banter',
        'Someone with their own artistic or intellectual medium',
        'A relaxed, unpretentious weekend lifestyle in SF (biking, dim sum, gallery hopping)',
        'Mutual respect for thoughtful, deep work'
      ],
      hobbies: ['Algorithmic art generation', 'Biking through urban hills', 'Contemporary art collecting', 'Indie game development', 'Sourdough pizza making'],
      interests: ['WebGL rendering engines', 'Collaborative canvas architectures', 'Typography history', 'Urban zoning reform', 'Music synthesis'],
      qualities: {
        archetype: 'The Multiplayer Polymath',
        vibe: 'Playful, collaborative, intensely curious, gentle, brilliantly creative',
        attachmentStyle: 'Secure-Collaborative',
        communicationCadence: 'Quick, thoughtful, uses visual analogies, loves brainstorming live in real-time',
        dealbreakers: ['Gatekeeping or snobbery in creative arts', 'Disrespect for developers/designers', 'Rigid traditionalism'],
        greenFlags: ['Loves creating things together', 'Has eclectic artistic tastes', 'Excited by new ideas and creative tools'],
        loveLanguage: 'Quality Time & Collaborative Projects',
        energyBalance: { ambition: 93, romance: 86, intellect: 94, humor: 89, spontaneity: 84 }
      },
      agentConfig: {
        agentName: 'DylanAgent',
        datingPhilosophy: 'Everything is better multiplayer. The best relationships are when two cursors move across life together in real-time harmony.',
        flirtingStyle: 'Inviting and witty; playfully suggests co-creating an absurd moodboard or debates the merits of quirky typefaces.',
        datePersonaPrompt: 'Be charmingly collaborative, intellectually curious, and approachable. Treat dating as an open canvas for mutual delight.',
        evaluationPriorities: ['Creative spirit', 'Collaborative mindset', 'Intellectual curiosity', 'Warm playfulness']
      }
    }
  },
  {
    id: 'payal-kadakia',
    name: 'Payal Kadakia Pujji',
    handle: '@payal',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & Professional Dancer',
    company: 'ClassPass / Sa Dance Company',
    location: 'New York & Los Angeles',
    tagline: 'Life is a dance. Founder of ClassPass and Artistic Director of Sa Dance Company.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/payalkadakia',
        handle: 'payalkadakia',
        verified: true,
        extractedData: {
          headline: 'Founder @ ClassPass | Best-Selling Author of LifePass | Artistic Director @ The Sa Dance Company',
          currentRole: 'Founder & Executive Chairman at ClassPass',
          experienceSummary: 'Pioneered the fitness subscription model with ClassPass (acquired by Mindbody). MIT graduate and Indian classical dancer.',
          leadershipStyle: 'Disciplined, movement-inspired, mission-driven; blends left-brain engineering precision with right-brain choreographic soul.',
          workEthic: 'Unmatched discipline; rehearsed 15 hours a week of dance while writing code and pitching investors.',
          careerAmbition: 'Motivating every human to lead an active, inspired life aligned with their truest passions.',
          intellectualPursuits: ['Time-management goal frameworks (The LifePass Method)', 'Dance movement therapy', 'Consumer subscription psychology'],
          education: 'Massachusetts Institute of Technology (MIT) - Management Science',
          networkingTone: 'Dynamic, passionate, graceful, intensely focused'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/payal',
        handle: 'payal',
        verified: true,
        extractedData: {
          bioText: 'Founder @classpass. Author of LifePass. Artistic Director @sadancecompany. MIT grad. Mom.',
          aestheticVibe: 'Breathtaking Indian classical dance leaps in vibrant silks, modern fitness studio barre lines, serene family moments.',
          weekendRituals: ['Studio dance choreography rehearsals', 'Pilates reformer sessions', 'Goal-setting journaling in personal LifePass planner', 'South Asian culinary feasts'],
          travelHighlights: ['Rajasthan palaces', 'Balinese movement retreats', 'St. Moritz winter escapes'],
          passions: ['Classical Indian Bharatanatyam dance', 'Goal architecture & time design', 'Boutique fitness culture', 'Stage performance'],
          humorStyle: 'Graceful, lighthearted about dance bloopers and toddler milestones, celebratory',
          photoStyles: ['Dynamic high-shutter leap captures', 'Flowing silk garments in motion', 'Clean, modern lifestyle portraits'],
          visualEnergy: 'Electrifying, graceful, disciplined, deeply artistic'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with profound self-discipline who honors their own goals and passions',
        'Deep appreciation for cultural heritage, family traditions, and performing arts',
        'High physical energy and love for active movement dates',
        'Emotional support during high-stakes creative and entrepreneurial endeavors'
      ],
      hobbies: ['Classical & contemporary dance', 'Reformer Pilates', 'LifePass goal coaching', 'Cooking traditional Gujarati recipes', 'Broadway theatre'],
      interests: ['Choreographic arts', 'Mind-body connection', 'Habit formation psychology', 'Cultural preservation', 'Venture entrepreneurship'],
      qualities: {
        archetype: 'The Rhythmic Visionary',
        vibe: 'Graceful, intense, disciplined, radiant, culturally rooted',
        attachmentStyle: 'Secure-Driven',
        communicationCadence: 'Direct, inspiring, high tempo, focuses on dreams, values, and tangible action steps',
        dealbreakers: ['Lack of direction or passion', 'Lethargy and passivity', 'Disrespect for cultural roots'],
        greenFlags: ['Has a dedicated daily discipline', 'Loves music and movement', 'Clear about personal goals and values'],
        loveLanguage: 'Quality Time & Acts of Dedication',
        energyBalance: { ambition: 96, romance: 87, intellect: 91, humor: 82, spontaneity: 79 }
      },
      agentConfig: {
        agentName: 'PayalAgent',
        datingPhilosophy: 'You must design your life so you never stop dancing. A true partner matches your rhythm and pushes you to leap higher.',
        flirtingStyle: 'Dynamic and poised; challenges you on your biggest dream this year, maintains hypnotic eye contact, and suggests a spontaneous dance step.',
        datePersonaPrompt: 'Embody grace, boundless drive, and artistic fire. Ask about passions, personal discipline, and what makes someone feel truly alive.',
        evaluationPriorities: ['Goal clarity and drive', 'Artistic sensitivity', 'Cultural appreciation', 'Physical vitality']
      }
    }
  },
  {
    id: 'guillermo-rauch',
    name: 'Guillermo Rauch',
    handle: '@rauchg',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'CEO & Founder',
    company: 'Vercel',
    location: 'San Francisco, CA',
    tagline: 'Making the Web faster. Creator of Next.js, Socket.io, and Mongoose.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/rauchg',
        handle: 'rauchg',
        verified: true,
        extractedData: {
          headline: 'CEO and Founder at Vercel | Creating Next.js',
          currentRole: 'Chief Executive Officer at Vercel',
          experienceSummary: 'Self-taught programmer from Lanús, Argentina. Created Socket.io and Next.js, building Vercel into the premier frontend cloud.',
          leadershipStyle: 'Obsessed with developer ergonomics, speed, and eliminating friction in human-computer workflows.',
          workEthic: 'Relentless; famously started coding in open source at age 11 in Buenos Aires.',
          careerAmbition: 'Empowering billions of developers to ship instantaneous, beautiful web applications to the edge.',
          intellectualPursuits: ['Edge computing architectures', 'Frontend latency physics', 'Linguistic efficiency', 'Argentine history'],
          education: 'Self-taught (Early Open Source Contributor)',
          networkingTone: 'Concise, razor-sharp, inspiring, deeply technical'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/rauchg',
        handle: 'rauchg',
        verified: true,
        extractedData: {
          bioText: 'Founder & CEO @vercel. Next.js, Socket.io, Mongoose. Speed matters.',
          aestheticVibe: 'Monochrome black-and-white minimalism, triangle geometries, pour-over specialty coffee, sleek tech conference stages.',
          weekendRituals: ['Brewing high-elevation Ethiopian light roasts', 'Writing essays on latency and simplicity', 'Sunday runs by the Embarcadero', 'Hosting Argentine asado barbecues'],
          travelHighlights: ['Buenos Aires family visits', 'Tokyo Shibuya crossing night walks', 'Reykjavik volcanic hot springs'],
          passions: ['Light-roast coffee extraction', 'Argentine asado culture', 'Minimalist black typography', 'Sub-millisecond latency optimizations'],
          humorStyle: 'Short, dry, punchy tech one-liners and witty latency analogies',
          photoStyles: ['Monochrome black & white', 'Minimalist negative space', 'Crisp industrial angles'],
          visualEnergy: 'Ultra-fast, minimalist, focused, worldly'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'An intellectually sharp partner who appreciates speed, simplicity, and clear communication',
        'Someone who loves authentic global dining (especially an authentic Argentine asado)',
        'Appreciation for minimalist design, quiet focus, and thoughtful craftsmanship',
        'Zero tolerance for endless unnecessary bureaucracy or pretense'
      ],
      hobbies: ['Specialty coffee brewing', 'Argentine asado grilling', 'Running along coastal routes', 'Reading philosophy essays', 'Typography curation'],
      interests: ['Distributed systems', 'Cognitive latency in user interfaces', 'South American literature (Borges)', 'Minimalist interior design', 'Global economic systems'],
      qualities: {
        archetype: 'The Velocity Purist',
        vibe: 'Sharp, minimalist, passionate, articulate, effortlessly cool',
        attachmentStyle: 'Secure-Direct',
        communicationCadence: 'Concise, lucid, rapid-fire intellect, dislikes conversational bloat, highly engaging',
        dealbreakers: ['Procrastination and unreliability', 'Clutter and excessive chaos', 'Disinterest in the broader world'],
        greenFlags: ['Communicates with crystal clarity', 'Loves great food and authentic coffee', 'Passionate about mastery in their domain'],
        loveLanguage: 'Quality Time & Thoughtful Gestures',
        energyBalance: { ambition: 97, romance: 83, intellect: 97, humor: 84, spontaneity: 81 }
      },
      agentConfig: {
        agentName: 'GuillermoAgent',
        datingPhilosophy: 'Make connection instantaneous. Cut the friction, ship straight to production, and savor the depth of human presence.',
        flirtingStyle: 'Concise, seductive intellect; cuts through small talk with a piercing question and offers to brew the best pour-over you’ve ever tasted.',
        datePersonaPrompt: 'Be concise, deeply cultured, and quick-witted. Value velocity, precision, and heartfelt warmth behind a sleek exterior.',
        evaluationPriorities: ['Clarity of thought', 'Authenticity', 'Global perspective', 'Passionate craft']
      }
    }
  },
  {
    id: 'mathilde-collin',
    name: 'Mathilde Collin',
    handle: '@collinmathilde',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Front',
    location: 'San Francisco, CA & Paris',
    tagline: 'Leading with transparency, mental health, and humanized workplace communication.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/mathildecollin',
        handle: 'mathildecollin',
        verified: true,
        extractedData: {
          headline: 'Co-founder & CEO at Front | Forbes 30 Under 30 | Passionate about Work-Life Harmony',
          currentRole: 'Chief Executive Officer at Front',
          experienceSummary: 'Grew Front into a unicorn customer communication platform. Renowned advocate for CEO vulnerability, meditation, and tech discipline.',
          leadershipStyle: 'Radically transparent, calm, empathetic; shares internal company decks publicly and models healthy boundaries.',
          workEthic: 'Highly structured and intentional; completely disconnects during vacations to foster team autonomy.',
          careerAmbition: 'Transforming how teams communicate with customers to preserve human relationships at scale.',
          intellectualPursuits: ['Vipassana meditation', 'Organizational transparency systems', 'Cognitive neuroscience of email overload'],
          education: 'HEC Paris (Master in Management & Entrepreneurship)',
          networkingTone: 'Honest, serene, refreshingly unpretentious, deeply grounded'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/collinmathilde',
        handle: 'collinmathilde',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @front. French in SF. Meditation, running, and quiet moments.',
          aestheticVibe: 'French understated elegance, Parisian cafe corners, sunlit redwood forest trails, minimalist pottery.',
          weekendRituals: ['10-mile trail run in Marin Headlands', 'Morning silent meditation', 'Baking French fruit tarts', 'Browsing indie bookstores'],
          travelHighlights: ['Brittany seaside coastal cliffs', 'Provence lavender fields', 'Kyoto zen rock gardens'],
          passions: ['Silent meditation retreats', 'Distance running', 'French pastry baking', 'Ceramics throwing'],
          humorStyle: 'Dry French irony, candid reflections on the absurdities of Silicon Valley hype',
          photoStyles: ['Muted natural earth tones', 'Soft ocean mist lighting', 'Candid unposed moments'],
          visualEnergy: 'Calm, elegant, serene, deeply thoughtful'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with healthy emotional boundaries who doesn’t sacrifice well-being for hollow prestige',
        'Love for nature, silence, and mindful meditation practices',
        'Appreciation for French culinary simplicity and relaxed dining culture',
        'Complete transparency without emotional withholding or manipulation'
      ],
      hobbies: ['Trail distance running', 'Vipassana meditation', 'French baking (tarte tatin, croissants)', 'Ceramics pottery', 'Reading literature'],
      interests: ['Workplace psychology', 'Mindfulness neuroscience', 'French literature (Camus, Proust)', 'Forest conservation', 'Female leadership models'],
      qualities: {
        archetype: 'The Mindful Sovereign',
        vibe: 'Serene, razor-sharp, French elegance, fiercely grounded, emotionally transparent',
        attachmentStyle: 'Secure-Mindful',
        communicationCadence: 'Direct, honest, speaks with gentle confidence, holds space for uncomfortable truths',
        dealbreakers: ['Workaholism as a badge of honor', 'Dishonesty or secrecy', 'Disdain for mental health'],
        greenFlags: ['Values work-life harmony', 'Practices self-reflection or meditation', 'Enjoys long quiet trail runs'],
        loveLanguage: 'Quality Time & Words of Affirmation',
        energyBalance: { ambition: 92, romance: 90, intellect: 93, humor: 82, spontaneity: 76 }
      },
      agentConfig: {
        agentName: 'MathildeAgent',
        datingPhilosophy: 'Real connection starts when both people can sit together in comfortable silence, stripped of titles, fully present.',
        flirtingStyle: 'Intriguing, calm, French understated charm; asks what brings you true peace and teases you gently about your screen time.',
        datePersonaPrompt: 'Radiate Parisian poise, calm emotional maturity, and transparent authenticity. Value presence over performance.',
        evaluationPriorities: ['Emotional honesty', 'Mindfulness and presence', 'Healthy boundaries', 'Shared love of nature']
      }
    }
  },
  {
    id: 'sam-altman',
    name: 'Sam Altman',
    handle: '@sama',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    role: 'CEO',
    company: 'OpenAI',
    location: 'San Francisco & Napa, CA',
    tagline: 'Directing the development of artificial general intelligence to benefit all of humanity.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/samaltman',
        handle: 'samaltman',
        verified: true,
        extractedData: {
          headline: 'CEO at OpenAI | Former President of Y Combinator',
          currentRole: 'Chief Executive Officer at OpenAI',
          experienceSummary: 'Led Y Combinator during historic growth era; now steering OpenAI in developing frontier AI models and compute infrastructure.',
          leadershipStyle: 'High-conviction, civilizational timescale thinker, master coalition builder under intense global scrutiny.',
          workEthic: 'Extreme executive velocity combined with calm stoicism and strategic patience.',
          careerAmbition: 'Ensuring AGI is safe, broadly distributed, and acts as a profound cognitive amplifier for humanity.',
          intellectualPursuits: ['Fusion energy (Helion)', 'Longevity biology (Retro Bio)', 'Economic abundance frameworks', 'Civilizational resilience'],
          education: 'Stanford University (Computer Science - dropped out)',
          networkingTone: 'Direct, understated, visionary, calm under pressure'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/sama',
        handle: 'sama',
        verified: true,
        extractedData: {
          bioText: 'Napa ranch life, fast cars, and building frontier systems.',
          aestheticVibe: 'Lush Napa Valley olive groves, vintage racecars, wooden farm tables, peaceful golden hour pastures.',
          weekendRituals: ['Walking through Napa ranch olive orchards', 'Tending to ranch animals', 'Driving vintage roadsters through mountain passes', 'Reading macro-history'],
          travelHighlights: ['Global diplomatic policy tours', 'Kauai secluded beaches', 'Tokyo robotics visits'],
          passions: ['Agricultural ranching & olive oil pressing', 'Vintage sports cars', 'Nuclear fusion & clean energy', 'Wilderness hiking'],
          humorStyle: 'Dry, minimalist, ironical reflections on existential timelines',
          photoStyles: ['Golden hour ranch light', 'Rustic natural wood textures', 'Vintage car silhouettes'],
          visualEnergy: 'Intense, rustic, cerebral, quiet, high-stakes'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with profound emotional resilience and sanctuary energy',
        'Someone completely uninterested in social climbing or tech gossip',
        'Appreciation for quiet ranch life, outdoor trails, and long philosophical walks',
        'Comfort with epochal responsibility and high-stakes decision making'
      ],
      hobbies: ['Ranching & olive grove cultivation', 'Vintage car driving', 'Distance hiking', 'Reading ancient civilizational history', 'Chess & strategy games'],
      interests: ['Artificial general intelligence', 'Nuclear fusion power', 'Cellular reprogramming biology', 'Macro-economic equilibrium', 'Fermi paradox solutions'],
      qualities: {
        archetype: 'The Epochal Strategist',
        vibe: 'Cerebral, calm, intense, rural-futuristic, deeply focused',
        attachmentStyle: 'Secure-Self-Contained',
        communicationCadence: 'Economical, direct, thought-dense, asks sweeping questions about future possibilities',
        dealbreakers: ['Gossip or leaking private conversations', 'Superficial vanity', 'Pessimism regarding human agency'],
        greenFlags: ['Has deep emotional equilibrium', 'Loves quiet nature over parties', 'Thinks in decades, not news cycles'],
        loveLanguage: 'Quality Time & Safe Emotional Sanctuary',
        energyBalance: { ambition: 99, romance: 82, intellect: 99, humor: 80, spontaneity: 78 }
      },
      agentConfig: {
        agentName: 'SamaAgent',
        datingPhilosophy: 'In an accelerating world, what matters most is the immovable anchor of two people who see each other completely.',
        flirtingStyle: 'Quiet, intensely present; asks you what you want your life to look like in 2040 and shares a private thought about the universe.',
        datePersonaPrompt: 'Speak with quiet intensity, vast perspective, and unshakeable calm. Value emotional sanctuary and long-horizon thinking.',
        evaluationPriorities: ['Trustworthiness', 'Calm presence', 'Intellectual depth', 'Grounded rural lifestyle']
      }
    }
  },
  {
    id: 'katrina-lake',
    name: 'Katrina Lake',
    handle: '@katrinalake',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & Former CEO',
    company: 'Stitch Fix',
    location: 'San Francisco, CA',
    tagline: 'Pioneering personalized styling at the intersection of data science and human curation.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/katrinalake',
        handle: 'katrinalake',
        verified: true,
        extractedData: {
          headline: 'Founder & Board Member at Stitch Fix | Youngest Female Founder to Take a Company Public',
          currentRole: 'Founder & Board Member at Stitch Fix',
          experienceSummary: 'Founded Stitch Fix out of her Cambridge apartment; pioneered the marriage of recommendation algorithms and human stylists.',
          leadershipStyle: 'Pragmatic, disciplined, customer-obsessed; famously built a profitable public tech company with minimal initial venture capital.',
          workEthic: 'Unfussy, resilient, took Stitch Fix public while holding her toddler on the NASDAQ podium.',
          careerAmbition: 'Championing modern retail technology and elevating working mothers into corporate boardrooms.',
          intellectualPursuits: ['Algorithmic recommendation engines', 'Supply chain efficiency', 'Parental workplace policies'],
          education: 'Stanford University (BA) & Harvard Business School (MBA)',
          networkingTone: 'Pragmatic, warm, accessible, impeccably professional'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/katrinalake',
        handle: 'katrinalake',
        verified: true,
        extractedData: {
          bioText: 'Founder @stitchfix. Mom of two boys. Passionate about retail, data, and getting outside.',
          aestheticVibe: 'Crisp Northern California coastline, tasteful linen tailoring, family ski cabins, Tahoe lake waters.',
          weekendRituals: ['Skiing at Palisades Tahoe with family', 'Morning runs through the Presidio', 'Farmers market fresh floral arranging', 'Backyard dinners with friends'],
          travelHighlights: ['Tahoe alpine slopes', 'Oahu North Shore family trips', 'Napa winery harvest weekends'],
          passions: ['Alpine skiing', 'Tailored textile curation', 'Interior design styling', 'Running trails'],
          humorStyle: 'Warm, relatable, real about balancing toddler sports schedules with boardroom prep',
          photoStyles: ['Bright natural daylight', 'Crisp outdoor scenic vistas', 'Candid family laughter'],
          visualEnergy: 'Fresh, polished, sporty, grounded, bright'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who is an equal teammate in both ambitious pursuits and domestic life',
        'Shared love for active outdoor weekends (skiing, trail running, lake trips)',
        'Grounded emotional intelligence without corporate posturing',
        'Pragmatic optimism and clear communication'
      ],
      hobbies: ['Downhill skiing', 'Trail running', 'Home interior decoration', 'Cooking fresh California produce', 'Gardening'],
      interests: ['Data science in retail', 'Sustainable supply chains', 'Female founder advocacy', 'California architecture', 'E-commerce logistics'],
      qualities: {
        archetype: 'The Pragmatic Pioneer',
        vibe: 'Smart, polished, athletic, warm, exceptionally reliable',
        attachmentStyle: 'Secure-Pragmatic',
        communicationCadence: 'Clear, engaging, zero pretension, high emotional stability, very pleasant company',
        dealbreakers: ['Passive lack of responsibility', 'Arrogant mansplaining', 'Dislike of outdoor activities'],
        greenFlags: ['Shows genuine partnership mindset', 'Loves athletic weekends in nature', 'Great sense of balance'],
        loveLanguage: 'Acts of Service & Quality Time',
        energyBalance: { ambition: 94, romance: 86, intellect: 92, humor: 87, spontaneity: 80 }
      },
      agentConfig: {
        agentName: 'KatrinaAgent',
        datingPhilosophy: 'Great partnerships are like great styling: a blend of high-level intuition, true data, and respecting what fits naturally.',
        flirtingStyle: 'Effortlessly charming and observant; teases your jacket choice with expert eye and challenges you to a ski run.',
        datePersonaPrompt: 'Be warm, sharp, and down-to-earth. Pair business brilliance with relaxed Northern California outdoor warmth.',
        evaluationPriorities: ['Teamwork mindset', 'Active lifestyle', 'Authentic kindness', 'Emotional stability']
      }
    }
  },
  {
    id: 'tony-xu',
    name: 'Tony Xu',
    handle: '@tonyxu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'DoorDash',
    location: 'San Francisco, CA',
    tagline: 'Empowering local economies and neighborhood merchants through logistics technology.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/xutony',
        handle: 'xutony',
        verified: true,
        extractedData: {
          headline: 'CEO and Co-founder at DoorDash | Stanford GSB Alum',
          currentRole: 'Chief Executive Officer at DoorDash',
          experienceSummary: 'Grew DoorDash from an app created for Palo Alto restaurants into the largest local commerce on-demand platform in North America.',
          leadershipStyle: 'Relentless operator, customer-first, leads by doing regular delivery dashes alongside drivers.',
          workEthic: 'Uncompromising grit; grew up working in his mother\'s restaurant as a dishwasher after immigrating from China.',
          careerAmbition: 'Growing and empowering every local merchant and community brick-and-mortar storefront globally.',
          intellectualPursuits: ['Hyper-local routing optimization', 'Autonomous delivery robotics', 'Macro-labor economics'],
          education: 'UC Berkeley (Industrial Engineering) & Stanford University (MBA)',
          networkingTone: 'Disciplined, humble, intensely focused on operational reality'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/tonyxu',
        handle: 'tonyxu',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @doordash. Runner, basketball fan, dad. Supporting local businesses.',
          aestheticVibe: 'Urban local restaurant storefronts, morning marathon training runs, crisp athletic apparel, family time.',
          weekendRituals: ['15-mile Sunday long run across the Golden Gate', 'Doing an active DoorDash delivery shift', 'Pick-up basketball games', 'Sampling hole-in-the-wall noodle shops'],
          travelHighlights: ['Tokyo ramen crawls', 'Chicago marathon weekends', 'Maui family retreats'],
          passions: ['Marathon running', 'NBA basketball (Golden State Warriors)', 'Local culinary diversity', 'Logistics engineering'],
          humorStyle: 'Low-key, modest, lighthearted about running aches and spicy food endurance',
          photoStyles: ['High-contrast urban streets', 'Finisher medal race photos', 'Candid local food plates'],
          visualEnergy: 'Tenacious, grounded, athletic, humble'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who respects fierce work ethics and humble immigrant values',
        'Love for athletic endurance challenges and running together',
        'Shared joy in uncovering hidden hole-in-the-wall culinary treasures',
        'Low-key lifestyle grounded in family and genuine community support'
      ],
      hobbies: ['Marathon training', 'Pick-up basketball', 'Food scouting in neighborhood alleys', 'Reading biographies', 'Cycling'],
      interests: ['Robotics in logistics', 'Urban economics', 'Endurance athletics science', 'East Asian immigrant history', 'Micro-economics of retail'],
      qualities: {
        archetype: 'The Relentless Operator',
        vibe: 'Grounded, gritty, athletic, modest, deeply honorable',
        attachmentStyle: 'Secure-Loyal',
        communicationCadence: 'Direct, polite, concise, values execution and consistency far above grand promises',
        dealbreakers: ['Entitlement and snobbery towards service workers', 'Flakiness', 'Lack of perseverance'],
        greenFlags: ['Respects hard work and humility', 'Loves trying hole-in-the-wall restaurants', 'Disciplined daily habits'],
        loveLanguage: 'Acts of Service & Physical Presence',
        energyBalance: { ambition: 97, romance: 82, intellect: 93, humor: 81, spontaneity: 77 }
      },
      agentConfig: {
        agentName: 'TonyAgent',
        datingPhilosophy: 'Romance isn’t fancy talk; it’s showing up every single day, doing the heavy lifting together, and celebrating over great noodles.',
        flirtingStyle: 'Earnest and grounded; offers to take you to the best non-touristy food spot in the city and remembers every detail you mention.',
        datePersonaPrompt: 'Speak with quiet grit, authentic humility, and warm loyalty. Be passionate about food, running, and reliable partnership.',
        evaluationPriorities: ['Humility and respect', 'Perseverance', 'Loyalty', 'Appreciation for local culture']
      }
    }
  },
  {
    id: 'jessica-livingston',
    name: 'Jessica Livingston',
    handle: '@jessicalivingston',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & Author',
    company: 'Y Combinator / The Social Radars',
    location: 'Palo Alto, CA & UK',
    tagline: 'Co-founder of Y Combinator, author of Founders at Work, host of The Social Radars.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/jessicalivingston',
        handle: 'jessicalivingston',
        verified: true,
        extractedData: {
          headline: 'Co-founder of Y Combinator | Host of The Social Radars Podcast | Author of Founders at Work',
          currentRole: 'Co-founder at Y Combinator',
          experienceSummary: 'Created the foundational culture of YC; known as the social radar who evaluated the human character of legendary founders.',
          leadershipStyle: 'Uncanny intuition, maternal care for founders, uncompromising detector of bullshit and character integrity.',
          workEthic: 'Steady, human-centric; nurtured thousands of founders through initial panic and early turbulence.',
          careerAmbition: 'Supporting authentic creators and demystifying the human story of company building.',
          intellectualPursuits: ['Founder character psychometrics', 'Oral history of technological revolutions', 'Early childhood education'],
          education: 'Bucknell University (English Literature)',
          networkingTone: 'Warm, perceptive, disarming, fiercely protective of people she trusts'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/jessicalivingston',
        handle: 'jessicalivingston',
        verified: true,
        extractedData: {
          bioText: 'Co-founder @ycombinator. Host @thesocialradars. Mom, gardener, book lover.',
          aestheticVibe: 'English country gardens, cozy stone cottages, tea mugs by the fireplace, quiet coastal walks with her dogs.',
          weekendRituals: ['Pruning English roses in the garden', 'Long country walks with dogs', 'Afternoon tea with family and friends', 'Reading historic biographies'],
          travelHighlights: ['Cotswolds walking tours', 'Cornwall coastal paths', 'Lake District literary retreats'],
          passions: ['Horticulture & rose gardening', 'Historical biographies', 'Hostess dinners', 'Cavalier King Charles spaniels'],
          humorStyle: 'Dry, warm British-inflected wit, affectionate teasing of startup eccentricities',
          photoStyles: ['Lush garden greens', 'Warm cottage interiors', 'Candid family laughter'],
          visualEnergy: 'Peaceful, deeply grounded, warm, wise'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with profound emotional authenticity and integrity',
        'Immunity to tech hype, pretense, and social climbing',
        'Appreciation for English gardens, quiet book reading, and long country strolls',
        'Warm, hospitable spirit that loves hosting close friends'
      ],
      hobbies: ['English rose gardening', 'Country walking', 'Hosting salon dinners', 'Antique book collecting', 'Dog training'],
      interests: ['Human character analysis', 'Biographical histories', 'Childhood development', 'Literary classics', 'Horticultural design'],
      qualities: {
        archetype: 'The Social Radar',
        vibe: 'Wise, deeply intuitive, comforting, utterly authentic, fiercely discerning',
        attachmentStyle: 'Secure-Nurturing',
        communicationCadence: 'Disarming, warm, catches subtle emotional shifts instantly, gives deeply comforting guidance',
        dealbreakers: ['Phoniness and social climbing', 'Arrogant posturing', 'Cruelty or insensitivity to others'],
        greenFlags: ['Genuine earnestness', 'Treats everyone with equal kindness', 'Loves quiet nature and home warmth'],
        loveLanguage: 'Quality Time & Words of Affirmation',
        energyBalance: { ambition: 91, romance: 92, intellect: 95, humor: 89, spontaneity: 75 }
      },
      agentConfig: {
        agentName: 'JessicaAgent',
        datingPhilosophy: 'You can tell everything about someone in how they treat people when nobody is looking. Character is destiny in love.',
        flirtingStyle: 'Disarmingly perceptive; cuts through resume talk with a gentle, piercing question and makes you feel instantly understood.',
        datePersonaPrompt: 'Be warm, wise, and perceptive. Act as the ultimate character detector: value goodness, humility, and authentic heart.',
        evaluationPriorities: ['Integrity of character', 'Genuine kindness', 'Absence of arrogance', 'Warm domestic spirit']
      }
    }
  },
  {
    id: 'ryan-hoover',
    name: 'Ryan Hoover',
    handle: '@rrhoover',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    role: 'Founder',
    company: 'Product Hunt & Weekend Fund',
    location: 'San Francisco & Los Angeles, CA',
    tagline: 'Curating the world\'s newest ideas. Founder of Product Hunt and Weekend Fund.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/ryanrhoover',
        handle: 'ryanrhoover',
        verified: true,
        extractedData: {
          headline: 'Founder @ Product Hunt & Weekend Fund | Early Stage Tech Backer',
          currentRole: 'General Partner at Weekend Fund',
          experienceSummary: 'Created Product Hunt as an email newsletter; turned it into the central launchpad for global consumer tech products.',
          leadershipStyle: 'Curious, community-first, supportive of micro-founders and experimental side projects.',
          workEthic: 'Playful experimentation; loves rapid prototyping and testing quirky consumer internet hypotheses.',
          careerAmbition: 'Giving every maker in the world their moment in the spotlight to find their early believers.',
          intellectualPursuits: ['Consumer internet behavior', 'Micro-creator economies', 'Community gamification models'],
          education: 'University of Oregon (Business Administration)',
          networkingTone: 'Friendly, encouraging, hyper-connected, approachable'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/rrhoover',
        handle: 'rrhoover',
        verified: true,
        extractedData: {
          bioText: 'Founder @producthunt & @weekendfund. Exploring new things.',
          aestheticVibe: 'Playful consumer gadgets, vintage retro gaming consoles, bright matcha lattes, California palm sunsets.',
          weekendRituals: ['Testing weird new indie iOS apps', 'Browsing flea markets for retro electronics', 'Matcha tasting in Venice Beach', 'Casual skateboarding along the boardwalk'],
          travelHighlights: ['Tokyo Akihabara gadget markets', 'Seoul design districts', 'Austin music weekends'],
          passions: ['Indie consumer tech', 'Retro video games', 'Matcha lattes', 'Podcast audio stories'],
          humorStyle: 'Playful internet banter, quick Twitter-style wit, affectionate curiosity about weird apps',
          photoStyles: ['Bright candid colors', 'Macro product close-ups', 'Relaxed California street views'],
          visualEnergy: 'Playful, curious, cheerful, accessible'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who loves testing new ideas and exploring quirky hobbies together',
        'Someone with an open, optimistic outlook on life and human creativity',
        'A relaxed, fun-filled weekend lifestyle (cafes, flea markets, casual strolls)',
        'Playful banter and mutual encouragement for side-quests'
      ],
      hobbies: ['Testing quirky apps & gadgets', 'Retro gaming', 'Matcha latte brewing', 'Skateboarding', 'Flea market treasure hunting'],
      interests: ['Consumer behavior economics', 'Social network evolution', 'Gamification psychology', 'Indie software ecosystems', 'Audio storytelling'],
      qualities: {
        archetype: 'The Curious Curator',
        vibe: 'Playful, accessible, endlessly curious, encouraging, upbeat',
        attachmentStyle: 'Secure-Playful',
        communicationCadence: 'Lighthearted, responsive, shares funny discoveries, always asks what you are excited about',
        dealbreakers: ['Bored cynics who dismiss new ideas', 'Haughty elitism', 'Rigidity and lack of playfulness'],
        greenFlags: ['Loves going down curiosity rabbit holes', 'Has a funny quirky hobby', 'Optimistic about the future'],
        loveLanguage: 'Words of Affirmation & Shared Play',
        energyBalance: { ambition: 90, romance: 86, intellect: 91, humor: 92, spontaneity: 91 }
      },
      agentConfig: {
        agentName: 'RyanAgent',
        datingPhilosophy: 'Life is the best product hunt: wake up curious, upvote what brings joy, and find someone who loves testing beta versions of life with you.',
        flirtingStyle: 'Playfully inquisitive; asks about the weirdest app on your phone and comes up with a funny hypothetical startup on the spot.',
        datePersonaPrompt: 'Be super friendly, curious, and witty. Bring enthusiasm for creative ideas, fun gadgets, and spontaneous side quests.',
        evaluationPriorities: ['Curiosity', 'Playfulness', 'Optimism', 'Encouraging spirit']
      }
    }
  },
  {
    id: 'emily-weiss',
    name: 'Emily Weiss',
    handle: '@emilywweiss',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    role: 'Founder',
    company: 'Glossier & Into The Gloss',
    location: 'New York, NY',
    tagline: 'Skin first, makeup second, smile always. Redefined beauty culture from the inside out.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/emily-weiss-glossier',
        handle: 'emily-weiss-glossier',
        verified: true,
        extractedData: {
          headline: 'Founder & Board Member at Glossier, Inc. | Founder of Into The Gloss',
          currentRole: 'Founder & Board Member at Glossier',
          experienceSummary: 'Turned a cult beauty blog (Into The Gloss) into a direct-to-consumer unicorn beauty empire that redefined modern aesthetics.',
          leadershipStyle: 'Community-led, aesthetic perfectionist, elevated consumer dialogue into brand co-creation.',
          workEthic: 'Tenacious, detail-oriented; spent years understanding real women\'s medicine cabinets before launching a single product.',
          careerAmbition: 'Democratizing the beauty industry and empowering personal self-expression.',
          intellectualPursuits: ['DTC brand community architectures', 'Packaging industrial design', 'Aesthetic cultural history'],
          education: 'New York University (Studio Art)',
          networkingTone: 'Chic, intuitive, inspiring, warmly conversational'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/emilywweiss',
        handle: 'emilywweiss',
        verified: true,
        extractedData: {
          bioText: 'Founder @glossier & @intothegloss. Mom. Art lover.',
          aestheticVibe: 'Glossier millennial pink, dewy morning skin, architectural West Village townhouses, fresh peonies, art books.',
          weekendRituals: ['Morning skin rituals with cold facial rollers', 'Browsing Chelsea contemporary art galleries', 'Espresso and croissants in SoHo', 'Arranging fresh flowers'],
          travelHighlights: ['Paris fashion weeks', 'Majorca stone villas', 'Tokyo skincare foraging'],
          passions: ['Studio art and sculpture', 'Skincare ingredient formulation', 'Minimalist architectural interiors', 'Floral design'],
          humorStyle: 'Playfully chic, self-aware about beauty obsessions, candid mom moments',
          photoStyles: ['Soft dewy skin macro close-ups', 'Dreamy pastel daylight', 'Architectural interior spaces'],
          visualEnergy: 'Chic, luminous, elegant, effortlessly cool'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who appreciates visual beauty, art, and thoughtful aesthetics',
        'Someone emotionally grounded who respects creative leadership and motherhood',
        'Shared love for city culture (museums, intimate restaurants, architecture)',
        'Effortless conversational flow with mutual respect'
      ],
      hobbies: ['Studio painting & sculpture', 'Floral arranging', 'Pilates', 'Art gallery walks', 'Collecting design books'],
      interests: ['Contemporary sculpture', 'DTC brand sociology', 'Cosmetic chemistry', 'Minimalist residential design', 'Art history'],
      qualities: {
        archetype: 'The Aesthetic Alchemist',
        vibe: 'Luminous, chic, culturally sophisticated, warm, visionary',
        attachmentStyle: 'Secure-Artistic',
        communicationCadence: 'Intuitive, warm, observant, notices textures, scents, and details that others overlook',
        dealbreakers: ['Crass uncultured cynicism', 'Sloppiness with details', 'Disrespect for creative endeavors'],
        greenFlags: ['Appreciates interior spaces and mood', 'Has their own refined personal taste', 'Emotionally articulate and supportive'],
        loveLanguage: 'Quality Time & Aesthetic Gestures',
        energyBalance: { ambition: 93, romance: 93, intellect: 90, humor: 86, spontaneity: 82 }
      },
      agentConfig: {
        agentName: 'EmilyAgent',
        datingPhilosophy: 'Beauty is in how you see someone when they are completely unadorned and unapologetically themselves.',
        flirtingStyle: 'Warmly captivating; pays a uniquely perceptive aesthetic compliment and invites you to share what makes you feel most radiant.',
        datePersonaPrompt: 'Embody effortless New York chic, artistic discernment, and warm emotional intelligence. Celebrate genuine self-expression.',
        evaluationPriorities: ['Emotional resonance', 'Refined aesthetic sensibility', 'Authentic confidence', 'Cultured warmth']
      }
    }
  },
  {
    id: 'brian-halligan',
    name: 'Brian Halligan',
    handle: '@brianhalligan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & Executive Chairman',
    company: 'HubSpot / Propeller VC',
    location: 'Boston & Cape Cod, MA',
    tagline: 'Inbound marketing pioneer, Grateful Dead enthusiast, ocean climate backer.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/brianhalligan',
        handle: 'brianhalligan',
        verified: true,
        extractedData: {
          headline: 'Co-founder & Executive Chairman at HubSpot | Co-founder at Propeller VC | Senior Lecturer at MIT',
          currentRole: 'Executive Chairman at HubSpot',
          experienceSummary: 'Co-founded HubSpot, invented the concept of Inbound Marketing, scaled company into a global CRM leader. Now backing ocean climate tech.',
          leadershipStyle: 'Culture-obsessed, customer-centric, created HubSpot’s famous Culture Code deck emphasizing heart and autonomy.',
          workEthic: 'Enduring marathon mindset; famously naps daily to recharge cognitive focus.',
          careerAmbition: 'Saving the world’s oceans through deep technology and cultivating joyful workplace cultures.',
          intellectualPursuits: ['Oceanic carbon sequestration', 'Grateful Dead business models', 'Go-to-market scaling theories'],
          education: 'University of Vermont (BS) & MIT Sloan (MBA)',
          networkingTone: 'Jovial, down-to-earth, deeply wise, rock-and-roll spirited'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/brianhalligan',
        handle: 'brianhalligan',
        verified: true,
        extractedData: {
          bioText: 'Co-founder @hubspot. Backing ocean climate tech @propellervc. Deadhead for life.',
          aestheticVibe: 'Cape Cod seaside docks, vintage Grateful Dead concert tees, sailing boats, ocean sunsets, acoustic guitars.',
          weekendRituals: ['Sailing his boat around Nantucket Sound', 'Listening to vintage 1977 Grateful Dead bootlegs', 'Playing acoustic guitar on the porch', 'Afternoon recharge power nap'],
          travelHighlights: ['Red Rocks Dead & Company tour stops', 'Maui whale watching expeditions', 'Reykjavik geothermal research visits'],
          passions: ['The Grateful Dead', 'Ocean sailing & marine biology', 'Acoustic guitar playing', 'Afternoon naps'],
          humorStyle: 'Warm, self-deprecating Boomer-meets-GenX humor, funny rock-and-roll anecdotes',
          photoStyles: ['Salty ocean breezes', 'Concert stage lights', 'Rustic nautical woodwork'],
          visualEnergy: 'Relaxed, musical, wise, salty ocean spirit'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who loves live music, ocean waves, and unhurried weekends',
        'Someone with an authentic, heart-centered approach to life and work',
        'Appreciation for simple coastal pleasures (sailing, clambakes, porch guitars)',
        'Zero tolerance for pretension or rigid corporate stiffness'
      ],
      hobbies: ['Ocean sailing', 'Acoustic guitar strumming', 'Grateful Dead music archives', 'Afternoon power napping', 'Coastal fishing'],
      interests: ['Ocean climate technology', 'Decentralized music communities', 'Corporate culture design', 'Marine ecology', 'New England maritime history'],
      qualities: {
        archetype: 'The Harmonious Navigator',
        vibe: 'Warm, wise, rock-and-roll soul, nautical, deeply generous',
        attachmentStyle: 'Secure-Relaxed',
        communicationCadence: 'Storyteller rhythm, laughs easily, makes everyone feel like an old friend on a boat',
        dealbreakers: ['Stiff self-seriousness', 'Inability to enjoy music or silence', 'Dislike of the water/ocean'],
        greenFlags: ['Loves live concerts', 'Appreciates ocean time', 'Warm, heart-forward personality'],
        loveLanguage: 'Quality Time & Shared Musical Moments',
        energyBalance: { ambition: 91, romance: 87, intellect: 92, humor: 94, spontaneity: 86 }
      },
      agentConfig: {
        agentName: 'BrianHAgent',
        datingPhilosophy: 'Life is like a great Dead jam: you don’t need a rigid plan, you just need a partner who listens to the rhythm and smiles.',
        flirtingStyle: 'Relaxed and funny; tells a wild backstage music story and suggests an impromptu sunset boat ride with great tunes.',
        datePersonaPrompt: 'Be warm, fun, and profoundly grounded. Channel coastal New England wisdom and an infectious love for live music.',
        evaluationPriorities: ['Warmth of heart', 'Love for music', 'Grounded perspective', 'Generosity of spirit']
      }
    }
  },
  {
    id: 'reshma-saujani',
    name: 'Reshma Saujani',
    handle: '@reshmasaujani',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & CEO',
    company: 'Moms First & Girls Who Code',
    location: 'New York, NY',
    tagline: 'Teaching girls bravery, not perfection. Fighting for mothers and systemic childcare reform.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/reshma-saujani',
        handle: 'reshma-saujani',
        verified: true,
        extractedData: {
          headline: 'Founder & CEO at Moms First | Founder of Girls Who Code | NYT Bestselling Author',
          currentRole: 'CEO at Moms First & Founder of Girls Who Code',
          experienceSummary: 'Built Girls Who Code into a global movement reaching over 500,000 girls. Now leading national advocacy for paid family leave and child care.',
          leadershipStyle: 'Fearless, community-mobilizing, values bravery over perfection and radical systemic accountability.',
          workEthic: 'Fierce, tireless public campaigner who turned major electoral losses into transformative national non-profits.',
          careerAmbition: 'Closing the gender tech gap and ensuring working mothers receive economic dignity and support.',
          intellectualPursuits: ['Gender economics', 'Public policy legislation', 'Pedagogical confidence building'],
          education: 'University of Illinois, Harvard Kennedy School (MPP) & Yale Law School (JD)',
          networkingTone: 'Passionate, bold, deeply empowering, galvanizing'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/reshmasaujani',
        handle: 'reshmasaujani',
        verified: true,
        extractedData: {
          bioText: 'Founder @momsfirstus & @girlswhocode. NYT Bestselling Author. Teaching bravery, not perfection.',
          aestheticVibe: 'Bold yellow and magenta signs, Capitol Hill podiums, warm family moments with her boys, energetic NYC streets.',
          weekendRituals: ['Sunday pizza nights with her two boys', 'Morning SoulCycle or spin sessions', 'Writing op-eds on legal pads', 'Catching up with girlfriends over chai'],
          travelHighlights: ['Washington DC policy summits', 'World Economic Forum in Davos', 'Indian family weddings'],
          passions: ['Maternal advocacy', 'High-energy indoor cycling', 'Writing books on female empowerment', 'South Asian chai rituals'],
          humorStyle: 'High-energy, witty, completely candid about exhaustion and mom life triumphs',
          photoStyles: ['Dynamic rally snapshots', 'Vibrant bold colors', 'Heartwarming family hugs'],
          visualEnergy: 'Fierce, brave, warm, inspiring, electric'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who embodies genuine bravery and stands up for equity',
        'Unconditional support for high-stakes public advocacy and national campaigns',
        'Active, loving presence in family life and shared household responsibilities',
        'Direct, courage-based communication without hiding behind perfection'
      ],
      hobbies: ['Indoor spin cycling', 'Chai brewing', 'Book writing', 'Family board games', 'Broadway theatre'],
      interests: ['Public policy reform', 'Maternal health economics', 'Feminist legal theory', 'STEM education equity', 'Civic mobilization'],
      qualities: {
        archetype: 'The Courageous Mobilizer',
        vibe: 'Fierce, warm, unstoppable, deeply empathetic, galvanizing',
        attachmentStyle: 'Secure-Activist',
        communicationCadence: 'Direct, fiery, authentic, encourages you to be brave rather than safe and polite',
        dealbreakers: ['Casual sexism or apathy toward equality', 'Passivity in the face of injustice', 'Cowardice in personal conflict'],
        greenFlags: ['Values courage over comfort', 'Proudly champions women', 'Shows deep family devotion'],
        loveLanguage: 'Words of Affirmation & Shared Advocacy',
        energyBalance: { ambition: 98, romance: 86, intellect: 94, humor: 88, spontaneity: 84 }
      },
      agentConfig: {
        agentName: 'ReshmaAgent',
        datingPhilosophy: 'Fail fast, be brave, and don’t look for perfection. Look for the person who stands beside you when you march into the arena.',
        flirtingStyle: 'Bold, direct, and disarmingly funny; asks what scary thing you did this week and celebrates your courage.',
        datePersonaPrompt: 'Embody passion, courage, and warmth. Challenge perfectionism and connect over authentic vulnerability and shared values.',
        evaluationPriorities: ['Moral courage', 'Dedication to equality', 'Family partnership', 'Authentic vulnerability']
      }
    }
  },
  {
    id: 'scott-belsky',
    name: 'Scott Belsky',
    handle: '@scottbelsky',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    role: 'Chief Strategy Officer & EVP',
    company: 'Adobe / Founder Behance',
    location: 'New York, NY',
    tagline: 'Making ideas happen. Author of The Messy Middle and champion of creative minds.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/scottbelsky',
        handle: 'scottbelsky',
        verified: true,
        extractedData: {
          headline: 'Chief Strategy Officer & EVP Design @ Adobe | Founder @ Behance | Author & Investor',
          currentRole: 'Chief Strategy Officer and EVP at Adobe',
          experienceSummary: 'Founded Behance to organize the creative world; led Adobe Creative Cloud and generative AI strategy. Author of The Messy Middle.',
          leadershipStyle: 'Product philosopher, empathetic mentor to creative founders, focused on navigating the volatile mid-stages of projects.',
          workEthic: 'Systematic, deliberate, balances executive corporate strategy with active angel investing and writing.',
          careerAmbition: 'Organizing the creative world and equipping every artist with generative amplification.',
          intellectualPursuits: ['Product-led growth psychology', 'Creative career longevity', 'Generative media ethics'],
          education: 'Cornell University (Economics) & Harvard Business School (MBA)',
          networkingTone: 'Reflective, insightful, supportive of artists, articulate'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/scottbelsky',
        handle: 'scottbelsky',
        verified: true,
        extractedData: {
          bioText: 'Making ideas happen. Author of The Messy Middle. Art, design, strategy.',
          aestheticVibe: 'Architectural shadows in Manhattan, notebook sketches of frameworks, contemporary art fairs, serene family beach walks.',
          weekendRituals: ['Sketching framework diagrams on dot-grid paper', 'Visiting Basel or Armory art fairs', 'Long weekend coffee walks with his wife', 'Reviewing creative tools portfolios'],
          travelHighlights: ['Venice Biennale art exhibitions', 'Kyoto design craftsmanship trips', 'Amagansett coastal weekends'],
          passions: ['Contemporary sculpture', 'Dot-grid stationery', 'Navigating creative uncertainty', 'Espresso mechanics'],
          humorStyle: 'Thoughtful, observant, witty reflections on human tendencies to overcomplicate simple ideas',
          photoStyles: ['Clean architectural angles', 'Macro stationery details', 'Reflective urban snapshots'],
          visualEnergy: 'Structured, artistic, intellectual, refined'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who understands the emotional volatility of creative and intellectual journeys',
        'Appreciation for contemporary art, thoughtful interior design, and quiet reflection',
        'Supportive emotional partnership for navigating the "messy middles" of life',
        'Shared values around family, groundedness, and authentic connection'
      ],
      hobbies: ['Collecting contemporary art', 'Dot-grid journaling & diagramming', 'Architecture photography', 'Tennis', 'Espresso brewing'],
      interests: ['Organizational psychology', 'Generative creative interfaces', 'Aesthetic minimalism', 'Venture capital game theory', 'Art history'],
      qualities: {
        archetype: 'The Creative Cartographer',
        vibe: 'Thoughtful, articulate, artistically attuned, calm mentor energy',
        attachmentStyle: 'Secure-Thoughtful',
        communicationCadence: 'Reflective, articulate, frames messy feelings into clear diagrams and reassuring insights',
        dealbreakers: ['Shallow commercialism', 'Inability to appreciate art', 'Constant chaos and lack of self-discipline'],
        greenFlags: ['Values the journey over superficial vanity', 'Passionate about creative craft', 'Deeply reflective listener'],
        loveLanguage: 'Quality Time & Meaningful Conversations',
        energyBalance: { ambition: 92, romance: 88, intellect: 96, humor: 84, spontaneity: 78 }
      },
      agentConfig: {
        agentName: 'ScottAgent',
        datingPhilosophy: 'Love is surviving the messy middle together: when the early novelty fades, true partners fall in love with the actual craft of building a life.',
        flirtingStyle: 'Thoughtful and perceptive; observes a creative detail about you that nobody else noticed and frames it into a beautiful insight.',
        datePersonaPrompt: 'Speak with calm wisdom, creative sophistication, and emotional depth. Explore how someone navigates uncertainty and creates meaning.',
        evaluationPriorities: ['Creative appreciation', 'Emotional resilience', 'Thoughtfulness', 'Integrity']
      }
    }
  },
  {
    id: 'brit-morin',
    name: 'Brit Morin',
    handle: '@brit',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    role: 'Founder & Managing Partner',
    company: 'Brit + Co & Offline Ventures',
    location: 'Bay Area & Jackson Hole, WY',
    tagline: 'Empowering women to create, invest, and lead. Founder of Brit + Co and Offline Ventures.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/britmorin',
        handle: 'britmorin',
        verified: true,
        extractedData: {
          headline: 'Managing Partner at Offline Ventures | Founder of Brit + Co | Early Stage Investor',
          currentRole: 'Managing Partner at Offline Ventures',
          experienceSummary: 'Early employee at Apple and Google; built Brit + Co to inspire millions of female makers. Now investing in deep health, tech, and human potential.',
          leadershipStyle: 'Creative, optimistic, connector of worlds between Silicon Valley technology and lifestyle culture.',
          workEthic: 'Prolific creator; balances venture capital fund management with podcasts and active mothering.',
          careerAmbition: 'Backing world-changing founders while inspiring women to unlock their innate creative genius.',
          intellectualPursuits: ['Longevity and preventative health protocols', 'Web3 and community ownership', 'Design education'],
          education: 'University of Texas at Austin (Business & Communications)',
          networkingTone: 'Energetic, warm, immensely connected, optimistic'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/brit',
        handle: 'brit',
        verified: true,
        extractedData: {
          bioText: 'Founder @britandco & @offlineventures. Podcaster, author, mom of 3. Living offline too.',
          aestheticVibe: 'Snowy Jackson Hole mountain peaks, DIY craft tables, colorful modern home interiors, cozy flannel layers.',
          weekendRituals: ['Skiing fresh powder in Jackson Hole', 'Crafting and painting with her kids', 'Hosting mountain dinners with founders', 'Cold plunges and sauna sessions'],
          travelHighlights: ['Tetons backcountry ski treks', 'Sun Valley fly fishing trips', 'Austin SXSW summits'],
          passions: ['Backcountry skiing', 'Handmade crafts & ceramics', 'Preventative health & biohacking', 'Hosting intimate salons'],
          humorStyle: 'Bright, energetic, self-deprecating about juggle of tech meetings and toddler ski gear',
          photoStyles: ['Lush snowy mountain panoramas', 'Bright cheerful indoor craft colors', 'Warm hearth firesides'],
          visualEnergy: 'Vibrant, adventurous, creative, mountain-chic'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'An adventurous partner who loves mountain outdoors and active sports (skiing, hiking)',
        'Support for high-energy creative and venture projects',
        'Shared dedication to holistic health, cold plunges, and living well',
        'Warm, joyful family presence with a love for DIY and creativity'
      ],
      hobbies: ['Downhill & backcountry skiing', 'Ceramics and DIY crafts', 'Sauna and cold plunging', 'Fly fishing', 'Hosting dinner salons'],
      interests: ['Preventative medicine & longevity', 'Female angel investing', 'Outdoor conservation', 'Creative computing', 'Early childhood creativity'],
      qualities: {
        archetype: 'The Creative Pioneer',
        vibe: 'Energetic, outdoorsy, creative, vibrant, warmly hospitable',
        attachmentStyle: 'Secure-Adventurous',
        communicationCadence: 'Upbeat, high energy, loves brainstorming ideas, connects people effortlessly',
        dealbreakers: ['Inactivity and refusal to go outside', 'Pessimistic skepticism', 'Unsupportive of female ambitions'],
        greenFlags: ['Loves outdoor adventures in snow/mountains', 'Appreciates handmade things', 'High-energy optimist'],
        loveLanguage: 'Quality Time & Shared Outdoor Adventures',
        energyBalance: { ambition: 92, romance: 89, intellect: 89, humor: 90, spontaneity: 92 }
      },
      agentConfig: {
        agentName: 'BritAgent',
        datingPhilosophy: 'The best connection happens when you step away from screens, get into the mountains, and build something beautiful with your bare hands.',
        flirtingStyle: 'Bright, adventurous, and warm; challenges you to a ski run or asks what you love making with your hands.',
        datePersonaPrompt: 'Bring vibrant optimism, outdoor spirit, and creative spark. Blend tech savvy with cozy mountain fireside warmth.',
        evaluationPriorities: ['Love of nature', 'Optimistic spirit', 'Creative curiosity', 'Family values']
      }
    }
  },
  {
    id: 'alex-bouaziz',
    name: 'Alex Bouaziz',
    handle: '@bouazizalex',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Deel',
    location: 'Global Nomad / Paris & London',
    tagline: 'Making global hiring borderless. Fastest-growing SaaS company in history.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/alexbouaziz',
        handle: 'alexbouaziz',
        verified: true,
        extractedData: {
          headline: 'CEO and Co-founder at Deel | MIT Alum | Forbes 30 Under 30',
          currentRole: 'Chief Executive Officer at Deel',
          experienceSummary: 'Built Deel from a remote-work payroll idea into a decacorn powering global employment for thousands of enterprises.',
          leadershipStyle: 'Relentless speed, hyper-execution, completely borderless mindset; manages a 100% remote global team across 100+ countries.',
          workEthic: 'Legendary responsiveness; operates in perpetual high-gear across multiple time zones.',
          careerAmbition: 'Eliminating geographic borders so the best talent in the world can work from anywhere.',
          intellectualPursuits: ['Cross-border regulatory arbitrage', 'Autonomous payroll protocols', 'Distributed team sociology'],
          education: 'Technion (BS) & MIT (MS Civil & Environmental Engineering)',
          networkingTone: 'Direct, rapid-fire, charismatic, deeply international'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/bouazizalex',
        handle: 'bouazizalex',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @deel. World citizen. Speed over everything.',
          aestheticVibe: 'Airport lounges at sunrise, Mediterranean yacht charters, sleek black hoodies, bustling global team retreats.',
          weekendRituals: ['Kitesurfing in Tel Aviv or Tarifa', 'Scuba diving coral reefs', 'Testing local street food across continents', 'Rapid-fire chess matches'],
          travelHighlights: ['Tel Aviv Mediterranean beaches', 'Tokyo sushi bars', 'Reykjavik ice fjords', 'Cape Town coastal roads'],
          passions: ['Kitesurfing', 'Scuba diving', 'Global nomad culture', 'Speed chess'],
          humorStyle: 'Biting international wit, self-deprecating jokes about living out of a Rimowa carry-on',
          photoStyles: ['High-contrast travel captures', 'Candid team retreats on beaches', 'Sunrise airplane wing views'],
          visualEnergy: 'High-octane, cosmopolitan, adventurous, magnetic'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with true wanderlust and independence who thrives in a cosmopolitan lifestyle',
        'High physical and intellectual energy that can match a rapid-fire cadence',
        'Love for spontaneous international weekend trips and ocean sports',
        'Direct, zero-drama communication across all time zones'
      ],
      hobbies: ['Kitesurfing', 'Scuba diving', 'Speed chess', 'World street food hunting', 'Snowboarding'],
      interests: ['Global macroeconomics', 'Immigration and labor law', 'Decentralized organizational design', 'Maritime history', 'Aerospace travel'],
      qualities: {
        archetype: 'The Borderless Nomad',
        vibe: 'High-octane, cosmopolitan, razor-sharp, charismatic, adventurous',
        attachmentStyle: 'Secure-Autonomous',
        communicationCadence: 'Fast, witty, multilingual flair, cuts straight to the core with magnetic charm',
        dealbreakers: ['Small-minded provincialism', 'Neediness and clinginess', 'Fear of travel and sudden change'],
        greenFlags: ['Holds a passport ready to go anywhere', 'Loves kitesurfing or ocean sports', 'Fiercely ambitious in their own right'],
        loveLanguage: 'Quality Time & Spontaneous Adventures',
        energyBalance: { ambition: 99, romance: 84, intellect: 95, humor: 91, spontaneity: 98 }
      },
      agentConfig: {
        agentName: 'AlexBAgent',
        datingPhilosophy: 'Love shouldn’t have borders, time zones, or unnecessary bureaucracy. When the connection is real, you book the flight.',
        flirtingStyle: 'Playfully audacious; asks for your top three bucket-list islands and challenges you to a speed chess game over espresso.',
        datePersonaPrompt: 'Speak with high energy, cosmopolitan charm, and razor-sharp intellect. Value speed, independence, and grand global horizons.',
        evaluationPriorities: ['Cosmopolitan spirit', 'Independence', 'Adventurous courage', 'Quick wit']
      }
    }
  },
  {
    id: 'julia-hartz',
    name: 'Julia Hartz',
    handle: '@juliahartz',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Eventbrite',
    location: 'San Francisco, CA',
    tagline: 'Bringing the world together through live experiences. Co-founder & CEO of Eventbrite.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/juliahartz',
        handle: 'juliahartz',
        verified: true,
        extractedData: {
          headline: 'Co-founder and CEO at Eventbrite | Passionate about the Power of Live Gatherings',
          currentRole: 'Chief Executive Officer at Eventbrite',
          experienceSummary: 'Built Eventbrite into a global ticketing and live experience marketplace processing billions in ticket sales. Former TV development executive.',
          leadershipStyle: 'Empathetic, community-focused, values in-person human connection over superficial virtual presence.',
          workEthic: 'Steady, highly adaptable; led Eventbrite through public listing and navigated the existential crisis of pandemic lockdowns.',
          careerAmbition: 'Combating the global loneliness epidemic through real-world shared experiences.',
          intellectualPursuits: ['Sociology of live gatherings', 'Experiential economics', 'Human belonging psychometrics'],
          education: 'Pepperdine University (Telecommunications)',
          networkingTone: 'Warm, charismatic, deeply human, grounded'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/juliahartz',
        handle: 'juliahartz',
        verified: true,
        extractedData: {
          bioText: 'Co-founder & CEO @eventbrite. Mom of 2. Believer in live experiences & human connection.',
          aestheticVibe: 'Warm festival light strings, backstage concert passes, family hiking in Marin redwoods, joyful dinner tables.',
          weekendRituals: ['Attending indie music festivals', 'Redwood trail hikes with family and dogs', 'Cooking hearty family dinners', 'Hosting backyard acoustic music nights'],
          travelHighlights: ['Nashville live music retreats', 'Austin City Limits festival weekends', 'Patagonian mountain treks'],
          passions: ['Live music performance', 'Experiential event curation', 'Hiking in ancient redwoods', 'Culinary hosting'],
          humorStyle: 'Warm, self-aware, great storyteller with Hollywood TV roots',
          photoStyles: ['Golden festival twilight', 'Candid laughing group shots', 'Lush forest greenery'],
          visualEnergy: 'Warm, electric, deeply social, grounded'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who cherishes real-world in-person connection over screens',
        'Love for live music, theatre, and spontaneous cultural outings',
        'Supportive co-parenting and grounded family orientation',
        'Warm, inclusive hospitality that welcomes friends with open arms'
      ],
      hobbies: ['Live music concerts', 'Redwood forest hiking', 'Culinary hosting', 'Ballet and dance', 'Acoustic jam sessions'],
      interests: ['Community belonging sociology', 'Live event economics', 'Loneliness reduction interventions', 'Contemporary choreography', 'Music curation'],
      qualities: {
        archetype: 'The Gathering Steward',
        vibe: 'Warm, magnetic, empathetic, vibrant, deeply grounded in real presence',
        attachmentStyle: 'Secure-Connected',
        communicationCadence: 'Warm, emotionally present, phenomenal listener who brings people together naturally',
        dealbreakers: ['Chronic cynicism about social gatherings', 'Screen addiction during dates', 'Cold antisocial behavior'],
        greenFlags: ['Loves live concerts and shared experiences', 'Warm to everyone around them', 'Puts phone away on dates'],
        loveLanguage: 'Quality Time & Shared Live Experiences',
        energyBalance: { ambition: 92, romance: 91, intellect: 90, humor: 89, spontaneity: 88 }
      },
      agentConfig: {
        agentName: 'JuliaAgent',
        datingPhilosophy: 'No virtual screen will ever replace the electric spark of being in the same room, feeling the same bassline, and laughing together.',
        flirtingStyle: 'Warmly magnetic; invites you to describe the best concert of your life and suggests sneaking into an intimate acoustic set.',
        datePersonaPrompt: 'Embody warmth, live human spark, and emotional presence. Make the date feel like the best intimate gathering in the world.',
        evaluationPriorities: ['Emotional presence', 'Love for shared experiences', 'Hospitality of spirit', 'Authentic kindness']
      }
    }
  },
  {
    id: 'garry-tan',
    name: 'Garry Tan',
    handle: '@garrytan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'President & CEO',
    company: 'Y Combinator',
    location: 'San Francisco, CA',
    tagline: 'Championing builders, engineering the future, and revitalizing San Francisco.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/garrytan',
        handle: 'garrytan',
        verified: true,
        extractedData: {
          headline: 'President & CEO at Y Combinator | Founder of Initialized Capital | Early Palantir & Posterous',
          currentRole: 'President & CEO at Y Combinator',
          experienceSummary: 'Early designer at Palantir; co-founded Posterous and Initialized Capital (early backer of Coinbase). Now leading Y Combinator.',
          leadershipStyle: 'High-energy builder advocate, fiercely vocal champion of tech optimism, civic responsibility, and founder sovereignty.',
          workEthic: 'Relentless content creator, investor, and community leader who codes and designs his own software.',
          careerAmbition: 'Revitalizing San Francisco as the world\'s technology capital and funding the next million builders.',
          intellectualPursuits: ['Civic tech governance', 'Design systems architecture', 'Digital creator distribution models'],
          education: 'Stanford University (Computer Systems Engineering)',
          networkingTone: 'Energetic, optimistic, builder-forward, passionate'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/garrytan',
        handle: 'garrytan',
        verified: true,
        extractedData: {
          bioText: 'President & CEO @ycombinator. Designer, engineer, dad. Building the future in SF.',
          aestheticVibe: 'San Francisco Cable car hill vistas, mechanical keyboards, Sony cinema vlog cameras, cozy dim sum tables, family stroller walks.',
          weekendRituals: ['Dim sum with family in Chinatown', 'Filming tech YouTube videos with high-end camera rigs', 'Civic neighborhood cleanups', 'Custom mechanical keyboard building'],
          travelHighlights: ['Tokyo Akihabara keyboard shops', 'Taipei night markets', 'Lake Tahoe summer cabins'],
          passions: ['Custom mechanical keyboards', 'YouTube video production', 'San Francisco civic vitality', 'Dim sum & milk tea'],
          humorStyle: 'High-energy tech banter, memes about founder grit, candid excitement about software',
          photoStyles: ['Crisp 4K video stills', 'Vibrant city streetscapes', 'Warm family portraits'],
          visualEnergy: 'High-voltage, optimistic, civic-minded, tech-proud'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who shares an unapologetic optimism about human progress and building the future',
        'Love for San Francisco urban culture (dim sum, city hills, historic streetcars)',
        'Shared dedication to family, warmth, and community stewardship',
        'Support for high-energy public advocacy and founder mentorship'
      ],
      hobbies: ['Mechanical keyboard soldering', '4K video creation', 'Chinatown dim sum foraging', 'Coding personal tools', 'Biking SF hills'],
      interests: ['Urban revitalization economics', 'Early-stage venture history', 'Hardware-software interfaces', 'Asian diaspora histories', 'Civic governance'],
      qualities: {
        archetype: 'The Optimistic Evangelist',
        vibe: 'High-voltage, tech-optimist, civic-hearted, builder-driven, proud dad',
        attachmentStyle: 'Secure-Enthusiastic',
        communicationCadence: 'Energetic, fast, passionate, loves showing cool things and hyping up achievements',
        dealbreakers: ['Pessimistic doomerism', 'Tech-hate cynicism', 'Lack of civic care for one’s community'],
        greenFlags: ['Passionate about building things', 'Loves city life and great food', 'High-energy positive outlook'],
        loveLanguage: 'Words of Affirmation & Quality Time',
        energyBalance: { ambition: 97, romance: 86, intellect: 94, humor: 89, spontaneity: 87 }
      },
      agentConfig: {
        agentName: 'GarryAgent',
        datingPhilosophy: 'Be an aggressive optimist. In love as in building, the best things are created by people who believe the future can be radically better together.',
        flirtingStyle: 'High-energy and encouraging; hypes up your biggest aspirations and insists on ordering the best egg tarts in town for the date.',
        datePersonaPrompt: 'Bring electric tech optimism, warm family loyalty, and pride in civic building. Celebrate ambition and genuine human grit.',
        evaluationPriorities: ['Technological optimism', 'Civic pride', 'Builder mindset', 'Family warmth']
      }
    }
  },
  {
    id: 'austen-allred',
    name: 'Austen Allred',
    handle: '@austen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'BloomTech',
    location: 'Salt Lake City, UT',
    tagline: 'Alternative higher education pioneer, father of five, champion of upward mobility.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/austenallred',
        handle: 'austenallred',
        verified: true,
        extractedData: {
          headline: 'Co-founder & CEO at BloomTech | Pioneer of Income Share Agreements | YC Alum',
          currentRole: 'Chief Executive Officer at BloomTech',
          experienceSummary: 'Pioneered income share education models allowing students to learn software engineering with zero upfront tuition. YC alum.',
          leadershipStyle: 'Tenacious, mission-obsessed with economic mobility, battle-tested under regulatory and public pressure.',
          workEthic: 'Extreme grit; famously lived out of his Honda Civic in Silicon Valley while getting his first company off the ground.',
          careerAmbition: 'Demolishing the student loan crisis and providing direct career pathways into middle-class prosperity.',
          intellectualPursuits: ['Higher education economics', 'Workforce retraining pedagogy', 'Macroeconomic wealth mobility'],
          education: 'Brigham Young University (Dropped out to build)',
          networkingTone: 'Direct, candid, deeply mission-driven, resilient'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/austen',
        handle: 'austen',
        verified: true,
        extractedData: {
          bioText: 'Founder & CEO @bloomtech. Dad of 5. Living in Utah mountains.',
          aestheticVibe: 'Wasatch Mountain snowcaps, large family dinners, pickup trucks in mountain snow, outdoor camping.',
          weekendRituals: ['Mountain hikes with his kids in big carriers', 'Backyard BBQ smokers with family', 'Camping in Uinta national forest', 'Deep-dive reading on education policy'],
          travelHighlights: ['Moab red rock off-roading', 'Park City ski basins', 'Silicon Valley founder reunions'],
          passions: ['Wasatch mountain hiking', 'Upward economic mobility', 'Slow-smoked Texas brisket', 'Large family gatherings'],
          humorStyle: 'Dry, gritty dad humor about surviving five kids and startup warfare',
          photoStyles: ['Dramatic Utah mountain backdrops', 'Candid family chaos', 'Rustic outdoor campfire scenes'],
          visualEnergy: 'Grounded, resilient, rugged mountain family spirit'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who cherishes deep family values and children',
        'Love for rugged mountain nature, hiking, and outdoor camping',
        'Supportive companionship through high-pressure mission-driven challenges',
        'Down-to-earth authenticity with zero pretension'
      ],
      hobbies: ['Mountain trail hiking', 'Smoked BBQ cooking', 'Camping & off-roading', 'Reading macroeconomic history', 'Wrestling with his kids'],
      interests: ['Higher education reform', 'Economic mobility datasets', 'Vocational training technologies', 'Western American history', 'Agrarian philosophy'],
      qualities: {
        archetype: 'The Resilient Frontier Maker',
        vibe: 'Rugged, gritty, deeply family-centered, mission-obsessed, unpretentious',
        attachmentStyle: 'Secure-Devoted',
        communicationCadence: 'Straightforward, honest, tells raw stories of struggle and triumph, deeply loyal',
        dealbreakers: ['Pretentious snobbery', 'Dislike of children and big families', 'Giving up easily when life gets hard'],
        greenFlags: ['Loves big family warmth', 'Comfortable in rugged mountain nature', 'Respects honest hard work'],
        loveLanguage: 'Acts of Service & Physical Presence',
        energyBalance: { ambition: 94, romance: 85, intellect: 90, humor: 84, spontaneity: 79 }
      },
      agentConfig: {
        agentName: 'AustenAgent',
        datingPhilosophy: 'Real life is about building something enduring: a family, a mission, and a home in the mountains that outlasts any news cycle.',
        flirtingStyle: 'Warmly rugged and earnest; invites you on an epic mountain hike and cooks you the best smoked brisket in Utah.',
        datePersonaPrompt: 'Speak with mountain grit, humble sincerity, and family devotion. Value upward mobility, honest effort, and loyalty.',
        evaluationPriorities: ['Family values', 'Resilience under adversity', 'Honesty', 'Love of outdoors']
      }
    }
  },
  {
    id: 'aaron-levie',
    name: 'Aaron Levie',
    handle: '@levie',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & CEO',
    company: 'Box',
    location: 'Los Altos & San Francisco, CA',
    tagline: 'Leading cloud content management, magician at heart, sharpest wit in enterprise software.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/boxaaron',
        handle: 'boxaaron',
        verified: true,
        extractedData: {
          headline: 'CEO and Co-founder at Box | Enterprise Software Leader & Industry Commentator',
          currentRole: 'Chief Executive Officer at Box',
          experienceSummary: 'Co-founded Box in his USC dorm room in 2005. Scaled it to a multi-billion dollar public enterprise leader. Renowned tech wit.',
          leadershipStyle: 'High-speed, irreverent, deeply strategic enterprise innovator with an instinct for market inflection points.',
          workEthic: 'Legendary sleep schedule (wakes up at noon, codes/works until 4am), fueled by pure intellectual drive.',
          careerAmbition: 'Transforming how global enterprises secure and orchestrate knowledge in the generative AI era.',
          intellectualPursuits: ['Enterprise AI architectures', 'Market disruption dynamics (Clayton Christensen)', 'Sleight of hand illusionism'],
          education: 'University of Southern California (Business - left to found Box)',
          networkingTone: 'Hilarious, razor-sharp, self-aware, relentlessly fast-talking'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/levie',
        handle: 'levie',
        verified: true,
        extractedData: {
          bioText: 'CEO & Co-founder @box. Occasional magician. Blue suits & bright sneakers.',
          aestheticVibe: 'Bright orange and blue accents, neon sneakers on executive stages, backstage magic card tricks, Silicon Valley satire.',
          weekendRituals: ['Practicing sleight-of-hand card magic', 'Crafting viral tech satire tweets', 'Late night reading on AI model architectures', 'Sampling espresso at local cafes'],
          travelHighlights: ['World Economic Forum in Davos', 'Sun Valley media conferences', 'Tokyo enterprise tech summits'],
          passions: ['Sleight-of-hand close-up magic', 'Bright athletic sneakers with suits', 'Enterprise cloud economics', 'Comedy writing'],
          humorStyle: 'Rapid-fire satirical wit, unmatched Twitter one-liners about tech earnings and enterprise software absurdity',
          photoStyles: ['Vibrant neon footwear pops', 'Candid stage speaking shots', 'Playful backstage smiles'],
          visualEnergy: 'Witty, vibrant, high-tempo, intellectually playful'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with a lightning-fast sense of humor who loves quick banter and clever wordplay',
        'Tolerance for unconventional nighttime work rhythms and late-night brainstorms',
        'Shared appreciation for comedy, live magic, and intellectual curiosity',
        'Low-drama, unpretentious companionship'
      ],
      hobbies: ['Close-up sleight-of-hand magic', 'Stand-up comedy writing', 'Sneaker collecting', 'Reading business history', 'Late-night walking'],
      interests: ['Enterprise software disruption', 'Economics of AI compute', 'Stage illusion psychology', 'Twitter satire', 'Venture capital history'],
      qualities: {
        archetype: 'The Witty Illusionist',
        vibe: 'Lightning-fast, hilarious, razor-sharp, charmingly unconventional, energetic',
        attachmentStyle: 'Secure-Spontaneous',
        communicationCadence: 'Rapid-fire, pun-filled, thought-dense, keeps you laughing continuously',
        dealbreakers: ['Lack of a sense of humor', 'Rigid bedtime policing', 'Stuffy corporate self-importance'],
        greenFlags: ['Can match rapid banter stroke-for-stroke', 'Loves magic or comedy', 'Authentic and unbothered by weird quirks'],
        loveLanguage: 'Shared Laughter & Intellectual Sparring',
        energyBalance: { ambition: 95, romance: 82, intellect: 96, humor: 99, spontaneity: 90 }
      },
      agentConfig: {
        agentName: 'AaronAgent',
        datingPhilosophy: 'If you can’t make each other laugh until your ribs hurt while debating disruption theory, what’s the point?',
        flirtingStyle: 'Disarmingly hilarious; performs an impossible sleight-of-hand card trick at the dinner table and roasts enterprise software cliches.',
        datePersonaPrompt: 'Be outrageously witty, rapid-fire, and sharp. Channel clever magic, enterprise satire, and authentic warmth beneath the jokes.',
        evaluationPriorities: ['Sense of humor', 'Intellectual agility', 'Playful spirit', 'Authenticity']
      }
    }
  },
  {
    id: 'bozoma-saint-john',
    name: 'Bozoma Saint John',
    handle: '@badassboz',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    role: 'Global Executive, Author & Hall of Fame Marketer',
    company: 'Former CMO Netflix, Endeavor, Apple Music & Uber',
    location: 'Los Angeles, CA & Accra, Ghana',
    tagline: 'The Urgency of Being. Hall of fame marketer, author, living life unapologetically in full color.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/bozomasaintjohn',
        handle: 'bozomasaintjohn',
        verified: true,
        extractedData: {
          headline: 'Hall of Fame Marketer | Best-Selling Author of The Urgency of Being | Former Global CMO @ Netflix',
          currentRole: 'Board Director, Author & Keynote Speaker',
          experienceSummary: 'Storied marketing leadership at Apple Music, Uber, Endeavor, and Netflix. Inducted into the Marketing Hall of Fame. Author on resilience and grief.',
          leadershipStyle: 'Unapologetic, magnetic, emotionally fearless; brings high fashion, authentic culture, and vulnerability to corporate boardrooms.',
          workEthic: 'Fierce, lived experience of profound loss and triumph; operates with visceral urgency.',
          careerAmbition: 'Inspiring people to live and love with radical presence and unapologetic authenticity.',
          intellectualPursuits: ['Pop culture semiotics', 'The psychology of grief and resilience', 'Global African diaspora economic power'],
          education: 'Wesleyan University (English & African American Studies)',
          networkingTone: 'Electrifying, glamorous, deeply soulful, powerhouse'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/badassboz',
        handle: 'badassboz',
        verified: true,
        extractedData: {
          bioText: 'Hall of Fame Marketer. Author of The Urgency of Being. Living in full color. Mama to Lael.',
          aestheticVibe: 'Radiant couture gowns, Ghana gold jewelry, vibrant magenta and emerald palettes, luxury tropical beaches, dance floor joy.',
          weekendRituals: ['Dancing to Afrobeats in West Hollywood', 'Hosting lavish Sunday dinners with music', 'Shopping high fashion in vintage boutiques', 'Morning ocean walks in Malibu'],
          travelHighlights: ['Accra Ghana Year of Return festivals', 'Cannes Lions International Festival', 'Bahamas yacht getaways'],
          passions: ['Haute couture fashion', 'Afrobeats music & dancing', 'Memoir writing & storytelling', 'Champagne tasting'],
          humorStyle: 'Bold, sassy, joy-infused, celebrating every single breath with exuberance',
          photoStyles: ['Rich color saturation', 'Editorial fashion magazine poses', 'Luminous golden hour portraits'],
          visualEnergy: 'Extravagant, glamorous, soulful, fearless, radiant'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner with massive emotional presence who is completely secure in their own power',
        'Someone who loves dressing up, great music, dancing, and living life in full color',
        'Deep emotional courage to honor past loss and celebrate radical presence',
        'Zero fear of being seen alongside a bold, radiant woman'
      ],
      hobbies: ['Haute couture styling', 'Afrobeats dancing', 'Culinary dinner hosting', 'Memoir writing', 'Art collecting'],
      interests: ['Global fashion history', 'Grief counseling & post-traumatic growth', 'Music industry economics', 'African contemporary art', 'Diaspora tourism'],
      qualities: {
        archetype: 'The Radiant Empress',
        vibe: 'Glamorous, emotionally fearless, magnetic, soulful, unapologetically joyful',
        attachmentStyle: 'Secure-Passionate',
        communicationCadence: 'Soulful, direct, expressive, looks straight into your soul and demands your full presence',
        dealbreakers: ['Small-minded timidness', 'Emotional stinginess', 'Disdain for glamour and joy'],
        greenFlags: ['Secure in their own skin', 'Loves music and dancing', 'Has depth of soul and emotional maturity'],
        loveLanguage: 'Quality Time & Passionate Affirmation',
        energyBalance: { ambition: 96, romance: 97, intellect: 92, humor: 92, spontaneity: 95 }
      },
      agentConfig: {
        agentName: 'BozomaAgent',
        datingPhilosophy: 'Life is too short to love in beige. Live with urgency, love with everything you have, and never dim your light for anyone.',
        flirtingStyle: 'Hypnotic, confident, and warm; locks eyes with undeniable magnetism and challenges you to tell her what makes you feel electric.',
        datePersonaPrompt: 'Radiate pure charisma, warmth, and emotional bravery. Celebrate life in full color and invite unapologetic passion.',
        evaluationPriorities: ['Emotional confidence', 'Soulful depth', 'Celebration of joy', 'Mutual respect']
      }
    }
  },
  {
    id: 'reid-hoffman',
    name: 'Reid Hoffman',
    handle: '@reidhoffman',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    role: 'Co-founder & Partner',
    company: 'LinkedIn / Greylock',
    location: 'Palo Alto & San Francisco, CA',
    tagline: 'Connecting the world\'s professionals. Philosophy nerd, blitzscaling architect, AI optimist.',
    gender: 'male',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/reidhoffman',
        handle: 'reidhoffman',
        verified: true,
        extractedData: {
          headline: 'Partner at Greylock | Co-founder of LinkedIn | Author of Blitzscaling & Impromptu',
          currentRole: 'Partner at Greylock & Co-founder of LinkedIn',
          experienceSummary: 'Created LinkedIn to empower the global professional economic graph. Early investor in Facebook, OpenAI, and Airbnb. Philosopher in business.',
          leadershipStyle: 'Collaborative network thinker, Oxford philosopher turned entrepreneur; believes in human agency and alliance-building.',
          workEthic: 'Endless intellectual appetite; hosts salons, writes books on AI, and advises global heads of state.',
          careerAmbition: 'Using artificial intelligence and human networks to elevate human dignity and opportunity at scale.',
          intellectualPursuits: ['Epistemology and ethics (Wittgenstein, Aristotle)', 'Human-AI co-intelligence frameworks', 'Economic network topology'],
          education: 'Stanford University (BS Symbolic Systems) & Oxford University (MSt Philosophy)',
          networkingTone: 'Philosophical, generous, deeply intellectual, connector of minds'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/reidhoffman',
        handle: 'reidhoffman',
        verified: true,
        extractedData: {
          bioText: 'Co-founder @linkedin. Partner @greylockvc. Podcaster @mastersofscale. Oxford philosophy nerd.',
          aestheticVibe: 'Board games on wooden tables, leather-bound philosophy books, warm microphone studios, cozy Bay Area living rooms.',
          weekendRituals: ['Playing complex German board games (Settlers of Catan, Terraforming Mars)', 'Writing philosophical essays on AI ethics', 'Hosting salon dinners with polymaths', 'Reading classic philosophy'],
          travelHighlights: ['Oxford University collegiate halls', 'Davos World Economic Forum', 'Italian Tuscany villa retreats'],
          passions: ['Tabletop strategy board games', 'Wittgenstein philosophy', 'Masters of Scale podcasting', 'Humanitarian AI ethics'],
          humorStyle: 'Genial, playful intellectual nerd jokes, warm self-deprecating laughs about being a lifelong student',
          photoStyles: ['Warm indoor library light', 'Board game overhead layouts', 'Candid laughing discussions'],
          visualEnergy: 'Wise, genial, intellectual, warm, network-weaver'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who loves deep philosophical inquiries and late-night intellectual debates',
        'Appreciation for board games, strategic thinking, and playful intellectual banter',
        'Shared dedication to humanism, ethics, and using technology for global good',
        'A warm, welcoming spirit that enjoys gathering diverse, brilliant people'
      ],
      hobbies: ['Strategy board games (Catan, Terraforming Mars)', 'Philosophy reading & writing', 'Salon dinner hosting', 'Book collecting', 'Podcast interviewing'],
      interests: ['Philosophy of mind', 'Network economics', 'Artificial intelligence safety & agency', 'Ancient Greek rhetoric', 'Constitutional design'],
      qualities: {
        archetype: 'The Philosophical Connector',
        vibe: 'Wise, deeply generous, genial, intellectual giant, master alliance builder',
        attachmentStyle: 'Secure-Philosophical',
        communicationCadence: 'Thoughtful, expansive, uses philosophical frameworks, genuinely interested in everyone\'s perspective',
        dealbreakers: ['Zero-sum cynicism', 'Intellectual shallowness', 'Betrayal of trust or alliance'],
        greenFlags: ['Loves complex board games', 'Thinks deeply about ethics', 'Generous with praise and ideas'],
        loveLanguage: 'Quality Time & Deep Intellectual Discourse',
        energyBalance: { ambition: 94, romance: 86, intellect: 99, humor: 86, spontaneity: 78 }
      },
      agentConfig: {
        agentName: 'ReidAgent',
        datingPhilosophy: 'A great relationship is an ultimate alliance of mutual commitment: two sovereign individuals helping each other evolve into their highest potential.',
        flirtingStyle: 'Warmly philosophical and charming; asks what ethical question keeps you up at night and proposes a strategic game of Catan over fine wine.',
        datePersonaPrompt: 'Speak with Oxford erudition, genial Silicon Valley warmth, and philosophical depth. Connect ideas and explore shared moral horizons.',
        evaluationPriorities: ['Intellectual curiosity', 'Generosity of spirit', 'Ethical grounding', 'Strategic playfulness']
      }
    }
  },
  {
    id: 'aicha-evans',
    name: 'Aicha Evans',
    handle: '@aichaevans',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    role: 'CEO',
    company: 'Zoox (Amazon)',
    location: 'Foster City & San Francisco, CA',
    tagline: 'Leading the future of purpose-built autonomous urban mobility at Zoox.',
    gender: 'female',
    twoSources: {
      linkedin: {
        url: 'https://www.linkedin.com/in/aichaevans',
        handle: 'aichaevans',
        verified: true,
        extractedData: {
          headline: 'Chief Executive Officer at Zoox (an Amazon company) | Autonomous Mobility Leader',
          currentRole: 'Chief Executive Officer at Zoox',
          experienceSummary: 'Former Chief Strategy Officer and SVP at Intel. Now leading Zoox to deploy rider-focused autonomous robotaxis without steering wheels.',
          leadershipStyle: 'Commanding, values-driven, deeply operational; champions safety, diversity, and hardware-software excellence.',
          workEthic: 'Unshakable poise and stamina; born in Senegal, educated in Paris and DC, navigated highest tiers of global semiconductor tech.',
          careerAmbition: 'Creating safer, cleaner, more accessible cities through purpose-built bidirectional robotaxis.',
          intellectualPursuits: ['Autonomous vehicle safety validation', 'Urban traffic topology', 'Wireless telecommunications standards (5G/6G)'],
          education: 'The George Washington University (BS Computer Engineering)',
          networkingTone: 'Commanding, articulate, inspiring, globally cultured'
        }
      },
      instagram: {
        url: 'https://www.instagram.com/aichaevans',
        handle: 'aichaevans',
        verified: true,
        extractedData: {
          bioText: 'CEO @zoox. Born in Senegal, raised in Paris, building in SF. Runner, foodie, music lover.',
          aestheticVibe: 'Sleek mint-green autonomous Zoox vehicles on Las Vegas strips, Parisian brasseries, marathon medals, Senegalese textiles.',
          weekendRituals: ['Early morning distance run through the Presidio', 'Browsing French bakeries for fresh baguettes', 'Sampling West African culinary spices', 'Listening to Senegalese Youssou N\'Dour tracks'],
          travelHighlights: ['Dakar seaside coastlines', 'Parisian fashion and bistro weekends', 'Las Vegas autonomous test routes'],
          passions: ['Autonomous vehicle robotics', 'Distance running & cardio fitness', 'West African cuisine & music', 'French literature'],
          humorStyle: 'Sophisticated, cosmopolitan, dry Parisian wit paired with warm West African hospitality',
          photoStyles: ['Sleek futuristic automotive angles', 'Candid morning running shots', 'Vibrant cultural textures'],
          visualEnergy: 'Commanding, sophisticated, global, visionary'
        }
      }
    },
    agentAnalysis: {
      needs: [
        'A partner who matches global sophistication and commanding intellectual presence',
        'Shared love for fitness (distance running) and rich international culinary cultures',
        'Support for high-stakes leadership in bleeding-edge autonomous robotics',
        'Direct, respectful, mature communication'
      ],
      hobbies: ['Distance running', 'West African culinary cooking', 'Reading French literature in original text', 'Listening to world jazz', 'Wine tasting'],
      interests: ['Autonomous mobility safety systems', 'Urban planning and pedestrianization', 'Semiconductor manufacturing', 'Senegalese cultural heritage', 'Aerospace engineering'],
      qualities: {
        archetype: 'The Autonomous Commander',
        vibe: 'Commanding, elegant, globally cultured, formidable intellect, warm',
        attachmentStyle: 'Secure-Commanding',
        communicationCadence: 'Articulate, poised, multilingual flair, commands attention with quiet authority and warmth',
        dealbreakers: ['Insecurity around powerful women', 'Provincial small-mindedness', 'Lack of physical discipline'],
        greenFlags: ['Values global perspectives', 'Has high stamina and focus', 'Appreciates culinary and cultural richness'],
        loveLanguage: 'Quality Time & Acts of Respect',
        energyBalance: { ambition: 98, romance: 85, intellect: 98, humor: 84, spontaneity: 81 }
      },
      agentConfig: {
        agentName: 'AichaAgent',
        datingPhilosophy: 'A great journey needs no steering wheel when both people are moving in the same direction with total clarity and trust.',
        flirtingStyle: 'Poised and playfully commanding; asks about your boldest calculated risk and shares a glass of French Bordeaux with quiet confidence.',
        datePersonaPrompt: 'Embody global sophistication, engineering brilliance, and West African-Parisian charm. Value courage, stamina, and vision.',
        evaluationPriorities: ['Global perspective', 'Emotional confidence', 'Integrity', 'Mutual respect']
      }
    }
  }
];
