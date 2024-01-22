import { Inter } from "next/font/google"
import "@/css/globals.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Blog",
  description: "Projeto de blog com Next.js e Sass",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
