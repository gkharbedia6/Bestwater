import Menu from "@/components/Menu";
import LanguageSelector from "./components/LanguageSelector";
import { Link, Outlet } from "react-router-dom";
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
      <div className="w-full py-12 px-12 xl:px-36 2xl:px-64 h-full flex flex-col">
        <div className="w-full h-fit flex flex-col">
          <div className="w-full flex flex-col-reverse xl:flex-row justify-between items-start xl:items-center gap-4">
            {/* Left side — Logo */}
            <Link
              to={"/"}
              className="w-fit flex flex-row items-center gap-2 cursor-pointer"
            >
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-5xl lg:text-7xl font-en-ru font-extrabold text-red-700">
                  BESTWATER
                </h1>
                <span className="text-lg italic font-light text-gray-600">
                  Science for healthy life and beauty.
                </span>
              </div>
            </Link>

            {/* Right side — Language Selector */}
            <div className="w-full flex justify-end">
              <LanguageSelector />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between">
            <Menu />

            <div className="flex items-center w-full justify-end xl:w-fit">
              <InputGroup className="w-[300px]">
                <InputGroupInput placeholder={t("Search.title")} />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  12 {t("Search.description")}
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
