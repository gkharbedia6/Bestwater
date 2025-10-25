import Menu from "@/components/Menu";
import LanguageSelector from "./components/LanguageSelector";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-full p-8 h-screen flex flex-col">
      <div className="w-full h-fit flex flex-col">
        <div className="w-full flex flex-row justify-between">
          <div className="w-fit flex flex-row items-center gap-2">
            {/* <div className="w-[60px]">
                <img src="/assets/logos/bestwater.png" alt="Bestwater Logo" />
              </div> */}
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-4xl font-extrabold text-red-700">
                BESTWATER
              </h1>
              <span className="text-sm italic font-light text-gray-600">
                Science for healthy life and beauty.
              </span>
            </div>
          </div>
          <LanguageSelector />
        </div>
        <Menu />
      </div>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
