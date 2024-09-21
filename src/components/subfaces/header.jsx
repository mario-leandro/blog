"use client";
import Image from "next/image";
import Link from "next/link";
import lupa from "@/icons/lupa.svg";
import "@/styles/header.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="top-nav">
            <section className="logo">
              <Link href="/">Blog</Link>
            </section>

            <section className="search-bar">
              <input type="text" placeholder="Pesquisar" />
              <button type="submit">
                <Image src={lupa} alt="icone de lupa"></Image>
              </button>
            </section>

            <section className="sign">
              <Link href="/login">Entrar</Link>
              <Link href="/cadastro">Cadastrar</Link>
            </section>
          </div>

          <div className="bottom-nav">
            <nav className="menu-bar">
              <Link href="/">Início</Link>
              <Link href="/categorias">Categorias</Link>
              <Link href="/postar">Criar Postagem</Link>
              <Link href="/suporte">Suporte</Link>
            </nav>
          </div>

          <div className="mobile-menu">
            <section className="logo">
              <Link href="/">Blog</Link>
            </section>

            <div className="mobile-icons">
              {!menuOpen ? (
                <button>
                  <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                </button>
              ) : (
                <button>
                  <FontAwesomeIcon icon={faXmark} onClick={toggleMenu} />
                </button>
              )}
            </div>

            <div className={`mobile-bar ${menuOpen ? "open" : ""}`}>
              <nav className="menu-bar">
                <Link href="/">Início</Link>
                <Link href="/categorias">Categorias</Link>
                <Link href="/postar">Criar Postagem</Link>
                <Link href="/suporte">Suporte</Link>
              </nav>

              <section className="sign">
                <Link href="/login">Entrar</Link>
                <Link href="/cadastro">Cadastrar</Link>
              </section>

              <section className="search-bar">
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">
                  <Image src={lupa} alt="icone de lupa"></Image>
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
