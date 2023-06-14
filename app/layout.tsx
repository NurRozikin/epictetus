import './globals.css'
import { Inter, Patrick_Hand } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const patrick = Patrick_Hand({ weight : "400", subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Home &mdash; Epictetus</title>
      </head>
      <body className={patrick.className}>{children}</body>
    </html>
  )
}
