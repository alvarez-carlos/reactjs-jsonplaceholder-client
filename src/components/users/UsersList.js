import UserItem from './UserItem'

const UsersList = ({ data }) => {
    return (    
        <ul>
            {
                data.map((item) => {
                    return (
                        <UserItem key={item.id} item={item}/>
                    )
                })
            }
        </ul>
    )
}

export default UsersList