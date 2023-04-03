import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import zod from 'zod';

import { gender, status } from '@/types';
import styles from './styles.module.css';
import { useContext } from 'react';
import { FilterContext } from '@/context/FilterContext';

const zGenderEnum = zod.enum([...gender,'']) 
const zStatusEnum = zod.enum([...status,''])

const schema = zod.object({
    name: zod.string().optional(),
    gender: zGenderEnum.optional(),
    status: zStatusEnum.optional(),
});

export type FilterProps = zod.infer<typeof schema>;

export const Filter = ()=>{  

    const {filters, handleFilter} = useContext(FilterContext)
    
    const { register, handleSubmit} = useForm<FilterProps>({
        defaultValues:filters,
    })

    const onSubmit = handleSubmit((e)=> handleFilter(e)); 

    return (    
        <div className={styles.filter}>
            <form data-testid="filterForm" onSubmit={onSubmit}>

                <div className={styles.filterName}>
                    <input data-testid="name" type="text"  placeholder="Digite o nome do personagem"  {...register('name')}/>
                </div>

                <select data-testid="gender" {...register('gender')} >
                    <option value="" >Gender</option>
                    {gender.map(e=>
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
                
                <select data-testid="status" {...register('status')} >
                    <option value="" >Status</option>
                    {status.map(e=>
                        <option key={e} value={e}>{e}</option>
                    )}
                </select>
                
                <button aria-label='pesquisar' title='pesquisar' data-testid="search"  type="submit">
                    <span>Pesquisar</span>
                </button>
            </form>
        </div>
    )
}