import * as React from "react";
import { Link } from "react-router-dom";

import { useIsMobile } from "../hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";

function Menu() {
  const isMobile = useIsMobile();

  const { t } = useTranslation();
  const filtersMenuItems = t("Menu.filters.items", { returnObjects: true });
  const scienceMenuItems = t("Menu.science.items", { returnObjects: true });
  const technologyMenuItems = t("Menu.technology.items", {
    returnObjects: true,
  });

  return (
    <nav className="flex justify-start xl:justify-center items-center py-8 relative z-10">
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={t("Menu.home.url")}>{t("Menu.home.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("Menu.filters.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {Object.entries(filtersMenuItems).map(
                  ([key, menuItem]: [
                    key: string,
                    menuItem: {
                      title: string;
                      url: string;
                    }
                  ]) => (
                    <NavigationMenuLink asChild key={key}>
                      <Link to={menuItem.url}>
                        <div className="font-medium">{menuItem.title}</div>
                        {/* <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div> */}
                      </Link>
                    </NavigationMenuLink>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t("Menu.science.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {Object.entries(scienceMenuItems).map(
                  ([key, menuItem]: [
                    key: string,
                    menuItem: {
                      title: string;
                      url: string;
                    }
                  ]) => (
                    <NavigationMenuLink asChild key={key}>
                      <Link to={menuItem.url}>
                        <div className="font-medium">{menuItem.title}</div>
                        {/* <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div> */}
                      </Link>
                    </NavigationMenuLink>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>
              {t("Menu.technology.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-1">
                {Object.entries(technologyMenuItems).map(
                  ([key, menuItem]: [
                    key: string,
                    menuItem: {
                      title: string;
                      url: string;
                    }
                  ]) => (
                    <NavigationMenuLink asChild key={key}>
                      <Link to={menuItem.url}>
                        <div className="font-medium">{menuItem.title}</div>
                        {/* <div className="text-muted-foreground">
                        Browse all components in the library.
                      </div> */}
                      </Link>
                    </NavigationMenuLink>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={t("Menu.history.url")}>{t("Menu.history.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to={t("Menu.contact.url")}>{t("Menu.contact.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-snug font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export default Menu;
