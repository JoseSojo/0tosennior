import './globals.css';


export const metadata = {
  title: '0 to Sennior',
  description: 'Pagina Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='bg-grey-800'>{children}</body>
    </html>
  )
}
