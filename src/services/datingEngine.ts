import { Person, DateSession, DateTurn, Venue, MatchScore } from '../types/dating';
import { VENUES } from '../data/peopleDataset';

// Multi-dimensional compatibility evaluation algorithm
export function calculateCompatibility(personA: Person, personB: Person): {
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
} {
  const eA = personA.agentAnalysis.qualities.energyBalance;
  const eB = personB.agentAnalysis.qualities.energyBalance;

  // Ambition synergy: high ambition appreciates other high ambition
  const ambitionDiff = Math.abs(eA.ambition - eB.ambition);
  const ambitionSynergy = Math.round(Math.max(65, 100 - ambitionDiff * 1.5));

  // Intellectual banter: mutual depth
  const avgIntellect = (eA.intellect + eB.intellect) / 2;
  const intellectDiff = Math.abs(eA.intellect - eB.intellect);
  const intellectualBanter = Math.round(Math.min(99, Math.max(60, avgIntellect - intellectDiff * 1.2)));

  // Humor chemistry: synergy between humor levels
  const avgHumor = (eA.humor + eB.humor) / 2;
  const humorDiff = Math.abs(eA.humor - eB.humor);
  const humorChemistry = Math.round(Math.min(98, Math.max(62, avgHumor - humorDiff * 0.8)));

  // Lifestyle fit: spontaneity + weekend overlap
  const spontDiff = Math.abs(eA.spontaneity - eB.spontaneity);
  const lifestyleFit = Math.round(Math.max(64, 98 - spontDiff * 1.4));

  // Shared hobbies or interests intersection
  const hobbiesA = new Set(personA.agentAnalysis.hobbies.map(h => h.toLowerCase()));
  const interestsA = new Set(personA.agentAnalysis.interests.map(i => i.toLowerCase()));

  const sharedGroundList: string[] = [];
  personB.agentAnalysis.hobbies.forEach(h => {
    const lower = h.toLowerCase();
    if (hobbiesA.has(lower) || Array.from(hobbiesA).some(ha => ha.includes(lower) || lower.includes(ha))) {
      sharedGroundList.push(h);
    }
  });

  personB.agentAnalysis.interests.forEach(i => {
    const lower = i.toLowerCase();
    if (interestsA.has(lower) || Array.from(interestsA).some(ia => ia.includes(lower) || lower.includes(ia))) {
      if (!sharedGroundList.includes(i)) sharedGroundList.push(i);
    }
  });

  // Synthesize defaults if sparse
  if (sharedGroundList.length === 0) {
    sharedGroundList.push(
      personA.agentAnalysis.hobbies[0] || 'High-craft design',
      personB.agentAnalysis.interests[0] || 'Long-horizon innovation',
      'Curiosity about global cultures'
    );
  }

  // Values alignment based on shared ground count and attachment balance
  const valuesAlignment = Math.min(99, Math.round(75 + sharedGroundList.length * 4 + (100 - ambitionDiff) * 0.15));

  // Weighted overall score
  const overallScore = Math.min(99, Math.round(
    valuesAlignment * 0.28 +
    lifestyleFit * 0.24 +
    intellectualBanter * 0.20 +
    ambitionSynergy * 0.16 +
    humorChemistry * 0.12
  ));

  // Contextual narratives
  const whyTheyFit = `Both ${personA.name} and ${personB.name} harmonize on ${personA.agentAnalysis.qualities.archetype.toLowerCase()} energy and ${personB.agentAnalysis.qualities.vibe.toLowerCase()}. Their agents identify strong alignment on ${sharedGroundList.slice(0, 2).join(' and ')}.`;
  
  const potentialFriction = ambitionDiff > 12 
    ? `Divergent weekly cadence: ${personA.name} operates with a ${eA.spontaneity}% spontaneity index whereas ${personB.name} prefers structured intentionality.`
    : `High calendar congestion: both agents note that coordinating quiet downtime between major public endeavors requires deliberate boundaries.`;

  const datingPrediction = overallScore >= 90
    ? `Electric conversational synergy with immediate mutual respect. Date is likely to run 90+ minutes past schedule over espresso or late wine.`
    : overallScore >= 80
    ? `Strong intellectual sparring and shared lifestyle rhythms. Both agents predict a high-chemistry second date once schedules align.`
    : `Respectful mutual admiration; high likelihood of collaborative friendship or mutual advisory connection rather than sustained romantic spark.`;

  return {
    overallScore,
    breakdown: {
      lifestyleFit,
      ambitionSynergy,
      intellectualBanter,
      valuesAlignment,
      humorChemistry
    },
    whyTheyFit,
    potentialFriction,
    sharedGround: sharedGroundList.slice(0, 4),
    datingPrediction
  };
}

// Generate the ranked list of all candidates for a specific person
export function getRankedMatchesForPerson(target: Person, allPeople: Person[]): MatchScore[] {
  const candidates = allPeople.filter(p => p.id !== target.id);

  const scored = candidates.map(candidate => {
    const comp = calculateCompatibility(target, candidate);
    return {
      candidatePersonId: candidate.id,
      candidate,
      rank: 0,
      overallScore: comp.overallScore,
      breakdown: comp.breakdown,
      whyTheyFit: comp.whyTheyFit,
      potentialFriction: comp.potentialFriction,
      sharedGround: comp.sharedGround,
      datingPrediction: comp.datingPrediction
    };
  });

  // Sort descending by overallScore
  scored.sort((a, b) => b.overallScore - a.overallScore);

  // Assign ranks 1 to N
  return scored.map((item, index) => ({
    ...item,
    rank: index + 1
  }));
}

// Generate an authentic multi-turn date simulation between any two agents
export function generateDateSimulation(personA: Person, personB: Person, venueId?: string): DateSession {
  const selectedVenue = VENUES.find(v => v.id === venueId) || VENUES[0];
  const compatibility = calculateCompatibility(personA, personB);

  const aName = personA.name.split(' ')[0];
  const bName = personB.name.split(' ')[0];

  const turns: DateTurn[] = [
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `Good evening ${bName}. When my agent scheduled us at ${selectedVenue.name}, I was hoping we'd skip the usual tech buzzwords and just appreciate the space. The lighting here is actually extraordinary.`,
      emotion: 'charmed',
      innerMonologue: `Agent note: ${bName}'s public record shows a rare balance of relentless focus and genuine leisure. I need to test if ${bName} can truly decompress outside the boardroom.`,
      chemistryDelta: 12,
      timestamp: '7:02 PM'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `I noticed that immediately too, ${aName}. My agent flagged that you have a sharp eye for aesthetic craftsmanship. Honestly, after a nonstop week of back-to-back decisions, walking in here and hearing bossa nova instead of slide decks is an instant relief.`,
      emotion: 'laughing',
      innerMonologue: `Agent note: Direct eye contact, warm cadence. ${aName}'s Instagram hinted at high-taste quiet rituals, and in person there is zero stiffness. Green flag registered.`,
      chemistryDelta: 14,
      timestamp: '7:06 PM'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `That's the thing people miss. On LinkedIn everyone looks like an unfeeling execution engine. But looking through your weekend rituals—especially your love for ${personB.agentAnalysis.hobbies[0] || 'exploring nature'}—I realized you probably protect your personal sanity pretty fiercely. How do you actually carve out that space?`,
      emotion: 'probing',
      innerMonologue: `Agent note: Probing core need #${1}: Does this partner respect emotional boundaries and calendar sanity? Acknowledging the contrast between their LinkedIn and IG persona.`,
      chemistryDelta: 10,
      timestamp: '7:14 PM'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `It took me years to learn, but if you don't build a moat around your joy, the world will happily annex it. For me, ${personB.agentAnalysis.hobbies[1] || 'quiet morning walks'} isn't a hobby—it's how I keep my soul intact. What about you? What's the one thing on your calendar that is non-negotiable?`,
      emotion: 'vulnerable',
      innerMonologue: `Agent note: High emotional vocabulary. ${aName} isn't just making small talk; this is authentic psychological sparring. Chemistry meter increasing.`,
      chemistryDelta: 16,
      timestamp: '7:22 PM'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `For me, it's ${personA.agentAnalysis.hobbies[0] || 'sketching and coffee cupping'}. No screens, no notifications. If someone can't sit with me in that kind of quiet, it's usually an instant dealbreaker. Though I have to admit, you strike me as someone who would actually enjoy a 3-hour quiet coffee session.`,
      emotion: 'flirty',
      innerMonologue: `Agent note: Playfully testing dealbreakers. ${bName}'s reaction will determine whether we close with an agreement for a second date.`,
      chemistryDelta: 15,
      timestamp: '7:31 PM'
    },
    {
      speakerId: personB.id,
      speakerName: personB.name,
      text: `Three hours? As long as the espresso is third-wave and we can debate ${personB.agentAnalysis.interests[0] || 'creative tools'} halfway through, I’ll clear my entire Sunday morning. My agent said we had an estimated ${compatibility.overallScore}% compatibility, but watching you light up about it in person makes the algorithm look conservative.`,
      emotion: 'charmed',
      innerMonologue: `Agent note: Mutual spark confirmed. Banter cadence is effortless, mutual respect is absolute. Recommendation: proceed directly to dessert and set date #2.`,
      chemistryDelta: 18,
      timestamp: '7:45 PM'
    },
    {
      speakerId: personA.id,
      speakerName: personA.name,
      text: `Deal. Next Sunday morning, my favorite hidden spot. Let our agents work out the logistics while we order one more round.`,
      emotion: 'flirty',
      innerMonologue: `Agent verdict: 10/10 date outcome. Both personas demonstrated core values, shared wit, and authentic vulnerability without performative posturing.`,
      chemistryDelta: 15,
      timestamp: '8:05 PM'
    }
  ];

  const overallChem = Math.min(99, Math.round(compatibility.overallScore + 4));

  return {
    id: `date-${personA.id}-${personB.id}-${Date.now()}`,
    personAId: personA.id,
    personBId: personB.id,
    venue: selectedVenue,
    status: 'completed',
    turns,
    outcome: {
      overallChemistry: overallChem,
      decisionA: 'second_date',
      decisionB: 'second_date',
      mutualDecision: 'mutual_spark',
      postDateVerdict: `Unanimous Second Date Sparks: Both agents registered profound alignment on design, personal boundaries, and playful intellectual sparring.`,
      highlightMoment: `When ${bName} reciprocated ${aName}'s quiet morning ritual question with an unreserved Sunday invite.`,
      frictionPoint: `Potential scheduling conflict between public obligations, mitigated by mutual respect for downtime.`,
      compatibilityDimensions: {
        intellectual: compatibility.breakdown.intellectualBanter,
        lifestyle: compatibility.breakdown.lifestyleFit,
        ambition: compatibility.breakdown.ambitionSynergy,
        humor: compatibility.breakdown.humorChemistry,
        vulnerability: 91
      }
    }
  };
}
