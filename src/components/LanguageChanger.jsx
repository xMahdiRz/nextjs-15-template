"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

const LanguageChanger = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const { theme } = useTheme();

  const onLanguageChange = (nextLocale) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  const getButtonClasses = (locale) => {
    const isSelected = localeActive === locale;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isSelected) {
      return isDark ? "!bg-white !text-black" : "!bg-gray-200 !text-black";
    } else {
      return isDark
        ? "!bg-transparent !text-gray-200 !dark:hover:text-white"
        : "!bg-transparent !text-black !hover:bg-gray-200";
    }
  };

  return (
    <div className="flex items-start justify-start gap-1 rounded-full border border-slate-100 p-[3px] dark:border-white">
      <Button
        className={`rounded-full px-4 py-2 ${getButtonClasses("en")}`}
        onClick={() => onLanguageChange("en")}
        disabled={isPending}
      >
        English
      </Button>
      <Button
        className={`rounded-full px-4 py-2 ${getButtonClasses("ar")}`}
        onClick={() => onLanguageChange("ar")}
        disabled={isPending}
      >
        Arabic
      </Button>
    </div>
  );
};

export default LanguageChanger;
