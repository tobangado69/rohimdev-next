import { defineConfig, LocalAuthProvider } from "tinacms";
import { pasteImageUi } from "./fields";

// Tina CLI loads `.env` only (not `.env.local`). Without a Cloud client ID, stay local.
const isLocal =
  process.env.TINA_PUBLIC_IS_LOCAL === "true" ||
  !process.env.NEXT_PUBLIC_TINA_CLIENT_ID;

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: isLocal ? null : (process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null),
  token: isLocal ? null : (process.env.TINA_TOKEN ?? null),
  contentApiUrlOverride: "/api/tina/gql",
  authProvider: isLocal ? new LocalAuthProvider() : undefined,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
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
          { type: "image", name: "profileImage", label: "Profile Image", ui: pasteImageUi() },
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
          {
            type: "image",
            name: "images",
            label: "Project Images",
            list: true,
            ui: pasteImageUi({
              description:
                "Upload or paste images (⌘V / Ctrl+V in the box above). First image = Work page cover; rest = detail gallery.",
            }),
          },
          { type: "string", name: "date", label: "Date" },
          { type: "string", name: "status", label: "Status" },
          { type: "string", name: "technologies", label: "Technologies", list: true },
          { type: "string", name: "github", label: "GitHub URL" },
          { type: "string", name: "live", label: "Live URL" },
          { type: "boolean", name: "featured", label: "Featured" },
          {
            type: "string",
            name: "projectType",
            label: "Project Type",
            options: [
              { value: "production", label: "Production" },
              { value: "study", label: "Study" },
            ],
            ui: {
              description:
                "Production = real shipped or client work. Study = learning, research exercise, or portfolio clone built for practice.",
            },
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
              { type: "image", name: "ogImage", label: "OG Image", ui: pasteImageUi() },
            ],
          },
          {
            type: "object",
            name: "detail",
            label: "Project Detail",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Showcase",
                fields: [
                  { type: "string", name: "eyebrow", label: "Eyebrow" },
                  { type: "string", name: "title", label: "Title Override" },
                  { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
                  { type: "image", name: "primaryImage", label: "Primary Image", ui: pasteImageUi() },
                  {
                    type: "image",
                    name: "supportingImages",
                    label: "Supporting Images",
                    list: true,
                    ui: pasteImageUi(),
                  },
                  {
                    type: "object",
                    name: "primaryCta",
                    label: "Primary CTA",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Href" },
                      { type: "string", name: "variant", label: "Variant", options: ["primary", "secondary", "red", "green"] },
                      { type: "boolean", name: "external", label: "External" },
                    ],
                  },
                  {
                    type: "object",
                    name: "secondaryCta",
                    label: "Secondary CTA",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Href" },
                      { type: "string", name: "variant", label: "Variant", options: ["primary", "secondary", "red", "green"] },
                      { type: "boolean", name: "external", label: "External" },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "metadata",
                label: "Metadata",
                fields: [
                  { type: "string", name: "role", label: "Role" },
                  { type: "string", name: "client", label: "Client / Project Type" },
                  { type: "string", name: "timeline", label: "Timeline" },
                  { type: "string", name: "platform", label: "Platform" },
                  { type: "string", name: "year", label: "Year" },
                  { type: "string", name: "collaboration", label: "Collaboration" },
                ],
              },
              {
                type: "object",
                name: "designDirection",
                label: "Design Direction",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true },
                ],
              },
              {
                type: "object",
                name: "overview",
                label: "Overview",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true },
                ],
              },
              {
                type: "object",
                name: "challenge",
                label: "Challenge",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true },
                ],
              },
              {
                type: "object",
                name: "solution",
                label: "Solution",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true },
                ],
              },
              {
                type: "object",
                name: "gallery",
                label: "Gallery",
                list: true,
                fields: [
                  { type: "image", name: "image", label: "Image", ui: pasteImageUi() },
                  { type: "string", name: "alt", label: "Alt Text" },
                  { type: "string", name: "caption", label: "Caption" },
                  { type: "string", name: "category", label: "Category" },
                ],
              },
              {
                type: "object",
                name: "techStack",
                label: "Tech Stack Groups",
                list: true,
                fields: [
                  { type: "string", name: "category", label: "Category" },
                  { type: "string", name: "tools", label: "Tools", list: true },
                ],
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "impact", label: "Impact" },
                  { type: "string", name: "icon", label: "Icon Key" },
                ],
              },
              {
                type: "object",
                name: "process",
                label: "Process",
                list: true,
                fields: [
                  { type: "string", name: "phase", label: "Phase" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "outputs", label: "Outputs", list: true },
                ],
              },
              {
                type: "object",
                name: "deliverables",
                label: "Deliverables",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "link", label: "Link" },
                ],
              },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
              {
                type: "object",
                name: "testimonial",
                label: "Testimonial",
                fields: [
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  { type: "string", name: "company", label: "Company" },
                  { type: "image", name: "avatar", label: "Avatar", ui: pasteImageUi() },
                ],
              },
              {
                type: "object",
                name: "conversion",
                label: "Conversion",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  {
                    type: "object",
                    name: "ctas",
                    label: "CTAs",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Href" },
                      { type: "string", name: "variant", label: "Variant", options: ["primary", "secondary", "red", "green"] },
                      { type: "boolean", name: "external", label: "External" },
                    ],
                  },
                ],
              },
              {
                type: "object",
                name: "pricing",
                label: "Pricing",
                fields: [
                  { type: "string", name: "model", label: "Model" },
                  { type: "string", name: "startingAt", label: "Starting At" },
                  { type: "string", name: "included", label: "Included", list: true },
                  { type: "string", name: "note", label: "Note", ui: { component: "textarea" } },
                ],
              },
              {
                type: "object",
                name: "socialProof",
                label: "Social Proof",
                fields: [
                  { type: "string", name: "badges", label: "Badges", list: true },
                  {
                    type: "object",
                    name: "links",
                    label: "Links",
                    list: true,
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Href" },
                    ],
                  },
                  { type: "string", name: "repositoryStats", label: "Repository Stats", list: true },
                  { type: "string", name: "launchNotes", label: "Launch Notes", ui: { component: "textarea" } },
                ],
              },
              {
                type: "object",
                name: "responsiveUx",
                label: "Responsive UX",
                fields: [
                  { type: "string", name: "breakpoints", label: "Breakpoints", list: true },
                  { type: "string", name: "interactionNotes", label: "Interaction Notes", list: true },
                  { type: "string", name: "accessibilityNotes", label: "Accessibility Notes", list: true },
                ],
              },
              {
                type: "object",
                name: "seoPerformance",
                label: "SEO Performance",
                fields: [
                  { type: "string", name: "performanceTargets", label: "Performance Targets", list: true },
                  { type: "string", name: "seoNotes", label: "SEO Notes", list: true },
                  { type: "string", name: "technicalChecks", label: "Technical Checks", list: true },
                ],
              },
              {
                type: "object",
                name: "infrastructure",
                label: "Infrastructure",
                fields: [
                  { type: "string", name: "hosting", label: "Hosting" },
                  { type: "string", name: "backend", label: "Backend" },
                  { type: "string", name: "database", label: "Database" },
                  { type: "string", name: "storage", label: "Storage" },
                  { type: "string", name: "cicd", label: "CI/CD" },
                  { type: "string", name: "monitoring", label: "Monitoring" },
                ],
              },
            ],
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
