import React, { useState, useEffect } from "react";
import itemInterface from "@/lib/interfaces/itemI";
import userInterface from "@/lib/interfaces/userI";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: string;
}

export default function LentItem({ item }: Props) {
  const [itemData, setItemData] = useState<itemInterface>();
  const [borrowerInfo, setBorrowerInfo] = useState<userInterface>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/items/${item}`);
        const data = await res.json();
        setItemData(data);
        const res2 = await fetch(`/api/users/${data.borrower}`);
        const data2 = await res2.json();
        setBorrowerInfo(data2);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [item]);

  return (
    <>
      {itemData ? (
        <div className="">
          <div className="inline-flex animate-fade-up items-center justify-start gap-[15px] self-stretch py-4">
            <div className="flex h-[90px] w-[90px] items-center justify-center">
              <Image
                width={90}
                height={90}
                alt={itemData?.itemName + "Image"}
                src="https://via.placeholder.com/90x90"
              />
            </div>
            <div className="flex h-14 shrink grow basis-0 items-center justify-start">
              <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                <Link
                  href="/"
                  className=" self-stretch text-base font-normal leading-normal text-black hover:underline"
                >
                  {itemData?.itemName}
                </Link>
                <div className="self-stretch text-sm font-normal leading-normal text-black">
                  Returned before: {itemData?.returnDate?.toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center justify-end gap-6">
                <div className=" text-xl font-normal leading-loose tracking-wide text-black ">
                  {borrowerInfo ? (
                    <Link href="/" className="hover:underline">
                      Borrowed by: {borrowerInfo?.firstName}{" "}
                      {borrowerInfo?.lastName}
                    </Link>
                  ) : (
                    <p>Borrowed by: No one</p>
                  )}
                </div>
                <div className="relative h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="h-[0px] self-stretch border border-neutral-400"></div>
        </div>
      ) : (
        <div className="py-2">
          <div className="">You have no lent items!</div>
          <button className="rounded-lg bg-black p-2 text-white">
            Post some here
          </button>
        </div>
      )}
    </>
  );
}
