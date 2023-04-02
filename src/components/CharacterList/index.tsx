import styles from './style.module.css'
import { useContext, useMemo, useState } from 'react'
import useSWR, { Fetcher } from 'swr'


import { Pagination } from '@/components/Pagination'

import { ListCard } from '@/components/ListCards/index'
import { ApiRoutes } from '@/contants/ApiRoutes'
import { response } from '@/types'

import { Title } from '@/components/Title'
import { FilterContext } from '@/context/FilterContext'
export function CharacterList(){

    const [actualPage, setActualPage] = useState(1)  

    const { filters } = useContext(FilterContext)

    const urlApi = useMemo(() => {
      let newUrl = String(ApiRoutes.characters);
      
      const characterFilter = new URLSearchParams(Object(filters)).toString()
      newUrl += `?page=${actualPage}&${characterFilter}`
  
      return newUrl
    },[filters, actualPage])
    

    const fetcherResponse:Fetcher<response> = (args: RequestInfo | URL) => fetch(args).then(res => res.json())

    const { data, isLoading } = useSWR(urlApi, fetcherResponse)

    const maxPages =  data?.info?.pages || 0
  
    const characters = data?.results || []

    return(
        <div className={styles.main}>
          <Title 
            category='Personagens' 
            title='Resultado da busca' 
            description='Uma série animada de ficção científica sobre as aventuras caóticas de um cientista excêntrico e seu neto.' 
          />
          <div className={styles.container}>
            {characters.length ? (
              <>
                <ListCard 
                  isLoading={isLoading} 
                  characters={characters} 
                />
                <Pagination 
                  actualPage={actualPage} 
                  totalPages={maxPages} 
                  changePage={setActualPage} 
                />
              </>
            ):(
              "Nenhum personagem encontrado"
            )}

          </div>
        </div>
    )
}