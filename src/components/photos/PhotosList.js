import PhotoItem from './PhotoItem'

const PhotosList = ({ data }) => {
    return (  
        <ul>
            {
                data.map((item) => {
                    return (
                        <PhotoItem key={item.id} item={item}/>
                    )
                })
            }
        </ul>
    )
}

export default PhotosList