import Menu from "@/components/Menu";
import LanguageSelector from "./components/LanguageSelector";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./components/ui/input-group";
import { Search } from "lucide-react";
import Footer from "./components/Footer";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full py-12 px-44 h-full flex flex-col">
        <div className="w-full h-fit flex flex-col">
          <div className="w-full flex flex-row justify-between">
            <div className="w-fit flex flex-row items-center gap-2">
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-7xl font-en-ru font-extrabold text-red-700">
                  BESTWATER
                </h1>
                <span className="text-lg italic font-light text-gray-600">
                  Science for healthy life and beauty.
                </span>
              </div>
            </div>
            <LanguageSelector />
          </div>
          <div className="flex flex-row justify-between">
            <Menu />

            <div className="flex items-center">
              <InputGroup className="w-[300px]">
                <InputGroupInput placeholder={t("Menu.search.title")} />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  12 {t("Menu.search.description")}
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
