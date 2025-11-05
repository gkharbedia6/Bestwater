// src/components/SearchBar.tsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"; // adjust paths
import { Search } from "lucide-react";
import { useLocaleSearch } from "@/lib/hooks/useLocaleSearch";

export default function SearchBar() {
  const { t } = useTranslation();
  const { search } = useLocaleSearch();

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof search>>([]);

  // debounce
  const debouncedQuery = useDebounced(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      setOpen(false);
      return;
    }

    // call once per query
    setResults(search(debouncedQuery));
    setOpen(true);
  }, [debouncedQuery]); // remove `search` here

  return (
    <div className="relative w-full xl:w-fit">
      <div className="flex items-center w-full justify-center md:justify-end xl:w-fit">
        <InputGroup className="w-[300px]">
          <InputGroupInput
            placeholder={t("Search.title")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length && setOpen(true)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          {results.length !== 0 && (
            <InputGroupAddon align="inline-end">
              {results.length} {t("Search.description")}
            </InputGroupAddon>
          )}
        </InputGroup>
      </div>

      {open && results.length > 0 && (
        <div
          className="absolute right-0 mt-2 w-[500px] max-h-[60vh] overflow-auto rounded-xl border bg-background shadow-lg z-50"
          onMouseDown={(e) => e.preventDefault()} // keep focus
        >
          <ul className="divide-y">
            {results.map(({ item }, idx) => {
              return (
                <li key={item.id + idx} className="p-3 hover:bg-accent/40">
                  <Link
                    to={item.url}
                    className="block"
                    onClick={() => setOpen(false)}
                  >
                    <div className="text-sm font-medium">{item.title}</div>
                    {item.heading && (
                      <div className="text-xs text-muted-foreground line-clamp-2">
                        {item.heading}
                      </div>
                    )}
                    {item.content && (
                      <div className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {item.content}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

// tiny debounce hook
function useDebounced<T>(value: T, delay = 300) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return v;
}
