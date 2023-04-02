import { FilterProps } from '@/components/Filter'
import { localStorageKeys } from '@/contants'
import {FilterContext} from '@/context/FilterContext'
import {ReactNode, useState, useEffect} from 'react'
import { useLocalStorage } from 'react-use'

type Props = {
    children: ReactNode
}

export function FilterProvider({children}:Props){
    
    const [filtersLS] = useLocalStorage<FilterProps>(localStorageKeys.FILTERS);
    const [filters, setFilters] = useState<FilterProps>(filtersLS || {})

    useEffect(()=>{
        localStorage.setItem(localStorageKeys.FILTERS ,JSON.stringify(filters))
    },[filters])

    const handleFilter = (fil:FilterProps) => {
        setFilters(fil)
    }

    return <FilterContext.Provider value={{
        filters,
        handleFilter,
    }}>
        {children}
    </FilterContext.Provider>
}