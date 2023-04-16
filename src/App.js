import { useContext, useEffect } from "react";
import Blogs from "./componants/Blogs";
import Header from "./componants/Header";
import Paginations from "./componants/Paginations";
import { AppContext } from "./context/AppContext";
import "./App.css";


export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchBlogPosts() }, [])
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header />
      <Blogs />
      <Paginations />
    </div>
  );
}
