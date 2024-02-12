import React from 'react'

interface HeadingProps {
    center: boolean,
    name: string
}

const Title: React.FC<HeadingProps> = ({ name, center }) => {
    return (
        <div className=''>
            <div className={`text-lg md:text-2xl ${center ? 'text-center' : ''} `}>
                {name}
            </div >
        </div >
    )
}

export default Title