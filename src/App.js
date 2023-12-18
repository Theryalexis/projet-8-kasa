import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.scss";
import Home from "../src/pages/home";
import Header from "./components/Header";
import Apropos from "./pages/apropos";
import Footer from "./components/Footer";
import NotFound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apropros" element={<Apropos />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
