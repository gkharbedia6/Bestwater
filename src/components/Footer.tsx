import { ArrowRightIcon, ArrowUpRightIcon, Mail, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FlaskConical, Droplets, Microscope, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";

function Footer() {
  const { t } = useTranslation();
  const menuItems = t("Menu", { returnObjects: true });
  const whyBestwaterItems = t("Footer.why_bestwater.items", {
    returnObjects: true,
  });
  const storedLang = localStorage.getItem("i18nextLng");

  return (
    <div
      className={cn(
        "bg-accent min-h-[400px] w-full py-12 px-12 xl:px-36 2xl:px-64 relative"
      )}
    >
      <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
        <div className="flex flex-col justify-start items-start">
          <h3
            className={cn("font-bold", {
              "font-ge": storedLang === "ge",
              "font-en-ru": storedLang !== "ge",
            })}
          >
            {t("Footer.quick_links")}
          </h3>
          <ul className="flex flex-col items-start py-4 justify-start">
            {Object.entries(menuItems).map(([key, menuItem]) => (
              <Button variant="link" key={key} className="p-0 gap-0">
                <Link to={menuItem.url}>
                  <div className="font-medium">{menuItem.title}</div>
                </Link>
              </Button>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3
            className={cn("font-bold", {
              "font-ge": storedLang === "ge",
              "font-en-ru": storedLang !== "ge",
            })}
          >
            {t("Footer.why_bestwater.title")}
          </h3>

          <ul className="flex flex-col items-start py-4 justify-start leading-1.5">
            {Object.entries(whyBestwaterItems).map(([key, item]) => {
              let Icon;

              // Conditional icon mapping
              if (key === "itemOne") Icon = FlaskConical;
              else if (key === "itemTwo") Icon = Droplets;
              else if (key === "itemThree") Icon = Microscope;
              else if (key === "itemFour") Icon = Zap;

              return (
                <li
                  key={key}
                  className="font-medium text-sm flex flex-row items-center gap-2 py-1"
                >
                  {Icon && <Icon size={15} />}
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3
            className={cn("font-bold", {
              "font-ge": storedLang === "ge",
              "font-en-ru": storedLang !== "ge",
            })}
          >
            {t("Footer.contact")}
          </h3>
          <ul className="flex flex-col gap-2 py-4">
            <a
              href="tel:+995599077575"
              className="flex flex-row items-center gap-3 cursor-pointer text-xs group"
            >
              <Phone
                size={15}
                className="text-sm group-hover:text-red-700 transition-colors duration-200"
              />
              <span className="text-sm group-hover:text-red-700 transition-colors duration-200">
                +995 599077575
              </span>
            </a>
            <a
              href="mailto:75bibileishvili@gmail.com"
              className="flex flex-row items-center gap-3 cursor-pointer text-xs group"
            >
              <Mail
                size={15}
                className="text-sm group-hover:text-red-700 transition-colors duration-200"
              />
              <span className="text-sm group-hover:text-red-700 transition-colors duration-200">
                75bibileishvili@gmail.com
              </span>
            </a>
            <p className="text-sm">{t("Footer.address")}</p>
            <Link to={t("Landing.contact_us.url")} className="my-6">
              <Button className="flex flex-row cursor-pointer">
                <span>{t("Landing.contact_us.title")}</span> <ArrowRightIcon />
              </Button>
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-xs font-en-ru absolute bottom-6 left-12 xl:left-36 2xl:left-64">
        © 2017. Bestwater. All rights reserved. Website developed by{" "}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/gkharbedia6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[2px] hover:text-red-700"
            >
              <span className="italic">Giorgi Kharbedia</span>
              <ArrowUpRightIcon size={10} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Landing.head_of_project.tooltip")}</p>
          </TooltipContent>
        </Tooltip>
      </p>
      <div className="hidden md:block absolute bottom-6 right-12 xl:right-36 2xl:right-64">
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Footer;
