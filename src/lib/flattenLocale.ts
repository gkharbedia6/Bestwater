// src/lib/search/flattenLocale.ts
// Flattens your locale tree into an array of searchable items.
// Tailored to your schema (Menu.filters.items + a few others you might add later).

export type SearchItem = {
  id: string; // stable key
  url: string; // where to navigate
  title?: string; // shown in results
  heading?: string; // long heading (optional)
  content?: string; // long text (optional)
  section?: string; // e.g., "filters", "science", etc. (for grouping/labels)
};

export function flattenLocaleBundle(bundle: any): SearchItem[] {
  const items: SearchItem[] = [];

  // ----- Filters (Menu.filters.items) -----
  const filters = bundle?.Menu?.filters?.items ?? {};
  Object.entries<any>(filters).forEach(([key, value]) => {
    items.push({
      id: `filters:${key}`,
      url: value?.url ?? "/",
      title: value?.title,
      // collect any heading/content variants you use
      heading:
        value?.heading ??
        value?.headingOne ??
        value?.headingTwo ??
        value?.headingThree,
      content:
        value?.content ??
        value?.contentOne ??
        value?.contentTwo ??
        value?.contentThree ??
        "",
      section: "filters",
    });
  });

  // ----- Science > Articles (optional – extend as needed) -----
  const sciArticles = bundle?.Menu?.science?.items?.articles;
  if (sciArticles?.title) {
    items.push({
      id: `science:articles`,
      url: sciArticles?.url ?? "/",
      title: sciArticles?.title,
      heading: sciArticles?.heading,
      content: "", // you can concatenate year contents if you want deep search
      section: "science",
    });
  }

  // Add more sections the same way as needed…

  // De-duplicate by id (defensive)
  const seen = new Set<string>();
  return items.filter((it) => {
    if (seen.has(it.id)) return false;
    seen.add(it.id);
    return true;
  });
}
