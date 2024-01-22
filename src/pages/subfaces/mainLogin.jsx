import Link from "next/link"
import "@/css/mainLogin.scss"

export default function MainLogin() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h1>Entre na sua conta</h1>
                </div>

                <div className="form-container">
                    <form method="POST">
                        <div className="data-input">
                            <div className="inputs">
                                <label htmlFor="user">Usuário ou E-mail</label>
                                <input type="text" name="email" id="email" required />
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="password" required />
                            </div>

                            <div className="remember">
                                <p><input type="checkbox" name="check" /> Mantenha-me conectado</p>
                                <Link href="/">Esqueceu sua senha?</Link>
                            </div>
                        </div>

                        <div className="account">
                            <p>Não tem conta?<Link href="/cadastro">Crie sua conta</Link></p>
                        </div>

                        <div className="button">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}