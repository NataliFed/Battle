import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Battle } from "./components/Battle";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { NoMatch } from "./components/NoMatch";
import { Popular } from "./components/Popular";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="battle" element={<Battle />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
