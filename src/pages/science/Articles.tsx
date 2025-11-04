import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

export interface iArticleItem {
  title: string;
  content: {
    lineOneBold?: string;
    lineOne?: string;
    lineTwoBold?: string;
    lineTwo?: string;
    lineThreeBold?: string;
    lineThree?: string;
    lineFourBold?: string;
    lineFour?: string;
  };
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
    <div className="px-4 w-full md:max-w-[70%] flex flex-col items-start justify-start gap-4">
      <h3
        className={cn("text-lg md:text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {t("Menu.science.items.articles.heading")}
      </h3>
      <h4 className="text-xs font-bold">
        {t("Menu.science.items.articles.click_year")}
      </h4>
      <ul className="md:flex md:flex-row md:items-start grid grid-rows-2 grid-cols-6 md:justify-center gap-2">
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
