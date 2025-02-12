import Link from "next/link"
import "@/styles/mainCadastro.sass"

export default function MainCadastro() {
    return (
        <main>
            <div className="container">
                <div className="title">
                    <h1>Crie sua conta</h1>
                </div>

                <div className="form-container">
                    <form method="POST">
                        <div className="data-input">
                            <div className="inputs">
                                <label htmlFor="user">Usuário</label>
                                <input type="text" name="user" id="user" required />
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" required />
                                <label htmlFor="password">Senha</label>
                                <input type="password" name="password" id="password" required />
                                <label htmlFor="cPassword">Confirme a senha</label>
                                <input type="password" name="cPassword" id="cPassword" required />
                            </div>
                        </div>

                        <div className="account">
                            <p>Já tem conta?<Link href="/login">Entre na sua conta</Link></p>
                        </div>

                        <div className="button">
                            <button type="submit">Criar conta</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}