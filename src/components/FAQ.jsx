import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "../index.css";
import TickerTape from "./TickerTape";

//JSON de testes
const faqData = [
  {
    id: 1,
    question: "Preciso saber programar para usar o GPTMembers?",
    answer:
      "Não! A plataforma foi desenhada para ser totalmente 'no-code'. Se você sabe escrever um texto, você sabe criar e treinar um agente.",
  },
  {
    id: 2,
    question: "Quantos agentes posso criar?",
    answer:
      "O número de agentes depende do plano escolhido. Oferecemos um plano gratuito para começar e planos avançados com agentes ilimitados.",
  },
  {
    id: 3,
    question: "Posso restringir quem acessa meus agentes?",
    answer:
      "Sim. Você tem controle total de permissões, podendo deixar um agente público, privado (só para você) ou restrito a membros específicos.",
  },
  {
    id: 4,
    question: "Qual o valor para usar a plataforma?",
    answer:
      "Temos um plano gratuito com recursos essenciais e planos pagos com funcionalidades avançadas. Você pode consultar todos os valores na nossa página de Preços.",
  },
  {
    id: 5,
    question: "Por quanto tempo a plataforma fica disponível para mim?",
    answer:
      "Enquanto sua assinatura estiver ativa, seus agentes e dados estarão sempre disponíveis 24/7.",
  },
  {
    id: 6,
    question: "Onde posso tirar dúvidas ou reportar um problema?",
    answer:
      "Temos um canal de suporte dedicado! Você pode nos enviar um e-mail ou falar conosco diretamente pelo chat dentro da plataforma.",
  },
];

function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50 w-full font-display overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-brand-blue text-center mb-16">
          Dúvidas Frequentes (FAQ)
        </h2>

        {/* Container da lista (centralizado e com largura máxima) */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* 5. Mapeamento do JSON para criar os itens */}
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-brand-green rounded-lg overflow-hidden"
            >
              {/* A Pergunta (o botão clicável) */}
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex justify-between items-center p-5 text-left  hover: cursor-pointer"
              >
                <span className="text-lg font-medium text-gray-700">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-brand-blue transition-transform duration-300 hover: cursor-pointer ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Resposta expansível */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0">
                  <p className="text-gray-500">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TickerTape />
    </section>
  );
}

export default FAQSection;
