// import { Button } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/HomePage/Auth/AuthPage";
import AuthPasswordPage from "./pages/HomePage/Auth/AuthPasswordPage";
import CompleteAuthPage from "./pages/HomePage/Auth/CompleteAuthPage";
import LoginPage from "./pages/HomePage/Auth/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PicsDrawer from "./Components/Drawers/PicsDrawer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/authpasswordpage" element={<AuthPasswordPage />} />
        <Route path="/completeauth" element={<CompleteAuthPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/picsdrawer" element={<PicsDrawer />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
