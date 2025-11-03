import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import HistoryItem from "./components/HistoryItem";
import { Button } from "@/components/ui/button";
import { MoveUp } from "lucide-react";

export interface iHistoryItem {
  type: string;
  content: string | string[];
}

function History() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const historyItems = t("Menu.history.items", {
    returnObjects: true,
  });

  const historyYears = Object.entries(historyItems).map(
    ([year]: [year: string, item: iHistoryItem[]]) => {
      return year;
    }
  );

  return (
    <div className="px-4 w-full flex flex-col items-start justify-start gap-4">
      <div className="relative">
        <h3
          className={cn("text-2xl font-bold", {
            "font-ge": storedLang === "ge",
            "font-en-ru": storedLang !== "ge",
          })}
        >
          {t("Menu.history.title")}
        </h3>
        <div className="absolute min-w-fit top-12 left-0 flex flex-col text-sm gap-2">
          <h4 className="text-xs font-bold">{t("Menu.history.click_year")}</h4>
          <div className="font-normal grid grid-cols-3 gap-x-4 gap-y-2">
            {historyYears.map((year, index) => (
              <Button
                onClick={() => {
                  document
                    .getElementById(year)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                variant={"link"}
                className={cn("text-sm cursor-pointer", {})}
                key={`${year}+${index}`}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center gap-8 pb-8 justify-start">
        <h4 className="mb-10 w-[50%] text-xl text-center font-bold">
          {t("Menu.history.heading")}
        </h4>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[2px] bg-black opacity-30"></div>
          <ul className="flex gap-8 flex-col items-center justify-center">
            {Object.entries(historyItems).map(
              ([year, item]: [year: string, item: iHistoryItem[]], index) => {
                return (
                  <li
                    id={year}
                    className="flex flex-col items-center justify-center"
                    key={`${year}+${index}`}
                  >
                    <div className="w-[70px] h-[70px] rounded-full flex border-solid items-center justify-center bg-red-700 text-white border-white shadow-md border-4">
                      {year}
                    </div>
                    <HistoryItem year={year} item={item} index={index} />
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Button
          className="flex flex-row items-center justify-center cursor-pointer py-8 px-10"
          variant={"outline"}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <MoveUp />
          ზემოთ დაბრუნება
          <MoveUp />
        </Button>
      </div>
    </div>
  );
}

export default History;
