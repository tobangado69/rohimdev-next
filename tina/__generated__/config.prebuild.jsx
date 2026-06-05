// tina/config.ts
import { defineConfig, LocalAuthProvider } from "tinacms";

// tina/components/paste-image-field.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageField, wrapFieldsWithMeta } from "tinacms";
var MEDIA_UPLOAD_URL = "/api/cloudinary/media";
async function uploadImageFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("directory", "");
  formData.append("filename", file.name || `paste-${Date.now()}.png`);
  const response = await fetch(MEDIA_UPLOAD_URL, {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message ?? `Upload failed (${response.status})`);
  }
  const result = await response.json();
  return result.secure_url;
}
function fileFromClipboard(event) {
  const items = event.clipboardData?.items;
  if (!items) return null;
  for (const item of items) {
    if (item.type.startsWith("image/")) {
      return item.getAsFile();
    }
  }
  return null;
}
function PasteImageFieldInner(props) {
  const { field, input } = props;
  const isList = Boolean(field.list);
  const zoneRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [pasteError, setPasteError] = useState(null);
  const applyImageUrl = useCallback(
    (url) => {
      if (isList) {
        const current = Array.isArray(input.value) ? input.value.filter((v) => typeof v === "string" && v.length > 0) : input.value ? [String(input.value)] : [];
        input.onChange([...current, url]);
        return;
      }
      input.onChange(url);
    },
    [input, isList]
  );
  const handlePaste = useCallback(
    async (event) => {
      const file = fileFromClipboard(event);
      if (!file) return;
      event.preventDefault();
      event.stopPropagation();
      setUploading(true);
      setPasteError(null);
      try {
        const url = await uploadImageFile(file);
        applyImageUrl(url);
      } catch (error) {
        setPasteError(error instanceof Error ? error.message : "Paste upload failed");
      } finally {
        setUploading(false);
      }
    },
    [applyImageUrl]
  );
  useEffect(() => {
    const node = zoneRef.current;
    if (!node) return;
    const onPaste = (event) => {
      void handlePaste(event);
    };
    node.addEventListener("paste", onPaste);
    return () => node.removeEventListener("paste", onPaste);
  }, [handlePaste]);
  return React.createElement("div", { className: "space-y-3" }, React.createElement(
    "div",
    {
      ref: zoneRef,
      tabIndex: 0,
      role: "group",
      "aria-label": "Paste image from clipboard",
      className: "rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-600 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    },
    uploading ? React.createElement("span", null, "Uploading pasted image\u2026") : React.createElement("span", null, "Click here, then press ", React.createElement("kbd", { className: "rounded border px-1 text-xs" }, "\u2318V"), " or", " ", React.createElement("kbd", { className: "rounded border px-1 text-xs" }, "Ctrl+V"), " to paste a screenshot or copied image.", isList ? " The image is appended to the list below." : ""),
    pasteError ? React.createElement("p", { className: "mt-2 text-sm text-red-600", role: "alert" }, pasteError) : null
  ), React.createElement(ImageField, { ...props }));
}
var PasteImageField = wrapFieldsWithMeta(PasteImageFieldInner);

// tina/fields.ts
function pasteImageUi(options) {
  return {
    component: PasteImageField,
    ...options?.description ? { description: options.description } : {}
  };
}

// tina/config.ts
var isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true" || !process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: isLocal ? null : process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: isLocal ? null : process.env.TINA_TOKEN ?? null,
  contentApiUrlOverride: "/api/tina/gql",
  authProvider: isLocal ? new LocalAuthProvider() : void 0,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    }
  },
  schema: {
    collections: [
      {
        name: "site",
        label: "Site Settings",
        path: "content/pages",
        format: "json",
        match: {
          include: "site"
        },
        fields: [
          { type: "string", name: "name", label: "Site Name", isTitle: true, required: true },
          { type: "string", name: "tagline", label: "Tagline" },
          { type: "string", name: "username", label: "Username" },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: { component: "textarea" }
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
                  { type: "string", name: "location", label: "Location" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "social",
            label: "Social",
            fields: [
              { type: "string", name: "github", label: "GitHub" },
              { type: "string", name: "linkedin", label: "LinkedIn" },
              { type: "string", name: "telegram", label: "Telegram" }
            ]
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "href", label: "Href" }
            ]
          }
        ]
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
              { type: "string", name: "keywords", label: "Keywords", list: true }
            ]
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
                    options: ["primary", "secondary", "red", "green"]
                  },
                  { type: "boolean", name: "external", label: "External" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "stats",
            label: "Stats",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "description", label: "Description" }
            ]
          }
        ]
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
              { type: "string", name: "keywords", label: "Keywords", list: true }
            ]
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
              { type: "string", name: "quote", label: "Quote" }
            ]
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
                  { type: "string", name: "bullets", label: "Bullets", list: true },
                  { type: "string", name: "technologies", label: "Technologies", list: true },
                  { type: "string", name: "status", label: "Status", options: ["current", "previous"] }
                ]
              }
            ]
          },
          { type: "image", name: "profileImage", label: "Profile Image", ui: pasteImageUi() }
        ]
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
              { type: "string", name: "keywords", label: "Keywords", list: true }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
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
              { type: "string", name: "startingPrice", label: "Starting Price" }
            ]
          }
        ]
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
              { type: "string", name: "keywords", label: "Keywords", list: true }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "CTA" }
            ]
          },
          {
            type: "object",
            name: "form",
            label: "Form",
            fields: [
              { type: "string", name: "successTitle", label: "Success Title" },
              { type: "string", name: "successDescription", label: "Success Description" },
              { type: "string", name: "messagePlaceholder", label: "Message Placeholder" }
            ]
          }
        ]
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
              description: "Upload or paste images (\u2318V / Ctrl+V in the box above). First image = Work page cover; rest = detail gallery."
            })
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            ui: {
              description: 'Project date for sorting on /work (e.g. "2026", "April 2024"). Newest/oldest toggle on the work page uses this field.'
            }
          },
          { type: "string", name: "status", label: "Status" },
          { type: "string", name: "technologies", label: "Technologies", list: true },
          { type: "string", name: "github", label: "GitHub URL" },
          { type: "string", name: "live", label: "Live URL" },
          { type: "boolean", name: "featured", label: "Featured" },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            ui: {
              description: "Tiebreaker when two projects share the same date (lower = higher). Main sort is by Date + Newest/Oldest on /work."
            }
          },
          {
            type: "string",
            name: "projectType",
            label: "Project Type",
            options: [
              { value: "production", label: "Production" },
              { value: "study", label: "Study" }
            ],
            ui: {
              description: "Production = real shipped or client work. Study = learning, research exercise, or portfolio clone built for practice."
            }
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "keywords", label: "Keywords", list: true },
              { type: "image", name: "ogImage", label: "OG Image", ui: pasteImageUi() }
            ]
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
                    ui: pasteImageUi()
                  },
                  {
                    type: "object",
                    name: "primaryCta",
                    label: "Primary CTA",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Href" },
                      { type: "string", name: "variant", label: "Variant", options: ["primary", "secondary", "red", "green"] },
                      { type: "boolean", name: "external", label: "External" }
                    ]
                  },
                  {
                    type: "object",
                    name: "secondaryCta",
                    label: "Secondary CTA",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "href", label: "Href" },
                      { type: "string", name: "variant", label: "Variant", options: ["primary", "secondary", "red", "green"] },
                      { type: "boolean", name: "external", label: "External" }
                    ]
                  }
                ]
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
                  { type: "string", name: "collaboration", label: "Collaboration" }
                ]
              },
              {
                type: "object",
                name: "designDirection",
                label: "Design Direction",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true }
                ]
              },
              {
                type: "object",
                name: "overview",
                label: "Overview",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true }
                ]
              },
              {
                type: "object",
                name: "challenge",
                label: "Challenge",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true }
                ]
              },
              {
                type: "object",
                name: "solution",
                label: "Solution",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                  { type: "string", name: "bullets", label: "Bullets", list: true }
                ]
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
                  { type: "string", name: "category", label: "Category" }
                ]
              },
              {
                type: "object",
                name: "techStack",
                label: "Tech Stack Groups",
                list: true,
                fields: [
                  { type: "string", name: "category", label: "Category" },
                  { type: "string", name: "tools", label: "Tools", list: true }
                ]
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
                  { type: "string", name: "icon", label: "Icon Key" }
                ]
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
                  { type: "string", name: "outputs", label: "Outputs", list: true }
                ]
              },
              {
                type: "object",
                name: "deliverables",
                label: "Deliverables",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "link", label: "Link" }
                ]
              },
              {
                type: "object",
                name: "metrics",
                label: "Metrics",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "description", label: "Description" }
                ]
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
                  { type: "image", name: "avatar", label: "Avatar", ui: pasteImageUi() }
                ]
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
                      { type: "boolean", name: "external", label: "External" }
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "pricing",
                label: "Pricing",
                fields: [
                  { type: "string", name: "model", label: "Model" },
                  { type: "string", name: "startingAt", label: "Starting At" },
                  { type: "string", name: "included", label: "Included", list: true },
                  { type: "string", name: "note", label: "Note", ui: { component: "textarea" } }
                ]
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
                      { type: "string", name: "href", label: "Href" }
                    ]
                  },
                  { type: "string", name: "repositoryStats", label: "Repository Stats", list: true },
                  { type: "string", name: "launchNotes", label: "Launch Notes", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "responsiveUx",
                label: "Responsive UX",
                fields: [
                  { type: "string", name: "breakpoints", label: "Breakpoints", list: true },
                  { type: "string", name: "interactionNotes", label: "Interaction Notes", list: true },
                  { type: "string", name: "accessibilityNotes", label: "Accessibility Notes", list: true }
                ]
              },
              {
                type: "object",
                name: "seoPerformance",
                label: "SEO Performance",
                fields: [
                  { type: "string", name: "performanceTargets", label: "Performance Targets", list: true },
                  { type: "string", name: "seoNotes", label: "SEO Notes", list: true },
                  { type: "string", name: "technicalChecks", label: "Technical Checks", list: true }
                ]
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
                  { type: "string", name: "monitoring", label: "Monitoring" }
                ]
              }
            ]
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
