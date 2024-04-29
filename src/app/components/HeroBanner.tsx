
import Link from "next/link";
import { client } from "../lib/sanity";

async function getHeroData() {
  const query = `*[_type == "heroImage" ][0]{
    midText,
       smallText,
       bigText,
       description,
       buttonText,
       "imageUrl": image1.asset->url,
 }`;
  const data = await client.fetch(query);
  return data;
}

export default async function HeroBanner() {
  const textData = await getHeroData();
  console.log(textData)
  return (
    <div className="max-container padding-container py-5 min-h-[00px] ">
      <div className="flex flex-col xl:flex-row bg-gray-300 py-10 rounded-2xl p-10  lg:pt-20 lg:justify-center justify-between items-center lg:h-[450px] h-[400px]">
        <div className="flex flex-col items-start w-full  self-start relative  ">
          <p className=" font-normal lg:bold-16">{textData.smallText}</p>
          <h3 className="bold-20 sm:bold-32 md:bold-40 text-gray-800">
            {textData.midText}
          </h3>
          <h1 className="bold-32 sm:bold-64 lg:bold-88 2xl:bold-90 text-white">
            {textData.bigText}
          </h1>
          <Link href="/Headphones">
          <button className=" lg:px-5 lg:py-3 px-2 py-1  text-[10px] lg:text-[15px] bg-red-600 text-white font-medium md:font-semibold rounded-md">
            {textData.buttonText}
          </button>
          </Link>
          <div className="absolute w-44 h-44 sm:w-64 sm:h-64 lg:w-[360px] lg:h-[360px] -right-5 ">
            <img src={textData.imageUrl} alt="" />
          </div>
        </div>
        <div className="flex flex-col self-end mt-5">
          <h3 className="bold-20 text-gray-800 text-end">Discription</h3>
          <p className="text-[12px] lg:text-[13px] text-end ">{textData.description}</p>
        </div>
      </div>

    </div>
  );
}
