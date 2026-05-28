import type { ProjectContent } from "@/types/content";

const MONTH_INDEX: Record<string, number> = {
  january: 1,
  jan: 1,
  february: 2,
  feb: 2,
  march: 3,
  mar: 3,
  april: 4,
  apr: 4,
  may: 5,
  june: 6,
  jun: 6,
  july: 7,
  jul: 7,
  august: 8,
  aug: 8,
  september: 9,
  sep: 9,
  sept: 9,
  october: 10,
  oct: 10,
  november: 11,
  nov: 11,
  december: 12,
  dec: 12,
};

/** Sortable key: YYYYMM (higher = newer). Year-only dates sort after December that year. */
export function parseProjectDateKey(date: string): number {
  const raw = date.trim().toLowerCase();
  if (!raw) return 0;

  const yearOnly = /^(\d{4})$/.exec(raw);
  if (yearOnly) {
    return Number(yearOnly[1]) * 100 + 12;
  }

  const monthYear = /^([a-z]+)\s+(\d{4})$/.exec(raw);
  if (monthYear) {
    const month = MONTH_INDEX[monthYear[1]] ?? 6;
    return Number(monthYear[2]) * 100 + month;
  }

  const yearMonth = /^(\d{4})-(\d{2})/.exec(raw);
  if (yearMonth) {
    return Number(yearMonth[1]) * 100 + Number(yearMonth[2]);
  }

  const parsed = Date.parse(date);
  if (!Number.isNaN(parsed)) {
    const d = new Date(parsed);
    return d.getFullYear() * 100 + (d.getMonth() + 1);
  }

  const yearInText = /(\d{4})/.exec(raw);
  if (yearInText) {
    return Number(yearInText[1]) * 100;
  }

  return 0;
}

export type ProjectDateSort = "newest" | "oldest";

function compareProjects(
  a: ProjectContent,
  b: ProjectContent,
  dateSort: ProjectDateSort,
): number {
  const dateA = parseProjectDateKey(a.date);
  const dateB = parseProjectDateKey(b.date);

  if (dateA !== dateB) {
    return dateSort === "newest" ? dateB - dateA : dateA - dateB;
  }

  if (a.order !== b.order) {
    return a.order - b.order;
  }

  return a.title.localeCompare(b.title, "en");
}

export function sortProjects(
  projects: ProjectContent[],
  dateSort: ProjectDateSort = "newest",
): ProjectContent[] {
  return [...projects].sort((a, b) => compareProjects(a, b, dateSort));
}
