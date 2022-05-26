import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/buy" element={<Homepage />} />
        <Route path="/sell" element={<h1>about</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
