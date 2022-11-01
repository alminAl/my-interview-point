import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import About from "./components/About/About";
// import BlogComponent from "./components/BlogComponent/BlogComponent";
import NotFound from "./components/Shared/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";
import Layout from "./Layout/Layout";
<<<<<<< HEAD
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
=======
// import Blog from "./pages/Blog";
>>>>>>> d30565b49065e00e84d2b2c136d09bd210db113c
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


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

<<<<<<< HEAD
            <Route
              path="dashboard"
              element={<Dashboard /> }
            >
              <Route path="profile" element={<Profile />} />
            </Route>
=======
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
>>>>>>> d30565b49065e00e84d2b2c136d09bd210db113c
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
