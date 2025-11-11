import { useState } from "react";
import { CheckCircle, User, Mail, Building, Users } from "lucide-react";
import Logo from "../assets/logo.svg?react"; // Reutilizando seu logo

function GetStarted() {
  // State para o formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "1-10",
  });

  // State para a mensagem de sucesso
  const [submitted, setSubmitted] = useState(false);

  // Handler para atualizar o state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // !! IMPORTANTE !!
      // Crie um NOVO formulário no Formspree e cole o endpoint aqui.
      // Este endpoint deve ser DIFERENTE do seu formulário de suporte.
      const response = await fetch("https://formspree.io/f/manayodn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true); // Mostra a mensagem de sucesso
      } else {
        alert("Ocorreu um erro ao enviar seus dados. Tente novamente.");
      }
    } catch (error) {
      alert("Ocorreu um erro. Verifique sua conexão.");
    }
  };

  // --- TELA DE SUCESSO ---
  if (submitted) {
    return (
      <section className="py-20 bg-slate-50 w-full font-display flex-1 flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-20 h-20 text-brand-green mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-brand-dark">Tudo certo!</h1>
          <p className="mt-4 text-xl text-gray-600">
            Recebemos seus dados. Nossa equipe de especialistas entrará em
            contato com você nas próximas 24 horas para agendar sua
            demonstração.
          </p>
        </div>
      </section>
    );
  }

  // --- TELA DO FORMULÁRIO ---
  return (
    // 'flex-1' garante que ele ocupe o espaço restante da tela
    <section className="py-20 bg-slate-50 w-full font-display flex-1 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <Logo className="h-12 w-auto" />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-brand-dark">
              Quase lá! Vamos começar.
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Preencha seus dados e um especialista do nosso time entrará em
              contato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            {/* Nome */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Nome completo
              </label>
              <div className="relative mt-2">
                <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  placeholder="Seu nome"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                E-mail de trabalho
              </label>
              <div className="relative mt-2">
                <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  placeholder="voce@empresa.com"
                  required
                />
              </div>
            </div>

            {/* Empresa (Opcional) */}
            <div>
              <label
                htmlFor="company"
                className="block text-lg font-medium text-gray-700"
              >
                Nome da Empresa{" "}
                <span className="text-gray-400 font-normal">(Opcional)</span>
              </label>
              <div className="relative mt-2">
                <Building className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                  placeholder="Sua empresa"
                />
              </div>
            </div>

            {/* Tamanho do Time */}
            <div>
              <label
                htmlFor="teamSize"
                className="block text-lg font-medium text-gray-700"
              >
                Quantas pessoas no seu time?
              </label>
              <div className="relative mt-2">
                <Users className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:outline-none bg-white"
                >
                  <option>1-10 pessoas</option>
                  <option>11-50 pessoas</option>
                  <option>51-200 pessoas</option>
                  <option>200+ pessoas</option>
                </select>
              </div>
            </div>

            {/* Botão de Envio (Estilo do CTA) */}
            <div>
              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center bg-brand-green text-brand-dark font-semibold py-4 px-8 rounded-full hover:bg-green-300 transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px] hover:shadow-brand-green/30"
              >
                <span>Enviar e agendar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
