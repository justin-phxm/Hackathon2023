'use client'
import React, { useState } from "react";  
import { TagsInput } from "react-tag-input-component";  

const [selected, setSelected] = useState([]);

export default function addItem() {
  return (
    <>
      <div className="z-10 inline-flex h-[1318px] w-[1440px] items-center justify-start gap-12 px-40 py-28">
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-12 self-stretch">
          <div className="flex h-[982px] flex-col items-start justify-start gap-10 self-stretch">
            <div className="flex h-4 flex-col items-start justify-start gap-6 self-stretch">
              <div className="self-stretch font-['Actor'] text-xl font-normal leading-none tracking-wide text-black">
                Post Item
              </div>
            </div>
            <img
              className="h-[360px] w-[526px]"
              src="https://via.placeholder.com/526x360"
            />
            <div className="flex h-[526px] flex-col items-start justify-start gap-4 self-stretch">
              <input
                className="inline-flex h-12 items-center justify-start self-stretch rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                type="text"
                placeholder="Item Name"
              ></input>
              <input
                className="inline-flex h-[334px] items-center justify-start self-stretch rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                type="text"
                placeholder="Description"
              ></input>
              <div className="inline-flex items-start justify-start gap-4 self-stretch">
                <input
                  className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                  type="text"
                  placeholder="Lending days"
                ></input>
                <input
                  className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                  type="text"
                  placeholder="Condition"
                ></input>
              </div>
              <div className="inline-flex items-start justify-start gap-4 self-stretch">
                <select className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3">
                  <option value="" disabled selected hidden>
                    Pickup Options
                  </option>
                  <option value="option1">In Person</option>
                  <option value="option2">Pickup</option>
                </select>
                <div> 
      <h1>NextJs Tag Input - GeeksforGeeks</h1> 
      <div> 
      <h1>Add Tags</h1> 
      <pre>{JSON.stringify(selected)}</pre> 
      <TagsInput 
        value={selected} 
        onChange={setSelected} 
        name="tags"
        placeHolder="tags"
      /> 
      <em>Enter tags</em> 
      </div> 
    </div> 
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-[23px] self-stretch">
            <button className="flex h-16 shrink grow basis-0 items-center justify-center gap-2 rounded-md border border-black px-[86px] py-6">
              <div className="text-center font-['Actor'] text-base font-normal leading-none text-black">
                Back
              </div>
            </button>
            <button className="flex h-16 shrink grow basis-0 items-center justify-center gap-2 rounded-md bg-black px-[86px] py-6">
              <div className="text-center font-['Actor'] text-base font-normal leading-none text-white">
                Post
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
