// Data access utilities for portfolio migration
import homepageData from '@/data/homepage-data.json';
import aboutPageData from '@/data/about-page-data.json';
import projectsPageData from '@/data/projects-page-data.json';
import servicesPageData from '@/data/services-page-data.json';
import contactPageData from '@/data/contact-page-data.json';
import workPageData from '@/data/work-page-data.json';
import completePortfolioData from '@/data/complete-portfolio-data.json';

// Type definitions for better TypeScript support
export interface PersonalInfo {
  name: string;
  title: string;
  brand: string;
  tagline: string;
  email: string;
  location: {
    city: string;
    country: string;
  };
  profileImage: string;
  resumeLink: string;
  socialMedia: {
    linkedin: string;
    github: string;
    upwork: string;
    email: string;
  };
  availability: string;
  alumniOf: string;
}

export interface WorkExperience {
  id: string;
  status: 'current' | 'previous' | 'education';
  title: string;
  company: string;
  companyType: string;
  industry: string;
  location: string;
  period: {
    start: string;
    end: string | null;
    display: string;
  };
  description: string;
  responsibilities: string[];
  achievements: Array<{
    metric: string;
    description: string;
  }>;
  technologies: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  category: string[];
  status: string;
  date: string;
  displayDate: string;
  icon: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  challenges: Array<{
    title: string;
    description: string;
  }>;
  techStack: string[];
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  startingPrice: string;
}

// Data access functions
export const getHomepageData = () => homepageData;
export const getAboutPageData = () => aboutPageData;
export const getProjectsPageData = () => projectsPageData;
export const getServicesPageData = () => servicesPageData;
export const getContactPageData = () => contactPageData;
export const getWorkPageData = () => workPageData;
export const getCompletePortfolioData = () => completePortfolioData;

// Convenience functions for specific data sections
export const getPersonalInfo = (): PersonalInfo => completePortfolioData.personal;
export const getWorkExperience = (): WorkExperience[] => completePortfolioData.workExperience as WorkExperience[];
export const getProjects = (): Project[] => completePortfolioData.projects as Project[];
export const getServices = (): Service[] => completePortfolioData.services;
export const getSkills = () => completePortfolioData.skills;
export const getStatistics = () => completePortfolioData.statistics;

// Helper functions for component data
export const getHeroData = () => homepageData.hero;
export const getProfessionalExperience = () => homepageData.professionalExperience;
export const getFeaturedProjects = () => homepageData.featuredProjects;
export const getServicesOverview = () => homepageData.services;

export const getCareerJourney = () => aboutPageData.careerJourney;
export const getSkillsBreakdown = () => aboutPageData.skills;
export const getAchievements = () => aboutPageData.achievements;
export const getMission = () => aboutPageData.mission;

export const getProjectsList = () => projectsPageData.projects;
export const getProjectCategories = () => projectsPageData.filterCategories;

export const getCoreServices = () => servicesPageData.coreServices;
export const getTechnologyStack = () => servicesPageData.technologyStack;
export const getDevelopmentProcess = () => servicesPageData.developmentProcess;
export const getPricingPlans = () => servicesPageData.pricingPlans;
export const getTestimonials = () => servicesPageData.testimonials;

export const getContactInformation = () => contactPageData.contactInformation;
export const getProfessionalProfiles = () => contactPageData.professionalProfiles;
export const getContactForm = () => contactPageData.contactForm;
export const getFAQ = () => contactPageData.faq;

export const getCareerTimeline = () => workPageData.careerTimeline;
export const getSkillsSummary = () => workPageData.skillsSummary;

// SEO and metadata helpers
export const getPageMetadata = (page: string) => {
  const dataMap = {
    homepage: homepageData.meta,
    about: aboutPageData.meta,
    projects: projectsPageData.meta,
    services: servicesPageData.meta,
    contact: contactPageData.meta,
    work: workPageData.meta,
  };
  return dataMap[page as keyof typeof dataMap] || homepageData.meta;
};

export const getStructuredData = () => homepageData.structuredData;
