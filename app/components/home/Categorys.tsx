import React from 'react'

const Categorys = () => {
    const categoryList = [
        {
            name: "Ayaqqabi"
        },
        {
            name: "Koynek"
        },
        {
            name: "Salvar"
        },
        {
            name: "Kurtka"
        },
        {
            name: "Koynek"
        },
        {
            name: "Salvar"
        },
        {
            name: "Kurtka"
        },
    ]
    return (
        <section className='flex justify-center px-3 md:px-10 items-center gap-3 md:gap-10 py-5 md:py-10 overflow-x-auto'>
            {categoryList.map((category, index) => (
                <div key={index} className='border-secondary rounded-full min-w-[150px] border-[1px] text-center px-4 py-2 flex flex-1 items-center justify-center cursor-pointer'>
                    {category.name}
                </div>
            ))}
        </section>
    )
}

export default Categorys