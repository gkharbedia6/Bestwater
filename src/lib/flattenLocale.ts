// src/lib/search/flattenLocale.ts

export type SearchItem = {
  id: string;
  url: string;
  title?: string;
  heading?: string;
  content?: string;
  section?: string;
};

// ----------------- Helpers -----------------
function isString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function stripTags(s: string): string {
  return s.replace(/<[^>]*>/g, " ");
}

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

function join(...parts: Array<string | undefined>): string | undefined {
  const str = parts.filter(isString).map(stripTags).join(" ");
  return str ? normalize(str) : undefined;
}

function joinObjectContent(contentObj: any): string | undefined {
  if (!contentObj || typeof contentObj !== "object") return undefined;
  const allValues = Object.values(contentObj)
    .filter(isString)
    .map(stripTags)
    .join(" ");
  return allValues ? normalize(allValues) : undefined;
}

function get(obj: any, path: string, fallback?: any) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj) ?? fallback;
}

// ----------------- Main -----------------
export function flattenLocaleBundle(bundle: any): SearchItem[] {
  const items: SearchItem[] = [];

  // ===== 1) FILTERS =====
  const filtersItems = get(bundle, "Menu.filters.items", {});
  for (const [key, node] of Object.entries<any>(filtersItems)) {
    items.push({
      id: `filters:${key}`,
      url: node?.url ?? "/",
      title: isString(node?.title) ? normalize(node.title) : undefined,
      heading: join(
        node?.heading,
        node?.headingOne,
        node?.headingTwo,
        node?.headingThree
      ),
      content: join(
        node?.content,
        node?.contentOne,
        node?.contentTwo,
        node?.contentThree
      ),
      section: "filters",
    });
  }

  // ===== 2) SCIENCE ARTICLES =====
  const articlesBaseUrl = get(bundle, "Menu.science.items.articles.url");
  const articleYears = get(bundle, "Menu.science.items.articles.items", {});

  for (const [yearKey, yearNode] of Object.entries<any>(articleYears)) {
    const yearUrl = `${articlesBaseUrl}/${yearKey}`;
    const yearItems = yearNode?.items ?? {};

    for (const [articleKey, articleData] of Object.entries<any>(yearItems)) {
      const contentText = joinObjectContent(articleData?.content);
      items.push({
        id: `articles:${yearKey}:${articleKey}`,
        url: yearUrl,
        title: isString(articleData?.title)
          ? normalize(articleData.title)
          : undefined,
        content: contentText,
        section: `articles-${yearKey}`,
      });
    }
  }

  // ===== 3) SCIENCE PROJECTS =====
  const scienceProjects = get(
    bundle,
    "Menu.science.items.science_projects",
    {}
  );
  if (scienceProjects && scienceProjects.content) {
    const baseUrl = scienceProjects?.url ?? "/science/science-projects";

    Object.entries<any>(scienceProjects.content).forEach(([key, value]) => {
      items.push({
        id: `science_projects:${key}`,
        url: baseUrl,
        title: isString(scienceProjects.title)
          ? normalize(scienceProjects.title)
          : "სამეცნიერო პროექტები",
        heading: isString(scienceProjects.heading)
          ? normalize(scienceProjects.heading)
          : undefined,
        content: isString(value) ? normalize(value) : undefined,
        section: "science_projects",
      });
    });
  }

  // ===== 4) SCIENCE TEXTBOOKS =====
  const textbooks = get(bundle, "Menu.science.items.textbooks", {});
  if (Array.isArray(textbooks?.content)) {
    const baseUrl = textbooks?.url ?? "/science/textbooks";
    textbooks.content.forEach((book: any, idx: number) => {
      items.push({
        id: `textbooks:${book.number ?? idx + 1}`,
        url: baseUrl,
        title: join(book?.author, book?.textbook),
        heading: isString(textbooks?.heading)
          ? normalize(textbooks.heading)
          : undefined,
        content: join(book?.place, book?.textbook, book?.author),
        section: "textbooks",
      });
    });
  }

  // ===== 5) SCIENCE PATENTS =====
  const patents = get(bundle, "Menu.science.items.patents", {});
  if (patents?.content) {
    const baseUrl = patents?.url ?? "/science/patents";
    Object.entries<any>(patents.content).forEach(([key, value]) => {
      items.push({
        id: `patents:${key}`,
        url: baseUrl,
        title: isString(patents?.title)
          ? normalize(patents.title)
          : "პატენტები",
        heading: isString(patents?.heading)
          ? normalize(patents.heading)
          : undefined,
        content: isString(value) ? normalize(value) : undefined,
        section: "patents",
      });
    });
  }

  // ===== 6) SCIENCE CONFERENCES =====
  const conferences = get(bundle, "Menu.science.items.conferences", {});
  if (conferences?.content) {
    const baseUrl = conferences?.url ?? "/science/conferences";
    Object.entries<any>(conferences.content).forEach(([key, value]) => {
      items.push({
        id: `conferences:${key}`,
        url: baseUrl,
        title: isString(conferences?.title)
          ? normalize(conferences.title)
          : "კონფერენციები",
        heading: isString(conferences?.heading)
          ? normalize(conferences.heading)
          : undefined,
        content: isString(value) ? normalize(value) : undefined,
        section: "conferences",
      });
    });
  }

  // ===== 7) TECHNOLOGY =====
  const technologyItems = get(bundle, "Menu.technology.items", {});
  Object.entries<any>(technologyItems).forEach(([key, node]) => {
    items.push({
      id: `technology:${key}`,
      url: node?.url ?? "/technology",
      title: isString(node?.title) ? normalize(node.title) : undefined,
      heading: isString(node?.heading) ? normalize(node.heading) : undefined,
      content: isString(node?.content) ? normalize(node.content) : undefined,
      section: "technology",
    });
  });

  // ===== 8) HISTORY =====
  const history = get(bundle, "Menu.history", {});
  if (history?.items) {
    const baseUrl = history?.url ?? "/history";

    Object.entries<any>(history.items).forEach(([year, events]) => {
      // Each year has an array of entries (content, image, heading)
      events.forEach((entry: any, idx: number) => {
        if (entry.type === "content" && Array.isArray(entry.content)) {
          entry.content.forEach((line: string, i: number) => {
            items.push({
              id: `history:${year}:${idx}:${i}`,
              url: baseUrl,
              title: `${year} ${normalize(history.title ?? "ისტორია")}`,
              heading: isString(history.heading)
                ? normalize(history.heading)
                : undefined,
              content: normalize(line),
              section: "history",
            });
          });
        } else if (entry.type === "heading") {
          items.push({
            id: `history:${year}:${idx}:heading`,
            url: baseUrl,
            title: `${year} ${normalize(entry.content)}`,
            heading: isString(entry.content)
              ? normalize(entry.content)
              : undefined,
            section: "history",
          });
        }
      });
    });
  }

  // ===== 9) GALLERY =====
  const galleryItems = get(bundle, "Menu.gallery.items", {});
  Object.entries<any>(galleryItems).forEach(([key, node]) => {
    items.push({
      id: `gallery:${key}`,
      url: "/gallery",
      title: isString(node?.title) ? normalize(node.title) : undefined,
      heading: "ვიდეო",
      // content: `${node?.["video-url"] ?? ""} ${node?.["poster-url"] ?? ""}`,
      section: "gallery",
    });
  });

  // ===== Deduplicate =====
  const seen = new Set<string>();
  return items.filter((it) => {
    if (seen.has(it.id)) return false;
    seen.add(it.id);
    return true;
  });
}
