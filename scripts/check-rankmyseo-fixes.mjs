#!/usr/bin/env node
/**
 * Behavior checks for RankMySEO-related contact/email/work-title fixes.
 *
 * Seam: content documents + UI source that emit HTML (no browser / no test runner).
 * - Contact main-section word count + page wiring
 * - Plain-text email (no mailto: / Cloudflare email-protection) on contact, privacy, terms
 * - Work page SEO base title length
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const EMAIL = "rohimjoy70@gmail.com";
const SITE_SUFFIX = " | rohimdev.com";
const WORK_TITLE_EXACT = "Selected Work — Abdul Rohim, Developer";

let failed = 0;

function ok(label) {
  console.log(`PASS  ${label}`);
}

function fail(label, detail) {
  failed += 1;
  console.error(`FAIL  ${label}`);
  if (detail) console.error(`      ${detail}`);
}

function read(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    fail(`file exists: ${rel}`, `missing ${path}`);
    return null;
  }
  return readFileSync(path, "utf8");
}

function wordCount(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

// --- 1) Contact main section ---
console.log("\n== Contact main section ==");
const contactJsonRaw = read("content/pages/contact.json");
const contactPageSrc = read("src/app/contact/page.tsx");
const contactTypesSrc = read("src/types/content.ts");

if (contactJsonRaw) {
  let contact;
  try {
    contact = JSON.parse(contactJsonRaw);
  } catch (e) {
    fail("contact.json parses", String(e));
    contact = null;
  }

  if (contact) {
    const main = contact.mainSection;
    if (!main || typeof main !== "object") {
      fail(
        "contact.json has mainSection",
        "expected mainSection: { heading, paragraphs }",
      );
    } else {
      const heading = typeof main.heading === "string" ? main.heading : "";
      const paragraphs = Array.isArray(main.paragraphs)
        ? main.paragraphs.filter((p) => typeof p === "string")
        : [];
      const body = [heading, ...paragraphs].join(" ");
      const words = wordCount(body);

      if (!heading.trim()) {
        fail("mainSection.heading present", "heading is empty");
      } else {
        ok(`mainSection.heading: "${heading.slice(0, 60)}${heading.length > 60 ? "…" : ""}"`);
      }

      if (paragraphs.length < 1) {
        fail("mainSection.paragraphs present", "need at least one paragraph");
      } else {
        ok(`mainSection.paragraphs: ${paragraphs.length}`);
      }

      if (words >= 400) {
        ok(`mainSection word count >= 400 (${words})`);
      } else {
        fail(`mainSection word count >= 400`, `got ${words}`);
      }

      const lower = body.toLowerCase();
      const topics = [
        {
          name: "what he builds",
          needles: ["full-stack", "api", "rohimdev.com"],
        },
        {
          name: "how engagement starts",
          needles: ["message", "form", "scope"],
        },
        {
          name: "first message should include",
          needles: ["timeline", "constraint"],
        },
      ];
      for (const topic of topics) {
        const hit = topic.needles.every((n) => lower.includes(n.toLowerCase()));
        if (hit) ok(`copy covers: ${topic.name}`);
        else
          fail(
            `copy covers: ${topic.name}`,
            `expected all of: ${topic.needles.join(", ")}`,
          );
      }
    }
  }
}

if (contactPageSrc) {
  if (
    contactPageSrc.includes("mainSection") &&
    (contactPageSrc.includes("contact.mainSection") ||
      contactPageSrc.includes("mainSection.heading") ||
      contactPageSrc.includes("mainSection?.") ||
      /mainSection/.test(contactPageSrc))
  ) {
    ok("contact page references mainSection");
  } else {
    fail(
      "contact page references mainSection",
      "src/app/contact/page.tsx must render contact.mainSection (not content-only)",
    );
  }
}

if (contactTypesSrc) {
  if (/mainSection/.test(contactTypesSrc)) {
    ok("ContactContent type includes mainSection");
  } else {
    fail(
      "ContactContent type includes mainSection",
      "src/types/content.ts must declare mainSection",
    );
  }
}

const tinaConfig = read("tina/config.ts");
if (tinaConfig) {
  // Contact collection should declare mainSection field
  const contactBlock = tinaConfig.slice(
    tinaConfig.indexOf('name: "contact"'),
    tinaConfig.indexOf('name: "project"'),
  );
  if (contactBlock.includes('name: "mainSection"')) {
    ok("Tina contact schema includes mainSection");
  } else {
    fail(
      "Tina contact schema includes mainSection",
      'tina/config.ts contact collection needs name: "mainSection"',
    );
  }
}

// --- 2) Email as plain text ---
console.log("\n== Email as plain text ==");
const uiPaths = [
  "src/components/contact/founder-section.tsx",
  "src/components/legal/legal-content.tsx",
  "src/app/contact/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
];

const forbidden = ["mailto:", "cdn-cgi/l/email-protection"];
let anyMailto = false;

for (const rel of uiPaths) {
  const src = read(rel);
  if (src == null) continue;
  for (const token of forbidden) {
    if (src.includes(token)) {
      anyMailto = true;
      fail(`${rel} has no ${token}`, `found "${token}"`);
    }
  }
}

if (!anyMailto) {
  ok("UI sources for contact/privacy/terms have no mailto: or Cloudflare email-protection");
}

// Email must still appear in content/constants those pages render
const emailSources = [
  "src/lib/constants.ts",
  "data/privacy.json",
  "data/terms.json",
];
for (const rel of emailSources) {
  const src = read(rel);
  if (src == null) continue;
  if (src.includes(EMAIL)) ok(`${rel} contains ${EMAIL}`);
  else fail(`${rel} contains ${EMAIL}`);
}

console.log(
  "Note: source-level check of components + content (no full Next render).",
);

// --- 3) Work page title ---
console.log("\n== Work page title ==");
const siteJsonRaw = read("data/site.json");
if (siteJsonRaw) {
  let site;
  try {
    site = JSON.parse(siteJsonRaw);
  } catch (e) {
    fail("data/site.json parses", String(e));
    site = null;
  }
  if (site) {
    const base = site?.seo?.pages?.work?.title;
    if (typeof base !== "string") {
      fail("seo.pages.work.title is a string");
    } else {
      const full = `${base}${SITE_SUFFIX}`;
      if (base === WORK_TITLE_EXACT) {
        ok(`work title exact match (${base.length} chars)`);
      } else {
        fail(
          "work title exact match",
          `expected "${WORK_TITLE_EXACT}", got "${base}"`,
        );
      }
      if (base.startsWith("Selected Work")) {
        ok('work title starts with "Selected Work"');
      } else {
        fail('work title starts with "Selected Work"');
      }
      if (base.length >= 35 && base.length <= 45) {
        ok(`base title length 35–45 (${base.length})`);
      } else {
        fail(`base title length 35–45`, `got ${base.length}`);
      }
      if (full.length >= 50 && full.length <= 60) {
        ok(`full title length 50–60 (${full.length}): "${full}"`);
      } else {
        fail(`full title length 50–60`, `got ${full.length}: "${full}"`);
      }
    }
  }
}

// --- Summary ---
console.log("");
if (failed > 0) {
  console.error(`Result: FAIL (${failed} check(s) failed)`);
  process.exit(1);
}
console.log("Result: PASS");
process.exit(0);
