import { ArrowUpLeftIcon, TriangleIcon } from "lucide-react";
import "../App.css";
import Icone from "../assets/Icone.svg?react";
import ComoFunciona from "../components/ComoFunciona";
import Features from "../components/Features";
import Logo from "../assets/logo.svg?react";
import DemoSection from "../components/DemoSection";
import TestimonialsSection from "../components/TestsSelection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQ";
import ContactSection from "../components/ContactSection.jsx";

// 1. Adicione a importação do Link
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main className="flex flex-col md:flex-row items-center max-w-7xl mx-auto mt-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 py-15 p-3">
          <Logo className="h-15 w-auto mb-4" />
          <h1 className="text-4xl md:text-5xl leading-tight font-bold text-brand-blue">
            Crie e compartilhe seus agentes de IA:{" "}
            <span className="font-normal">
              Tão fácil quanto conversar no WhatsApp. Mais organizado que o
              ChatGPT.
            </span>
          </h1>
          <p className="text-lg text-gray-500">
            Transforme seus processos em assistentes inteligentes prontos para
            usar do seu jeito, sem complicações.
          </p>

          <div className="flex items-center space-x-4 pt-4">
            {/* Botão "Comece agora" (agora como Link e com estilos atualizados) */}
            <Link
              to="/comece-agora"
              className="flex items-center justify-center bg-brand-green text-brand-dark font-semibold py-4 px-8 rounded-full hover:bg-green-300 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-green/30"
            >
              <span>Comece agora</span>
              <span className="flex items-center justify-center ml-2 w-7 h-7 bg-brand-dark rounded-full">
                <TriangleIcon fill="white" className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/comece-agora"
              className="flex items-center justify-center w-16 h-16 bg-brand-green text-brand-dark rounded-full shadow-lg hover:bg-green-300 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-green/30"
            >
              <ArrowUpLeftIcon className="w-7 h-7" />
            </Link>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 md:ml-12">
          <Icone className="w-[450px] h-auto max-w-lg mx-auto animate-float" />
        </div>
      </main>

      {/* Seções da Página */}
      <div id="como-funciona">
        <ComoFunciona />
      </div>
      <Features />
      <DemoSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
