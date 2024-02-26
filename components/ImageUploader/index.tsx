"use client";
import Image from "next/image";
import {useRef, useState} from "react";
import IMG_Uploader from "@/public/img uploader.svg";
import {BsTrash} from "react-icons/bs";
import truncateTextEnd from "@/services/TurncateText";

export default function ImageUploader() {
    const inputRef = useRef(null);
    const [image, setImage]: any = useState("");
    const [imageName, setImageName]: any = useState("");
    const handleImageClick = () => {
        // @ts-ignore
        inputRef.current.click();
    };

    const handleImageChang = (e: any) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        setImage(e.dataTransfer.files[0]);
        setImageName(e.dataTransfer.files[0].name);
    };

    return (
        <div>
            {image ? (
                <div className={"flex flex-col justify-center items-center"}>
                    {/*// ** uploaded image ///////////////////////////////////*/}
                    <div className={"relative"}>
                        <Image
                            className={"rounded-lg"}
                            src={URL.createObjectURL(image)}
                            alt={"selected Image"}
                            width={300}
                            height={100}
                        />
                        <div
                            className={"absolute w-full h-16 bottom-0 flex items-end p-2 rounded-b-lg bg-gradient-to-t from-secondary to-none"}>
                            <div
                                className={
                                    "bg-gray-800 opacity-70 text-white rounded-lg p-1 mr-1 text-lg"
                                }
                                onClick={() => {
                                    setImage("");
                                    setImageName("");
                                }}
                            >
                                <BsTrash/>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-2 w-auto h-auto"}>{truncateTextEnd(30, imageName)}</div>
                </div>
            ) : (
                // ** base image ///////////////////////////////////
                <div
                    onClick={handleImageClick}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <Image
                        src={IMG_Uploader}
                        alt={"IMG Uploader"}
                        className={
                            "cursor-pointer border-2 rounded-lg border-dashed border-accent"
                        }
                    />
                    <input
                        type={"file"}
                        ref={inputRef}
                        className={"hidden"}
                        onChange={handleImageChang}
                    />
                </div>
            )}
        </div>
    );
}
