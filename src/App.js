import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./components/Shared/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            {/* <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route> */}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
