// src/lib/search/useLocaleSearch.ts
import { useMemo } from "react";
import Fuse from "fuse.js";
import { useTranslation } from "react-i18next";
import { flattenLocaleBundle, type SearchItem } from "../flattenLocale";

type Result = {
  item: SearchItem;
  score: number;
};

export function useLocaleSearch(dataOverride?: any) {
  const { i18n } = useTranslation();

  // 1) Get the raw resource bundle of the CURRENT language
  //    Namespace is usually "translation" by default; adjust if you use custom ns.
  const bundle = useMemo(() => {
    if (dataOverride) return dataOverride;
    try {
      return i18n.getResourceBundle(i18n.language, "translation");
    } catch {
      return {};
    }
  }, [i18n, i18n.language, dataOverride]);

  // 2) Flatten to a simple array
  const items = useMemo<SearchItem[]>(
    () => flattenLocaleBundle(bundle),
    [bundle]
  );

  // 3) Create Fuse instance
  const fuse = useMemo(() => {
    return new Fuse(items, {
      includeScore: true,
      threshold: 0.3, // 0.0 exact, 0.3 good fuzzy, 0.6 very fuzzy
      ignoreLocation: true,
      keys: [
        "title",
        "heading",
        "content",
        // You can add "section" if you want queries like "filters"
      ],
    });
  }, [items]);

  const search = (q: string): Result[] => {
    if (!q.trim()) return [];
    return fuse.search(q).map((r) => ({ item: r.item, score: r.score ?? 0 }));
  };

  return { search, items, lang: i18n.language };
}
