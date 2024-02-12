import React from 'react'
import Image from 'next/image'


const ProductCard = ({ product }: { product: any }) => {
    return (
        <div className='bg-accent p-4 md:p-6 w-[250px] rounded shadow-lg flex flex-col gap-2'>
            <div className="relative w-full h-[200px]" >
                <Image src={product.image} fill alt='' />
            </div>
            <div className="text-primary text-center">
                <h3>
                    {product.name}
                </h3>
                <span>
                    {product.price} $
                </span>
            </div>
        </div>
    )
}

export default ProductCard