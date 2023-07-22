import { Routes } from "./routes";


export const AdminRoutes = [Routes.AdminLogin, Routes.AdminDashboard, Routes.AdminProfile, Routes.AdminProjects]
export const AdminProtectedRoutes = [Routes.AdminDashboard, Routes.AdminProfile, Routes.AdminProjects]

export const AdminSidebarLinks = [
    {
        label: "Dashboard",
        route: Routes.AdminDashboard
    },
    {
        label: "Profile",
        route: Routes.AdminProfile
    },
    {
        label: "Projects",
        route: Routes.AdminProjects
    },
]