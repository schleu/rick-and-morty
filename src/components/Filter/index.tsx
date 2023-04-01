import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import zod from 'zod';

import { gender, status } from '@/types';
import styles from './styles.module.css';

const zGenderEnum = zod.enum([...gender,'']) 
const zStatusEnum = zod.enum([...status,''])

const schema = zod.object({
    name: zod.string().optional(),
    gender: zGenderEnum.optional(),
    status: zStatusEnum.optional(),
});

export type FilterProps = zod.infer<typeof schema>;

interface iProps{
    setFilters:(any:FilterProps)=>void
    filter?:FilterProps
}

export const Filter = ({setFilters,filter}:iProps)=>{  
    
    const { register, handleSubmit} = useForm<FilterProps>({
        defaultValues:filter,
    })

    const onSubmit = handleSubmit((e)=>setFilters(e)); 

    return (    
        <div className={styles.filter}>
            
            <div className={styles.title}>
                Filtro
            </div>
            <form data-testid="filterForm" onSubmit={onSubmit}>

                <input data-testid="name" type="text"  placeholder="personagem"  {...register('name')}/>

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
                
                <button data-testid="search"  type="submit">Pesquisar</button>
            </form>
        </div>
    )
}