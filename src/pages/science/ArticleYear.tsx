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

  useEffect(() => {
    const found = Object.entries(articlesByYears).find(
      ([, item]: [key: string, item: iArticleItem]) => {
        return item.title === id;
      }
    );
    setArticle(found ? found[1] : null);
  }, [id]);

  return (
    <div className="py-4 max-w-[70%] flex flex-col items-start justify-start gap-4">
      <h3
        className={cn("text-2xl font-bold", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {article?.title}
      </h3>
      <p>{article?.content}</p>
    </div>
  );
}

export default ArticleYear;
