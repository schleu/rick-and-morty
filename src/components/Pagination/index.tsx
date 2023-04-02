import styles from './styles.module.css'

type iProps={    
    changePage: (i:number)=>void;
    actualPage:number;
    totalPages: number;
}

export function Pagination({actualPage,totalPages,changePage}:iProps){

    function fisrtPage(){
        changePage(1)
    }
    function previousPage(){
        const page = actualPage>1 ? actualPage-1 : 1
        changePage(page)
    }
    function nextPage(){
        const page = actualPage < totalPages ? actualPage +1 : totalPages
        changePage(page)
    }
    function lastPage(){
        changePage(totalPages)
    }



    return(
        <div className={styles.pagination}>
            <button onClick={fisrtPage}>
                <span>{"<<"}</span>
            </button>
            <button onClick={previousPage}>
                <span>{"<"}</span>
            </button>
            <p>{`${actualPage} de ${totalPages}`}</p>
            <button onClick={nextPage}>
                <span>{">"}</span>
            </button>
            <button onClick={lastPage}>
                <span>{">>"}</span>
            </button>
        </div>
    )
}