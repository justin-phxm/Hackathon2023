"use client";
import React from "react";
import fakeUsers from "../../lib/fakeData/fakeUsers";
import BorrowedItem from "./components/BorrowedItem";
export default function myBorrowed() {
  const borrowedItemsID = fakeUsers[0].borrowedItems;

  return (
    <>
      {
        <div className=" animate-fade-up z-10 w-full max-w-xl">
          <div className="inline-flex h-full w-full items-start justify-start gap-12">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-10">
              <div className=" self-stretch text-2xl font-black leading-normal text-black">
                Borrowed Items
              </div>
              <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                {borrowedItemsID.map((item, key) => {
                  return <BorrowedItem item={item} key={key} />;
                })}
              </div>
            </div>
          </div>
        </div>
      }
      ;
    </>
  );
}
