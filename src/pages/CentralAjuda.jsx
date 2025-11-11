import { Search, User, Box, CreditCard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import FAQSection from "../components/FAQ";

function CentralAjuda() {
  return (
    <div className="w-full font-display">
      <section className="py-20 bg-slate-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue text-center">
            Central de Ajuda
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl text-center">
            Como podemos ajudar? Encontre respostas rápidas abaixo.
          </p>

          {/* Barra de Busca */}
          <div className="relative w-full max-w-2xl mt-8">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pesquise por tópicos ou perguntas..."
              className="w-full p-4 pl-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* --- Seção de Categorias --- */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
            Tópicos Populares
          </h2>

          {/* Grade de 3 colunas (como em Planos.jsx) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Conta */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <User className="w-12 h-12 text-brand-blue" />
              <h3 className="text-2xl font-bold text-brand-dark mt-4">
                Sua Conta
              </h3>
              <p className="text-lg text-gray-500 mt-2">
                Gerencie seu perfil, senha e configurações de segurança.
              </p>
            </div>

            {/* Card 2: Agentes */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <Box className="w-12 h-12 text-brand-blue" />
              <h3 className="text-2xl font-bold text-brand-dark mt-4">
                Agentes e IA
              </h3>
              <p className="text-lg text-gray-500 mt-2">
                Aprenda a criar, treinar e compartilhar seus agentes.
              </p>
            </div>

            {/* Card 3: Pagamentos */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <CreditCard className="w-12 h-12 text-brand-blue" />
              <h3 className="text-2xl font-bold text-brand-dark mt-4">
                Planos e Pagamentos
              </h3>
              <p className="text-lg text-gray-500 mt-2">
                Veja detalhes sobre sua assinatura, faturas e limites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="py-20 bg-white w-full">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="w-full h-px bg-brand-green" />
          <h2 className="text-3xl font-bold text-brand-dark mt-16">
            Não encontrou o que procurava?
          </h2>
          <p className="text-xl text-gray-500 mt-4 mb-8">
            Nosso time de suporte está pronto para ajudar.
          </p>
          <Link
            to="/suporte"
            className="inline-flex items-center justify-center bg-brand-blue text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-blue/30"
          >
            <span>Falar com o Suporte</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CentralAjuda;
