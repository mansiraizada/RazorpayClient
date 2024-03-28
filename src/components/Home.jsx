import React from 'react'
import axios from 'axios'

const data = [
    {
        id: 1,
        name: "Apple",
        price: 10000,
        image: "https://media.istockphoto.com/id/1156718087/photo/preparing-food.webp?b=1&s=170667a&w=0&k=20&c=kYDetBgJWiDp3t_0F-pnjI4OXtNLxyUzL-TREvw2RPA="
    },
    {
        id: 2,
        name: "Orange",
        price: 20000,
        image: "https://media.istockphoto.com/id/907999120/photo/picked-orange-fruits.webp?b=1&s=170667a&w=0&k=20&c=ZfeXbmmtgV1D1GvpmOg6ucoLPyOyNj17PT-ymDCZwro="
    },
    {
        id: 3,
        name: "Mango",
        price: 30000,
        image: "https://media.istockphoto.com/id/1435602229/photo/close-up-of-red-mangoes.webp?b=1&s=170667a&w=0&k=20&c=XLV-c9g3gZW_of4DeWuU108SxYaI332C40-TKifRQuM="
    }
]
const Home = () => {

    const API = "https://razorpayserver-1.onrender.com/api/checkout";
    const API_KEY = "https://razorpayserver-1.onrender.com/api/apiKey";

    const buyNowHandler = async (amount) => {
        const { data:{key} } = await axios.get(API_KEY);
        const { data:{order} } = await axios.post(API, {
            amount
        })

        const options = {
    key, 
    amount: order.amount, 
    currency: "INR",
    name: "Demo Razorpay",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: order.id, 
    callback_url: "https://razorpayserver-1.onrender.com/api/paymentVerification",
    prefill: {
        "name": "Demo User",
        "email": "demo.user@example.com",
        "contact": "9000090000"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#3399cc"
    }
};
const razor = new window.Razorpay(options);
        razor.open();
     }
    
  return (
      <div>
          <h1 className="flex justify-center align-center text-xl font-bold mt-5">Buy Fruits</h1>
          <ul className='flex flex-col md:flex-row md:flex gap-5 m-10'>
              {data.map(item => (
                  <li key={item.id}>
                      <img src={item.image} alt={item.name} className="w-fit h-fit"/>
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <button onClick={()=>buyNowHandler(item.price)} className='bg-blue-700 p-2 rounded'>Buy Now</button>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default Home
