import React from 'react'

function SmallButton({ src, alt, isTrash, onClick }) {
    return (
        <button className={`flex items-center justify-center w-[28px] h-[28px] p-[5px] rounded-full ${isTrash ? 'bg-[--color-main-yellow]' : 'bg-[#e5e5e8]'}`} onClick={onClick}>
            <img className='w-[10px] h-[10px]' src={src} alt={alt} />
        </button>
    )
}

export default SmallButton