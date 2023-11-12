import React from "react";
import itemInterface from "@/lib/interfaces/itemI";
import Image from "next/image";
import Link from "next/link";

interface BorrowedItemProps {
  item: itemInterface;
}

export default function BorrowedItem({ item }: BorrowedItemProps) {
  const { itemName, rentalPeriod, ownerFirstName, ownerLastName } = item || {}; // Ensure item is not null or undefined

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
            <Link href="/" className=" self-stretch hover:underline text-base font-normal leading-normal text-black">
              {itemName}
            </Link>
            <div className="self-stretch text-sm font-normal leading-normal text-black">
              Return in: {rentalPeriod} days
            </div>
          </div>
          <div className="flex items-center justify-end gap-6">
            <div className=" text-xl font-normal leading-loose tracking-wide text-black">
              {ownerFirstName} {ownerLastName}
            </div>
            <div className="relative h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="h-[0px] self-stretch border border-neutral-400"></div>
    </>
  );
}
