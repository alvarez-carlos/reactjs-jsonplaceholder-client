import { Card } from '../ui'
const PostItem = ({ item }) => {
  return (
    <Card>
      <li>
        <div>
          <p>Id: {item.id}</p>
        </div>
        <div>
          <p>UserId: {item.userId}</p>
        </div>
        <div>
          <p>Title: {item.title}</p>
        </div>
        <div>
          <p>Body: {item.body}</p>
        </div>
      </li>
    </Card>
  );
};

export default PostItem;
