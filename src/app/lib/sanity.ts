import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'q4jpzxtk',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
})

const Builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return Builder.image(source)
}