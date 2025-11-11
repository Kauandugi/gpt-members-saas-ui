import "../index.css"; // Garante que a animação seja carregada

const TickerText = () => (
  <span className="text-white font-light italic text-base mx-8">
    GPTMembers
  </span>
);

function TickerTape() {
  return (
    <div className="w-full bg-brand-blue py-2 mt-30 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-slow">
        {/* Bloco 1 */}
        <TickerText /> <TickerText /> <TickerText /> <TickerText />
        <TickerText /> <TickerText /> <TickerText /> <TickerText />
        <TickerText /> <TickerText /> <TickerText /> <TickerText />
        <TickerText /> <TickerText />
        {/* Bloco 2 (Cópia) */}
        <TickerText /> <TickerText /> <TickerText /> <TickerText />
        <TickerText /> <TickerText /> <TickerText /> <TickerText />
        <TickerText /> <TickerText /> <TickerText /> <TickerText />
        <TickerText /> <TickerText />
      </div>
    </div>
  );
}

export default TickerTape;
