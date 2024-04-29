"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart' 
import { urlFor } from '../lib/sanity';

export interface ProductCart {
    name: string,
    image:any,
    price: number,
    description: string,
    currency: string
    price_id: string
}

function AddToBag({currency, image, price, name, description, price_id}: ProductCart) {
    const {addItem, handleCartClick} = useShoppingCart()
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
  return (
    <Button  variant={"secondary"} size={"lg"} onClick={()=> {
        addItem(product), handleCartClick();
    }}>
        Add To Cart
    </Button>
  )
}

export default AddToBag