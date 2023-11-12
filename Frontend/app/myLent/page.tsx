"use client"
import React from "react";
import fakeUsers from "../../lib/fakeData/fakeUsers";
import LentItem from "./components/LentItem";

export default function LentItems() {
  const lentItems = fakeUsers[2].lentItems;
  return (
    <>
      
        <div className="z-10 animate-fade-up w-full max-w-xl">
          <div className="inline-flex h-full w-full items-start justify-start gap-12">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-10">
              <div className=" self-stretch text-2xl font-black leading-normal text-black">
                Lent Items
              </div>
              <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                {lentItems.map((item, key) => {
                  return <LentItem item={item} key={key} />;
                })}
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
