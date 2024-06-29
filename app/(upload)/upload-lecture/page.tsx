"use client";

import db from "@/lib/db";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function uploadLecture(){
    const [preview, setPreview] = useState("");
    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: 문법 이해 (#11.2)
        const {
            target: {files},
        } = event;
        if (!files) {
            return;
        }
        const file = files[0];
        // 3.5MB 이상의 파일은 업로드 불가 
        if(file.size > 1024 * 1024 * 3.5) {
            return;
        }
        const url = URL.createObjectURL(file);
        setPreview(url);
    }
    
    return (
        <div>
            <form className="flex flex-col gap-5">
                <input name="title" required placeholder="title" type="text" />
                <input name="description" required placeholder="description" type="text" />
                <input name="price" required placeholder="TODO dollor" type="number" />
                <label htmlFor="photo" className="border-2 aspect-square cursor-pointer bg-center bg-cover flex items-center justify-center"
                style={{
                    backgroundImage: `url(${preview})`
                }}>

                {preview === "" ? 
                <>
                    <PhotoIcon className="w-20"></PhotoIcon>
                    <div className="text-neutral-400 text-sm">Please upload the photo</div>
                </>
                : null} 

                </label>
                <input onChange={onImageChange}  name="photo" id="photo" accept="image/*" placeholder="TODO dollor" type="file" />
            </form>
        </div>
    )
}