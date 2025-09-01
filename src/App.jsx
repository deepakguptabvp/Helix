import { Route, BrowserRouter as Router, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
