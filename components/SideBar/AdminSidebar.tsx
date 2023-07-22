import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, FolderOpen, Person } from "@mui/icons-material";
import { AdminSidebarToggleBtn } from "../../utils/icons";
import Link from "next/link";
import { Routes } from "../../utils/routes";
import cx from "classnames";
import { AdminSidebarLinks } from "../../utils/constants";
import { useRouter } from "next/router";

const drawerWidth = 240;

export function AdminSidebar({ children }: any) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarIcon = (route: string) => {
    switch (route) {
      case Routes.AdminDashboard:
        return (
          <Dashboard className="text-slate group-hover:text-slate-lightest" />
        );
      case Routes.AdminProfile:
        return (
          <Person className="text-slate group-hover:text-slate-lightest" />
        );
      case Routes.AdminProjects:
        return (
          <FolderOpen className="text-slate group-hover:text-slate-lightest" />
        );
      default:
        return <></>;
    }
  };

  const drawer = React.useCallback(() => {
    return (
      <List>
        {AdminSidebarLinks.map((item, index) => (
          <Link href={item.route} key={index}>
            <ListItem
              className={cx(
                "p-0 group",
                item.route === router.pathname && "selected"
              )}
            >
              <ListItemButton>
                <ListItemIcon>{sidebarIcon(item.route)}</ListItemIcon>
                <ListItemText primary={item.label} />
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green bg-navyBlue-lightest rounded-full">
                  3
                </span>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    );
  }, [router.pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <div className="mr-2 sm:hidden">
        <button
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-slate rounded-lg sm:hidden hover:bg-navyBlue-lightest"
          onClick={handleDrawerToggle}
        >
          <span className="sr-only">Open sidebar</span>
          {AdminSidebarToggleBtn}
        </button>
      </div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          className="admin-sidebar"
        >
          {drawer()}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          className="admin-sidebar"
        >
          {drawer()}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
