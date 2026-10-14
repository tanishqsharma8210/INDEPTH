export type TopicFact = {
  label: string;
  value: string;
};

export type TopicChapter = {
  id: string;
  number: string;
  title: string;
  timeframe: string;
  summary: string;
  significance: string;
  keyFigures: string[];
};

export type TopicSource = {
  title: string;
  authorOrPublisher: string;
  year: string;
  note: string;
};

export type TopicDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  premise: string;
  facts: TopicFact[];
  chapters: TopicChapter[];
  openQuestions: string[];
  sources: TopicSource[];
};

export const topicDetails: Record<string, TopicDetail> = {
  history: {
    slug: "history",
    name: "History",
    eyebrow: "Civilizations & Turning Points",
    headline: "From Agrarian Surpluses to Globalized Information Networks",
    premise:
      "History is the empirical study of how human cultures, technologies, political institutions, and environments collide and transform over deep time. It examines not just what happened, but the underlying mechanisms that caused societies to thrive, adapt, or collapse.",
    facts: [
      { label: "Primary Methodology", value: "Primary source analysis & material archaeology" },
      { label: "Core Transition", value: "Hunter-gatherer bands to urbanized industrial states" },
      { label: "Key Dynamic", value: "Institutional resilience under technological change" },
      { label: "Epistemic Challenge", value: "Preservation bias in ancient written records" },
    ],
    chapters: [
      {
        id: "neolithic-revolution",
        number: "01",
        title: "The Neolithic Transition & Sedentary Societies",
        timeframe: "c. 10,000–8,000 BCE",
        summary:
          "In the Fertile Crescent, human groups transitioned from mobile foraging to cereal cultivation and animal domestication. Permanent settlements created surplus food stocks, enabling craft specialization, structured hierarchies, written ledgers, and property law.",
        significance:
          "Transformed the human ecological footprint and laid the social scaffolding for cities, taxation, organized defense, and formal governance.",
        keyFigures: ["Early Natufian & Levantine cultivators"],
      },
      {
        id: "gutenberg-disruption",
        number: "02",
        title: "Movable Type & The Democratization of Texts",
        timeframe: "1450s CE",
        summary:
          "Johannes Gutenberg combined movable metal type, oil-based ink, and a modified screw press in Mainz. The cost of book production plummeted by over 80%, breaking clerical monopolies on biblical interpretation and scholastic knowledge.",
        significance:
          "Accelerated the Protestant Reformation, spread vernacular languages, and enabled the rapid circulation of empirical observation that ignited the Scientific Revolution.",
        keyFigures: ["Johannes Gutenberg", "Johann Fust", "Peter Schöffer"],
      },
      {
        id: "industrial-energy-shift",
        number: "03",
        title: "Thermodynamics & The Industrial Energy Shift",
        timeframe: "1760–1850 CE",
        summary:
          "Britain transitioned from organic energy sources (wood, wind, muscle) to coal-fired steam engines (Thomas Newcomen, James Watt). Mechanized textile production, iron smelting, and steam locomotion redefined work, time discipline, and global commerce.",
        significance:
          "Catalyzed unprecedented population growth and urbanization while generating modern labor movements, international market reliance, and anthropogenic greenhouse emissions.",
        keyFigures: ["Thomas Newcomen", "James Watt", "Matthew Boulton"],
      },
      {
        id: "postwar-multilateralism",
        number: "04",
        title: "The Post-War Multilateral Architecture",
        timeframe: "1944–1945 CE",
        summary:
          "Following the devastation of World War II, international delegates established the Bretton Woods system (IMF, World Bank) and the United Nations Charter in San Francisco to construct rules-based diplomatic and economic frameworks.",
        significance:
          "Created institutional mechanisms to mitigate competitive currency devaluations and prevent recurring systemic wars among industrial powers.",
        keyFigures: ["John Maynard Keynes", "Harry Dexter White", "Eleanor Roosevelt"],
      },
    ],
    openQuestions: [
      "To what extent do institutional forms outlive the material and ecological conditions that brought them into being?",
      "How directly do regional climate fluctuations (e.g., the Little Ice Age) correlate with civilizational crises and political transitions?",
      "How can historical inquiry correct for the systemic underrepresentation of non-elite voices in surviving documentary archives?",
    ],
    sources: [
      {
        title: "The Structure of World History: From Modes of Production to Modes of Exchange",
        authorOrPublisher: "Kojin Karatani (Duke University Press)",
        year: "2014",
        note: "Systematic analysis of social formations from nomadism to the nation-state.",
      },
      {
        title: "Guns, Germs, and Steel: The Fates of Human Societies",
        authorOrPublisher: "Jared Diamond (W. W. Norton)",
        year: "1997",
        note: "Examines geographical and ecological determinants of civilizational development.",
      },
      {
        title: "The Wealth and Poverty of Nations: Why Some Are So Rich and Some So Poor",
        authorOrPublisher: "David S. Landes (W. W. Norton)",
        year: "1998",
        note: "Historical analysis of the European industrial transition and global divergence.",
      },
    ],
  },

  biotechnology: {
    slug: "biotechnology",
    name: "Biotechnology",
    eyebrow: "Molecular Engineering & Genetics",
    headline: "Translating the Genetic Code into Programmable Therapeutics",
    premise:
      "Biotechnology harnesses cellular processes, recombinant DNA, enzymatic molecular scissors, and synthetic biology to diagnose, treat, and engineer biological systems. It moves biology from descriptive natural history to precise molecular engineering.",
    facts: [
      { label: "Foundational Medium", value: "DNA double helix (A-T, G-C Watson-Crick base pairing)" },
      { label: "Landmark Breakthrough", value: "Recombinant DNA plasmids & PCR amplification" },
      { label: "Precision Tool", value: "CRISPR-Cas9 ribonucleoprotein complexes" },
      { label: "Therapeutic Frontier", value: "Modified mRNA, base editing & CAR-T immunotherapy" },
    ],
    chapters: [
      {
        id: "recombinant-dna",
        number: "01",
        title: "Recombinant DNA & Bacterial Plasmids",
        timeframe: "1972–1973 CE",
        summary:
          "Herbert Boyer and Stanley Cohen used restriction endonucleases to cut viral DNA and ligated the fragments into E. coli plasmids. The bacteria expressed foreign genes, proving that genetic information could be transferred across species boundaries.",
        significance:
          "Birthed the modern commercial biotechnology industry and enabled biosynthetic human insulin production, ending reliance on animal pancreas extraction.",
        keyFigures: ["Herbert Boyer", "Stanley Cohen", "Paul Berg"],
      },
      {
        id: "human-genome-project",
        number: "02",
        title: "The Human Genome Project",
        timeframe: "1990–2003 CE",
        summary:
          "A global public consortium coordinated by the NIH and Wellcome Trust sequenced all 3.1 billion base pairs of the euchromatic human genome using automated capillary Sanger sequencing, adopting the open-access Bermuda Principles.",
        significance:
          "Mapped roughly 20,000 protein-coding genes, democratized biological data, and laid the cornerstone for pharmacogenomics and target-specific oncology.",
        keyFigures: ["Eric Lander", "Francis Collins", "John Sulston", "Craig Venter"],
      },
      {
        id: "crispr-cas9",
        number: "03",
        title: "CRISPR-Cas9 Programmable Gene Editing",
        timeframe: "2012 CE",
        summary:
          "Emmanuelle Charpentier and Jennifer Doudna demonstrated that the bacterial adaptive immune system's Cas9 endonuclease could be guided by a single synthetic chimeric RNA (sgRNA) to cut specific genomic loci with base-pair precision.",
        significance:
          "Democratized gene editing globally by replacing cumbersome zinc-finger nucleases and TALENs, enabling cure pathways for sickle-cell disease and beta-thalassemia.",
        keyFigures: ["Jennifer Doudna", "Emmanuelle Charpentier", "Martin Jinek", "Feng Zhang"],
      },
      {
        id: "mrna-therapeutics",
        number: "04",
        title: "Modified mRNA & Lipid Nanoparticle Delivery",
        timeframe: "2005–2020s CE",
        summary:
          "Katalin Karikó and Drew Weissman discovered that replacing uridine with pseudouridine prevents synthetic mRNA from triggering lethal innate immune Toll-like receptor alarms. Formulated in ionizable lipid nanoparticles, mRNA instructs patient cells to manufacture target antigens.",
        significance:
          "Enabled rapid vaccine synthesis during global pandemics and opened avenues for personalized neoantigen cancer vaccines and in vivo protein replacement.",
        keyFigures: ["Katalin Karikó", "Drew Weissman", "Robert Langer"],
      },
    ],
    openQuestions: [
      "How can in vivo gene editing overcome immunogenicity and completely eliminate off-target genomic cleavage?",
      "What ethical consensus should distinguish therapeutic somatic gene corrections from heritable germline enhancements?",
      "Can de novo deep learning models reliably predict functional 3D protein dynamics across multi-protein physiological complexes?",
    ],
    sources: [
      {
        title: "A Programmable Dual-RNA-Guided DNA Endonuclease in Adaptive Bacterial Immunity",
        authorOrPublisher: "Jinek, Charpentier, Doudna et al. (Science)",
        year: "2012",
        note: "Foundational publication detailing molecular mechanics of CRISPR-Cas9 genome editing.",
      },
      {
        title: "Initial Sequencing and Analysis of the Human Genome",
        authorOrPublisher: "International Human Genome Sequencing Consortium (Nature)",
        year: "2001",
        note: "Landmark paper publishing the first draft of the complete human genetic sequence.",
      },
      {
        title: "Suppression of RNA Recognition by Toll-like Receptors: The Impact of Nucleoside Modification",
        authorOrPublisher: "Katalin Karikó & Drew Weissman (Immunity)",
        year: "2005",
        note: "The critical discovery enabling safe human application of synthetic mRNA therapeutics.",
      },
    ],
  },

  science: {
    slug: "science",
    name: "Science",
    eyebrow: "Empirical Inquiries & Natural Laws",
    headline: "Systematic Observation, Falsification, and the Architecture of Reality",
    premise:
      "Science is not a collection of static dogmas, but an iterative epistemic discipline. It constructs predictive mathematical hypotheses, tests them against reproducible empirical measurement, and abandons cherished paradigms when contradicted by nature.",
    facts: [
      { label: "Epistemic Standard", value: "Empirical reproducibility & Popperian falsifiability" },
      { label: "Core Syntheses", value: "Classical mechanics, electromagnetism, relativity, quantum field theory" },
      { label: "Measurement Base", value: "SI units anchored in invariant fundamental constants" },
      { label: "Guiding Axiom", value: "Natural phenomena obey regular, mathematically describable laws" },
    ],
    chapters: [
      {
        id: "heliocentric-astronomy",
        number: "01",
        title: "The Heliocentric Decentering of Earth",
        timeframe: "1543–1610 CE",
        summary:
          "Nicolaus Copernicus's De revolutionibus mathematically placed the Sun at the center of planetary orbits. Galileo Galilei's telescope verified moons orbiting Jupiter and the phases of Venus, disproving Ptolemaic geocentric cosmology.",
        significance:
          "Initiated modern empirical science by asserting that physical observation takes precedence over philosophical or theological authority.",
        keyFigures: ["Nicolaus Copernicus", "Galileo Galilei", "Johannes Kepler"],
      },
      {
        id: "maxwell-equations",
        number: "02",
        title: "Maxwell's Electrodynamic Synthesis",
        timeframe: "1865 CE",
        summary:
          "James Clerk Maxwell unified electricity, magnetism, and optics into four coupled differential equations. The equations revealed that oscillating electric and magnetic fields propagate through space as waves at the speed of light.",
        significance:
          "Represented the second great unification in physics after Newton, laying the theoretical foundation for telecommunications, radio, radar, and relativity.",
        keyFigures: ["James Clerk Maxwell", "Michael Faraday", "Heinrich Hertz"],
      },
      {
        id: "general-relativity",
        number: "03",
        title: "General Relativity & Curved Spacetime",
        timeframe: "1915 CE",
        summary:
          "Albert Einstein replaced Newton's instantaneous gravitational pull with the geometric curvature of four-dimensional spacetime caused by mass and energy. Confirmed in 1919 by Arthur Eddington's solar eclipse starlight deflection measurements.",
        significance:
          "Provided the theoretical framework for modern cosmology, gravitational lensing, black hole physics, and satellite GPS relativistic clock corrections.",
        keyFigures: ["Albert Einstein", "Marcel Grossmann", "Arthur Eddington"],
      },
      {
        id: "plate-tectonics",
        number: "04",
        title: "Plate Tectonics & The Dynamic Lithosphere",
        timeframe: "1960s CE",
        summary:
          "Marie Tharp's physiographic ocean floor mapping revealed mid-ocean ridges. Combined with paleomagnetic seafloor spreading evidence, geologists confirmed that Earth's crust is divided into rigid tectonic plates floating upon the convective asthenosphere.",
        significance:
          "Unified volcanology, seismology, and paleontology, resolving long-standing mysteries of continental distribution and mountain orogeny.",
        keyFigures: ["Marie Tharp", "Alfred Wegener", "Harry Hess", "Bruce Heezen"],
      },
    ],
    openQuestions: [
      "How can general relativity be mathematically reconciled with quantum mechanics in extreme gravitational singularities?",
      "What is the physical nature of dark matter and dark energy, which comprise roughly 95% of the universe's total energy density?",
      "How did non-living prebiotic chemical compounds achieve metabolic autonomy and self-replicating biological code?",
    ],
    sources: [
      {
        title: "A Dynamical Theory of the Electromagnetic Field",
        authorOrPublisher: "James Clerk Maxwell (Philosophical Transactions of the Royal Society)",
        year: "1865",
        note: "Formulation of the classical electromagnetic field equations.",
      },
      {
        title: "The Foundation of the General Theory of Relativity",
        authorOrPublisher: "Albert Einstein (Annalen der Physik)",
        year: "1916",
        note: "Definitive presentation of Einstein's field equations of gravitation.",
      },
      {
        title: "The Structure of Scientific Revolutions",
        authorOrPublisher: "Thomas S. Kuhn (University of Chicago Press)",
        year: "1962",
        note: "Classic treatise on paradigm shifts and normal science.",
      },
    ],
  },

  space: {
    slug: "space",
    name: "Space",
    eyebrow: "Astrophysics & Deep Time",
    headline: "Observing Cosmic Evolution Across Billions of Light-Years",
    premise:
      "Astrophysics explores the origin, structure, and fate of the universe. By capturing electromagnetic radiation, cosmic rays, neutrinos, and gravitational ripples across deep space, astronomy reconstructs cosmic history from the first fractions of a second to the distant stellar era.",
    facts: [
      { label: "Cosmic Age", value: "13.787 ± 0.020 billion years (derived from Planck CMB data)" },
      { label: "Observable Diameter", value: "Approximately 93 billion light-years" },
      { label: "Primary Detectors", value: "Infrared (JWST), Optical (Hubble, VLT), Gravitational (LIGO/Virgo)" },
      { label: "Dominant Geometry", value: "Spatially flat within 0.4% margin of error" },
    ],
    chapters: [
      {
        id: "cosmic-microwave-background",
        number: "01",
        title: "The Cosmic Microwave Background Radiation",
        timeframe: "1964–1965 CE",
        summary:
          "Arno Penzias and Robert Wilson at Bell Labs detected an inescapable 2.725 Kelvin isotropic microwave hiss. The signal was the thermal remnant photon radiation released 380,000 years after the Big Bang when electrons and protons recombined into neutral hydrogen.",
        significance:
          "Provided decisive empirical confirmation of the Big Bang model over the competing Steady State hypothesis.",
        keyFigures: ["Arno Penzias", "Robert Wilson", "Robert Dicke", "Jim Peebles"],
      },
      {
        id: "exoplanet-discovery",
        number: "02",
        title: "The Discovery of Exoplanetary Systems",
        timeframe: "1995 CE",
        summary:
          "Michel Mayor and Didier Queloz at Haute-Provence Observatory detected periodic Doppler wobbles in star 51 Pegasi, discovering 51 Pegasi b—a gas giant orbiting its host star every 4.2 days.",
        significance:
          "Proved that planetary systems are ubiquitous across the galaxy and revealed unexpected planetary classes ('Hot Jupiters') unseen in our Solar System.",
        keyFigures: ["Michel Mayor", "Didier Queloz"],
      },
      {
        id: "gravitational-waves",
        number: "03",
        title: "Direct Gravitational-Wave Detection",
        timeframe: "2015 CE",
        summary:
          "The Advanced LIGO interferometers in Washington and Louisiana detected GW150914—spatial metric oscillations measuring less than one ten-thousandth the diameter of a proton, caused by two colliding stellar black holes 1.3 billion light-years away.",
        significance:
          "Opened multi-messenger astronomy, allowing humanity to observe events obscured by cosmic dust and dark matter through gravitational radiation.",
        keyFigures: ["Rainer Weiss", "Kip Thorne", "Barry Barish"],
      },
      {
        id: "jwst-deep-field",
        number: "04",
        title: "The James Webb Space Telescope & Early Galaxies",
        timeframe: "2022–present CE",
        summary:
          "JWST's 6.5-meter gold-coated beryllium mirror and cryogenic infrared instruments peered past cosmological redshift into the cosmic dawn, capturing mature galaxies formed within 300 million years of the Big Bang.",
        significance:
          "Challenged conventional early galaxy formation models and detected prebiotic atmospheric molecules on transiting exoplanets.",
        keyFigures: ["John Mather", "Jane Rigby", "Garth Illingworth"],
      },
    ],
    openQuestions: [
      "What accounts for the persistent Hubble Tension between local distance ladder measurements ($H_0 \\approx 73$) and CMB calculations ($H_0 \\approx 67$)?",
      "Can rocky exoplanets orbiting active red dwarf stars retain atmospheres dense enough to sustain liquid surface water?",
      "What is the exact equation of state describing hyper-dense degenerate neutron matter inside neutron star cores?",
    ],
    sources: [
      {
        title: "A Measurement of Excess Antenna Temperature at 4080 Mc/s",
        authorOrPublisher: "Penzias & Wilson (The Astrophysical Journal)",
        year: "1965",
        note: "Original paper reporting detection of the cosmic microwave background.",
      },
      {
        title: "A Jupiter-Mass Companion to a Solar-Type Star",
        authorOrPublisher: "Mayor & Queloz (Nature)",
        year: "1995",
        note: "Discovery of 51 Pegasi b, the first confirmed exoplanet around a main-sequence star.",
      },
      {
        title: "Observation of Gravitational Waves from a Binary Black Hole Merger",
        authorOrPublisher: "LIGO Scientific Collaboration and Virgo Collaboration (Physical Review Letters)",
        year: "2016",
        note: "First direct physical detection of gravitational waves.",
      },
    ],
  },

  technology: {
    slug: "technology",
    name: "Technology",
    eyebrow: "Computation & Distributed Systems",
    headline: "From Solid-State Switches to Global Cryptographic Infrastructure",
    premise:
      "Modern digital technology is built on layered abstractions: semiconductor physics, boolean logic gates, microarchitectural instruction sets, compiled systems programming, packet-switched networking, and mathematically verifiable cryptography.",
    facts: [
      { label: "Core Switch", value: "Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET)" },
      { label: "Information Metric", value: "Shannon entropy & binary digit (bit)" },
      { label: "Dominant Architecture", value: "Stored-program Von Neumann / Harvard architectures" },
      { label: "Network Protocol", value: "TCP/IP packet switching & BGP routing" },
    ],
    chapters: [
      {
        id: "transistor-invention",
        number: "01",
        title: "The Solid-State Transistor",
        timeframe: "1947–1959 CE",
        summary:
          "John Bardeen, Walter Brattain, and William Shockley invented the point-contact and bipolar junction transistor at Bell Labs, followed by Mohamed Atalla and Dawon Kahng's invention of the MOSFET. Solid-state switches eliminated fragile, power-hungry vacuum tubes.",
        significance:
          "Formed the bedrock of all modern integrated circuits, microprocessors, and digital memory arrays.",
        keyFigures: ["John Bardeen", "Walter Brattain", "William Shockley", "Mohamed Atalla"],
      },
      {
        id: "arpanet-packet-switching",
        number: "02",
        title: "Packet Switching & ARPANET",
        timeframe: "1969 CE",
        summary:
          "Paul Baran, Donald Davies, and Leonard Kleinrock demonstrated that breaking data into discrete addressed packets routed dynamically over decentralized networks prevented single-point failures in telecommunications.",
        significance:
          "Spawned ARPANET and laid the structural engineering principles for Vint Cerf and Bob Kahn's TCP/IP protocol suite—the architecture of the modern Internet.",
        keyFigures: ["Paul Baran", "Donald Davies", "Leonard Kleinrock", "Vint Cerf", "Bob Kahn"],
      },
      {
        id: "unix-c-revolution",
        number: "03",
        title: "UNIX & The C Systems Language",
        timeframe: "1969–1973 CE",
        summary:
          "Dennis Ritchie and Ken Thompson engineered UNIX and developed C at Bell Labs, introducing portable operating systems, uniform hierarchical filesystems, and composable command-line pipelines operating over plain text streams.",
        significance:
          "Supplied the foundational software architecture for modern operating systems (Linux, macOS, Android, iOS) and cloud infrastructure.",
        keyFigures: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan"],
      },
      {
        id: "public-key-crypto",
        number: "04",
        title: "Public-Key Asymmetric Cryptography",
        timeframe: "1976–1977 CE",
        summary:
          "Whitfield Diffie and Martin Hellman published key-exchange over open channels, followed by Rivest, Shamir, and Adleman's (RSA) trapdoor one-way mathematical function utilizing prime number factorization.",
        significance:
          "Allowed secure authentication, digital signatures, and encrypted communication over public networks without requiring prior secret sharing.",
        keyFigures: ["Whitfield Diffie", "Martin Hellman", "Ron Rivest", "Adi Shamir", "Leonard Adleman"],
      },
    ],
    openQuestions: [
      "How will global public-key infrastructure transition to lattice-based post-quantum cryptography before cryptanalytically relevant quantum computers emerge?",
      "What atomic interconnect and lithographic limits will restrict semiconductor scaling beyond sub-2-nanometer gate-all-around nanosheet nodes?",
      "Can automated formal theorem proving verify the absolute security of mission-critical kernels and cryptographic implementations?",
    ],
    sources: [
      {
        title: "A Mathematical Theory of Communication",
        authorOrPublisher: "Claude E. Shannon (Bell System Technical Journal)",
        year: "1948",
        note: "The foundational paper defining information theory, digital bits, and channel capacity.",
      },
      {
        title: "New Directions in Cryptography",
        authorOrPublisher: "Whitfield Diffie & Martin E. Hellman (IEEE Transactions on Information Theory)",
        year: "1976",
        note: "Introduced asymmetric public-key cryptography and digital signatures.",
      },
      {
        title: "The UNIX Time-Sharing System",
        authorOrPublisher: "Dennis M. Ritchie & Ken Thompson (Communications of the ACM)",
        year: "1974",
        note: "Seminal description of UNIX system design and composable tooling.",
      },
    ],
  },

  psychology: {
    slug: "psychology",
    name: "Psychology",
    eyebrow: "Cognitive Science & Behavior",
    headline: "Heuristics, Neural Plasticity, and the Architecture of Mind",
    premise:
      "Psychology investigates the cognitive, developmental, neurobiological, and social processes that govern perception, judgment, memory, and interpersonal dynamics. It explores how internal mental representations guide adaptive behavior.",
    facts: [
      { label: "Core Methodology", value: "Controlled behavioral experiments, neuroimaging (fMRI), psychophysics" },
      { label: "Dual-Process Model", value: "System 1 (fast, heuristic, associative) vs. System 2 (deliberate, serial, effortful)" },
      { label: "Memory Nature", value: "Reconstructive, associative, and subject to post-event consolidation" },
      { label: "Structural Substrate", value: "Activity-dependent synaptic plasticity & neural circuits" },
    ],
    chapters: [
      {
        id: "cognitive-revolution",
        number: "01",
        title: "The Cognitive Revolution",
        timeframe: "1956 CE",
        summary:
          "Rejecting strict behaviorist conditioning dogmas that treated the brain as an unobservable black box, George Miller, Jerome Bruner, and Ulric Neisser re-established internal mental representations, working memory capacity ($7 \\pm 2$), and cognitive computation.",
        significance:
          "United psychology, computer science, linguistics, and neuroscience into the modern multidisciplinary field of cognitive science.",
        keyFigures: ["George A. Miller", "Noam Chomsky", "Ulric Neisser", "Jerome Bruner"],
      },
      {
        id: "heuristics-biases",
        number: "02",
        title: "Heuristics, Biases & Prospect Theory",
        timeframe: "1974–1979 CE",
        summary:
          "Daniel Kahneman and Amos Tversky demonstrated through rigorous empirical testing that human decision-making under uncertainty systematically departs from expected utility theory due to cognitive shortcuts (availability, anchoring, framing) and loss aversion.",
        significance:
          "Transformed modern behavioral economics, clinical diagnostics, policy design, and understanding of systematic irrationality.",
        keyFigures: ["Daniel Kahneman", "Amos Tversky"],
      },
      {
        id: "memory-malleability",
        number: "03",
        title: "The Malleability of Episodic Memory",
        timeframe: "1974–1980s CE",
        summary:
          "Elizabeth Loftus demonstrated through controlled experiments that human episodic memory does not record like a video camera. Leading questions and post-event misinformation reliably implant false details into eyewitness memory reconstructions.",
        significance:
          "Reformed international legal standards for eyewitness testimony, police interrogation protocols, and clinical therapeutic practices.",
        keyFigures: ["Elizabeth F. Loftus", "John C. Palmer"],
      },
      {
        id: "synaptic-plasticity",
        number: "04",
        title: "Synaptic Plasticity & Memory Storage",
        timeframe: "1970–2000 CE",
        summary:
          "Eric Kandel studied the gill-withdrawal reflex of the sea slug Aplysia californica, discovering that short-term memory involves transient phosphorylation of existing ion channels, while long-term memory requires gene expression and physical growth of new synaptic contacts.",
        significance:
          "Provided the cellular and molecular explanation for how learning physically rewires the nervous system.",
        keyFigures: ["Eric Kandel", "Donald Hebb"],
      },
    ],
    openQuestions: [
      "How do distributed, synchronized neural firing patterns give rise to subjective conscious experience (the Hard Problem)?",
      "How can psychological science resolve the replication crisis and ensure empirical robustness across diverse non-WEIRD cultural populations?",
      "What are the long-term cognitive and emotional consequences of personalized algorithmic social feedback loops on adolescent attention regulation?",
    ],
    sources: [
      {
        title: "Prospect Theory: An Analysis of Decision under Risk",
        authorOrPublisher: "Daniel Kahneman & Amos Tversky (Econometrica)",
        year: "1979",
        note: "Seminal paper outlining descriptive decision-making under risk and cognitive framing.",
      },
      {
        title: "The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information",
        authorOrPublisher: "George A. Miller (Psychological Review)",
        year: "1956",
        note: "Foundational publication for cognitive psychology and working memory constraints.",
      },
      {
        title: "Cellular Mechanisms of Learning and the Biological Basis of Individuality",
        authorOrPublisher: "Eric R. Kandel (Cell)",
        year: "2001",
        note: "Nobel lecture summarizing molecular pathways of memory consolidation.",
      },
    ],
  },

  philosophy: {
    slug: "philosophy",
    name: "Philosophy",
    eyebrow: "Logic, Epistemology & Ethics",
    headline: "Rigorous Conceptual Analysis, Epistemic Justification, and Moral Duty",
    premise:
      "Philosophy examines the foundational assumptions underlying knowledge, ethics, scientific inquiry, and conscious reality. Through formal logic and thought experiments, it interrogates what we can know, how we ought to live, and what exists.",
    facts: [
      { label: "Core Branches", value: "Epistemology, Ethics, Metaphysics, Logic, Political Philosophy" },
      { label: "Primary Tool", value: "Formal propositional/predicate logic & conceptual analysis" },
      { label: "Central Criteria", value: "Argument validity, sound premises, and dialectical consistency" },
      { label: "Classical Inquiries", value: "The nature of truth, personal identity, and moral obligation" },
    ],
    chapters: [
      {
        id: "socratic-platonic-epistemology",
        number: "01",
        title: "Socratic Dialectic & Plato's Epistemology",
        timeframe: "c. 399–375 BCE",
        summary:
          "Socrates established the elenchus (cross-examination) to reveal hidden contradictions in unexamined beliefs. Plato formulated the distinction between ephemeral sensory perception (doxa) and timeless intelligible forms (episteme) in the Allegory of the Cave.",
        significance:
          "Defined philosophy as systematic critical dialogue and laid the groundwork for Western definitions of knowledge as justified true belief.",
        keyFigures: ["Socrates", "Plato"],
      },
      {
        id: "cartesian-skepticism",
        number: "02",
        title: "Cartesian Methodological Skepticism",
        timeframe: "1641 CE",
        summary:
          "René Descartes applied hyperbolic doubt to all sensory experience and mathematical propositions in Meditations on First Philosophy, discovering that the act of doubting necessitates an indubitable thinking subject: Cogito, ergo sum.",
        significance:
          "Catalyzed modern rationalist epistemology, subjective interiority, and the mind-body dualism debate.",
        keyFigures: ["René Descartes"],
      },
      {
        id: "kantian-synthesis",
        number: "03",
        title: "Kant's Transcendental Idealism & Categorical Imperative",
        timeframe: "1781–1785 CE",
        summary:
          "Immanuel Kant bridged British empiricism and continental rationalism by demonstrating that while knowledge begins with sensory experience, that experience is structured by a priori forms of sensibility (space, time) and categories of understanding. He formulated deontological ethics based on universalizable moral duties.",
        significance:
          "Revolutionized epistemology and established deontological human rights frameworks treating individuals as ends, never merely as means.",
        keyFigures: ["Immanuel Kant"],
      },
      {
        id: "falsification-and-demarcation",
        number: "04",
        title: "Popper, Kuhn & The Philosophy of Science",
        timeframe: "1934–1962 CE",
        summary:
          "Karl Popper replaced verificationism with falsificationism as the criterion demarcating empirical science from metaphysics. Thomas Kuhn argued that science develops through episodic paradigm shifts rather than linear, gradual accumulation.",
        significance:
          "Shaped modern scientific methodology, peer review standards, and understanding of theoretical revisionism.",
        keyFigures: ["Karl Popper", "Thomas S. Kuhn"],
      },
    ],
    openQuestions: [
      "Can normative ethical claims (what ought to be) ever be logically derived from descriptive empirical facts (what is)?",
      "How can personal identity through time be defended in light of psychological continuity vs. biological bodily criteria?",
      "Does human agency possess metaphysical free will, or is conscious choice compatible with physical determinism (compatibilism)?",
    ],
    sources: [
      {
        title: "Meditations on First Philosophy",
        authorOrPublisher: "René Descartes",
        year: "1641",
        note: "Seminal work establishing foundational epistemology through systematic doubt.",
      },
      {
        title: "Critique of Pure Reason",
        authorOrPublisher: "Immanuel Kant",
        year: "1781",
        note: "The definitive synthesis of rationalism and empiricism.",
      },
      {
        title: "The Logic of Scientific Discovery",
        authorOrPublisher: "Karl Popper",
        year: "1934",
        note: "Introduced falsifiability as the standard for empirical scientific demarcation.",
      },
    ],
  },

  economics: {
    slug: "economics",
    name: "Economics",
    eyebrow: "Incentives, Trade & Allocation",
    headline: "Scarcity, Price Signals, and the Architecture of Modern Markets",
    premise:
      "Economics analyzes how individuals, firms, and sovereign states make decisions to allocate scarce resources with competing uses. It investigates the coordinating power of prices, comparative advantage in trade, market failures, and institutional design.",
    facts: [
      { label: "Core Dilemma", value: "Infinite human desires constrained by scarce resources" },
      { label: "Primary Engine", value: "Decentralized price discovery & marginal opportunity cost" },
      { label: "Major Branches", value: "Microeconomics (individual agents/firms) & Macroeconomics (aggregates/inflation/GDP)" },
      { label: "Modern Lens", value: "Empirical quasi-experiments, behavioral economics & mechanism design" },
    ],
    chapters: [
      {
        id: "division-of-labor",
        number: "01",
        title: "The Division of Labor & Price Signals",
        timeframe: "1776 CE",
        summary:
          "Adam Smith's The Wealth of Nations demonstrated that specialized division of labor (illustrated by his famous pin factory) creates dramatic productivity gains, and that price signals coordinate decentralized production without requiring central planning.",
        significance:
          "Established modern classical economics, elucidating the self-regulating dynamics of competitive commercial markets.",
        keyFigures: ["Adam Smith"],
      },
      {
        id: "comparative-advantage",
        number: "02",
        title: "Comparative Advantage & Voluntary Trade",
        timeframe: "1817 CE",
        summary:
          "David Ricardo demonstrated that two nations mutually benefit from trade even if one produces every good more efficiently, as long as their relative opportunity costs differ.",
        significance:
          "Supplied the mathematical foundation for modern international trade theory and the dismantling of mercantilist protectionism.",
        keyFigures: ["David Ricardo"],
      },
      {
        id: "market-failures-externalities",
        number: "03",
        title: "Externalities & The Coase Theorem",
        timeframe: "1920–1960 CE",
        summary:
          "Arthur Pigou formulated tax corrections for unpriced negative externalities like industrial pollution. Ronald Coase demonstrated that if property rights are clearly defined and transaction costs are negligible, private parties can negotiate efficient outcomes without state intervention.",
        significance:
          "Founded modern environmental economics, carbon pricing frameworks, and law and economics.",
        keyFigures: ["Arthur Pigou", "Ronald H. Coase"],
      },
      {
        id: "behavioral-economics",
        number: "04",
        title: "Behavioral Economics & Choice Architecture",
        timeframe: "1980s–2000s CE",
        summary:
          "Richard Thaler challenged the frictionless Homo economicus assumption by integrating psychological realism—showing that real economic agents have bounded rationality, self-control limits, and mental accounting vulnerabilities.",
        significance:
          "Led to international policy adoption of 'nudges' (e.g., automatic pension enrollment) and empirical randomized control trials (RCTs) in development economics.",
        keyFigures: ["Richard H. Thaler", "Esther Duflo", "Abhijit Banerjee"],
      },
    ],
    openQuestions: [
      "How can market pricing mechanisms accurately internalize long-horizon intergenerational climate externalities before catastrophic tipping points?",
      "What fiscal and monetary policies can stabilize sovereign debt while countering persistent wealth concentration in aging economies?",
      "How will labor markets and wage equilibrium adjust as automated cognitive systems displace traditional skilled service employment?",
    ],
    sources: [
      {
        title: "An Inquiry into the Nature and Causes of the Wealth of Nations",
        authorOrPublisher: "Adam Smith",
        year: "1776",
        note: "The founding text of modern market economics and division of labor analysis.",
      },
      {
        title: "The Problem of Social Cost",
        authorOrPublisher: "Ronald H. Coase (Journal of Law and Economics)",
        year: "1960",
        note: "Seminal economic analysis of property rights, transaction costs, and externalities.",
      },
      {
        title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
        authorOrPublisher: "Richard H. Thaler & Cass R. Sunstein (Yale University Press)",
        year: "2008",
        note: "Introduced behavioral choice architecture into public policy and economics.",
      },
    ],
  },
};

export function getTopicDetail(slug: string): TopicDetail | undefined {
  return topicDetails[slug];
}
