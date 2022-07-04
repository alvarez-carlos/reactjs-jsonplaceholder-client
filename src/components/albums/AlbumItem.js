import { Card } from '../ui'

const AlbumItem = ({ item }) => {
  return (
    <li>
      <Card>
        <div>
          <p>Album Id: {item.id}</p>
          <p>User Id: {item.userId}</p>
          <p>Title: {item.title}</p>
        </div>
      </Card>
    </li>
  );
};

export default AlbumItem;
