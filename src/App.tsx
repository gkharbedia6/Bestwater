import Menu from "@/components/Menu";
import LanguageSelector from "./components/LanguageSelector";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="w-full py-12 px-12 xl:px-36 2xl:px-64 h-full flex flex-col">
        <div className="w-full h-fit flex flex-col">
          <div className="w-full flex flex-col-reverse xl:flex-row justify-between items-start xl:items-center gap-4">
            <Link
              to={"/"}
              className="w-fit flex flex-row items-center gap-2 cursor-pointer"
            >
              <img
                className="w-[90px]"
                src="/assets/logos/bestwater-main.png"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-3xl lg:text-7xl font-en-ru font-extrabold text-red-700">
                  BESTWATER
                </h1>
                <span className="text-sm md:text-lg italic font-light text-gray-600">
                  Science for healthy life and beauty.
                </span>
              </div>
            </Link>

            <div className="w-full flex justify-end">
              <LanguageSelector />
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row justify-between">
            <Menu />

            <div className="flex items-center w-full justify-end mb-10 2xl:mb-0 xl:w-fit">
              <SearchBar />
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
