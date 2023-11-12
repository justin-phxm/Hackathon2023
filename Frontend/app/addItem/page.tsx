"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import itemInterface from "@/lib/interfaces/itemI";
import { v4 as uuidv4 } from "uuid";
import { CldUploadWidget } from "next-cloudinary";
import { Cloudinary } from "cloudinary-core";
export default function addItem() {
  const defaultData: itemInterface = {
    itemName: "",
    owneruid: "",
    tags: [""],
    condition: "",
    description: "",
    imageIDs: [""],
    rentalState: "unborrowed",
    itemID: uuidv4(),
    returnDate: new Date(),
    lenderConfirm: false,
    borrowerConfirm: false,
  };

  const [formData, setFormData] = useState<itemInterface>(defaultData);
  const [images, setImages] = useState<File | undefined>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files && e.target.files[0]) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "tkmk3obs"); // Replace with your Cloudinary upload preset
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dokvvbgkp/image/upload",
          {
            method: "POST",
            body: formData,
          },
        );
        const file = await res.json();
        setImages(file);
        console.log(file.secure_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handle form submission here
    console.log(formData);
    // You can perform further actions like sending the data to an API or updating state in your application
  };

  return (
    <>
      <div className="z-10 inline-flex h-[1318px] w-[1440px] items-center justify-start gap-12 px-40 py-28">
        <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-12 self-stretch">
          <div className="flex h-[982px] flex-col items-start justify-start gap-10 self-stretch">
            <div className="flex h-4 flex-col items-start justify-start gap-6 self-stretch">
              <div className="self-stretch text-xl font-normal leading-none tracking-wide text-black">
                Post Item
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                value={formData.imageIDs && formData.imageIDs.toString()}
                name="imageIDs"
                onChange={handleImageUpload}
              />
              <Image
                width={526}
                height={360}
                src="https://via.placeholder.com/526x360"
                alt="placeholder"
              />

              <div className="flex h-[526px] flex-col items-start justify-start gap-4 self-stretch">
                <input
                  required
                  className="inline-flex h-12 items-center justify-start self-stretch rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                  type="text"
                  placeholder="Item Name"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                />
                <input
                  className="inline-flex h-[334px] items-center justify-start self-stretch rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <div className="inline-flex items-start justify-start gap-4 self-stretch">
                  <input
                    className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                    type="date"
                    placeholder="Lending days"
                    name="returnDate"
                    value={
                      formData.returnDate && formData.returnDate.toString()
                    }
                    onChange={handleChange}
                  />
                  <input
                    className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                    type="text"
                    placeholder="Condition"
                    name="condition"
                    required
                    value={formData.condition}
                    onChange={handleChange}
                  />
                </div>
                <div className="inline-flex items-start justify-start gap-4 self-stretch">
                  <input
                    className="flex h-12 shrink grow basis-0 items-center justify-start rounded-[7px] border border-stone-300 bg-white px-4 py-3"
                    type="text"
                    placeholder="Tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inline-flex items-start justify-start gap-[23px] self-stretch">
                <button
                  onClick={() => setFormData(defaultData)}
                  className="flex h-16 shrink grow basis-0 items-center justify-center gap-2 rounded-md border border-black px-[86px] py-6"
                >
                  <div className="text-center text-base font-normal leading-none text-black">
                    Back
                  </div>
                </button>
                <button
                  type="submit"
                  className="flex h-16 shrink grow basis-0 items-center justify-center gap-2 rounded-md bg-black px-[86px] py-6"
                >
                  <div className="text-center text-base font-normal leading-none text-white">
                    Post
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
