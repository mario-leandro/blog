import "@/css/footer.scss"
import Link from "next/link"

export default function Footer() {
    return (
        <footer>
            <div className="list-container">
                <div className="dev">
                    <h4>Desenvolvedores</h4>
                    <ul className="listDev">
                        <li>
                            <Link href="https://mario-leandro.vercel.app/">Mario Leandro</Link>
                        </li>
                    </ul>
                </div>

                <div className="social">
                    <h4>Redes Sociais</h4>
                    <ul className="listSocial">
                        <li>
                            <Link href="https://github.com/mario-leandro">Github</Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/dev-mariosilva/">Linkedin</Link>
                        </li>
                    </ul>
                </div>

                <div className="about">
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
        </footer>
    )
}