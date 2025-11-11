import { ArrowUpLeftIcon, TriangleIcon } from "lucide-react";
import { Link } from "react-router-dom"; // <-- 1. IMPORTAR O LINK

function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-brand-blue rounded-[80px] py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 text-white">
          {/* Card de Funcionalidade 1 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <span className="flex justify-center items-center rounded-full bg-brand-green w-24 h-16 mb-6 hover:bg-green-500 transition-colors duration-300">
              <ArrowUpLeftIcon color="black" className="w-10 h-10" />
            </span>
            <h3 className="text-3xl font-bold mb-2">Interface Intuitiva</h3>
            <p className="text-lg text-white/80">
              Zero fricção <br /> Máxima produtividade!
            </p>
          </div>

          {/* Card de Funcionalidade 2 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <span className="flex justify-center items-center rounded-full bg-brand-green w-24 h-16 mb-6 hover:bg-green-500 transition-colors duration-300">
              <ArrowUpLeftIcon color="black" className="w-10 h-10" />
            </span>
            <h3 className="text-3xl font-bold mb-2">Criação sem código</h3>
            <p className="text-lg text-white/80">
              Você escreve. <br /> A IA entende!
            </p>
          </div>

          {/* Card de Funcionalidade 3 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            <span className="flex justify-center items-center rounded-full bg-brand-green w-24 h-16 mb-6 hover:bg-green-500 transition-colors duration-300">
              <ArrowUpLeftIcon color="black" className="w-10 h-10" />
            </span>
            <h3 className="text-3xl font-bold mb-2">Compartilhamento rápido</h3>
            <p className="text-lg text-white/80">
              Um link e pronto. <br /> Pronto para ser acessado por quem você
              quiser!
            </p>
          </div>
        </div>{" "}
        {/* Botão "Comece agora" */}
        <div className="flex justify-center mt-16">
          <Link
            to="/comece-agora"
            className="flex items-center justify-center bg-brand-green text-brand-dark font-semibold py-4 px-8 rounded-full hover:bg-green-300 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-green/30"
          >
            <span>Comece agora</span>
            <span className="flex items-center justify-center ml-2 w-7 h-7 bg-brand-dark rounded-full">
              <TriangleIcon fill="white" className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
