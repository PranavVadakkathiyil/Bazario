import React from 'react'
import { GoSearch, CgProfile , CiHeart , MdOutlineShoppingBag} from '../utils/icons'
const Header = () => {
    const categories = [
        { name:"Fasion" , hrcolor:"border-gray-800" },
        { name:"Electronics" , hrcolor:"border-red-500" },
        { name:"Groceries" , hrcolor:"border-green-600" },
        { name:"Home & Kitchen" , hrcolor:"border-teal-300" },
        { name:"Health & Personal Care" , hrcolor:"border-purple-600" },

    ]
  return (
    <header className='w-full '>
        <nav className='flex items-center border justify-between sm:px-11 px-7 sm:py-2'>
            <h1 className='logoFont text-2xl'>BAZARIO</h1>
            <ul className='hidden xl:flex text-gray-600 gap-4'>

                {
                    categories.map((item)=>(
                        <li key={item.name}>{item.name}
                    <hr className={`border-t-2 ${item.hrcolor}`}/>
                </li>
                    ))
                }
                
            </ul>
            <div className='hidden lg:flex items-center justify-between border px-3 w-1/4 rounded-full hover:ring-1 ring-black bg-slate-50'>
                <input type="text"  className='  outline-none w-10/12 py-1 px-1 bg-slate-50' />
                <button aria-label="Search" className=' p-2 text-[1.3rem] rounded-full translate-x-3 text-white bg-black'>
                    <GoSearch/>
                </button>
            </div>
            <ul className='flex gap-5 mt-4'>
                <li className='text-[1.6rem] '><CgProfile/></li>
                <li className='text-[1.6rem] '><CiHeart className='text-red-600'/>
                <p  className='flex items-center justify-center  border border-gray-400 text-sm font-bold rounded-full h-4 w-4 translate-x-[15px] translate-y-[-36px] '>s</p>
                </li>
                <li className='text-[1.6rem]'><MdOutlineShoppingBag/>
                <p  className='flex items-center justify-center  border border-gray-400 text-sm font-bold rounded-full h-4 w-4 translate-x-[15px] translate-y-[-36px] '>s</p>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header