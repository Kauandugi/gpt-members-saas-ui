function TermosDeUso() {
  return (
    <section className="py-20 bg-white w-full font-display">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue">
            Termos de Uso
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Última atualização: 03 de novembro de 2025
          </p>
        </div>

        {/* Container do Conteúdo */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-brand-dark">
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar e usar a plataforma GPTMembers ("Serviço"), você concorda
            em cumprir e aceitar estes Termos de Uso e nossa Política de
            Privacidade. Se você não concorda com estes termos, não utilize
            nosso Serviço.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            2. Descrição do Serviço
          </h2>
          <p>
            O GPTMembers é uma plataforma de software como serviço (SaaS) que
            permite aos usuários criar, gerenciar, treinar e compartilhar
            assistentes de inteligência artificial ("Agentes"). Os usuários
            podem fornecer dados e conteúdos para treinar seus Agentes e
            compartilhá-los com públicos específicos (alunos, clientes, times,
            etc.).
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            3. Contas de Usuário
          </h2>
          <p>
            Para acessar o Serviço, você deve se registrar e criar uma conta.
            Você é responsável por manter a confidencialidade de sua senha e por
            todas as atividades que ocorram em sua conta. Você concorda em nos
            notificar imediatamente sobre qualquer uso não autorizado de sua
            conta.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            4. Conteúdo do Usuário e Responsabilidades
          </h2>
          <p>
            Você retém todos os direitos de propriedade sobre o conteúdo
            (textos, documentos, etc.) que você envia para treinar seus Agentes
            ("Conteúdo do Usuário"). Você nos concede uma licença limitada para
            usar, processar e exibir seu Conteúdo do Usuário exclusivamente para
            operar e fornecer o Serviço a você.
          </p>
          <p>
            Você é o único responsável pela precisão, qualidade e legalidade do
            seu Conteúdo do Usuário. Você não deve enviar informações sensíveis,
            confidenciais ou ilegais.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            5. Uso da Inteligência Artificial e Limitações
          </h2>
          <p>
            O Serviço utiliza modelos de linguagem de grande escala (LLMs) para
            gerar respostas ("Resultados"). Devido à natureza da IA, os
            Resultados podem conter imprecisões, erros ou informações
            desatualizadas.
          </p>
          <p>
            <strong>
              O GPTMembers não garante a precisão ou veracidade de qualquer
              Resultado gerado pela IA.
            </strong>{" "}
            Você é inteiramente responsável por revisar e validar os Resultados
            antes de usá-los para qualquer finalidade. O uso dos Resultados da
            IA é por sua conta e risco.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            6. Pagamentos e Assinaturas
          </h2>
          <p>
            Nossos planos pagos são cobrados de forma recorrente (mensal ou
            anual). As taxas são cobradas antecipadamente e não são
            reembolsáveis. Se o pagamento falhar, podemos suspender o acesso aos
            recursos pagos do Serviço. Os detalhes completos estão disponíveis
            em nossa página{" "}
            <a href="/planos" className="text-brand-blue hover:underline">
              Planos e Preços
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            7. Limitação de Responsabilidade
          </h2>
          <p>
            O Serviço é fornecido "COMO ESTÁ". Em nenhuma circunstância o
            GPTMembers será responsável por quaisquer danos diretos, indiretos,
            incidentais ou consequenciais resultantes do uso ou da incapacidade
            de usar o Serviço.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">
            8. Modificações nos Termos
          </h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos a qualquer
            momento. Notificaremos você sobre quaisquer alterações publicando os
            novos Termos nesta página. Seu uso continuado do Serviço após tais
            alterações constitui sua aceitação dos novos Termos.
          </p>

          {/* Disclaimer de Exemplo */}
          <div className="mt-12 p-6 bg-brand-gray rounded-2xl border border-gray-200">
            <p className="font-bold text-brand-dark">Aviso Importante:</p>
            <p className="italic text-gray-700">
              Este é um documento de exemplo e não constitui aconselhamento
              jurídico. Consulte um profissional legal qualificado para redigir
              os Termos de Uso oficiais para o seu serviço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermosDeUso;
