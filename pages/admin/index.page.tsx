import React, { useContext } from "react";
import { AdminSidebar } from "../../components/SideBar";
import { BreadCrumbs } from "../../components/BreadCrumbs";

const AdminHome = () => {
  return (
    <div className="min-w-screen min-h-screen m-0 h-0 pl-[256px]">
      <AdminSidebar />
      <BreadCrumbs/>
    </div>
  );
};

export default AdminHome;
