import React from 'react'
import { FaFacebookF ,FaWhatsapp , FaInstagram ,FaXTwitter ,SiGmail , FaRegCopyright} from '../utils/icons'
const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-black text-white sm:flex px-2  gap-8'>
         <div className=''>
         <p className='font-semibold text-2xl pt-4'>About Us</p>
         <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque magnam consectetur porro nemo nobis error omnis odio a soluta.</p>
         </div>
         <div>
          <p className='font-semibold text-2xl pt-4'>Sell With Us</p>
          <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius repudiandae voluptatem, accusamus eveniet unde impedit porro saepe asperiores accusantium deserunt.</p>
         </div>
         <div>
          <p className='font-semibold text-2xl pt-4'>Connect us</p>
          <ul className='flex flex-col gap-4 mt-5 '>
            <li className='flex items-center  gap-2'><FaFacebookF/><p className='text-gray-500 text-sm hover:text-blue-500 cursor-pointer'>facebook.com/BazarioShop</p></li>
            <li className='flex items-center  gap-2 '><FaWhatsapp/><p className='text-gray-500 text-sm hover:text-blue-500 cursor-pointer'>Bazario Official</p></li>
            <li className='flex items-center  gap-2 '><FaInstagram/><p className='text-gray-500 text-sm hover:text-blue-500 cursor-pointer'>@BazarioOfficial</p></li>
            <li className='flex items-center  gap-2 '><FaXTwitter/><p className='text-gray-500 text-sm hover:text-blue-500 cursor-pointer'>@BazarioOfficial</p></li>
            <li className='flex items-center  gap-2 '><SiGmail/><p className='text-gray-500 text-sm hover:text-blue-500 cursor-pointer'>bazarioofficial@gmail.com</p></li>
          </ul>
         </div>
      </div>
      <div className='flex w-full bg-black text-gray-500 items-center gap-3 justify-center py-4'>
        <p><FaRegCopyright/></p>
        <p>Copy Right 2025</p>
      </div>
    </div>
  )
}

export default Footer