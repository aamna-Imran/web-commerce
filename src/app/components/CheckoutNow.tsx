"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart' 
import { urlFor } from '../lib/sanity';
import { ProductCart } from './AddToBag';



function CheckoutNow({currency, image, price, name, description, price_id}: ProductCart) {
    const {checkoutSingleItem} = useShoppingCart()

    function buyNow(priceId: string){
        checkoutSingleItem(priceId)
    }

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
        buyNow(product.price_id)
    }}>
        Add To Cart
    </Button>
  )
}

export default CheckoutNow