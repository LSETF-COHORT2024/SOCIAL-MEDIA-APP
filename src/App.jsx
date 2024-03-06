import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/HomePage/Auth/AuthPage";
import AuthPasswordPage from "./pages/HomePage/Auth/AuthPasswordPage";
import CompleteAuthPage from "./pages/HomePage/Auth/CompleteAuthPage";
import LoginPage from "./pages/HomePage/Auth/LoginPage";
import Layout from "./pages/HomePage/Layout";
import NotificationPage from "./pages/NotificationPage";
import UploadPage from "./pages/UploadPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/authpasswordpage" element={<AuthPasswordPage />} />
        <Route path="/completeauth" element={<CompleteAuthPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/uploadpage" element={<UploadPage />} />
        <Route path="/notification" element={<NotificationPage />} />

      </Routes>
    </Layout>
  );
}

export default App;
