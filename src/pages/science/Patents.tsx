import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function Patents() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const patentsItems = t("Menu.science.items.patents.content", {
    returnObjects: true,
  });

  return (
    <div className="px-4 max-w-[70%] flex flex-col items-start justify-start gap-4">
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {t("Menu.science.items.patents.heading")}
      </h3>
      <ul className="flex flex-col gap-2 justify-start items-start">
        {Object.entries(patentsItems).map(([num, line]) => (
          <p key={num}>
            <strong>{num}.</strong> {line}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Patents;
