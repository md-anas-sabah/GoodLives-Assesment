import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import PetProfile from "./pages/PetProfile";
import AppLayout from "./pages/AppLayout";
import Vaccination from "./pages/Vaccination";
import HealthMonitoring from "./pages/HealthMonitoring";
import Chats from "./pages/Chats";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import Documentation from "./pages/Documentation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="pet-profile" element={<PetProfile />} />
      <Route path="vaccination-schedule" element={<Vaccination />} />
      <Route path="health-monitoring" element={<HealthMonitoring />} />
      <Route path="chats" element={<Chats />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="settings" element={<Settings />} />
      <Route path="documentation" element={<Documentation />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
