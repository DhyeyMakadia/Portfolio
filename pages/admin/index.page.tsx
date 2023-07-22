import React from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs";
import { Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <>
      <BreadCrumbs />
      <Typography paragraph>This is my Dashboard Page</Typography>
    </>
  );
};

export default AdminDashboard;
