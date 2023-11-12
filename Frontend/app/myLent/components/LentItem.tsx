import React from "react";
import itemInterface from "@/lib/interfaces/itemI";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: itemInterface;
}

export default function LentItem({ item }: Props) {
  const { itemName, rentalPeriod, borrowerFirstName, borrowerLastName } =
    item || {}; // Ensure item is not null or undefined

  return (
    <>
      <div className="inline-flex items-center justify-start gap-[15px] self-stretch py-4">
        <div className="flex h-[90px] w-[90px] items-center justify-center">
          <Image
            width={90}
            height={90}
            alt="Item Image"
            src="https://via.placeholder.com/90x90"
          />
        </div>
        <div className="flex h-14 shrink grow basis-0 items-center justify-start">
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
            <Link
              href="/"
              className=" self-stretch text-base font-normal leading-normal text-black hover:underline"
            >
              {itemName}
            </Link>
            <div className="self-stretch text-sm font-normal leading-normal text-black">
              Returned in: {rentalPeriod} days
            </div>
          </div>
          <div className="flex items-center justify-end gap-6">
            <div
              className=" text-xl font-normal leading-loose tracking-wide text-black "
            >
              {borrowerFirstName ? (
                <Link
                href="/"
                className="hover:underline"
                >
                  Borrowed by: {borrowerFirstName} {borrowerLastName}
                </Link>
              ):
              <p>
                Borrowed by: No one 
                </p>}
            </div>
            <div className="relative h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="h-[0px] self-stretch border border-neutral-400"></div>
    </>
  );
}
