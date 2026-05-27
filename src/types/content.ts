export type CtaLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "red" | "green";
  external?: boolean;
};

export type SeoContent = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  username: string;
  description: string;
  year: number;
  seo: SeoContent & {
    siteUrl: string;
    author: {
      name: string;
      title: string;
      email: string;
      location: string;
    };
  };
  social: {
    github: string;
    linkedin: string;
    telegram: string;
  };
  navigation: Array<{ label: string; href: string }>;
};

export type HomeContent = {
  seo: SeoContent;
  hero: {
    badge?: string;
    heading: string;
    description: string;
    ctas: CtaLink[];
    trustText: string;
  };
  logos: Array<{ name: string; size: number }>;
  stats: Array<{ label: string; value: string; description?: string }>;
};

export type SkillCategory = {
  title: string;
  skills: Array<{ name: string; level: number }>;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  status?: "current" | "previous";
};

export type AboutContent = {
  seo: SeoContent;
  hero: {
    heading: string;
    subheading: string;
    introduction: string;
    location: string;
    experienceYears: string;
    quote: string;
  };
  aboutMe: {
    heading: string;
    paragraph: string;
  };
  skills: {
    categories: SkillCategory[];
  };
  careerJourney: {
    timeline: ExperienceItem[];
  };
  profileImage: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  startingPrice?: string;
};

export type ServicesContent = {
  seo: SeoContent;
  hero: {
    heading: string;
    description: string;
  };
  coreServices: ServiceItem[];
  metrics: Array<{ value: string; description: string }>;
  cta: {
    heading: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

export type ContactContent = {
  seo: SeoContent;
  hero: {
    heading: string;
    description: string;
    cta: string;
  };
  form: {
    successTitle: string;
    successDescription: string;
    messagePlaceholder: string;
  };
};

export type ProjectHero = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryImage?: string;
  supportingImages?: string[];
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
};

export type ProjectMetadata = {
  role?: string;
  client?: string;
  timeline?: string;
  platform?: string;
  year?: string;
  collaboration?: string;
};

export type ProjectNarrativeSection = {
  heading: string;
  summary: string;
  bullets?: string[];
};

export type ProjectGalleryItem = {
  image: string;
  alt: string;
  caption?: string;
  category?: string;
};

export type ProjectTechStackGroup = {
  category: string;
  tools: string[];
};

export type ProjectFeature = {
  title: string;
  description: string;
  impact?: string;
  icon?: string;
};

export type ProjectProcessStep = {
  phase: string;
  title: string;
  description: string;
  outputs?: string[];
};

export type ProjectDeliverable = {
  title: string;
  description: string;
  link?: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
  description?: string;
};

export type ProjectTestimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
};

export type ProjectConversion = {
  heading: string;
  description: string;
  ctas: CtaLink[];
};

export type ProjectPricing = {
  model: string;
  startingAt?: string;
  included?: string[];
  note?: string;
};

export type ProjectSocialProofLink = {
  label: string;
  href: string;
};

export type ProjectSocialProof = {
  badges?: string[];
  links?: ProjectSocialProofLink[];
  repositoryStats?: string[];
  launchNotes?: string;
};

export type ProjectResponsiveUx = {
  breakpoints?: string[];
  interactionNotes?: string[];
  accessibilityNotes?: string[];
};

export type ProjectSeoPerformance = {
  performanceTargets?: string[];
  seoNotes?: string[];
  technicalChecks?: string[];
};

export type ProjectInfrastructure = {
  hosting?: string;
  backend?: string;
  database?: string;
  storage?: string;
  cicd?: string;
  monitoring?: string;
};

export type ProjectType = "production" | "study";

export type ProjectDetailContent = {
  hero: ProjectHero;
  metadata?: ProjectMetadata;
  designDirection?: ProjectNarrativeSection;
  overview: ProjectNarrativeSection;
  challenge: ProjectNarrativeSection;
  solution: ProjectNarrativeSection;
  gallery?: ProjectGalleryItem[];
  techStack?: ProjectTechStackGroup[];
  features: ProjectFeature[];
  process?: ProjectProcessStep[];
  deliverables?: ProjectDeliverable[];
  metrics?: ProjectMetric[];
  testimonial?: ProjectTestimonial;
  conversion: ProjectConversion;
  pricing?: ProjectPricing;
  socialProof?: ProjectSocialProof;
  responsiveUx?: ProjectResponsiveUx;
  seoPerformance?: ProjectSeoPerformance;
  infrastructure?: ProjectInfrastructure;
};

export type ProjectContent = {
  slug: string;
  /** Real shipped/client work vs learning/portfolio exercise. Legacy MDX defaults to `study`. */
  projectType: ProjectType;
  title: string;
  headline: string;
  summary: string;
  /** Cover image (first entry in `images`). */
  image: string;
  /** All project images from CMS; [0] = cover, rest = detail gallery. */
  images: string[];
  date: string;
  status: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  seo: SeoContent;
  detail: ProjectDetailContent;
  body?: string;
};
