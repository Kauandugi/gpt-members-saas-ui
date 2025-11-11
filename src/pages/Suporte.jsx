// src/pages/Suporte.jsx

// 1. Importe 'useState' e o ícone de 'CheckCircle'
import { useState } from "react";
import { LifeBuoyIcon, MailIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function Suporte() {
  // 2. State para o formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Dúvida sobre Agentes", // Valor padrão
    message: "",
  });

  // 3. State para a mensagem de sucesso
  const [submitted, setSubmitted] = useState(false);

  // 4. Handler para atualizar o state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // 5. Handler para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    try {
      const response = await fetch("https://formspree.io/f/mgvrekzn", {
        // <-- SEU ENDPOINT AQUI
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Mostra a mensagem de sucesso
        setFormData({
          name: "",
          email: "",
          subject: "Dúvida sobre Agentes",
          message: "",
        }); // Limpa o formulário
      } else {
        alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
      }
    } catch (error) {
      alert("Ocorreu um erro. Verifique sua conexão.");
    }
  };

  // 6. Se o formulário foi enviado, mostre a mensagem de sucesso
  if (submitted) {
    return (
      <section className="py-20 bg-slate-50 w-full font-display">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-dark">
            Mensagem Enviada!
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Obrigado por entrar em contato. Nossa equipe responderá em breve.
          </p>
        </div>
      </section>
    );
  }

  // 7. Se não foi enviado, mostre o formulário
  return (
    <section className="py-20 bg-slate-50 w-full font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Título da Página --- */}
        <div className="text-center mb-16">
          <LifeBuoyIcon className="w-16 h-16 text-brand-blue mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue">
            Suporte ao Cliente
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Preencha o formulário abaixo ou consulte
            nossos tópicos de ajuda.
          </p>
        </div>

        {/* --- Layout de 2 Colunas: Formulário + Info --- */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Coluna da Esquerda: Formulário de Contato */}
          <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Envie sua dúvida
            </h2>

            {/* 8. Formulário agora usa 'onSubmit' */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} // <-- Conectado ao state
                  onChange={handleChange} // <-- Conectado ao state
                  className="mt-2 block w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Seu e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email} // <-- Conectado ao state
                  onChange={handleChange} // <-- Conectado ao state
                  className="mt-2 block w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  placeholder="voce@email.com"
                  required
                />
              </div>

              {/* Assunto */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium text-gray-700"
                >
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject} // <-- Conectado ao state
                  onChange={handleChange} // <-- Conectado ao state
                  className="mt-2 block w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none bg-white"
                >
                  <option>Dúvida sobre Agentes</option>
                  <option>Problema com Pagamento</option>
                  <option>Reportar um Bug</option>
                  <option>Outro</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-700"
                >
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message} // <-- Conectado ao state
                  onChange={handleChange} // <-- Conectado ao state
                  className="mt-2 block w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  placeholder="Descreva seu problema ou dúvida em detalhes..."
                  required
                ></textarea>
              </div>

              {/* Botão de Envio (Estilo do ContactSection) */}
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-brand-blue text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-blue/30"
                >
                  <span>Enviar Mensagem</span>
                </button>
              </div>
            </form>
          </div>

          {/* Coluna da Direita: Links Rápidos */}
          <div className="lg:w-1/3 space-y-8">
            {/* Card 1: Central de Ajuda */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark">
                Central de Ajuda
              </h3>
              <p className="text-lg text-gray-500 mt-2 mb-4">
                Encontre respostas imediatas na nossa central de ajuda e FAQ.
              </p>
              <Link
                to="/central-de-ajuda"
                className="font-semibold text-brand-blue hover:underline"
              >
                Ir para a Central de Ajuda &rarr;
              </Link>
            </div>

            {/* Card 2: Email */}
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <MailIcon className="w-10 h-10 text-brand-blue" />
              <h3 className="text-2xl font-bold text-brand-dark mt-4">
                Email Direto
              </h3>
              <p className="text-lg text-gray-500 mt-2 mb-4">
                Prefere enviar um e-mail? Use nosso endereço de suporte.
              </p>
              <a
                href="mailto:contato@gptmembers.com"
                className="font-semibold text-brand-blue hover:underline"
              >
                contato@gptmembers.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Suporte;
