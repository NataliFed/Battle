import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Battle } from "./components/Battle/index";
import { Home } from "./components/General/Home";
import { Nav } from "./components/General/Nav";
import { NoMatch } from "./components/General/NoMatch";
import { Popular } from "./components/Popular/index";
import Results from "./components/Battle/Results";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="battle" element={<Battle />} />
        <Route path="battle/results" element={<Results />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
