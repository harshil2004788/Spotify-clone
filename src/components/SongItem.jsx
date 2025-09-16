import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {

    const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff2b]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold text-[13px] mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-[12px]'>{desc}</p>
    </div>
  )
}

export default SongItem
