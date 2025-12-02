import { Link } from "react-router-dom";

import { useIsMobile } from "../lib/hooks/useMobile";
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
    <nav className="flex justify-start 2xl:justify-center items-center py-8 relative z-10">
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle() + " text-md"}
            >
              <Link to={t("Menu.home.url")}>{t("Menu.home.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              {t("Menu.filters.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-accent">
              <ul className="grid gap-1 sm:w-[400px]  md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {Object.entries(filtersMenuItems).map(
                  ([key, menuItem]: [
                    key: string,
                    menuItem: {
                      title: string;
                      url: string;
                    }
                  ]) => (
                    <NavigationMenuLink
                      asChild
                      key={key}
                      className="hover:bg-neutral-200 text-md"
                    >
                      <Link to={menuItem.url}>
                        <div className="font-medium">{menuItem.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              {t("Menu.science.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-accent">
              <ul className="grid gap-1 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {Object.entries(scienceMenuItems).map(
                  ([key, menuItem]: [
                    key: string,
                    menuItem: {
                      title: string;
                      url: string;
                    }
                  ]) => (
                    <NavigationMenuLink
                      asChild
                      key={key}
                      className="hover:bg-neutral-200 text-md"
                    >
                      <Link to={menuItem.url}>
                        <div className="font-medium">{menuItem.title}</div>
                      </Link>
                    </NavigationMenuLink>
                  )
                )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md">
              {t("Menu.technology.title")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-accent">
              <ul className="grid w-[300px] gap-1">
                {Object.entries(technologyMenuItems).map(
                  ([key, menuItem]: [
                    key: string,
                    menuItem: {
                      title: string;
                      url: string;
                    }
                  ]) => (
                    <NavigationMenuLink
                      asChild
                      key={key}
                      className="hover:bg-neutral-200 text-md"
                    >
                      <Link to={menuItem.url}>
                        <div className="font-medium">{menuItem.title}</div>
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
              className={navigationMenuTriggerStyle() + " text-md"}
            >
              <Link to={t("Menu.history.url")}>{t("Menu.history.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle() + " text-md"}
            >
              <Link to={t("Menu.gallery.url")}>{t("Menu.gallery.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle() + " text-md"}
            >
              <Link to={t("Menu.contact.url")}>{t("Menu.contact.title")}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <a href={href}>
//           <div className="text-sm leading-snug font-medium">{title}</div>
//           <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// }

export default Menu;
