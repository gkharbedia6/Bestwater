import PagesNavigationSidebar from "@/components/PagesNavigationSidebar";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

function Filters() {
  const { t } = useTranslation();

  const filtersMenuItems = t("Menu.filters.items", { returnObjects: true });

  return (
    <div className="w-full flex-row gap-10 pt-2 pb-8 flex items-start justify-start">
      <PagesNavigationSidebar
        title={t("Menu.filters.title")}
        urls={Object.entries(filtersMenuItems)}
      />
      <Outlet />
    </div>
  );
}

export default Filters;
