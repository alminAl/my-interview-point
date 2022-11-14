import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import About from "./components/About/About";
// import BlogComponent from "./components/BlogComponent/BlogComponent";
import NotFound from "./components/Shared/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";
import Layout from "./Layout/Layout";
// import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Playground from "./pages/Playground";
import Faq from "./pages/Faq";
// import Dashboard from "./pages/dashboard/Dashboard";

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
            {/* <Route path="dashboard/profile" element={<Dashboard />}></Route> */}
            <Route
              path='dashboard/profile'
              element={
                <Playground />
              }>
            </Route>


            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/faq" element={<Faq></Faq>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;