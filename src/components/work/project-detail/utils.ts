export function hasItems<T>(items?: T[]): items is T[] {
  return Array.isArray(items) && items.length > 0;
}

export function hasTestimonial(
  testimonial?: { quote?: string; name?: string },
): boolean {
  return Boolean(
    testimonial?.quote?.trim() && testimonial?.name?.trim(),
  );
}
