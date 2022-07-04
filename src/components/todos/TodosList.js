import TodoItem from './TodoItem'

const TodosList = ({ data }) => {
    return (
        <ul>
            {
                data.map((item) => {
                    return(
                        <TodoItem key={item.id} item={item}/>
                    )
                })
            }
        </ul>
    )
}

export default TodosList