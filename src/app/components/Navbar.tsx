"use client";
import React from "react";


import { HiOutlineShoppingBag } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

function Navbar() {
  const {handleCartClick, cartCount} = useShoppingCart()
  return (
    <section className="bg-white z-50 w-full shadow-md sticky top-0 left-0 max-container padding-container py-4 flex justify-between items-center">
      <Link
        href="/"
        className="font-bold text-gray-800 text-xl leading-tighter"
      >
        PHANOX
      </Link>
      <div className="flex  justify-center items-center gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="font-medium px-5 lg:px-10 py-[5px] text-black outline-none border-[1px] border-gray-200 hover:bg-gray-100 rounded-md">
            Categories
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/Watches">
              <DropdownMenuItem>Watches</DropdownMenuItem>
            </Link>
            <Link href="/Headphones">
              <DropdownMenuItem>Headphones</DropdownMenuItem>
            </Link>
            <Link href="/Speakers">
              <DropdownMenuItem>Speakers</DropdownMenuItem>
            </Link>
            <Link href="/Earphones">
              <DropdownMenuItem>Earphones</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        
          <div className="relative">
            <HiOutlineShoppingBag 
            onClick={()=> handleCartClick()}
            className="w-7 h-7 font-thin cursor-pointer" />
            {
              cartCount === 0 ? (
                <></>
              ):(
            <div className="bg-red-500 text-[12px] w-5 h-5 rounded-full flex justify-center items-center text-white absolute -top-2 -right-2">
              {cartCount}
            </div>
              )
            }
         </div>
      </div>
    </section>
  );
}

export default Navbar;
