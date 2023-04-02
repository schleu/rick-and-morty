
import { FilterProps } from "@/components/Filter";
import { createContext } from "react";

type iFilter = {
    filters: FilterProps,
    handleFilter: (t:FilterProps)=> void,
}

export const FilterContext = createContext<iFilter>({
    filters:{},
    handleFilter: ()=>{},
})