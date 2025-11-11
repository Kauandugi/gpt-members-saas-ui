import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Planos from "./pages/Planos";
import Suporte from "./pages/Suporte";
import CentralAjuda from "./pages/CentralAjuda";
import TermosDeUso from "./pages/TermosDeUso";
import GetStarted from "./pages/GetStarted.jsx";
//import Termos from "./pages/Termos";
//import Politicas from "./pages/Politicas";
// (Importe as outras páginas que você criou: Termos, PoliticaDePrivacidade, etc.)

import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-50 text-gray-900 font-display overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/central-de-ajuda" element={<CentralAjuda />} />
        <Route path="/termos" element={<TermosDeUso />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/comece-agora" element={<GetStarted />} />

        <Route
          path="*"
          element={<h1 className="py-20">Página não encontrada</h1>}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
