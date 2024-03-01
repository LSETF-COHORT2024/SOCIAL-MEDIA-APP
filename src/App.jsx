import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/HomePage/Auth/AuthPage";
import AuthPasswordPage from "./pages/HomePage/Auth/AuthPasswordPage";
import CompleteAuthPage from "./pages/HomePage/Auth/CompleteAuthPage";
import LoginPage from "./pages/HomePage/Auth/LoginPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/authpasswordpage" element={<AuthPasswordPage />} />
        <Route path="/completeauth" element={<CompleteAuthPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
