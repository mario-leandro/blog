import Image from 'next/image'
import Link from 'next/link'
import lupa from '@/icons/lupa.svg'
import "@/css/header.scss"

export default function Header() {
    return (
        <header className="header"> 
            <div className="top-nav">
                <section className="logo">
                    <Link href="/">Blog</Link>
                </section>

                <section className="search-bar">
                    <input type="text" placeholder="Pesquisar" />
                    <button type="submit">
                        <Image src={lupa}></Image>
                    </button>
                </section>

                <section className="sign">
                    <Link href="/login">Entrar</Link>
                    <Link href="/cadastro">Cadastrar</Link>
                </section>
            </div>

            <div className="bottom-nav">
                <nav className="nav-bar">
                    <Link href="/">Início</Link>
                    <Link href="/categorias">Categorias</Link>
                    <Link href="/postar">Criar Postagem</Link>
                    <Link href="/suporte">Suporte</Link>
                </nav>
            </div>
        </header>
    )
}