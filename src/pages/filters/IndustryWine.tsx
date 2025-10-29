import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function IndustryWine() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");

  return (
    <div className="px-4 max-w-[70%] flex flex-col items-start justify-start gap-4">
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {t("Menu.filters.items.industry_wine.heading")}
      </h3>
      <p>{t("Menu.filters.items.industry_wine.content")}</p>
    </div>
  );
}

export default IndustryWine;
