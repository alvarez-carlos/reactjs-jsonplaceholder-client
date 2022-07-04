import UseFetch from '../hooks/UseFetch'
import { PostsList } from '../components/posts'


const Posts = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { isLoading, data } = UseFetch({ url: url })

    if (isLoading){
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }

    return (
        <PostsList data={data} />
    )
}

export default Posts