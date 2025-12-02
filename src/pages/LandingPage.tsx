import { Separator } from "@/components/ui/separator";
import filterOne from "/assets/images/landing/filterOne.jpg";
import filterTwo from "/assets/images/landing/filterTwo.jpg";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import girl from "/assets/images/landing/girl.jpg";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  FileUser,
  BookText,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div className="py-4 h-full w-full flex flex-col overflow-hidden  justify-center">
      <h2 className="w-full text-center p-4 text-xl md:text-4xl font-ge">
        {t("Landing.filterComparison")}
      </h2>

      <div className="relative w-full">
        <ReactBeforeSliderComponent
          currentPercentPosition={50}
          firstImage={{ imageUrl: filterTwo }}
          secondImage={{ imageUrl: filterOne }}
          delimiterColor="white"
          delimiterIconStyles={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-horizontal-icon lucide-move-horizontal"><path d="m18 8 4 4-4 4"/><path d="M2 12h20"/><path d="m6 8-4 4 4 4"/></svg>'
            )}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundColor: "white",
            border: "8px solid white",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        />
      </div>
      <Separator className="my-8 xl:my-12" />
      <div className="flex flex-col">
        <h3 className="w-full text-center p-4 text-xl md:text-6xl font-ge">
          {t("Landing.welcome")}
        </h3>
        <div className="flex flex-col p-4">
          <div className="flex items-center flex-col justify-center">
            <p className="text-xl font-ge">
              {t("Landing.head_of_project.title")}
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="link" asChild size="sm">
                  <a
                    href="https://institutes.gtu.ge/Member/211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-1"
                  >
                    <p className="text-lg italic">
                      {t("Landing.head_of_project.description")}
                    </p>

                    <ArrowUpRightIcon size={20} />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("Landing.head_of_project.tooltip")}</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex flex-row gap-4 pt-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={t("Landing.head_of_project.items.CV.url")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant={"outline"}
                      className="flex flex-row items-center gap-1 cursor-pointer"
                    >
                      <FileUser />
                      <span>{t("Landing.head_of_project.items.CV.title")}</span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("Landing.head_of_project.items.CV.tooltip")}</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={t("Landing.head_of_project.items.works.url")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant={"outline"}
                      className="flex flex-row items-center gap-1 cursor-pointer"
                    >
                      <BookText />
                      <span>
                        {t("Landing.head_of_project.items.works.title")}
                      </span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t("Landing.head_of_project.items.works.tooltip")}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-12">
            <Link to={t("Landing.contact_us.url")}>
              <Button className="flex flex-row cursor-pointer">
                <span>{t("Landing.contact_us.title")}</span> <ArrowRightIcon />
              </Button>
            </Link>
          </div>
        </div>
        <Separator className="my-8 xl:my-12" />
        <div className="pt-4 relative">
          <img
            src={girl}
            alt="Image"
            className="h-[350px] w-full object-cover object-middle"
          />
          <div className="absolute top-20 left-10 flex gap-7 flex-col">
            <p className="text-sm md:text-md lg:text-xl font-ge text-red-700">
              {t("Landing.finger_image.title")}
            </p>
            <p className="text-white text-xs lg:text-3xl">
              {t("Landing.finger_image.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
