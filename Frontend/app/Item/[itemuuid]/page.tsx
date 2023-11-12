'use client'
import {FC} from "react"

interface itemUUID{
    params : {itemuuid: string}
}

const page: FC<itemUUID> = ({params})=>{
    // console.log(params)
    return (
        <>
          {
            <div className="w-[1440px] h-[740px] px-40 py-28 justify-start items-center gap-12 inline-flex z-10">
            <div className="h-[516px] justify-start items-center gap-12 flex">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <img className="w-[74.88px] h-[93px]" src="https://via.placeholder.com/75x93" />
                <img className="w-[46.31px] h-[93px] opacity-40" src="https://via.placeholder.com/46x93" />
                <img className="w-[45.32px] h-[93px] opacity-40" src="https://via.placeholder.com/45x93" />
                <img className="w-[34.49px] h-[93px] opacity-40" src="https://via.placeholder.com/34x93" />
              </div>
              <img className="w-[413.12px] h-[516px]" src="https://via.placeholder.com/413x516" />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch h-28 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-28 flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-[40px] font-normal leading-10">Hammer # {params.itemuuid}</div>
                  <div className="self-stretch justify-start items-center gap-4 inline-flex">
                    <div className="text-black text-[32px] font-normal leading-[48px] tracking-wide">1 Month</div>
                    <div className="grow shrink basis-0 text-neutral-400 text-2xl font-normal leading-loose tracking-wide">John Smith</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <button className="grow shrink basis-0 h-14 px-14 py-4 rounded-md border border-black justify-center items-center gap-2 flex">
                  <div className="text-center text-black text-base font-normal leading-normal">Return Item</div>
                </button>
                <button className="grow shrink basis-0 h-14 px-14 py-4 bg-black rounded-md justify-center items-center gap-2 flex">
                  <div className="text-center text-white text-base font-normal leading-normal">Request Borrow</div>
                </button>
              </div>
              <div className="self-stretch justify-start items-center gap-8 inline-flex">
                <div className="grow shrink basis-0 h-14 rounded-lg justify-start items-center gap-4 flex">
                  <div className="p-4 bg-neutral-100 rounded-[11px] flex-col justify-start items-center gap-2 inline-flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-[19.88px] h-[15.87px] left-[2.06px] top-[4.07px] absolute">
                      </div>
                    </div>
                  </div>
                  <div className="text-neutral-500 text-sm font-normal leading-normal">Pickup, Delivery, <br/>Meetup</div>
                </div>
                <div className="grow shrink basis-0 h-14 rounded-lg justify-start items-center gap-4 flex">
                  <div className="p-4 bg-neutral-100 rounded-[11px] justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div><span className="text-neutral-500 text-sm font-normal leading-normal">Last Used:<br/></span><span className="text-black text-sm font-normal font-['Actor'] leading-normal">October 24, 2023 </span></div>
                </div>
                <div className="grow shrink basis-0 h-14 rounded-lg justify-start items-center gap-4 flex">
                  <div className="p-4 bg-neutral-100 rounded-[11px] justify-start items-center gap-2 flex">
                    <div className="w-6 h-6 relative">
                    </div>
                  </div>
                  <div className="text-neutral-500 text-sm font-normal leading-normal">Condition<br/>Good</div>
                </div>
              </div>
            </div>
          </div>
          }
          ;
        </>
      );
}

export default page