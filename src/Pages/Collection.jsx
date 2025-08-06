import React from "react";

// Import the correct hook from the right file

// Card and counter components
import ProductCard from '../Components/Cards/ProductCard';
import CounterComponent from "../Components/redux/features/cart/CounterComponent";
import { useGetCarQuery } from "../Components/redux/features/car/car";

export default function Collection() {
  // Fetch car data using RTK Query hook
  const { data  = []  , isLoading, error } = useGetCarQuery();

  console.log("Fetched Car Data:", data);

  // Show loading UI
  if (isLoading) {
    return <div className="text-center p-8">Loading cars...  </div>;
  }

  // Show error UI
  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        Error loading cars: {error.message || JSON.stringify(error)}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center text-red-500">
        Car Collection
      </h1>

      {/* Grid of products */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-4 mx-auto">
        {data?.map((car) => (
          <ProductCard
            key={car.id}
            id={car.id}
            image={car.image}
            model={car.model}
            description={car.description}
          />
        ))}
      </div>

      {/* Cart Counter */}
      <div className="justify-items-center mt-10">
        <CounterComponent />
      </div>
    </div>
  );
}
