# Portfolio Migration Data

This directory contains all the extracted content and data from your current portfolio website, organized by page for easy migration to your new portfolio platform.

## 📁 Files Overview

### Individual Page Data Files
1. **homepage-data.json** - Home page content including hero, experience, projects preview, services overview
2. **about-page-data.json** - About page with career journey, skills, achievements, and personal mission
3. **projects-page-data.json** - Complete project portfolio with detailed case studies for 3 major projects
4. **services-page-data.json** - Service offerings, pricing, technology stack, and development process
5. **contact-page-data.json** - Contact information, form configuration, FAQ, and professional profiles
6. **work-page-data.json** - Professional work experience timeline and skills summary

## 🎯 Data Structure

All JSON files follow a consistent structure:
- **page** - Page identifier
- **meta** - SEO metadata (title, description, keywords, URL, OG tags)
- **Content sections** - Organized by visual sections on the page
- **CTA sections** - Call-to-action elements
- **Additional data** - Structured data, form configurations, etc.

## 📊 Content Statistics

### Homepage
- 2 Professional positions
- 2 Featured projects
- 3 Service offerings
- Structured data for Person schema

### About Page
- Career journey with 3 timeline entries (2 jobs + 1 education)
- 3 Skill categories with proficiency levels
- 4 Key achievements with metrics
- 4 Core values and approach principles

### Projects Page
- 3 Major projects with full details:
  - **Mobile-FB**: React Native social media app
  - **ChatApp**: Real-time messaging with Socket.IO
  - **Grammedia Clone**: Next.js e-commerce platform
- Each project includes:
  - Overview and description
  - Key features (5 per project)
  - Challenges and solutions (3 per project)
  - Technology stack
  - Detailed case study
  - GitHub repository link

### Services Page
- 4 Core service offerings:
  - Frontend Development ($2,000+)
  - Backend Development ($2,500+)
  - Mobile Development ($3,500+)
  - Infrastructure Services ($1,500+)
- 4 Technology categories (Frontend, Backend, Database, Mobile & Tools)
- 4-step development process
- 3 Pricing packages (Starter, Professional, Enterprise)

### Contact Page
- 3 Contact methods (Email, Location, Availability)
- 3 Professional profiles (LinkedIn, GitHub, Upwork)
- 8 Form fields with Web3Forms integration
- 5 FAQ items
- Contact form access key included

### Work Page
- 2 Professional positions with detailed timelines
- 6 Professional skill categories
- Achievements and metrics for each role
- Technologies and tools used

## 💡 Key Data Points

### Personal Information
- **Name**: Abdul Rohim
- **Title**: Full-Stack Developer & Infrastructure Specialist
- **Email**: rohimjoy70@gmail.com
- **Location**: Surabaya, Indonesia
- **LinkedIn**: https://linkedin.com/in/tobangado
- **GitHub**: https://github.com/tobangado69
- **Upwork**: https://www.upwork.com/freelancers/~01ed64880e8526c9c7
- **Resume**: https://drive.google.com/file/d/1xOJ8LgtE1FLd9WIUxG31cIBemfF3Z4I0/view?usp=sharing

### Key Metrics
- **4+ years** of combined experience
- **40%** reduction in connectivity issues (Varnion Technology)
- **25%** reduction in repeat visits (Telkom Indonesia)
- **3** major projects completed
- **10+** technologies mastered
- **20+** projects delivered

### Technology Stack
**Frontend**: React, Next.js, Tailwind CSS, TypeScript  
**Backend**: Golang, Node.js, Nest.js, Express, GraphQL  
**Database**: PostgreSQL, MongoDB, Redis, Supabase  
**Mobile**: React Native, Expo  
**Infrastructure**: Mikrotik, Ubiquiti, Fiber Optic, OTDR, OPM

## 🚀 Usage Guide

### For New Portfolio Development

1. **Import Data**: Use these JSON files as your data source for the new portfolio
2. **Component Mapping**: Map each section to your new UI components
3. **Maintain Structure**: Keep the hierarchical data structure for easy updates
4. **Customize**: Adapt the content as needed for your new design system

### Example Usage (React/Next.js)

```javascript
import homepageData from './migration-data/homepage-data.json';
import projectsData from './migration-data/projects-page-data.json';

// Use in your components
const Hero = () => {
  const { hero } = homepageData;
  return (
    <section>
      <h1>{hero.heading}</h1>
      <p>{hero.description}</p>
    </section>
  );
};
```

### For CMS Integration

If migrating to a CMS (Contentful, Sanity, Strapi, etc.):
1. Create content models matching the JSON structure
2. Import data using the CMS's API or import tools
3. Map relationships between content types

### For Static Site Generators

Use these files as data sources for:
- **Next.js**: Import in `getStaticProps` or use as static JSON
- **Gatsby**: Source from local JSON with `gatsby-transformer-json`
- **Hugo**: Convert to YAML/TOML for front matter
- **Astro**: Import directly in component frontmatter

## 📝 Notes

- All content has been extracted verbatim from the original HTML files
- Image paths are relative and may need updating based on your new structure
- Form integration uses Web3Forms (access key included in contact-page-data.json)
- Social media links and external URLs are up to date as of extraction
- Structured data follows schema.org standards
- All pricing and statistics are current as of the original website

## ✅ Quality Checks

- [x] All 6 pages extracted
- [x] SEO metadata preserved
- [x] Structured data maintained
- [x] Contact form configuration included
- [x] All external links verified
- [x] Professional profiles included
- [x] Project repositories linked
- [x] Technology stacks documented
- [x] Achievements and metrics captured

## 🔄 Migration Checklist

When migrating to your new portfolio:

- [ ] Review and update all content for accuracy
- [ ] Update image paths to match new asset structure
- [ ] Test contact form integration with Web3Forms
- [ ] Verify all external links are working
- [ ] Update resume link if needed
- [ ] Check meta descriptions for SEO optimization
- [ ] Validate structured data with Google's testing tool
- [ ] Update any statistics or metrics that have changed
- [ ] Test responsive design with actual content
- [ ] Verify social media links are current

---

**Last Updated**: 2025  
**Format Version**: 1.0  
**Total Pages**: 6  
**Total Projects**: 3  
**Total Work Positions**: 2  
**Data Format**: JSON

