import styles from '@/styles/Home.module.css'
import { useContext, useMemo, useState } from 'react'
import useSWR, { Fetcher } from 'swr'


import { FilterProps } from '@/components/Filter'
import { Pagination } from '@/components/Pagination'

import { ListCard } from '@/components/ListCards'
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

    const maxPages =  data?.info?.pages || 1
  
    const characters = data?.results || []

    return(
        <div className={styles.characters}>
          <Title category='Personagens' title='Resultado da busca' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae senectus neque, lorem sit in mattis. Vehicula eget eget tellus' />
          <ListCard isLoading={isLoading} characters={characters} />
          <Pagination actualPage={actualPage} totalPages={maxPages} changePage={setActualPage} />
        </div>
    )
}