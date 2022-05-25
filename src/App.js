import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch(
      "https://628dcf15368687f3e70965fd.mockapi.io/my-api/v1/users?page=1&limit" +
        limit
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
    console.log(items);
  }, [limit]);
  const loadMore = () => {
    setLimit(limit + 4);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row m-0">
          {items.map((item) => (
            <div className="col-3 p-2" key={item.id}>
              <div className="bg-primary">
                <p>{item.id}</p>
                <p>
                  <a
                    style={{ color: "#fff", textDecoration: "none" }}
                    href={item.avatar}
                  >
                    <button className="btn btn-success">visit image</button>
                  </a>
                </p>
                {item.name}
              </div>
            </div>
          ))}
          <div className="col-12 p-3">
            <div className="btn btn-warning w-100" onClick={loadMore}>
              Load More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
