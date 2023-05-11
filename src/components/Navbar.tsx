import React from 'react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoAppsSharp } from 'react-icons/io5'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeSerachTerm, clearSearchTerm, clearVideos } from '../store/slices/youtubeSlice'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.youtubeApp.searchTerm);

  const handleSearch = () => {
    if (location.pathname !== '/search') navigate('/search')
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  }
  return (
    <div className='flex justify-between items-center px-14 h-14 opacity-95 sticky top-0 z-50 bg-[#212121]'>
      <div className='flex gap-8 items-center text-2xl'>
        <div>
          <GiHamburgerMenu/>
        </div>
        <Link to='/'>
          <div className='flex gap-1 items-center justify-center'>
            <BsYoutube className='text-3xl text-red-600'/>
            <span className='text-xl font-medium'>Youtube</span>
          </div>
        </Link>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <form onSubmit={e => {
          e.preventDefault();
          handleSearch()
        }}>
          <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
            <div className='flex gap-4 items-center pr-5'>
              <div>
                <AiOutlineSearch className='text-xl'/>
              </div>
              <input
                type='text'
                className='w-96 bg-zinc-900 focus:outline-none border-none' 
                value={searchTerm}
                onChange={e => dispatch(changeSerachTerm(e.target.value))}
              />
              {/* <AiOutlineClose className='h-10 w-16 items-center justify-center bg-zinc-800'/> */}
              <AiOutlineClose
                className={`text-xl cursor-pointer ${!searchTerm ? 'invisible' : 'visible'}`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className='h-10 w-16 flex items-center justify-center bg-zinc-800' type='submit'>
              <AiOutlineSearch className='text-xl'/>
            </button>
          </div>
        </form>
        <div className='text-xl p-3 bg-zinc-900 rounded-full'>
          <TiMicrophone/>
        </div>
      </div>
      <div className='flex gap-5 items-center text-xl'>
        <BsCameraVideo/>
        <IoAppsSharp/>
        <div className='relative'>
          <BsBell/>
          <span className='absolute top-0 left-2 text-xs bg-red-600 rounded-full px-1'>
            9+
          </span>
        </div>
        <img src='https://yt3.ggpht.com/yti/AHyvSCBiQMCT5Kt9y29nLFNyqNXhQyW5Cmmn27e-I00ikw=s88-c-k-c0x00ffffff-no-rj-mo' alt='logo' className='w-9 h-9 rounded-full' />
      </div>
    </div>
  )
}

export default Navbar
