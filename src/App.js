import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/index.scss";
import Home from "../src/pages/home";
import Header from "./components/Header";
import Apropos from "./pages/apropos";
import Footer from "./components/Footer";
import NotFound from "./pages/notfound";
import Fichelogement from "./pages/fichelogement";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Fichelogement/:id" element={<Fichelogement />}></Route>
        <Route path="/apropos" element={<Apropos />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
