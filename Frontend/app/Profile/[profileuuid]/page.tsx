'use client'
import {FC} from "react"

interface itemUUID{
    params : {profileuuid: string}
}

const page: FC<itemUUID> = ({params})=>{
    // console.log(params)
    return (
        <>
          {
            <div className=" animate-fade-up z-10 w-full max-w-xl">
              <div className="inline-flex h-full w-full items-start justify-start gap-12">
                <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-10">
                  <div className=" self-stretch text-2xl font-black leading-normal text-black">
                    This is profile {params.profileuuid}
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