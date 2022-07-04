import { AlbumsList } from "../components/albums";
import UseFetch from '../hooks/UseFetch'

const Albums = () => {
  const url = 'https://jsonplaceholder.typicode.com/albums'
  const { isLoading, data } = UseFetch({ url: url }) 
 
  if (isLoading) {
    <section>
      <h2>Loading...</h2>
    </section>
  }

  return (
    <section>
      <div>All Albums</div>
      <AlbumsList data={data} />
    </section>
  );
};

export default Albums;



