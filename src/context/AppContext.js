import { createContext, useState } from 'react'
import { baseUrl } from "../baseUrl"

export const AppContext = createContext();

//Step 1-Data Creations
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log("Error while fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }



    function handlePageChnage(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChnage
    }
    //Step 2
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


