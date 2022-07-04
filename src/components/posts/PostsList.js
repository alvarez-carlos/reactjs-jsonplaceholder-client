import PostItem from './PostItem'

const PostsList = ({ data }) => {
    return (
        <ul>
            {
                data.map((item) => {
                    return (
                        <PostItem key={item.id} item={item}/>
                    )
                })
            }
        </ul>
    )
}

export default PostsList