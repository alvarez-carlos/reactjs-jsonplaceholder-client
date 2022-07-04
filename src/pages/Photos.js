import UseFetch from "../hooks/UseFetch";
import { PhotosList } from "../components/photos";

const Photos = () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const { isLoading, data } = UseFetch({ url: url });

  if (isLoading) {
    return (
      <section>
        <h2>Loaging...</h2>
      </section>
    );
  }

  return <PhotosList data={data} />
};

export default Photos;
