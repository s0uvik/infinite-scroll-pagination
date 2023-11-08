import { useState, useEffect } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${skip}`
    );
    const data = await response.json();
    setData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  return (
    <div>
      <div className=" flex justify-center gap-3 flex-wrap ">
        {data.map((item) => {
          return (
            <div className="w-[100px] h-[100px] p-2" key={item.id}>
              <img
                className=" h-full w-full object-cover rounded"
                src={item.thumbnail}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center mt-6 gap-6">
        {skip !== 0 ? (
          <button
            onClick={() => setSkip((prev) => prev - 20)}
            className=" bg-blue-500 p-1 px-2 rounded-md cursor-pointer"
          >
            Prev
          </button>
        ) : (
          <button
            disabled
            className=" cursor-not-allowed bg-slate-400 p-1 px-2 rounded-md"
          >
            prev
          </button>
        )}
        {skip !== 80 ? (
          <button
            onClick={() => setSkip((prev) => prev + 20)}
            className=" bg-blue-500 p-1 px-2 rounded-md cursor-pointer"
          >
            Next
          </button>
        ) : (
          <button
            disabled
            className=" cursor-not-allowed bg-slate-400 p-1 px-2 rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
