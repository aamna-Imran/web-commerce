"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ShoppingCart() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout
  } = useShoppingCart();

  async function handleCheckoutClick(event:any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout()
      if(result?.error) {
        console.log("result")
      }
    }
    catch(error) {
      console.log(error)
    }
  }
  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!loaded) return null;
  return (
    <div>
      <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
        <SheetContent className="w-[90vw] sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="text-start">Shopping Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 overflow-y-auto flex-1">
              <ul className="divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className=" font-semibold lg:text-[1.2rem] text-[1rem]">
                    You Do not have Any Items
                  </h1>
                ) : (
                  <>
                    {Object.values(cartDetails ?? {}).map((entry) => (
                      <li key={entry.id} className="py-6 flex">
                        <div className="h-24 w-24 rounded-md border flex-shrink-0 bg-gray-100 border-gray-200">
                          <Image
                            src={entry.image as string}
                            alt="product"
                            width={100}
                            height={100}
                          />
                        </div>
                        <div className="flex flex-col flex-1 ml-4 ">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{entry.name}</h3>
                              <p>${entry.price}</p>
                            </div>
                            <p className="text-[0.7rem] text-gray-700 line-clamp-2 mt-1 mr-5">
                              {entry.description}
                            </p>
                          </div>
                          <div className="flex justify-between mt-2">
                            <p className="text-gray-900 text-[0.9rem]">
                              QTY: {entry.quantity}
                            </p>
                            <TiDelete
                              className="w-5 h-5 text-gray text-red-500 hover:text-red-400 cursor-pointer"
                              onClick={() => removeItem(entry.id)}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>

            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <div className="flex justify-between text-base font-semibold text-black ">
                <p>SubTotal</p>
                <p className="text-[0.9rem]">${totalPrice}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-900">
                Shipping and Taxes are calculated at Checkout
              </p>
              <Button
              onClick={handleCheckoutClick} 
              className="w-full mt-3">
                  CheckOut
              </Button>
              <Button
                onClick={() => handleCartClick()}
                className="w-full mt-1 font-semibold hover:text-black"
                variant={"ghost"}
              >
                <span className="text-primary mr-3">OR</span> Continue Shopping
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ShoppingCart;
