import { ArrowUpRightIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-accent h-[300px] w-full p-8 relative">
      <p className="text-xs font-en-ru absolute bottom-6 left-6">
        © 2017. Bestwater. All rights reserved. Website developed by{" "}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://institutes.gtu.ge/Member/211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-red-700"
            >
              <span className="italic">Giorgi Kharbedia</span>
              <ArrowUpRightIcon size={10} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("Landing.head_of_project.tooltip")}</p>
          </TooltipContent>
        </Tooltip>
        .
      </p>
    </div>
  );
}

export default Footer;
