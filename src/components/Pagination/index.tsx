import styles from './styles.module.css'


type iProps={    
    changePage: (i:number)=>void;
    actualPage:number;
    totalPages: number;
    itemsPerPage?:number;
}
export function Pagination({actualPage,totalPages,itemsPerPage=20,changePage}:iProps){

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
            <button onClick={fisrtPage}>{"<<"}</button>
            <button onClick={previousPage}>{"<"}</button>
                {actualPage} de {totalPages}
            <button onClick={nextPage}>{">"}</button>
            <button onClick={lastPage}>{">>"}</button>
        </div>
    )
}