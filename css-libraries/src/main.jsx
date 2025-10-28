import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MUI from "./pages/MUI/MUI.jsx";
import AntDesign from "./pages/AntDesign/AntDesign.jsx";
import ShadcnUI from "./pages/ShadcnUI/ShadcnUI.jsx";
import ChakraUI from "./pages/ChakraUI/ChakraUI.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mui" element={<MUI />} />
      <Route path="/antdesign" element={<AntDesign />} />
      <Route path="/shadcnui" element={<ShadcnUI />} />
      <Route path="/chakraui" element={<ChakraUI />} />
    </Routes>
  </BrowserRouter>
);
