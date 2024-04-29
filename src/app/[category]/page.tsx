import React from 'react'
import { client } from '../lib/sanity'
import Link from 'next/link'


 async function getCategoriesData(category: string) {
    const query = `*[_type == "product" && category->name == "${category}"]{
        "imageUrl": images[0].asset->url,
          _id,
          price,
          "categoryName": category->name,
          "productSlug": slug.current,
          name,
      } `

      const data = await client.fetch(query)
      return data;
}

async function CategoryPage({params, } :{ params: {category: string}}) {
    interface productI {
        _id: string;
        price: number;
        imageUrl: string;
        productSlug: string;
        categoryName: string;
        name: string;
        description: string;
      }
    const data = await getCategoriesData(params.category)
  return (
    <div className='max-container min-h-screen padding-container py-5'>
      <h1 className='bold-16 lg:bold-32 text-gray-800 mt-5'>PHANOX {params.category}</h1>
        <div className="grid  grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-6 sm:gp-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-6">
        {data.map((product: productI) => (
          <div
            key={product._id}
            className="aspect-square  mt-6 max-w-64 hover:scale-[1.025] transition-all"
          >
            <Link href={`/product/${product.productSlug}`}>
            <img
              src={product.imageUrl}
              alt=""
              className=" bg-gray-200 rounded-lg hover:bg-gray-300"
            />
            </Link>
            <Link href={`/product/${product.productSlug}`}>
              <p className="bold-16 text-gray-500 mt-2">{product.name}</p>
                
            </Link>
            <p className="text-gray-800 bold-16 text-normal">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage