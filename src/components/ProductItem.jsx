import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ProductItem({ product }) {
    const { checkProductInCart, addProduct } = useContext(CartContext);

    return (
        <div className='w-[250px] space-y-[15px]'>
            <div className='rounded-[28px] h-[300px] flex items-center justify-center' style={{ backgroundColor: product.color }}>
                <img className='w-[250px] h-[250px] rotate-[330deg] translate-y-[30px] translate-x-[-15px]' src={product.image} alt='img-shoes' />
            </div>
            <h1 className='font-[800] text-[18px] text-[--color-main-black] text-left'>{product.name}</h1>
            <p className='text-[12px] leading-[20px] text-[--color-main-gray] text-left'>
                {product.description}
            </p>
            <div className='flex justify-between items-center'>
                <span className='font-[800] text-[16px]'>${product.price}</span>
                <TransitionGroup component="div">
                    {
                        checkProductInCart(product.id) ?
                            <CSSTransition timeout={700} classNames="item">
                                <button className='w-[40px] h-[40px] flex items-center justify-center bg-[--color-main-yellow] rounded-full'>
                                    <img className='w-[20px] h-[20px]' src={require('../assets/check.png')} alt='check' />
                                </button>
                            </CSSTransition>
                            : <button className='uppercase text-[14px] py-[10px] px-[15px] bg-[--color-main-yellow] font-[700] rounded-[20px] hover:bg-[--color-hover-yellow]' onClick={() => addProduct(product)}>
                                Add to cart
                            </button>
                    }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default ProductItem