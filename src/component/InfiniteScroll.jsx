import { useEffect } from "react";
import { useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${skip}`
    );
    const data = await response.json();
    setData((prev) => [...prev, ...data.products]);
  };

  const handleInfiniteScroll = () => {
    const webPageTotalHeight = document.documentElement.scrollHeight;
    const scrollFromTop = document.documentElement.scrollTop;
    const pageHeight = window.innerHeight;

    if (pageHeight + scrollFromTop + 1 >= webPageTotalHeight) {
      console.log("api call...");
      setSkip((prev) => prev + 20);
    }
  };

  useEffect(() => {
    fetchData();
  }, [skip]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className=" flex justify-center gap-3 flex-wrap ">
      {data.map((item) => {
        return (
          <div className="w-[300px] h-[300px] p-2" key={item.id}>
            <img
              className=" h-full w-full object-cover rounded"
              src={item.thumbnail}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default InfiniteScroll;
