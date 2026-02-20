# /seo-audit Command

Run Ubersuggest SEO tools (domain overview, site audit, keyword suggestions) and save results to `data/seo-insights.json` for manual review and site.json updates.

**Uses:** Ubersuggest MCP (domain_overview, site_audit, keyword_suggestions, keyword_research).

---

## Instructions

1. **Call Ubersuggest MCP tools** for `rohimdev.com`:
   - `ubersuggest_domain_overview` (domain: rohimdev.com)
   - `ubersuggest_site_audit` (url: https://rohimdev.com, pages_limit: 20)
   - `ubersuggest_keyword_suggestions` (keywords: fullstack developer, react developer, nextjs developer)

2. **Write results** to `data/seo-insights.json`:
   - Merge all tool outputs into a single JSON object
   - Include timestamp
   - Structure: `{ timestamp, domainOverview?, siteAudit?, keywordSuggestions? }`

3. **Report** to user:
   - Summary of findings (traffic, issues, keyword ideas)
   - Path to `data/seo-insights.json`
   - Suggest reviewing and updating `data/site.json` or page metadata based on insights

---

## Note

Ubersuggest MCP may require valid auth tokens. If tools return auth errors, inform the user to refresh tokens in the Ubersuggest MCP config.
