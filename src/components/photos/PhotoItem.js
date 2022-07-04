import { Card } from "../ui";

const PhotoItem = ({ item }) => {
  return (
    <Card>
      <li>
        <div>
          <p>Id: {item.id}</p>
        </div>
        <div>
          <p>AlbumId: {item.albumId}</p>
        </div>
        <div>
          <p>Title: {item.title}</p>
        </div>
        <div>
          <img src={item.url}></img>
        </div>
        <div>
          <a href={item.thumbnailUrl} target='_blank'>Thumbnail URL</a>
        </div>
      </li>
    </Card>
  );
};

export default PhotoItem;
