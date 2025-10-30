import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

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
