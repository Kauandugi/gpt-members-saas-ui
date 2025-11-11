import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="w-full bg-brand-blue text-white font-display mt-20 rounded-t-3xl">
      {/* Container 'max-w-7xl' para alinhar o conteúdo com o resto do site */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Grade de 3 colunas para os links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Navegação */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase opacity-60">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#top" // Podemos usar um ID genérico como #top
                  smooth
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-lg hover:underline"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/#como-funciona"
                  smooth
                  className="text-lg hover:underline"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-lg hover:underline">
                  Planos e preços
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Recursos */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase opacity-60">
              Recursos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/central-de-ajuda"
                  className="text-lg hover:underline"
                >
                  Central de ajuda
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-lg hover:underline">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase opacity-60">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/suporte" className="text-lg hover:underline">
                  Suporte
                </Link>
              </li>
              {/* Para e-mails, usamos um <a> padrão com 'mailto:' */}
              <li>
                <a
                  href="mailto:contato@gptmembers.com"
                  className="text-lg hover:underline"
                >
                  contato@gptmembers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor e Copyright */}
        <hr className="my-12 border-white/20" />
        <div className="text-center text-white/80">
          <p>&copy; 2025 GPTMembers. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
