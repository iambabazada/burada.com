import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    return (
        <div className='bg-accent'>
            <div className='flex justify-between gap-3 md:gap-10 px-3 md:px-10 py-2 items-center'>
                <div className="bg-primary p-2 text-accent rounded text-lg  md:text-2xl">
                    burada<span className='text-sm  md:text-md'>.com</span>
                </div>
                <div className="flex flex-1">
                    <input type="text" className='bg-slate' />
                </div>
                <div className="cart">
                    cart
                </div>
                <div className="user">
                    user
                </div>
                <div className='flex md:hidden'>
                    <RxHamburgerMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar