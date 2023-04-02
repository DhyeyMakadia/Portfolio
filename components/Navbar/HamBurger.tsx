import React, { createRef, useContext, useEffect, useState } from "react";
import { SideBar } from "../SideBar";
import { MainContext } from "../../context/main";

export const HamBurger = () => {
  const btnWrapper: any = createRef();
  const { sidebarVisible, setSidebarVisible } = useContext(MainContext);

  return (
    <>
      <button
        className="ham-button"
        ref={btnWrapper}
        id="ham-button"
        data-visible={sidebarVisible}
        aria-expanded="false"
        onClick={() => setSidebarVisible(!sidebarVisible)}
      >
        <div className="ham-burger"></div>
      </button>
      <SideBar isOpen={sidebarVisible} />
    </>
  );
};
