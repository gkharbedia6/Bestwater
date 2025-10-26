import MapEmbed from "@/components/MapEmbed";
import { Mail, Phone } from "lucide-react";

function Contact() {
  return (
    <div>
      <ul className="grid gap-1 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3 m-2 flex justify-center items-center">
          <MapEmbed />
        </li>

        <div className="hover:color-red-500">
          <div className="flex-row items-center gap-2 cursor-pointer text-xs hover:color-red-500">
            <Mail />
            +995 599077575
          </div>
        </div>
        <div>
          <div className="flex-row items-center gap-2 cursor-pointer text-xs hover:color-red-500">
            <Phone />
            75bibileishvili@gmail.com
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Contact;
