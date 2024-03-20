import React from 'react'

function Card({ header, isCart = false, totalPrice = 0, content }) {
    return (
        <div className="min-h-[500px] w-[306px] relative bg-white px-[28px] py-[12px] rounded-[28px] shadow-2xl overflow-hidden before:content-[''] before:absolute before:block before:top-0 before:left-0 before:bg-[--color-main-yellow] before:w-[100px] before:h-[130px] before:rounded-br-full">
            <div className='relative w-full'>
                <img className='w-[50px] h-[25px] block' src={require('../assets/nike.png')} alt='nike' />
                <div className={`flex items-center ${isCart ? 'justify-between' : 'justify-start'}`}>
                    <h1 className='font-[800] text-[20px] text-[--color-main-black] text-left my-[10px]'>{header}</h1>
                    {isCart  && <h1 className='font-[800] text-[22px] text-[--color-main-black]'>${totalPrice}</h1>}
                </div>
            </div>
            <div className={`relative h-[400px] overflow-y-scroll no-scrollbar ${isCart ? '' : 'space-y-[80px]'}`}>
                {content}
            </div>
        </div>
    )
}

export default Card