import React from "react";
import ProductsForm from "../Components/Forms/ProductsForm";

// import DataTable from '../Components/Cards/DataTable'
import { useGetCarQuery } from "../Components/redux/features/car/car";
import ProductCard from "../Components/Cards/ProductCard";
import DataTable from "../Components/Cards/DataTable";

export default function Contact() {
  const {
    data = [],
    isLoading,
    error,
  } = useGetCarQuery({
    page: 1,
    limit: 4,
  });
  console.log(isLoading);
  console.log(error);
  console.log(data);
  return (
    <div>
      <ProductsForm />
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
      <div className="container mx-auto">
        {isLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-500">
            Error: {error.message || "Something went wrong"}
          </div>
        ) : (
          <DataTable data={data} />
        )}
      </div>
    </div>
  );
}
