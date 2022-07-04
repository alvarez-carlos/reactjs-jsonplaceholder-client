import UseFetch from '../hooks/UseFetch'
import { UsersList } from '../components/users'

const Users = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const { isLoading, data } = UseFetch({ url: url })

    if (isLoading){
        return (
            <section>
                <h2>Loading...</h2>
            </section>
        )
    }

    return (
        <UsersList data={data}/>
    )
}

export default Users