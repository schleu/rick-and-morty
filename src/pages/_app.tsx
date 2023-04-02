import { Layout } from '@/components/Layout'
import { FavoritesCharactersProvider } from '@/provider/FavoritesCharactersProvider'
import { FilterProvider } from '@/provider/FilterProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <FilterProvider>
        <FavoritesCharactersProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FavoritesCharactersProvider>
      </FilterProvider>
    </main>
  )
}
