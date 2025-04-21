import { Routes, Route } from "react-router-dom";
import PublicLayout from "../src/layouts/Publiclayout";
import MainLayout from "../src/layouts/Mainlayout";

import LoginPage from "../src/pages/LoginPage";
import Homepage from "../src/pages/Homepage";
import NotFoundPage from "./pages/Notfoundpage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
      </Route>


      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
