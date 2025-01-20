import React, { useState, useEffect } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getInfo() {
            try {
                let res = await fetch("http://localhost:8000/products");
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        getInfo();
    }, []);

    return (
      <div className='bg-gray-200'>
        <div className='text-center font-bold text-4xl mb-5 uppercase text-gray-700'>
          <h1>product</h1>
        </div>
        <div className='grid grid-cols-4 gap-4 '>
       
       {products.slice(0, 12).map((product) => ( // Limit to 12 products
           <div key={product.id} className=''>
               <div className="card bg-base-100 shadow-xl">
                   <div className="logo h-full w-full object-fit">
                       <img src={product.images} alt={product.title} className='h-48 md:h-64 w-full object-cover' />
                   </div>
                   <div className="desc bg-gray-500 text-white p-4">
                       <span>Name: <big><strong>{product.title}</strong></big></span>
                       <div>Price: <strong>${product.price}</strong></div>
                       <div>Brand: {product.brand}</div>
                       <div>Ratings: {product.rating}/5</div>
                   </div>
               </div>
           </div>
       ))}
   </div>
      </div>
    );
}

export default Product;