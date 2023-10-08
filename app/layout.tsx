import './globals.css'

export const metadata = {
  title: 'PocketSub',
  description: 'Menage your payments with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
