import celularImg from "../assets/celular.png";
import "../index.css";
import TickerTape from "./TickerTape";

function DemoSection() {
  return (
    <section className="py-20 bg-slate-50 w-full font-display overflow-hidden">
      {/* Container com largura máxima, alinhado com o resto da página */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container Flex */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/*  Coluna da Esquerda */}
          <div className="flex-1 lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500">Você imagina.</span>
              <br />
              <span className="text-brand-blue">O GPTMembers monta.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-500 font-normal">
              Com o GPTMembers, você monta assistentes inteligentes do seu jeito
              e compartilha com quem quiser: alunos, time, clientes...
            </p>
          </div>

          {/* Coluna da Direita*/}
          <div className="flex-1 lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-sm h-96">
              <img
                src={celularImg}
                alt="Demonstração do GPTMembers em um celular"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-auto h-[110%] z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <TickerTape />
    </section>
  );
}

export default DemoSection;
