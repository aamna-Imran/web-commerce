import Link from "next/link";
import { getData } from "./getData";

async function LatestProducts() {
    interface productI {
        _id: string;
        price: number;
        imageUrl: string;
        productSlug: string;
        categoryName: string;
        name: string;
        description: string;
      }
      const products: productI[] = await getData();
  return (
    <section className=" max-container padding-container min-h-[400px] flex flex-col items-center pt-10 pb-5">
        <h1 className="md:bold-40 bold-20  text-gray-800 mt-5 mb-2 tracking-tighter uppercase">Our Best Sellers</h1>
        <p className="text-gray-700 mb-5 text-[0.7rem] lg:text-[0.9rem]">Have Our best Products with Premium Quality</p>
        
      <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-6 sm:gp-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
        {products.map((product: productI) => (
          <div
            key={product._id}
            className="aspect-square  mt-6 max-w-64 hover:scale-[1.025] transition-all"
          >
            <Link href={`/product/${product.productSlug}`}>
            <img
              src={product.imageUrl[0]}
              alt=""
              className=" bg-gray-200 rounded-lg hover:bg-gray-300"
            />
            </Link>
            <Link href={`/product/${product.productSlug}`}>
              <p className="md:bold-16 font-semibold text-sm text-gray-500 mt-2">{product.name}</p>
                
            </Link>
            <p className="text-gray-800 text-sm font-semibold md:bold-16 text-normal">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
      <div>
        <Link href="/all">
          <p className="m-5">See All</p>
        </Link>
      </div>
    </section>
  )
}

export default LatestProducts