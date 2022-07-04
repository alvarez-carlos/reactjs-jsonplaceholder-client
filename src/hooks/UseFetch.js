import { useState, useEffect } from "react";

const UseFetch = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const resJson = await res.json();

    const albums = [];
    for (const id in resJson) {
      const album = {
        id: id,
        ...resJson[id],
      };
      albums.push(album);
    }
    setData(albums);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData()
  }, []);

  return { isLoading, data }
};

export default UseFetch

// const x = async () => {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/comments');
// 	const data = await response.json(); // Extracting data as a JSON Object from the response
// 	console.log(data)
// }

// x()


