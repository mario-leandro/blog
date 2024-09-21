import "@/styles/footer.sass";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="logo">
            <h1>Blog</h1>
          </div>

          <div className="list-container">
            <div className="list">
              <h4>Desenvolvedores</h4>
              <ul className="listDev">
                <li>
                  <Link href="https://mario-leandro.vercel.app/" target="_blank">
                    Mario Leandro
                  </Link>
                </li>
              </ul>
            </div>

            <div className="list">
              <h4>Redes Sociais</h4>
              <ul className="listSocial">
                <li>
                  <Link href="https://github.com/mario-leandro" target="_blank">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/dev-mariosilva/" target="_blank">
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>

            <div className="list">
              <h4>Sobre</h4>
              <ul className="listAbout">
                <li>
                  <Link href="/sobre">Quem Somos</Link>
                </li>
                <li>
                  <Link href="/suporte">Suporte</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
                <li>
                  <Link href="/">Repositório</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="copy">
            <p>©2024 Blog. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
