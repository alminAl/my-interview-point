import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/Shared/NotFound";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
