import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Settings",
        path: "content/pages",
        format: "json",
        match: {
          include: "site",
        },
        fields: [
          { type: "string", name: "name", label: "Site Name", isTitle: true, required: true },
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "username", label: "Username" },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" },
          },
          { type: "number", name: "year", label: "Year" },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
              { type: "string", name: "ogImage", label: "OG Image" },
              { type: "string", name: "siteUrl", label: "Site URL" },
              {
                type: "object",
                name: "author",
                label: "Author",
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "location", label: "Location" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Social",
            fields: [
              { type: "string", name: "github", label: "GitHub" },
              { type: "string", name: "linkedin", label: "LinkedIn" },
              { type: "string", name: "telegram", label: "Telegram" },
            ],
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Href" },
            ],
          },
        ],
      },
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        format: "json",
        match: { include: "home" },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "badge", label: "Badge" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "trustText", label: "Trust Text" },
              {
                type: "object",
                name: "ctas",
                label: "CTAs",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Href" },
                  {
                    type: "string",
                    name: "variant",
                    label: "Variant",
                    options: ["primary", "secondary", "red", "green"],
                  },
                  { type: "boolean", name: "external", label: "External" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About Page",
        path: "content/pages",
        format: "json",
        match: { include: "about" },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subheading", label: "Subheading" },
              { type: "string", name: "introduction", label: "Introduction", ui: { component: "textarea" } },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "experienceYears", label: "Experience Years" },
              { type: "string", name: "quote", label: "Quote" },
            ],
          },
          {
            type: "object",
            name: "careerJourney",
            label: "Career Journey",
            fields: [
              {
                type: "object",
                name: "timeline",
                label: "Timeline",
                list: true,
                fields: [
                  { type: "string", name: "period", label: "Period" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "company", label: "Company" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "technologies", label: "Technologies", list: true },
                  { type: "string", name: "status", label: "Status", options: ["current", "previous"] },
                ],
              },
            ],
          },
          { type: "image", name: "profileImage", label: "Profile Image" },
        ],
      },
      {
        name: "services",
        label: "Services Page",
        path: "content/pages",
        format: "json",
        match: { include: "services" },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "coreServices",
            label: "Core Services",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Features", list: true },
              { type: "string", name: "technologies", label: "Technologies", list: true },
              { type: "string", name: "startingPrice", label: "Starting Price" },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact Page",
        path: "content/pages",
        format: "json",
        match: { include: "contact" },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "CTA" },
            ],
          },
          {
            type: "object",
            name: "form",
            label: "Form",
            fields: [
              { type: "string", name: "successTitle", label: "Success Title" },
              { type: "string", name: "successDescription", label: "Success Description" },
              { type: "string", name: "messagePlaceholder", label: "Message Placeholder" },
            ],
          },
        ],
      },
      {
        name: "project",
        label: "Projects",
        path: "content/projects",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "headline", label: "Headline", ui: { component: "textarea" } },
          { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Image" },
          { type: "string", name: "date", label: "Date" },
          { type: "string", name: "status", label: "Status" },
          { type: "string", name: "technologies", label: "Technologies", list: true },
          { type: "string", name: "github", label: "GitHub URL" },
          { type: "string", name: "live", label: "Live URL" },
          { type: "boolean", name: "featured", label: "Featured" },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
