import React from 'react'
import cloth1 from '../assets/image/cloth1.jpg'
import cloth2 from '../assets/image/cloth2.jpg'

export default function About() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  About Fashion Store
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Fashion is not just about clothing; it's a form of self-expression and individuality. Our store celebrates this by offering a diverse range of styles that cater to every taste and preference.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded-sm border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src={cloth1}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt=""
                src={cloth2}
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 w-[50%] h-[250px] border-amber-50 rounded-lg shadow-lg">
        <p>The 21st century brought the biggest shift with e-commerce. Online stores offered endless choices and convenience, while social media became a new way to discover trends and shop. Direct-to-consumer (DTC) brands emerged, selling straight to customers online. Physical stores are now evolving into experiential spaces, offering unique brand interactions. There's also a growing focus on sustainability, with trends like resale, rental, and ethical production reshaping the industry. Technology, like AI and virtual try-ons, continues to blend the physical and digital shopping worlds.</p>
      </section>
    </div>
  )
}
