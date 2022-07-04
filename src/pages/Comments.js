import { useState, useEffect } from 'react'
import UseFetch from '../hooks/UseFetch'
import { CommentsList } from '../components/comments' 


const Comments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const { isLoading, data }  = UseFetch({ url: url })  

    if(isLoading){
        return(
           <section>
            <h2>Loading...</h2>
           </section>
        )
    }

    return (
        <secion>
            <h2>All Comments</h2>
            <CommentsList data={data}/>
        </secion>
    )
}

export default Comments