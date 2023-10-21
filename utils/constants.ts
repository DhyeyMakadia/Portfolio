import { Routes } from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faGithub, faTwitter, faFacebookF, faLinkedinIn);


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