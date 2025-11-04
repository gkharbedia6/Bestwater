import { cn } from "@/lib/utils";
import type { iHistoryItem } from "../History";

interface iHistoryItemProps {
  year: string;
  item: iHistoryItem[];
  index: number;
}

function HistoryItem({ year, item, index }: iHistoryItemProps) {
  return (
    <div
      className={cn(
        "h-fit rounded-sm relative gap-[8px] flex flex-col items-center bg-white shadow-md w-[400px] p-8 text-sm",
        {
          "md:right-1/2 md:-translate-x-[30px]": index % 2 === 0,
          "md:left-1/2 md:translate-x-[30px]": index % 2 !== 0,
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
                  typeof itemProps.content === "string" ? itemProps.content : ""
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
  );
}

export default HistoryItem;
