import './globals.css'
import Link from 'next/link'
import Web3ProviderWrapper from './web3ProviderWrapper'
import StoreProvider from './storeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Web3ProviderWrapper>
          <StoreProvider>
            <Link href="/">go home</Link>
            <Link href="notes">go note</Link>
            <Link href="notes/list">go list</Link>
            <Link href="fetch">go fetch</Link>
            <Link href="counter">go counter</Link>
            {children}
          </StoreProvider>
        </Web3ProviderWrapper>
      </body>
    </html>
  )
}
