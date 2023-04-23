import './globals.css'
import Nav from './components/Nav'


export const metadata = {
  title: 'SueñAI',
  description: 'Dream Art Gallery',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
     
      <body className='bg-luz dark:bg-blackHole'>{children}</body>
    </html>
  )
}
