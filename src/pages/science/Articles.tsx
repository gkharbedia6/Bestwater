import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

export interface iArticleItem {
  title: string;
  content: string;
}

function Articles() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const articlesByYears = t("Menu.science.items.articles.items", {
    returnObjects: true,
  });
  const location = useLocation();
  const year = location.pathname.split("/").pop();

  return (
    <div className="px-4 max-w-[70%] flex flex-col items-start justify-start gap-4">
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {t("Menu.science.items.articles.heading")}
      </h3>
      <ul className="flex flex-row items-start justify-center gap-2">
        {Object.entries(articlesByYears).map(
          ([key, item]: [key: string, item: iArticleItem]) => (
            <Link
              className={cn("text-sm ", {
                "pointer-events-none opacity-30": year === item.title,
                "hover:underline": year !== item.title,
              })}
              key={key}
              to={`${item.title}`}
            >
              {item.title}
            </Link>
          )
        )}
      </ul>
      <Outlet />
    </div>
  );
}

export default Articles;
