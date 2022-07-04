import CommentItem from './CommentItem'

const CommentsList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return <CommentItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default CommentsList;
