import React from 'react'
import ProductsForm from '../Components/Forms/ProductsForm'
import { useGetProductsQuery } from '../Components/redux/api'
// import DataTable from '../Components/Cards/DataTable'
import DataTableProduct from '../Components/Cards/DataTableProduct'


export default function Contact() {
  const {data = [], isLoading, error} = useGetProductsQuery({
    page : 1,
    limit: 1
  })
  console.log(isLoading);
  console.log(error)
  return (
    <div>
       <ProductsForm/>
       {/* {
          data.map((data)=>{
            return <DataTable
              image = {data?.image}
              color= {data?.color}
              year = {data?.year}
              make = {data?.make}
              price = {data.price}
            />
          }) 
       } */}

       {
          data.map((data)=>{
            return <DataTableProduct
              image = {data?.image}
              color= {data?.color}
              year = {data?.year}
              make = {data?.make}
              price = {data.price}
            />
          }) 
       }
    </div>
  )
}
