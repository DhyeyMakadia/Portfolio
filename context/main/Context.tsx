import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const MainContext = React.createContext<any>(null);

export const MainContextProvider = ({ children }: any) => {
  const router = useRouter();
  const isAdminPage = router.pathname.includes("admin")
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
  return <MainContext.Provider value={states}>{children}</MainContext.Provider>;
};
