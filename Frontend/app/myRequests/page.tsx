"use client"
import React from "react";
import RequestedItem from "./components/RequestedItem";
import fakeUsers from "@/lib/fakeData/fakeUsers";
export default function RequestedItems() {
  const requestedItems = fakeUsers[0].requestedItems;
  
  return (
    
    <>
        <div className="z-10 animate-fade-up w-full max-w-xl">
          <div className="inline-flex h-full w-full items-start justify-start gap-12">
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-10">
              <div className=" self-stretch text-2xl font-black leading-normal text-black">
                Requested Items
              </div>
              <div className="flex flex-col items-start justify-start gap-10 self-stretch">
                {requestedItems.map((item, key) => {
                  return <RequestedItem item={item} key={key} />;
                })}
              </div>
            </div>
          </div>
        </div>
      ;
    </>
  );
}
