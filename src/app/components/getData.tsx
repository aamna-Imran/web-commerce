import { client } from "../lib/sanity";


export async function getData() {

    const data = await client.fetch(`*[_type == 'product'] | order(_createdAt desc) [0...9] {
        name,
        _id,
        description,
        "imageUrl": images[0...4].asset->url,
        "productSlug": slug.current,
        "categoryName": category->name,
        price,
    }`);
    return data;
}
