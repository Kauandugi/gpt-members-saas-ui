function ComoFunciona() {
  return (
    // Seção principal com padding vertical e fundo (ajuste o bg se necessário)
    <section className="py-20 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-px bg-brand-green" />
        {/* Título da Seção */}
        <h2 className="mt-25 text-4xl font-bold text-brand-blue text-center mb-16">
          Como o GPTMembers funciona?
        </h2>

        {/* Grade de 3 Colunas */}
        <div className="flex flex-col lg:flex-row justify-between gap-30">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            {/* Ícone Numerado */}
            <div className="flex items-center justify-center w-17 h-17 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md bg-brand-gray mb-4 hover:bg-blue-100 transition-colors duration-300">
              <span className="text-2xl font-bold text-brand-blue">1</span>
            </div>
            {/* Título do Card */}
            <h3 className="text-2xl font-bold text-brand-blue mb-2 w-80">
              Crie seu agente com facilidade
            </h3>
            {/* Descrição do Card */}
            <p className="text-lg text-gray-500 my-4">
              Escolha um nome, defina sua função e envie os conteúdos. Pronto!
              Sem códigos, sem dor de cabeça.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            {/* Ícone Numerado */}
            <div className="flex items-center justify-center w-17 h-17 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md bg-brand-gray mb-4 hover:bg-blue-100 transition-colors duration-300">
              <span className="text-2xl font-bold text-brand-blue">2</span>
            </div>
            {/* Título do Card */}
            <h3 className="text-2xl font-bold text-brand-blue mb-2 w-80">
              Compartilhe com quem quiser
            </h3>
            {/* Descrição do Card */}
            <p className="text-lg text-gray-500 my-4">
              Envie um link e permita que seus alunos, funcionários ou
              seguidores acessem o agente de IA instantaneamente.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center lg:w-1/3">
            {/* Ícone Numerado */}
            <div className="flex items-center justify-center w-17 h-17 rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-md bg-brand-gray mb-4 hover:bg-blue-100 transition-colors duration-300">
              <span className="text-2xl font-bold text-brand-blue">3</span>
            </div>
            {/* Título do Card */}
            <h3 className="text-2xl font-bold text-brand-blue mb-2 w-80">
              Organize tudo com eficiência
            </h3>
            {/* Descrição do Card */}
            <p className="text-lg text-gray-500 my-4">
              Tenha controle total sobre seus agentes, permissões e acessos.
              Tudo em um painel visual e intuitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
