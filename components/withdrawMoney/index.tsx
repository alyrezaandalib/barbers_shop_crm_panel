'use client'
import React, {useState} from "react";
import {Button, Input} from "@nextui-org/react";
import {EyeFilledIcon} from "@/public/Icon/EyeIcon";
import {EyeSlashFilledIcon} from "@/public/Icon/EyeSlashFileIcon";

export default function WithdrawMoney() {
    const [isVisibleInventory, setIsVisibleInventory] = useState(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <div className={"shadow-lg bg-white mt-3 rounded-lg p-6 h-fit"}>
            <button className="focus:outline-none" type="button"
                    onClick={() => setIsVisibleInventory(!isVisibleInventory)}>
                {isVisibleInventory ? (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                ) : (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                )}
            </button>
            <div className={"flex justify-between text-lg font-bold mb-5"}>
                <span>موجودی من:</span>
                <span>********* تومان</span>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className={"flex"}>
                <Input
                    radius={"sm"}
                    fullWidth
                    label="برداشت وجه"
                    variant="flat"
                    placeholder="مبلغ را وارد کنید..."
                    type={isVisibleInventory ? "text" : "password"}
                    classNames={{
                        inputWrapper: "rounded-l-none",
                    }}
                />
                <Button type={"submit"} radius={"sm"} color={"secondary"}
                        className={"rounded-r-none py-7"}>برداشت</Button>
            </form>
        </div>

    );
}
