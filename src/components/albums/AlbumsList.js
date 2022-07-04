import AlbumItem from './AlbumItem'

const AlbumsList = ({ data }) => {
    return (
        <ul>
            {
                data.map(item => {
                    return (
                        <AlbumItem key={item.id} item={item} />
                    )
                })
            }
        </ul>
    )
}

export default AlbumsList