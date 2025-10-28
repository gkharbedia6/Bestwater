import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [languagePreference, setLanguagePreference] = useState("ge");

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    console.log(storedLang);
    if (storedLang) {
      setLanguagePreference(storedLang);
      i18n.changeLanguage(storedLang);
    } else {
      i18n.changeLanguage("ge");
      localStorage.setItem("i18nextLng", "ge");
    }
  }, [i18n]);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    setLanguagePreference(lang);
  };

  return (
    <Select onValueChange={switchLanguage} value={languagePreference}>
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ge">
          <span className="mt-1 font-ge">ქართული</span>
          <img
            src="/assets/icons/language/lang_ge.png"
            alt="Georgian Language Icon"
          />
        </SelectItem>
        <SelectItem value="en">
          <span className="font-en-ru font-semibold">English</span>
          <img
            src="/assets/icons/language/lang_en.png"
            alt="English Language Icon"
          />
        </SelectItem>
        <SelectItem value="ru">
          <span className="font-en-ru font-semibold">Русский</span>
          <img
            src="/assets/icons/language/lang_ru.png"
            alt="Russian Language Icon"
          />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelector;
