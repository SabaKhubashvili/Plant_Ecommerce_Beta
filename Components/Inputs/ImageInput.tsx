import React, { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { TbPhotoPlus } from "react-icons/tb"

declare global {
    var cloudinary:any
}

interface Props{
    onChange:(value:string)=>void,
    value:string
}

export const ImageInput = ({
    onChange,
    value
}:Props) => {
    const handleUpload = useCallback((result:any)=>{
        onChange(result.info.secure_url)
    },[onChange])

  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset='y6ihmv2e'

    options={{maxFiles:1}}
    >
      {({open})=>(
        <div
        onClick={()=>open()}
        className="
          relative
          cursor-pointer
          hover:opacity-70
          transition
          border-dashed 
          border-2 
          p-20 
          border-neutral-300
          flex
          flex-col
          justify-center
          items-center
          gap-4
          text-neutral-600
        "
      >
        <TbPhotoPlus
          size={50}
        />
        <div className="font-semibold text-lg">
          Click to upload
        </div>
        {value && (
          <div className="
          absolute inset-0 w-full h-full">
            <img
              
              style={{ objectFit: 'cover' }} 
              className='w-full h-full'
              src={value} 
              alt="Image" 
            />
          </div>
        )}
      </div>
      )}

    </CldUploadWidget>
  )
}
