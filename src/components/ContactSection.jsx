import { ArrowRight, SendIcon } from "lucide-react";
import { Link } from "react-router-dom";

function ContactSection() {
  return (
    <section className="py-15 bg-slate-50 w-full font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-medium text-gray-500 tracking-widest uppercase">
            DÚVIDAS
          </p>

          {/* Título Principal */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mt-4">
            Ainda tem dúvidas? <br />
            <span className="font-bold text-gray-900">Fale com a gente</span>
          </h2>

          {/* Parágrafo de descrição */}
          <p className="mt-6 text-lg text-gray-500 max-w-lg">
            Nosso time de suporte está disponível 24h por dia, 7 dias por
            semana. Entre em contato e nossa equipe irá te ajudar com tudo que
            você precisar!
          </p>

          {/* Grupo de Botões */}
          <div className="flex items-center justify-center space-x-4 mt-10">
            <Link
              to="/suporte" // 3. ADICIONADA A ROTA DE SUPORTE
              className="flex items-center justify-center bg-brand-blue text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-blue/30"
            >
              <span>Quero Tirar uma dúvida</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>{" "}
            <button className="flex items-center justify-center w-16 h-16 bg-brand-blue text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-blue/30">
              <SendIcon fill="white" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
