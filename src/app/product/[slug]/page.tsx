import ImageGallery from "@/app/components/ImageGallery";
import { client } from "@/app/lib/sanity";
import { HiMiniStar } from "react-icons/hi2";
import { BsTruck } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { getData } from "@/app/components/getData";

import Link from "next/link";
import AddToBag from "@/app/components/AddToBag";

async function getProductPageData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
      images,
      price,
      description,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      price_id,
  }`;
  const data = await client.fetch(query);
  return data;
}


export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  interface productI {
    _id: string;
    price: number;
    imageUrl: string;
    productSlug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string
  }
  const data= await getProductPageData(params.slug);
  const data2: productI[] = await getData();
 
  return (

    <div className=" max-container padding-container h-full pt-3">
      <div className="flex  flex-col lg:flex-row justify-center xl:gap-5 gap-5 ">
        <div className="w-full h-auto flex justify-center items-center">
        <ImageGallery images={data.images} />
          
        </div>
        <div className="flex flex-col lg:gap-3 gap-2 lg:py-10 py02 ">
          <p className="md:font-semibold font-medium text-gray-400">
            {data.categoryName}
          </p>
          <h2 className="md:bold-32 bold-20 text-gray-800">{data.name}</h2>
          <span className="text-red-600 flex flex-row items-center">
            <p className="text-[14px] mr-2 text-black">4.3</p>
            <HiMiniStar />
            <HiMiniStar />
            <HiMiniStar />
            <HiMiniStar />
          </span>
          <span className="flex items-center gap-3">
            <p className="bold-20">${data.price}</p>
            <p className="text-red-600 line-through">
              ${Math.round(data.price + 12)}
            </p>
          </span>
          <p className="md:text-[15px] text-[13px] text-gray-400 font-semibold">
            Incl. Vat plus shipping
          </p>
          <div className="flex items-center gap-3">
            <BsTruck className="w-5 h-5 text-gray-500" />
            <p className="text-[13px] font-semibold text-gray-500">
              2-4 Days shipping
            </p>
          </div>
          <h2 className="bold-16 text-gray-800">Description :</h2>
          <p className="md:text-[0.9rem] text-[0.7rem]">{data.description}</p>
         
          <div className="flex gap-3 mt-3 mb-5">
            <AddToBag price_id={data.price_id} currency="USD" description={data.description} price={data.price} name={data.name} image={data.images[0] } key={data._id}/>
            <Button size={"lg"}>Buy Now</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5">
        <h2 className="md:bold-32 bold-20 text-gray-800 my-5">You May Also Like</h2>
        <div className="marquee ">
          <div className="maylike-products-container track">
            {data2.map((item) => (
              <div
                key={item._id}
                className=" mt-6 w-[800px] hover:scale-[1.025] transition-all"
              >
                <Link href={`/product/${item.productSlug}`}>
                  <img
                    src={item.imageUrl[0]}
                    alt=""
                    className=" bg-gray-200 rounded-lg hover:bg-gray-300 sm:max-w-64 sm:max-h-72 sm:min-w-52 max-w-40  sm:min-h-52 max-h-40 "
                  />
                </Link>
                <Link href={`/product/${item.productSlug}`}>
                  <p className="font-semibold text-[0.7rem] sm:text-[0.9rem] text-gray-700 mt-2">{item.name}</p>
                </Link>
                <p className="text-gray-900 bold-16 text-normal">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
