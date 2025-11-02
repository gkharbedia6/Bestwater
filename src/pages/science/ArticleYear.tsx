import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import type { iArticleItem } from "./Articles";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ArticleYear() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const articlesByYears = t("Menu.science.items.articles.items", {
    returnObjects: true,
  });
  const [article, setArticle] = useState<iArticleItem | null>(null);
  const articleItems = t(`Menu.science.items.articles.items.${id}.items`, {
    returnObjects: true,
  });

  useEffect(() => {
    const found = Object.entries(articlesByYears).find(
      ([, item]: [key: string, item: iArticleItem]) => {
        return item.title === id;
      }
    );
    setArticle(found ? found[1] : null);
  }, [id]);

  return (
    <div className="py-4 flex flex-col items-start justify-start gap-4">
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {article?.title}
      </h3>
      <ul className="flex flex-col gap-6 justify-start items-start w-full">
        {Object.entries(articleItems).map(
          ([num, item]: [num: string, item: iArticleItem]) => {
            // console.log(item);
            return (
              <div
                className="flex flex-col items-start justify-start gap-4 w-full"
                key={num}
              >
                <p className="font-bold">
                  {num}. {item.title}
                </p>
                <p>
                  {item.content.lineOneBold ? (
                    <span className="font-bold">
                      {item.content.lineOneBold}
                    </span>
                  ) : null}{" "}
                  {item.content.lineOne}
                </p>
                <p>
                  {item.content.lineTwoBold ? (
                    <span className="font-bold">
                      {item.content.lineTwoBold}
                    </span>
                  ) : null}{" "}
                  {item.content.lineTwo}
                </p>
                <p>
                  {item.content.lineThreeBold ? (
                    <span className="font-bold">
                      {item.content.lineThreeBold}
                    </span>
                  ) : null}{" "}
                  {item.content.lineThree}
                </p>
                <p>
                  {item.content.lineFourBold ? (
                    <span className="font-bold">
                      {item.content.lineFourBold}
                    </span>
                  ) : null}{" "}
                  {item.content.lineFour}
                </p>
              </div>
            );
          }
        )}
      </ul>
    </div>
  );
}

export default ArticleYear;
