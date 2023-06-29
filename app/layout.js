import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CMS',
  description: 'CMS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
