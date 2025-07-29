import React from 'react'
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import Content from '../Components/Cards/Content';
import style from '../assets/image/style.jpg'
import ProductCollection from '../Components/Cards/ProductCollection';

export default function Home() {
  return (
    <div>
      <section>
        <Content/>
      </section>

      <section className='mt-10'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 justify-around">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Unlocking Your Signature Style: A Journey of Self-Expression
                </h2>

                <p className="mt-4 text-gray-700">
                  Dive into the fascinating world of fashion style, where clothing becomes a powerful language of self-expression. Discover different aesthetics, learn how fashion influences identity, and get practical insights into building a wardrobe that makes you feel confident and authentic.
                </p>
              </div>
            </div>

            <div>
              <img
                src={style}
                className="rounded "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ProductCollection/>
      </section>
    </div>
  )
}

