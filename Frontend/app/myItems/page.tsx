"use client";
import React from "react";
import fakeUsers from "../../lib/fakeData/fakeUsers";
// import MyButton from "./myButton";
export default function myItems() {
  const handleClick = () => {
    console.log(fakeUsers[0]);
  };

  return (
    <>
      <div className="z-10 w-full max-w-xl">
        <div className="inline-flex h-full w-full items-start justify-start gap-12">
          <button onClick={handleClick}>Click here </button>
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-10">
            <div className="font-['Nunito Sans'] self-stretch text-2xl font-black leading-normal text-black">
              Borrowed Items
            </div>
            <div className="flex flex-col items-start justify-start gap-10 self-stretch">
              <div className="inline-flex items-center justify-start gap-[15px] self-stretch py-4">
                <div className="flex h-[90px] w-[90px] items-center justify-center">
                  <img
                    className="h-[90px] w-[90px]"
                    src="https://via.placeholder.com/90x90"
                  />
                </div>
                <div className="flex h-14 shrink grow basis-0 items-center justify-start">
                  <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                    <div className="self-stretch font-['Actor'] text-base font-normal leading-normal text-black">
                      Hammer
                    </div>
                    <div className="self-stretch font-['Actor'] text-sm font-normal leading-normal text-black">
                      Return by: November 26, 2023{" "}
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <div className="font-['Actor'] text-xl font-normal leading-loose tracking-wide text-black">
                      John Smith
                    </div>
                    <div className="relative h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="h-[0px] self-stretch border border-neutral-400"></div>
              <div className="inline-flex items-center justify-start gap-[15px] self-stretch py-4">
                <div className="flex h-[90px] w-[90px] items-center justify-center">
                  <img
                    className="h-[90px] w-[90px]"
                    src="https://via.placeholder.com/90x90"
                  />
                </div>
                <div className="flex h-14 shrink grow basis-0 items-center justify-start">
                  <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                    <div className="self-stretch font-['Actor'] text-base font-normal leading-normal text-black">
                      LawnMower
                    </div>
                    <div className="self-stretch font-['Actor'] text-sm font-normal leading-normal text-black">
                      Return by: November 27, 2023
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <div className="font-['Actor'] text-xl font-normal leading-loose tracking-wide text-black">
                      Julia Roberts
                    </div>
                    <div className="relative h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="h-[0px] self-stretch border border-neutral-400"></div>
              <div className="inline-flex items-center justify-start gap-[15px] self-stretch py-4">
                <div className="flex h-[90px] w-[90px] items-center justify-center">
                  <img
                    className="h-[90px] w-[90px]"
                    src="https://via.placeholder.com/90x90"
                  />
                </div>
                <div className="flex h-14 shrink grow basis-0 items-center justify-start">
                  <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2">
                    <div className="self-stretch font-['Actor'] text-base font-normal leading-normal text-black">
                      BaseBall Bat
                    </div>
                    <div className="self-stretch font-['Actor'] text-sm font-normal leading-normal text-black">
                      Return by: November 27, 2023
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <div className="font-['Actor'] text-xl font-normal leading-loose tracking-wide text-black">
                      Nelson Dang
                    </div>
                    <div className="relative h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
