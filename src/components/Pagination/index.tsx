import styles from './styles.module.css'

type iProps={    
    changePage: (i:number)=>void;
    actualPage:number;
    totalPages: number;
}

export function Pagination({actualPage,totalPages,changePage}:iProps){

    function previousPage(){
        const page = actualPage>1 ? actualPage-1 : 1
        changePage(page)
    }
    function nextPage(){
        const page = actualPage < totalPages ? actualPage +1 : totalPages
        changePage(page)
    }

    return(
        <div className={styles.pagination}>
            <button aria-label='pagina anterior' title='pagina anterior' onClick={previousPage}>
                <span>{"<"}</span>
            </button>
            <p>
                {`${actualPage} de ${totalPages}`}
            </p>
            <button aria-label='proxima pagina' title='proxima pagina' onClick={nextPage}>
                <span>{">"}</span>
            </button>
        </div>
    )
}