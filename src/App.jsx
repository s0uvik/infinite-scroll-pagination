import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "./component/InfiniteScroll";
import Pagination from "./component/Pagination";
import Header from "./component/Header";

const App = () => {
  return (
    <div className=" bg-slate-200">
      <Header />
      <div className=" pt-16">
        <Routes>
          <Route path={"/"} element={<Pagination />}></Route>
          <Route path={"/infinite-scroll"} element={<InfiniteScroll />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
