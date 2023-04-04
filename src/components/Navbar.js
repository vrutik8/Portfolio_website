// https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg
// https://akshaysaini.in/img/plane.gif
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around max-w-screen-xl m-0-auto '>
      <div>
        <img 
        className="w-20"
        src="https://png.pngtree.com/png-vector/20210131/ourmid/pngtree-3d-colorful-letter-v-png-image_2878407.jpg" alt="img_logo"/>
        </div>

        <ul className='flex justify-between p-6 '>
            <li className='px-3 hover:bg-blue-400 rounded-xl h-10 '>About</li>
            <li className='px-3 hover:bg-blue-400 rounded-xl h-10'>Inspiration</li>
            <li className='px-3 hover:bg-blue-400 rounded-xl h-10'>Projects</li>
            <li className='px-3 hover:bg-blue-400 rounded-xl h-10'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;