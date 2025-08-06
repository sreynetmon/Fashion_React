import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../Components/redux/features/car/car";

export default function ProductsDetail() {
  const params = useParams();
  const productId = params.id;
  console.log("The product id: ", productId);

  const { data } = useGetProductByIdQuery(productId);

  return (
    <div className="bg-white">
      <div className="container pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 p-8 ">
          <img
            alt={data?.make}
            src={data?.image}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data?.make}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-yellow-900">
              {data?.price}$$
            </p>

            <form className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{data?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
