import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccessful = () => {
  const order_id = useSearchParams()[0];
    return (
      <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full h-full md:w-[50vw] md:h-[50vh] flex flex-col justify-center items-center bg-blue-300'>
          <h1 className='text-3xl font-bold text-center'>Payment Successful</h1>
          <h3 className='text-xl font-bold text-center'>Order ID: {order_id}</h3>
          <p className='text-center'>Thank you for your purchase. We will contact you shortly.</p>    
          </div>  
      </div> 
  )
}

export default PaymentSuccessful