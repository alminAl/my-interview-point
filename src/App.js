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
import SupportPage from "./pages/SupportPage";
import DeleteAccount from "./components/Support/Article/DeleteAccount";
import CreateAccount from "./components/Support/Article/CreateAccount";
import ActivateAccount from "./components/Support/Article/ActivateAccount";
import OrganizationAccount from "./components/Support/Article/OrganizationAccount";
import Requirement from "./components/Support/Article/Requirement";
import Resolve from "./components/Support/Article/Resolve";
import Manage from "./components/Support/Article/Manage";
import Enterprise from "./components/Enterprise/Enterprise";
import Quiz from "./pages/Quiz";
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
            <Route path="/enterprise" element={<Enterprise />} />

            {/* <Route path="dashboard/profile" element={<Dashboard />}></Route> */}
            <Route path="dashboard/profile" element={<Playground />}></Route>

            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/support" element={<SupportPage />}></Route>
            <Route
              path="/support/deleteAccount"
              element={<DeleteAccount />}
            ></Route>
            <Route
              path="/support/createAccount"
              element={<CreateAccount />}
            ></Route>
            <Route
              path="/support/activateAccount"
              element={<ActivateAccount />}
            ></Route>
            <Route
              path="/support/organizationAccount"
              element={<OrganizationAccount />}
            ></Route>
            <Route
              path="/support/requirement"
              element={<Requirement />}
            ></Route>
            <Route path="/support/resolve" element={<Resolve />}></Route>
            <Route path="/support/manage" element={<Manage />}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>

            <Route path="/faq" element={<Faq></Faq>}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
