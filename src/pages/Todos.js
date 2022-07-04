import TodosList from '../components/todos/TodosList'
import UseFetch from '../hooks/UseFetch'

const Todos = () => {

    const url = 'https://jsonplaceholder.typicode.com/todos'

    const { isLoading, data } = UseFetch({ url: url })

    if (isLoading){
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }

    return (
        <TodosList data={data}/>
    )

}

export default Todos