import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/amazonSlice';
import { emptyCart } from '../assets';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cart = () => {
  const ref = useRef();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.amazon.products)
  const [totalPrice, setTotalPrice] = useState("")
  useEffect(() => {
    let Total = 0;
    products.map((items) => {
      Total += items.price * items.quantity;
      return setTotalPrice(Total)
    })
  }, [products])

  return (
    <div className='w-full bg-gray-100 p-4'>
      {
        products.length > 0 ? (
          <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
            <div className='w-full bg-white px-4 col-span-4'>
              <div className='font-titleFont flex items-center justify-between border-b-[1px]
          border-b-gray-400 py-3'>
                <h2 className='text-3xl font-medium'>Shopping Cart</h2>
                <h4 className='text-xl font-normal'>Subtitle</h4>
              </div>
              { /** products start here **/}
              <div>
                {
                  products.map((item) => (
                    <div key={item.id}
                      className='w-full border-b-[1px] border-b-gray-300 
                p-4 flex items-center gap-6'>
                      <div className='w-full flex items-center justify-between gap-6'>
                        <div className='w-1/5'>
                          <img className='w-full h-44 object-contain' src={item.image} alt='product' />
                        </div>
                        <div className='w-4/5'>
                          <h2 className='font-semibold text-lg'>{item.title}</h2>
                          <p className='text-sm xl:pr-10'>{item.description}</p>
                          <p className='text-base  mt-1'>
                            Unit Price <span className='font-semibold'>${item.price}</span>
                          </p>
                          <div className='bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 mt-2 text-center drop-shadow-lg rounded-md'>
                            <p>Qty:</p>
                            <p onClick={() => dispatch(decrementQuantity(item.id))} className='cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300'>-</p>
                            <p className='font-titleFont text-base font-semibold text-amazon_blue'>{item.quantity}</p>
                            <p onClick={() => dispatch(incrementQuantity(item.id))} className='cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300'>+</p>
                          </div>
                          <button onClick={() => dispatch(deleteItem(item.id))} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-3 hover:bg-red-700 active:bg-red-900 duration-300'>Delete Item</button>
                        </div>
                        <div>
                          <p className='text-lg xl:w-24 font-titleFont font-semibold'>${item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md'>
                <button onClick={() => dispatch(resetCart())} className='bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>Clear all items</button>
              </div>
            </div>
            <div className='w-full h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4'>
              <div >
                <p className='flex gap-2 items-start text-sm'>
                  <span> <CheckCircleIcon className='bg-white text-green-500 rounded-full' /></span>
                  Your order qualifies for FREE Shipping Choose this option at checkout. See details....
                </p>
              </div>
              <div>
                <p className='font-semibold px-6 py-1 flex items-center gap-2 justify-between'>Total: <span className='text-lg font-bold'>${totalPrice}</span> </p>
              </div>
              <button className='w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-400 border-yellow-500
          hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>Proceed to checkout</button>
            </div>
          </div>
        ) : (
          <motion.div ref={ref}
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }} className='flex justify-center gap-4 py-10'>
            <div >
              <img className='w-80 rounded-lg p-4 mx-auto ' src={emptyCart} alt='emptyCart' />
            </div>
            <div className='w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg'>
              <h1 className='font-titleFont text-xl font-bold'>Your Amazon Cart is empty</h1>
              <p className='text-sm text-center text-blue-600 ml-1 cursor-pointer'>Shop today's deals</p>
              <Link to='/'>
                <button className='mt-12 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500
                active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-base'>Continue Shopping</button>
              </Link>

            </div>
          </motion.div>
        )}
    </div>
  )
}

export default Cart