import { Card } from '../ui'

const TodoItem = ({ item }) => {
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
        <div>Completed: {item.completed}</div>
      </li>
    </Card>
  );
};

export default TodoItem;
