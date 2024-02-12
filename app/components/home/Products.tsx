import React from 'react'
import Title from '../general/Title'
import { products } from '../../../utils/Products'
import ProductCard from './ProductCard'

const Products = () => {
    return (
        <section className='my-5 md:my-10 px-3 md:px-10'>
            <Title name="Products" center={false} />
            <div className='flex justify-between'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default Products