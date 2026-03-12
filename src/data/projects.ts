export type ProjectType = "Web Design & Build" | "UI/UX Design";

export type Project = {
  slug: string;
  name: string;
  type: ProjectType;
  shortDescription: string;
  description: string;
  challenge: string;
  users: string;
  designDecisions: string;
  palette: string[];
  metrics: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "tm-event-hire",
    name: "TM Event Hire",
    type: "Web Design & Build",
    shortDescription:
      "Marquee and event equipment hire company covering Essex, London, and Hertfordshire.",
    description:
      "TM Event Hire needed a confident digital presence that reflected premium service quality while helping customers quickly request equipment and marquee packages.",
    challenge:
      "The previous site looked outdated and generated too many phone enquiries for basic quote requests. The goal was a modern website with a streamlined quote flow.",
    users:
      "Adults planning weddings, birthdays, and garden parties who need fast pricing clarity and confidence in supplier reliability.",
    designDecisions:
      "A blue, white, and grey visual system reinforced trust. Large imagery showcased setups, while a structured quote form captured key event details to reduce manual back-and-forth.",
    palette: ["#0f172a", "#60a5fa", "#e2e8f0"],
    metrics: [
      "Higher completion of quote requests",
      "Fewer repetitive phone enquiries",
      "Stronger visual credibility for premium bookings",
    ],
    year: "2024",
  },
  {
    slug: "hachette-learning",
    name: "Hachette Learning",
    type: "UI/UX Design",
    shortDescription:
      "Global educational publisher modernising digital product experiences.",
    description:
      "At Hachette Learning, Vishal helped define UX direction across platforms and contributed to the 2024 brand refresh through system-led digital design.",
    challenge:
      "As the first dedicated UI/UX designer, the role required introducing standards, prioritising user-centred decisions, and aligning multiple product stakeholders.",
    users:
      "Educators, students, and internal publishing teams using digital products and content platforms across markets.",
    designDecisions:
      "Established reusable UI patterns, scalable design systems, and clearer product workflows to improve consistency and speed across teams.",
    palette: ["#111827", "#34d399", "#d1fae5"],
    metrics: [
      "Design system adoption across teams",
      "Improved UX consistency between product surfaces",
      "Faster design-to-delivery collaboration",
    ],
    year: "2024",
  },
  {
    slug: "the-bar-people",
    name: "The Bar People",
    type: "Web Design & Build",
    shortDescription:
      "Mobile bar services for weddings, venues, and corporate events.",
    description:
      "The Bar People required a more premium brand impression to attract larger event contracts and corporate clients in Essex, London, and Hertfordshire.",
    challenge:
      "The existing site lacked polish and did not support higher-value positioning. They also needed faster enquiry capture for event planning.",
    users:
      "Newly engaged couples, venue partners, and corporate organisers during weekdays, plus private party planners at weekends.",
    designDecisions:
      "A black-and-white foundation with pink accents delivered premium contrast. Visual storytelling and 17Hats integration enabled fast, structured quote requests.",
    palette: ["#09090b", "#f9a8d4", "#fafafa"],
    metrics: [
      "Sharper premium positioning",
      "Higher corporate enquiry quality",
      "Faster quote turnaround with 17Hats",
    ],
    year: "2023",
  },
  {
    slug: "assemble-media-group",
    name: "Assemble Media Group",
    type: "Web Design & Build",
    shortDescription:
      "Independent East London publisher and events business with multiple B2B brands.",
    description:
      "Assemble Media Group needed a digital home for a rebrand, connecting several long-standing B2B publications under one coherent experience.",
    challenge:
      "Build a clean, modern website that unified brand architecture while remaining flexible for future content and event growth.",
    users:
      "Professionals in the built environment exploring publications, events, and sector-specific resources.",
    designDecisions:
      "A stripped-back black-and-white layout with turquoise accenting created visual clarity while guiding users between brands and offerings.",
    palette: ["#0a0a0a", "#2dd4bf", "#f5f5f5"],
    metrics: [
      "Improved brand clarity across B2B portfolio",
      "Cleaner navigation into core verticals",
      "Stronger digital representation of rebrand",
    ],
    year: "2023",
  },
  {
    slug: "sanigone",
    name: "Sanigone",
    type: "Web Design & Build",
    shortDescription:
      "Antiviral and antibacterial products for business, home, and pet markets.",
    description:
      "Sanigone experienced accelerated growth and needed an ecommerce-led website that could explain product use cases for both businesses and households.",
    challenge:
      "The previous experience did not effectively support online product exploration and lacked confidence signals for new customer segments.",
    users:
      "Commercial buyers, homeowners, and dog owners looking for trusted hygiene products with clear category pathways.",
    designDecisions:
      "A vibrant green-and-white system reinforced category relevance. Industry-specific entry points and review placement increased trust and product discoverability.",
    palette: ["#052e16", "#4ade80", "#ecfdf5"],
    metrics: [
      "Clearer segmentation by use case",
      "Higher trust through social proof",
      "Stronger ecommerce browsing confidence",
    ],
    year: "2022",
  },
  {
    slug: "jhd-builders",
    name: "JHD Builders",
    type: "Web Design & Build",
    shortDescription:
      "Established building contractor working with major UK private landlords.",
    description:
      "JHD Builders required a professional digital profile to support business development and communicate expanded services beyond existing relationships.",
    challenge:
      "Their old web presence undersold capability and lacked structure for procurement-led stakeholders assessing credibility.",
    users:
      "Local authorities, landlords, property owners, and commercial clients evaluating service scope and operational reliability.",
    designDecisions:
      "A minimalist dark-grey base with green highlights emphasised authority. Mission statements, services, and accreditations were prioritised for decision-makers.",
    palette: ["#111827", "#86efac", "#e5e7eb"],
    metrics: [
      "More credible first impression",
      "Clearer communication of service breadth",
      "Improved support for tender conversations",
    ],
    year: "2022",
  },
  {
    slug: "tiny-mites-music",
    name: "Tiny Mites Music",
    type: "Web Design & Build",
    shortDescription:
      "Children's learning and entertainment brand powered by original songs.",
    description:
      "Tiny Mites Music needed a refreshed platform that explained classes, showcased outcomes, and created pathways for both parents and franchise prospects.",
    challenge:
      "The previous site lacked key information and did not convert interest effectively across multiple audience types.",
    users:
      "Parents, nurseries, schools, and prospective franchisees serving children aged 0-7.",
    designDecisions:
      "Bright primary colours and playful composition reflected the brand voice. Reviews, embedded media, and dedicated franchise content improved relevance per segment.",
    palette: ["#1d4ed8", "#facc15", "#dc2626"],
    metrics: [
      "Higher engagement from parent audiences",
      "Clearer franchise proposition",
      "Improved discovery of programmes and content",
    ],
    year: "2021",
  },
  {
    slug: "outdoor-entertainment-jersey",
    name: "Outdoor Entertainment Jersey",
    type: "Web Design & Build",
    shortDescription:
      "Premium event entertainment provider in Jersey for indoor and outdoor setups.",
    description:
      "Outdoor Entertainment Jersey launched during the pandemic and needed a high-impact website to establish trust, present services, and drive bookings.",
    challenge:
      "As a new company, they required immediate credibility and an intuitive way for users to understand available hire options.",
    users:
      "Adults and parents planning birthdays, weddings, corporate events, and private home entertainment experiences.",
    designDecisions:
      "Black-and-white foundations with yellow accents created energy and premium contrast. Review integration and booking pathways were surfaced early in the journey.",
    palette: ["#0a0a0a", "#fde047", "#fafafa"],
    metrics: [
      "Fast market-ready launch",
      "Stronger trust for a new brand",
      "Smoother route from discovery to booking",
    ],
    year: "2021",
  },
];

export const featuredProjects = projects.slice(0, 4);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
