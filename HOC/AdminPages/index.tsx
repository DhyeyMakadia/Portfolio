import React from "react";
import { AdminSidebar } from "../../components/SideBar";
import { AdminProtectedRoutes } from "../../utils/constants";
import { useRouter } from "next/router";

export const AdminPages = ({ children }: any) => {
  const router = useRouter();
  return (
    <>
      {AdminProtectedRoutes.includes(router.pathname) ? (
        <AdminSidebar>{children}</AdminSidebar>
      ) : (
        children
      )}
    </>
  );
};
