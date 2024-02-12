import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className='h-[235px] relative'>
            <Image src={"/Banner.webp"} fill className='object-cover' alt='burada.com' />
        </section>
    )
}

export default Banner