import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

export const MainContext = React.createContext<any>(null);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export const MainContextProvider = ({ children }: any) => {
  const router = useRouter();
  const isAdminPage = router.pathname.includes("admin");
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const handleScrollOnMobileSidebar = () => {
    const body = document.querySelector("body");
    const mainContainer = document.getElementById("main-container");
    const logo = document.querySelector(".logo");
    if (sidebarVisible) {
      body ? (body.style.overflow = "hidden") : null;
      mainContainer ? mainContainer.classList.add("blurContent") : null;
      logo ? logo.classList.add("blurContent") : null;
    } else {
      body ? (body.style.overflow = "auto") : null;
      mainContainer ? mainContainer.classList.remove("blurContent") : null;
      logo ? logo.classList.remove("blurContent") : null;
    }
  };

  useEffect(() => {
    handleScrollOnMobileSidebar();
  }, [sidebarVisible]);

  const states = { sidebarVisible, setSidebarVisible, isAdminPage };
  return (
    <MainContext.Provider value={states}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MainContext.Provider>
  );
};
