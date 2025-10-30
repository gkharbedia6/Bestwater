import PagesNavigationSidebar from "@/components/PagesNavigationSidebar";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

function Technology() {
  const { t } = useTranslation();

  const scienceMenuItems = t("Menu.technology.items", { returnObjects: true });

  return (
    <div className="w-full flex-row gap-10 pb-8 flex items-start justify-start">
      <PagesNavigationSidebar
        title={t("Menu.technology.title")}
        urls={Object.entries(scienceMenuItems)}
      />
      <Outlet />
    </div>
  );
}

export default Technology;
