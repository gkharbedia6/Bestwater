import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const languagePreference = localStorage.getItem("i18nextLng");

  console.log(languagePreference);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      onValueChange={(e: string) => switchLanguage(e)}
      defaultValue={languagePreference ?? "ge"}
    >
      <SelectTrigger className="w-fit">
        <SelectValue />
      </SelectTrigger>
      <SelectContent onChange={(e) => console.log("some")}>
        <SelectItem value="ge">
          <span>ქა</span>
          {/* <span>ქართული</span> */}
          <img
            src="/assets/icons/language/lang_ge.png"
            alt="Georgian Language Icon"
          />
        </SelectItem>
        <SelectItem value="en">
          {/* <span>English</span> */}
          <span>En</span>
          <img
            src="/assets/icons/language/lang_en.png"
            alt="English Language Icon"
          />
        </SelectItem>
        <SelectItem value="ru">
          {/* <span>Русский</span> */}
          <span>Ру</span>
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
