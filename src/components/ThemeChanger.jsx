"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuSunMedium, LuLaptop } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { Button } from "./ui/button";

const ThemeChanger = ({
  size = 20,
  lightSelectedColor = "#000",
  darkSelectedColor = "#000",
  lightSelectedBackgroundColor = "#f2f2f2",
  darkSelectedBackgroundColor = "#f2f2f2",
  lightUnselectedColor = "#000",
  darkUnselectedColor = "#fff",
  lightUnselectedBackgroundColor = "#fff",
  darkUnselectedBackgroundColor = "#00000000",
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-start justify-start gap-1 rounded-full border border-slate-100 p-[3px]">
      <Button
        style={{
          backgroundColor:
            theme === "light"
              ? lightSelectedBackgroundColor
              : darkUnselectedBackgroundColor,
        }}
        onClick={() => setTheme("light")}
        size="icon"
        rounded="full"
      >
        <LuSunMedium
          size={size}
          style={{
            color: theme === "light" ? lightSelectedColor : darkUnselectedColor,
          }}
        />
      </Button>
      <Button
        style={{
          backgroundColor:
            theme === "dark"
              ? darkSelectedBackgroundColor
              : theme === "system"
              ? darkUnselectedBackgroundColor
              : lightUnselectedBackgroundColor,
        }}
        onClick={() => setTheme("dark")}
        size="icon"
        rounded="full"
      >
        <FiMoon
          size={size}
          style={{
            color:
              theme === "dark"
                ? darkSelectedColor
                : theme === "system"
                ? darkUnselectedColor
                : lightUnselectedColor,
          }}
        />
      </Button>
      <Button
        style={{
          backgroundColor:
            theme === "system"
              ? darkSelectedBackgroundColor
              : theme === "dark"
              ? darkUnselectedBackgroundColor
              : lightUnselectedBackgroundColor,
        }}
        onClick={() => setTheme("system")}
        size="icon"
        rounded="full"
      >
        <LuLaptop
          size={size}
          style={{
            color:
              theme === "system"
                ? darkSelectedColor
                : theme === "dark"
                ? darkUnselectedColor
                : lightUnselectedColor,
          }}
        />
      </Button>
    </div>
  );
};

export default ThemeChanger;
