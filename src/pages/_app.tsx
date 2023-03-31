import { Layout } from '@/components/Layout'
import { FavoritesCharactersProvider } from '@/provider/FavoritesCharactersProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesCharactersProvider>
      <Layout>

      <Component {...pageProps} />
      </Layout>
    </FavoritesCharactersProvider>
  )
}
