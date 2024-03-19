import React, { useContext } from 'react'
import SmallButton from './SmallButton'
import { CartContext } from '../context/cart.context';

function CartItem({ item }) {
    const { removeProduct, increaseProductQuantity, decreaseProductQuantity } = useContext(CartContext);

    return (
        <div className='relative grid grid-cols-12 gap-[20px]'>
            <div className='col-span-4'>
                <div className='rounded-full w-[75px] h-[75px] flex items-center justify-center' style={{ backgroundColor: item.color }}>
                    <img className='absolute bottom-0 w-[110px] h-[110px] rotate-[330deg]' src={item.image} alt='img-shoes' />
                </div>
            </div>
            <div className='col-span-8 space-y-[5px]'>
                <h1 className='font-[800] text-[12px] text-[--color-main-black] text-left'>{item.name}</h1>
                <p className='font-[800] text-[18px] text-[--color-main-black] text-left'>${item.price}</p>
                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-[10px]'>
                        <SmallButton
                            src={require('../assets/minus.png')}
                            alt="minus"
                            onClick={() => decreaseProductQuantity(item.id)}
                        />
                        <span className='text-[12px]'>{item.quantity}</span>
                        <SmallButton
                            src={require('../assets/plus.png')}
                            alt="plus"
                            onClick={() => increaseProductQuantity(item.id)}
                        />
                    </p>
                    <SmallButton
                        isTrash={true}
                        src={require('../assets/trash.png')}
                        alt="trash"
                        onClick={() => removeProduct(item.id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem