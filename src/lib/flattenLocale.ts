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
  const scienceArticlesBaseUrl = bundle?.Menu?.science?.items.articles.url;
  const scienceArticles = bundle?.Menu?.science?.items.articles.items;

  Object.entries<any>(scienceArticles).forEach(([key, value]) => {
    const articleUrl = `${scienceArticlesBaseUrl}/${key}`;
    Object.entries<any>(value.items).forEach(([, value]) => {
      items.push({
        id: `science:articles:${key}`,
        url: articleUrl ?? "/",
        title: value?.title,
        // heading: value.content.lineOne,
        content: value.content.lineOne + value.content.lineTwo,
        section: "science",
      });
    });
  });

  // console.log(items);

  // De-duplicate by id (defensive)
  const seen = new Set<string>();
  return items.filter((it) => {
    if (seen.has(it.id)) return false;
    seen.add(it.id);
    return true;
  });
}
