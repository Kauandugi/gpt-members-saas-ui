import { CheckIcon } from "lucide-react";

function Planos() {
  return (
    // Seção principal com o fundo 'slate-50' (para combinar com outras seções)
    <section className="py-20 bg-slate-50 w-full font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título da Página --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue">
            Planos e Preços
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao seu negócio. Comece de
            graça.
          </p>
        </div>

        {/* --- Grid de Planos (3 Colunas) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Básico (Fundo branco) */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800">Básico</h3>
            <p className="mt-2 text-gray-500">Para quem está começando</p>

            <div className="mt-6">
              <span className="text-5xl font-bold text-brand-dark">R$25</span>
              <span className="text-lg text-gray-500"> /mês</span>
            </div>

            {/* Lista de features (flex-1 força o botão para baixo) */}
            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>1 Agente</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>100 Mensagens/mês</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Suporte via comunidade</span>
              </li>
            </ul>

            {/* Botão */}
            <button className="mt-8 bg-brand-blue text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300 hover:shadow-[0_0_20px] hover:shadow-brand-blue/30 cursor-pointer">
              Comece de Graça
            </button>
          </div>

          {/* Card 2: Pro (Destaque - Fundo azul) */}
          <div className="bg-brand-blue text-white rounded-3xl shadow-2xl p-8 flex flex-col relative">
            {/* Badge de Destaque */}
            <span className="absolute top-0 -translate-y-1/2 bg-brand-green text-brand-dark font-semibold px-4 py-1 rounded-full text-sm">
              Mais Popular
            </span>

            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-2 text-white/80">Para negócios em crescimento</p>

            <div className="mt-6">
              <span className="text-5xl font-bold">R$99</span>
              <span className="text-lg text-white/80"> /mês</span>
            </div>

            {/* Lista de features */}
            <ul className="mt-6 space-y-3 flex-1 text-white/90">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>10 Agentes</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>10.000 Mensagens/mês</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Suporte prioritário via chat</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Integração com WhatsApp</span>
              </li>
            </ul>

            {/* Botão (Estilo principal do site) */}
            <button className="mt-8 bg-brand-green text-brand-dark font-semibold py-3 px-6 rounded-full w-full transition-all duration-300 hover:shadow-[0_0_25px] hover:shadow-brand-green/30 cursor-pointer">
              Comece agora
            </button>
          </div>

          {/* Card 3: Enterprise (Fundo branco) */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800">Enterprise</h3>
            <p className="mt-2 text-gray-500">Para grandes operações</p>

            <div className="mt-6">
              <span className="text-5xl font-bold text-brand-dark">Custom</span>
            </div>

            {/* Lista de features */}
            <ul className="mt-6 space-y-3 flex-1">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Agentes Ilimitados</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Mensagens Ilimitadas</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Gerente de conta dedicado</span>
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 text-brand-green mr-2 shrink-0" />
                <span>Treinamento e Onboarding</span>
              </li>
            </ul>

            {/* Botão */}
            <button className="mt-8 bg-brand-blue text-white font-semibold py-3 px-6 rounded-full w-full transition-all duration-300 hover:shadow-[0_0_20px] hover:shadow-brand-blue/30 cursor-pointer">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planos;
