import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Textbooks() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const textbooksRowItems = t("Menu.science.items.textbooks.contentHeaders", {
    returnObjects: true,
  });
  const textbookBodyItems = t("Menu.science.items.textbooks.content", {
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
        {t("Menu.science.items.textbooks.heading")}
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            {Object.entries(textbooksRowItems).map(
              ([key, item]: [key: string, item: any]) => {
                // console.log(item);
                return (
                  <TableHead className="whitespace-pre-line" key={key}>
                    {item}
                  </TableHead>
                );
              }
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Object.entries(textbookBodyItems).map(
            ([key, item]: [key: string, item: any]) => {
              // console.log(item);
              return (
                <TableRow key={key}>
                  <TableCell className="whitespace-pre-line">
                    {item.number}
                  </TableCell>
                  <TableCell className="whitespace-pre-line">
                    {item.author}
                  </TableCell>
                  <TableCell className="whitespace-pre-line">
                    {item.textbook}
                  </TableCell>
                  <TableCell className="whitespace-pre-line">
                    {item.place}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Textbooks;
