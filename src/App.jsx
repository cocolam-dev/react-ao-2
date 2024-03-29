import "./App.css";
import ProtectedRoute from "./common/ProtectedRoute";
import SharedLayout from "./common/SharedLayout";
import AOHome from "./pages/AOHome";
import TRIndex from "./pages/TR/TRIndex";
import LoginPage from "./pages/login/loginIndex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./common/GlobalContext";
import AccountDetailsIndex from "./pages/accountDetails/AccountDetailsIndex";
import SignUpPage from "./pages/accountDetails/SignUpPage";
import Users from "./pages/login/Users";

function App() {
  const { setTempUser } = useGlobalContext();
  return (
    <BrowserRouter basename="/react-ao-2/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LoginPage />} />
          <Route
            path="signup"
            element={<SignUpPage />}
            onClick={() => setTempUser(Users[1])}
          />

          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<AOHome />} />
            <Route path="accountdetails" element={<AccountDetailsIndex />} />
            <Route path="tr" element={<TRIndex />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
