import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface iHistoryItem {
  type: string;
  content: string | string[];
}

function History() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const historyItems = t("Menu.history.items", {
    returnObjects: true,
  });

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
        <div className="absolute top-12 left-0 flex flex-col text-sm w-fit gap-2">
          <h4 className="text-xs font-bold">დააჭირეთ წელს:</h4>
          <div className="font-normal grid grid-cols-3 gap-x-4 gap-y-2">
            <p>1971</p>
            <p>1971</p>
            <p>1971</p>
            <p>1971</p>
            <p>1971</p>
            <p>1971</p>
            <p>1971</p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen flex flex-col items-center gap-8 pb-8 justify-start">
        <h4 className="mb-10 w-[50%] text-xl text-center font-bold">
          {t("Menu.history.heading")}
        </h4>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 -z-10 w-px bg-accent"></div>
          <ul className="flex gap-8 flex-col items-center justify-center">
            {Object.entries(historyItems).map(
              ([year, item]: [year: string, item: iHistoryItem[]], index) => {
                return (
                  <li
                    className="flex flex-col items-center justify-center"
                    key={`${year}+${index}`}
                  >
                    <div className="w-[70px] h-[70px] rounded-full flex border-solid items-center justify-center bg-red-700 text-white border-white shadow-md border-4">
                      {year}
                    </div>
                    <div
                      className={cn(
                        "h-fit rounded-sm relative gap-[8px] flex flex-col items-center bg-white shadow-md w-[400px] p-8 text-sm",
                        {
                          "right-1/2 -translate-x-[30px]": index % 2 === 0,
                          "left-1/2 translate-x-[30px]": index % 2 !== 0,
                        }
                      )}
                    >
                      {item.map((itemProps, index) => {
                        return (
                          <div key={`${itemProps.type}+${index}`}>
                            {itemProps.type === "content" &&
                            Array.isArray(itemProps.content) ? (
                              <ul className="flex flex-col gap-1">
                                {itemProps.content.map((contentItem, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="indent-5 whitespace-pre-wrap text-justify"
                                    >
                                      {contentItem}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : itemProps.type === "image" ? (
                              <img
                                src={
                                  typeof itemProps.content === "string"
                                    ? itemProps.content
                                    : ""
                                }
                                alt={`History image, year ${year}`}
                              />
                            ) : itemProps.type === "heading" ? (
                              <div
                                className="text-center mt-3 font-bold text-lg"
                                key={`${itemProps.content}+${index}`}
                              >
                                {itemProps.content}
                              </div>
                            ) : null}
                          </div>
                        );
                      })}

                      <div
                        className={cn("flex flex-row w-full mt-3", {
                          "justify-end": index % 2 === 0,
                          "justify-start": index % 2 !== 0,
                        })}
                      >
                        <div className="border-[0.5px] border-black opacity-40 py-1 px-1">
                          <div className="border-[0.5px] border-black py-1 px-2 text-xs">
                            {year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
