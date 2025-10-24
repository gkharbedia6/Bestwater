import { Menu } from "@/components/Menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  console.log(localStorage.getItem("i18nextLng"));

  return (
    <>
      <div className="flex w-full justify-center align-center h-screen">
        <Menu />
        <h1>{t("welcome")}</h1>

        <Button onClick={() => switchLanguage("en")}>English</Button>
        <Button onClick={() => switchLanguage("ge")}>ქართული</Button>
      </div>
    </>
  );
}

export default App;
