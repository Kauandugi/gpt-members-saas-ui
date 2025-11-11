import { StarIcon } from "lucide-react";

//JSON de testes com os dados
const testimonialsData = [
  {
    id: 1,
    name: "Serge Rehem",
    quote:
      "Em minutos, criei um assistente para meus alunos acessarem o conteúdo do curso. Salvou meu suporte!",
  },
  {
    id: 2,
    name: "Maria Helena",
    quote:
      "Criei um agente com todas as dúvidas frequentes e agora consigo focar no que realmente importa: crescer meu negócio.",
  },
  {
    id: 3,
    name: "Kauan Henrick",
    quote:
      "Transformei um manual de onboarding inteiro em um chatbot interno. O time adorou!!!",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 w-full font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <h2 className="text-4xl font-bold text-brand-blue text-center mb-16">
          Depoimentos e Provas Sociais:
        </h2>

        {/* Grade responsiva. 
          1 coluna em mobile, 2 em tablet, 3 em desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 4. Mapeamento do JSON para renderizar os cards */}
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              // Card
              className="bg-brand-gray rounded-3xl p-8 flex flex-col h-full"
            >
              {/* Info do Usuário */}
              <div className="flex items-center mb-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                <span className="font-semibold text-gray-700">
                  {testimonial.name}
                </span>
              </div>

              <p className="text-lg italic text-gray-800 flex-1 mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex text-yellow-400">
                <StarIcon fill="currentColor" className="w-6 h-6" />
                <StarIcon fill="currentColor" className="w-6 h-6" />
                <StarIcon fill="currentColor" className="w-6 h-6" />
                <StarIcon fill="currentColor" className="w-6 h-6" />
                <StarIcon fill="currentColor" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
