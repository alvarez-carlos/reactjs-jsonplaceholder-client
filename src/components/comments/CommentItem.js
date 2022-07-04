import { Card } from "../ui";

const CommentItem = ({ item }) => {
  return (
    <Card>
      <li>
        <div>
          <p>Id: {item.id}</p>
        </div>
        <div>
          <p>PostId: {item.postId}</p>
        </div>
        <div>
          <p>Email: {item.email}</p>
        </div>
        <div>
          <p>Name: {item.name}</p>
        </div>
        <div>
          <p>Body: {item.body}</p>
        </div>
      </li>
    </Card>
  );
};

export default CommentItem;
