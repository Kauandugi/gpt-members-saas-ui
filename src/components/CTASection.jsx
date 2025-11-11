import { TriangleIcon } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="flex flex-col items-center py-20 bg-slate-50 w-full font-display">
      <div className="w-7xl h-px bg-brand-green my-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col items-center text-center">
          {/* Título da Seção */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-brand-blue">Pronto para criar seu </span>
            {/* Bloco com o fundo verde */}
            <span className="bg-brand-green text-brand-dark px-4 py-1 ml-2">
              Primeiro agente de IA?
            </span>
          </h2>

          {/* Parágrafo de descrição */}
          <p className="mt-6 text-xl text-gray-500 max-w-3xl">
            Em poucos cliques, você transforma ideias em agentes inteligentes,
            compartilha conhecimento com agilidade, otimiza processos do seu
            negócio e cria experiências personalizadas com inteligência
            artificial — Tudo de forma Simples, Moderna e Eficiente.
          </p>

          <div className="flex justify-center mt-10">
            <Link
              to="/comece-agora"
              className="flex items-center justify-center bg-brand-green text-brand-dark font-semibold py-4 px-8 rounded-full hover:bg-green-300 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-green/30"
            >
              <span>Comece agora</span>
              <span className="flex items-center justify-center ml-2 w-7 h-7 bg-brand-dark rounded-full">
                <TriangleIcon fill="white" className="w-3.5 h-3.5" />
              </span>
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
