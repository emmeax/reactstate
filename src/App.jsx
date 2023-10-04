import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=redux")
        .then((res) => {
          console.log(res);
          console.log(res.data.hits);
          setData(res.data.hits);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <p>
          {data?.map((data) => (
            <p key={data.title}>{data.title} </p>
          ))}
        </p>
      </div>
    </>
  );
}

export default App;
