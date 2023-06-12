export const metadata = {
  title: 'Studio | Dead Cereal',
  description: 'Dead Cereal, an independent publishing house.',
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
