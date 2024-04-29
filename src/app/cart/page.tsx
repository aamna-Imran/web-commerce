import { Button } from "@/components/ui/button";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function CartPage() {
  return (
    <section className="max-container padding-container flex flex-col lg:flex-row py-10 gap-3">
      <div className="lg:w-[60vw] w-full overflow-y-auto h-[500px] flex flex-col gap-2">
        <div className="w-full bg-gray-200 rounded-md flex p-2  justify-between gap-3 items-center">
          <img
            src="next.svg"
            alt=""
            className="w-28 rounded-sm h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 "
          />
          <div className=" flex flex-col justify-center  gap-1">
            <p className="bold-16 text-gray-700">name</p>
            <p className="text-[0.7rem] md:text-[0.8rem] line-clamp-2 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              harum error esse, officiis ullam itaque, quibusdam tempora dicta.
            </p>
            <p className="bold-16 text-gray-800">$100</p>
            <div className="flex justify-between items-center">
              <div className="w-20 h-6 flex flex-row rounded-md">
                <div className="w-1/3 p-1 rounded-tl-md text-[0.8rem] rounded-bl-md bg-primary flex justify-center items-center text-white  cursor-pointer">
                  <FaMinus />
                </div>
                <div className="w-1/3  p-1 flex justify-center font-medium items-center">
                  1
                </div>
                <div className="w-1/3 p-1 rounded-tr-md text-[0.8rem] rounded-br-md bg-primary flex justify-center items-center text-white cursor-pointer">
                  <FaPlus />
                </div>
              </div>
              <MdDelete className="md:w-8 md:h-8 w-6 h-6 self-end cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-md flex p-2  justify-between gap-3 items-center">
          <img
            src="next.svg"
            alt=""
            className="w-28 rounded-sm h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 "
          />
          <div className=" flex flex-col justify-center  gap-1">
            <p className="bold-16 text-gray-700">name</p>
            <p className="text-[0.7rem] md:text-[0.8rem] line-clamp-2 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              harum error esse, officiis ullam itaque, quibusdam tempora dicta.
            </p>
            <p className="bold-16 text-gray-800">$100</p>
            <div className="flex justify-between items-center">
              <div className="w-20 h-6 flex flex-row rounded-md">
                <div className="w-1/3 p-1 rounded-tl-md text-[0.8rem] rounded-bl-md bg-primary flex justify-center items-center text-white  cursor-pointer">
                  <FaMinus />
                </div>
                <div className="w-1/3  p-1 flex justify-center font-medium items-center">
                  1
                </div>
                <div className="w-1/3 p-1 rounded-tr-md text-[0.8rem] rounded-br-md bg-primary flex justify-center items-center text-white cursor-pointer">
                  <FaPlus />
                </div>
              </div>
              <MdDelete className="md:w-8 md:h-8 w-6 h-6 self-end cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-md flex p-2  justify-between gap-3 items-center">
          <img
            src="next.svg"
            alt=""
            className="w-28 rounded-sm h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 "
          />
          <div className=" flex flex-col justify-center  gap-1">
            <p className="bold-16 text-gray-700">name</p>
            <p className="text-[0.7rem] md:text-[0.8rem] line-clamp-2 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              harum error esse, officiis ullam itaque, quibusdam tempora dicta.
            </p>
            <p className="bold-16 text-gray-800">$100</p>
            <div className="flex justify-between items-center">
              <div className="w-20 h-6 flex flex-row rounded-md">
                <div className="w-1/3 p-1 rounded-tl-md text-[0.8rem] rounded-bl-md bg-primary flex justify-center items-center text-white  cursor-pointer">
                  <FaMinus />
                </div>
                <div className="w-1/3  p-1 flex justify-center font-medium items-center">
                  1
                </div>
                <div className="w-1/3 p-1 rounded-tr-md text-[0.8rem] rounded-br-md bg-primary flex justify-center items-center text-white cursor-pointer">
                  <FaPlus />
                </div>
              </div>
              <MdDelete className="md:w-8 md:h-8 w-6 h-6 self-end cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-md flex p-2  justify-between gap-3 items-center">
          <img
            src="next.svg"
            alt=""
            className="w-28 rounded-sm h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 "
          />
          <div className=" flex flex-col justify-center  gap-1">
            <p className="bold-16 text-gray-700">name</p>
            <p className="text-[0.7rem] md:text-[0.8rem] line-clamp-2 w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              harum error esse, officiis ullam itaque, quibusdam tempora dicta.
            </p>
            <p className="bold-16 text-gray-800">$100</p>
            <div className="flex justify-between items-center">
              <div className="w-20 h-6 flex flex-row rounded-md">
                <div className="w-1/3 p-1 rounded-tl-md text-[0.8rem] rounded-bl-md bg-primary flex justify-center items-center text-white  cursor-pointer">
                  <FaMinus />
                </div>
                <div className="w-1/3  p-1 flex justify-center font-medium items-center">
                  1
                </div>
                <div className="w-1/3 p-1 rounded-tr-md text-[0.8rem] rounded-br-md bg-primary flex justify-center items-center text-white cursor-pointer">
                  <FaPlus />
                </div>
              </div>
              <MdDelete className="md:w-8 md:h-8 w-6 h-6 self-end cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[40vw] w-full h-[320px] p-4 rounded-lg bg-gray-100 flex flex-col gap-2">
        <h2>ORDER SUMMARY</h2>
        <div className="border-t border-gray-400 h-[2px]"></div>
        <div className="flex justify-between items-center ">
            <p>Sub tottal</p>
            <p>$1500</p>
        </div>
        <div className="flex justify-between items-center">
            <p>Delivery Charges</p>
            <p>$5</p>
        </div>
        <div className="flex justify-between items-center">
            <p>Sales Tax</p>
            <p>$15</p>
        </div>
        <hr />
        <div className="flex justify-between items-center">
            <p>Estimated Total</p>
            <p>$1500</p>
        </div>
        <div className="border-t border-gray-400 h-[2px]"></div>
        <div className="flex justify-center items-center   ">
        <Button>
            Checkout to proceed
        </Button>
        </div>
        <div className="border-t border-gray-400 h-[2px]"></div>
        <p className="">Delivery charges and sales tax will be calculated in the checkout page</p>
      </div>
    </section>
  );
}

export default CartPage;
