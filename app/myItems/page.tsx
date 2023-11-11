import React from "react";

export default function myItems() {
  return (
    <>
      <div className="z-10 w-full max-w-xl">
      <div className="w-full h-full justify-start items-start gap-12 inline-flex">
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-10 inline-flex">
    <div className="self-stretch text-black text-2xl font-black font-['Nunito Sans'] leading-normal">Borrowed Items</div>
    <div className="self-stretch flex-col justify-start items-start gap-10 flex">
      <div className="self-stretch py-4 justify-start items-center gap-[15px] inline-flex">
        <div className="w-[90px] h-[90px] justify-center items-center flex">
          <img className="w-[90px] h-[90px]" src="https://via.placeholder.com/90x90" />
        </div>
        <div className="grow shrink basis-0 h-14 justify-start items-center flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Actor'] leading-normal">Hammer</div>
            <div className="self-stretch text-black text-sm font-normal font-['Actor'] leading-normal">Return by: November 26, 2023 </div>
          </div>
          <div className="justify-end items-center gap-6 flex">
            <div className="text-black text-xl font-normal font-['Actor'] leading-loose tracking-wide">John Smith</div>
            <div className="w-8 h-8 relative" />
          </div>
        </div>
      </div>
      <div className="self-stretch py-4 justify-start items-center gap-[15px] inline-flex">
        <div className="w-[90px] h-[90px] justify-center items-center flex">
          <img className="w-[90px] h-[90px]" src="https://via.placeholder.com/90x90" />
        </div>
        <div className="grow shrink basis-0 h-14 justify-start items-center flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Actor'] leading-normal">LawnMower</div>
            <div className="self-stretch text-black text-sm font-normal font-['Actor'] leading-normal">Return by: November 27, 2023</div>
          </div>
          <div className="justify-end items-center gap-6 flex">
            <div className="text-black text-xl font-normal font-['Actor'] leading-loose tracking-wide">Julia Roberts</div>
            <div className="w-8 h-8 relative" />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0px] border border-neutral-400"></div>
      <div className="self-stretch py-4 justify-start items-center gap-[15px] inline-flex">
        <div className="w-[90px] h-[90px] justify-center items-center flex">
          <img className="w-[90px] h-[90px]" src="https://via.placeholder.com/90x90" />
        </div>
        <div className="grow shrink basis-0 h-14 justify-start items-center flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Actor'] leading-normal">BaseBall Bat</div>
            <div className="self-stretch text-black text-sm font-normal font-['Actor'] leading-normal">Return by: November 27, 2023</div>
          </div>
          <div className="justify-end items-center gap-6 flex">
            <div className="text-black text-xl font-normal font-['Actor'] leading-loose tracking-wide">Nelson Dang</div>
            <div className="w-8 h-8 relative" />
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
