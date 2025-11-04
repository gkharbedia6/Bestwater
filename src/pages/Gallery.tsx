import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

function Gallery() {
  const storedLang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      video.addEventListener("play", () => {
        videoRefs.current.forEach((other) => {
          if (other !== video) other.pause();
        });
      });
    });

    return () => {
      videoRefs.current.forEach((video) => {
        video.removeEventListener("play", () => {});
      });
    };
  }, []);

  return (
    <div className="my-6 md:my-0">
      <p
        className={cn("font-bold text-3xl", {
          "font-ge": storedLang === "ge",
          "font-en-ru": storedLang !== "ge",
        })}
      >
        {t("Menu.gallery.title")}
      </p>
      <div className="flex flex-col gap-8 w-full max-w-7xl py-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end gap-6">
          <div className="flex-1 flex flex-col items-center text-center gap-2">
            <p className="text-base font-semibold mt-3 max-w-[90%]">
              {t("Menu.gallery.items.videoOne.title")}
            </p>
            <video
              ref={(el) => {
                if (el && !videoRefs.current.includes(el)) {
                  videoRefs.current.push(el);
                }
              }}
              controls
              preload="metadata"
              poster={t("Menu.gallery.items.videoOne.poster-url")}
              className="h-[650px] w-full object-contain bg-black rounded-md"
            >
              <source
                src={t("Menu.gallery.items.videoOne.video-url")}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="flex-1 flex flex-col items-center text-center gap-2">
            <p className="text-base font-semibold mt-3 max-w-[90%]">
              {t("Menu.gallery.items.videoTwo.title")}
            </p>
            <video
              ref={(el) => {
                if (el && !videoRefs.current.includes(el)) {
                  videoRefs.current.push(el);
                }
              }}
              controls
              preload="metadata"
              poster={t("Menu.gallery.items.videoTwo.poster-url")}
              className="h-[650px] w-full object-contain bg-black rounded-md"
            >
              <source
                src={t("Menu.gallery.items.videoTwo.video-url")}
                type="video/mp4"
              />
            </video>
          </div>

          {/* Video 3 */}
          <div className="flex-1 flex flex-col items-center text-center gap-2">
            <p className="text-base font-semibold mt-3 max-w-[90%]">
              {t("Menu.gallery.items.videoThree.title")}
            </p>
            <video
              ref={(el) => {
                if (el && !videoRefs.current.includes(el)) {
                  videoRefs.current.push(el);
                }
              }}
              controls
              preload="metadata"
              poster={t("Menu.gallery.items.videoThree.poster-url")}
              className="h-[650px] w-full object-contain bg-black rounded-md"
            >
              <source
                src={t("Menu.gallery.items.videoThree.video-url")}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
