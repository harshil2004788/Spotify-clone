import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

    const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-3 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-5' src={assets.home_icon} alt="" />
                <p className='text-[14px] font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-5 pt-4' src={assets.search_icon} alt="" />
                <p className='text-[14px] pt-4 font-bold'>Search</p>
            </div>
        </div>
        <div className='w-[100%] h-96 bg-[#121212] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3 '>
                    <img className='w-7' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='w-4 mr-5 flex items-center gap-3'>
                    <img src={assets.arrow_icon} alt="" />
                    <img src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-2 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4'>
                <h1 className='text-[15px]'>Create your first playlist</h1>
                <p className='text-[13px] font-light'>it's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-2 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4'>
                <h1 className='text-[15px]'>Let's findsome podcast to follow </h1>
                <p className='text-[13px] font-light'>we'll keep you update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar