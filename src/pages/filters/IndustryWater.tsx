import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function IndustryWater() {
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
        1.{t("Menu.filters.items.industry_water.headingOne")}
      </h3>
      <p>{t("Menu.filters.items.industry_water.contentOne")}</p>
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        2.{t("Menu.filters.items.industry_water.headingTwo")}
      </h3>
      <p>{t("Menu.filters.items.industry_water.contentTwo")}</p>
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        3.{t("Menu.filters.items.industry_water.headingThree")}
      </h3>
      <p>{t("Menu.filters.items.industry_water.contentThree")}</p>
    </div>
  );
}

export default IndustryWater;
