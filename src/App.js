import { useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NoPage from "./404";
import ReactDOM from "react-dom/client";


export default function App() {
  useEffect(() => {
    document.body.style.zoom = "100%";
  }, []);
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
