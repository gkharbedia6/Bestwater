import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface iPagesNavigationSidebarProps {
  title: string;
  //   urls: {
  //     title: string;
  //     url: string;
  //   }[];
  urls: any[];
}

function PagesNavigationSidebar({ title, urls }: iPagesNavigationSidebarProps) {
  const storedLang = localStorage.getItem("i18nextLng");
  const location = useLocation();

  return (
    <div className="flex flex-col items-start justify-start w-[20%] gap-4">
      <p
        className={cn("font-bold text-3xl", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {title}
      </p>
      <ul className="flex flex-col gap-2">
        {urls.map((url: any, index: number) => (
          <Link
            className={cn("text-sm ", {
              "pointer-events-none opacity-30":
                location.pathname === url[1].url,
              "hover:underline": location.pathname !== url[1].url,
            })}
            to={url[1].url}
            key={`${url[1].url} + ${index}`}
          >
            {url[1].title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default PagesNavigationSidebar;
