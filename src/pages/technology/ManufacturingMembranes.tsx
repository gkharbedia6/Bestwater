import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function ManufacturingMembranes() {
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
        {t("Menu.technology.items.manufacturing_membranes.heading")}
      </h3>
      <p>{t("Menu.technology.items.manufacturing_membranes.content")}</p>
    </div>
  );
}

export default ManufacturingMembranes;
