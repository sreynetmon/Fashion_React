import React from 'react'
import cloth1 from '../../assets/image/cloth1.jpg'
import cloth2 from '../../assets/image/cloth2.jpg'
import cloth3 from '../../assets/image/cloth3.jpg'
import dress1 from '../../assets/image/dress1.jpg'
const ProductClothes = [
    {
        name: "Basic Tee",
        price: "£24.00 GBP",
        image: cloth1
    },
    {
        name: "Basic Tee",
        price: "£24.00 GBP",
        image: cloth2
    },
    {
        name: "Basic Tee",
        price: "£24.00 GBP",
        image: cloth3
    },
    {
        name: "Basic Tee",
        price: "£24.00 GBP",
        image: dress1
    }
]

export default function ProductCollection() {
  return (
    <>
        <section>
            <div className=" container mx-auto max-w-screen-xl">
                <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
                    <p className="mt-4 max-w-md text-gray-500">
                        fashion style is about creating an identity through clothing, accessories, and even hair and makeup. It can be a powerful tool for communication, conveying confidence, creativity, rebelliousness, or adherence to tradition, all without uttering a single word.
                    </p>
                </div>
                <div>
                    <ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 mt-5 justify-items-center">
                        {ProductClothes.map((cloth, index) => (
                        <li key={index}>
                            <a href="#" className="group block overflow-hidden">
                            <img
                                src={cloth.image}
                                alt="#"
                                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                            />
                            <div className="relative bg-white pt-3">
                                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                {cloth.name}
                                </h3>
                                <p className="mt-2">
                                <span className="sr-only"> Regular Price </span>
                                <span className="tracking-wider text-gray-900"> {cloth.price} </span>
                                </p>
                            </div>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>

                <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
                <li>
                    <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100"
                    >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>

                <li>
                    <a href="#" className="block size-8 rounded-sm border border-gray-100 text-center leading-8">
                    1
                    </a>
                </li>

                <li className="block size-8 rounded-sm border-black bg-black text-center leading-8 text-white">
                    2
                </li>

                <li>
                    <a href="#" className="block size-8 rounded-sm border border-gray-100 text-center leading-8">
                    3
                    </a>
                </li>

                <li>
                    <a href="#" className="block size-8 rounded-sm border border-gray-100 text-center leading-8">
                    4
                    </a>
                </li>

                <li>
                    <a
                    href="#"
                    className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100"
                    >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </li>
                </ol>
            </div>
        </section>
    </>
  )
}
