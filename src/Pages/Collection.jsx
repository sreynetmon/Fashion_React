import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer';
// import { useEffect, useState } from 'react';
import ProductCard from '../Components/Cards/ProductCard';
import CounterComponent from '../Components/redux/features/cart/CounterComponent';
import { useGetProductsQuery } from '../Components/redux/api';



export default function Collection() {
//   //Create state for products
//   const [products, setProducts] = useState([]);
//   //Create useEffect to rander
//   useEffect(() => {
//   fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(res => {
//       console.log(res); // Check what the API returns
//       // Try to set products from different possible properties
//       if (Array.isArray(res)) setProducts(res);
//       else if (Array.isArray(res.products)) setProducts(res.products);
//       else if (Array.isArray(res.data)) setProducts(res.data);
//       else setProducts([]);
//     });
// }, []);
  // console.log(`The missing products are: ${products}`);
  const page = 1;
  const limit = 12;
  const {data, isLoading, error} = useGetProductsQuery(
    {
      page: page,
      limit: limit
    }
  );
  const allData = data?.products || [];
  console.log(allData);
  console.log(isLoading);
  console.log(error);
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4 text-center text-red-500">Product Collection</h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {products && products.map((product,index) => (
            <ProductCard key={index} image={product.image} model={product.model} description={product.description} />
          ))}
        </div> */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-4 mx-auto">
            {
                data?.map((pro,index)=>(
                    <ProductCard  key={index} image={pro?.image} 
                    id={pro.id}
                    model={pro.model}
                    description={pro.description}
                    />

                ))
            }

        </div>
        <div className='justify-items-center mt-10'>
          <CounterComponent/>
        </div>
    </div>
  )
}
