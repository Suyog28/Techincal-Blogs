import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Paginations = () => {
  const { page, handlePageChnage, totalPages } = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
      <div className='flex justify-between w-11/12 max-w-[680px] py-2'>
        <div className='flex gap-x-2 items-center '>
          {
            page > 1 &&
            <button
              className='rounded-md px-4 py-1 border hover:bg-slate-300'
              onClick={() => handlePageChnage(page - 1)}>Previous</button>
          }
          {
            page < totalPages &&
            <button
              className='rounded-md px-4 py-1 border hover:bg-slate-300'
              onClick={() => handlePageChnage(page + 1)}>Next</button>
          }
        </div>
        <p className='font-bold text-sm flex items-center'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Paginations