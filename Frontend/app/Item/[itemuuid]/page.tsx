"use client";
import { FC } from "react";
import Image from "next/image";
interface itemUUID {
  params: { itemuuid: string };
}
let x = 0;
const page: FC<itemUUID> = ({ params }) => {
  // console.log(params)
  return (
    <>
      {
        <div className="z-10 inline-flex h-[740px] w-[1440px] items-center justify-start gap-12 px-40 py-28">
          <div className="flex h-[516px] items-center justify-start gap-12">
            <Image
              width={413}
              height={516}
              alt="placeholder"
              className="h-[516px] w-[413.12px]"
              src="https://via.placeholder.com/413x516"
            />
          </div>
          <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-8">
            <div className="flex h-28 flex-col items-start justify-start gap-4 self-stretch">
              <div className="flex h-28 flex-col items-start justify-start gap-6 self-stretch">
                <div className="self-stretch text-[40px] font-normal leading-10 text-black">
                  Hammer # {params.itemuuid}
                </div>
                <div className="inline-flex items-center justify-start gap-4 self-stretch">
                  <div className="text-[32px] font-normal leading-[48px] tracking-wide text-black">
                    1 Month
                  </div>
                  <div className="shrink grow basis-0 text-2xl font-normal leading-loose tracking-wide text-neutral-400">
                    John Smith
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-start justify-start gap-4 self-stretch">
              <button className="flex h-14 shrink grow basis-0 items-center justify-center gap-2 rounded-md border border-black px-14 py-4">
                <div className="text-center text-base font-normal leading-normal text-black">
                  Return Item
                </div>
              </button>
              <button className="flex h-14 shrink grow basis-0 items-center justify-center gap-2 rounded-md bg-black px-14 py-4">
                <div className="text-center text-base font-normal leading-normal text-white">
                  Request Borrow
                </div>
              </button>
            </div>
            <div className="inline-flex items-center justify-start gap-8 self-stretch">
              <div className="flex h-14 shrink grow basis-0 items-center justify-start gap-4 rounded-lg">
                <div className="inline-flex flex-col items-center justify-start gap-2 rounded-[11px] bg-neutral-100 p-4">
                  <div className="relative h-6 w-6">
                    <div className="absolute left-[2.06px] top-[4.07px] h-[15.87px] w-[19.88px]"></div>
                  </div>
                </div>
                <div className="text-sm font-normal leading-normal text-neutral-500">
                  Pickup, Delivery, <br />
                  Meetup
                </div>
              </div>
              <div className="flex h-14 shrink grow basis-0 items-center justify-start gap-4 rounded-lg">
                <div className="flex items-center justify-start gap-2 rounded-[11px] bg-neutral-100 p-4">
                  <div className="relative h-6 w-6" />
                </div>
                <div>
                  <span className="text-sm font-normal leading-normal text-neutral-500">
                    Last Used:
                    <br />
                  </span>
                  <span className="font-['Actor'] text-sm font-normal leading-normal text-black">
                    October 24, 2023{" "}
                  </span>
                </div>
              </div>
              <div className="flex h-14 shrink grow basis-0 items-center justify-start gap-4 rounded-lg">
                <div className="flex items-center justify-start gap-2 rounded-[11px] bg-neutral-100 p-4">
                  <div className="relative h-6 w-6"></div>
                </div>
                <div className="text-sm font-normal leading-normal text-neutral-500">
                  Condition
                  <br />
                  Good
                </div>
              </div>
            </div>
          </div>
          <div>
            {x == 1 && (
              <select className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3 text-sm">
                <option value="" disabled selected hidden>
                  Status
                </option>
                <option value="1">Borrowed</option>
                <option value="2">Available</option>
              </select>
            )}
          </div>
        </div>
      }
      ;
    </>
  );
};

export default page;
