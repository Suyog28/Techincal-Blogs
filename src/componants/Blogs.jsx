import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from "./Spinner"

const Blogs = () => {
    //Data Consuming

    const { loading, posts } = useContext(AppContext);

    return (
        <div className='w-11/12 max-w-[680px] py-4 flex flex-col h-screen gap-y-6 mt-[66px] mb-[66px] justify-center items-center'>
            {loading ? (<Spinner />) : (
                posts.length === 0 ? (
                    <div><p className=' text-2xl font-extrabold uppercase'>No Post Found</p></div>
                ) : (
                    posts.map((post) => (
                        <div key={post.id}>
                            <p className=' text-1xl font-bold '>{post.title}</p>
                            <p className='text-[10px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'> {post.category}</span></p>
                            <p className='text-[10px]'>Posted on {post.date}</p>
                            <p className='text-md mt-3'>{post.content}</p>
                            <div className='flex gap-x-3'>
                                {post.tags.map((tag, index) => { return <span className='text-blue-700 underline font-bold text-[12px]' key={index}>{`#${tag} `}</span> })}
                            </div>
                        </div>
                    ))
                )
            )}
        </div>
    )
}

export default Blogs