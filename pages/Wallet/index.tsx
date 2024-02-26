import React from "react";
import ReceivedTable from "@/components/ReceivedTable";
import {Input} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";
import TransactionChart from "@/components/TransactionChart";
import AutoSelect from "@/components/AutoSelect";

export default function WalletPage() {
    return (
        <div className={"bg-white rounded-lg shadow-lg h-[100%] p-3 w-full overflow-y-auto"}>
            <div className={"w-full flex gap-3 h-[300px]"}>
                {/*// *** user status //////////////////////*/}
                <div className={"bg-gradient-to-tl from-secondary to-accent rounded-lg shadow-lg h-full p-2 w-[420px] flex flex-col justify-between"}>
                    <div className={"text-xl p-1 text-white"}>وضعیت کاربر</div>
                    <div className={"flex flex-col justify-between gap-1.5"}>
                        <div
                            className={"bg-white shadow-lg rounded-xl flex justify-between items-center p-4"}>
                            <span>موجودی کاربر:</span>
                            <span>6985569 ت</span>
                        </div>
                        <div
                            className={"bg-white shadow-lg rounded-xl flex justify-between items-center p-4"}>
                            <span>درصد سود کاربر:</span>
                            <span>698555528569 ت</span>
                        </div>
                        <div
                            className={"bg-white shadow-lg rounded-xl flex justify-between items-center p-4"}>
                            <span>هزینه بیمه:</span>
                            <span>6985569 ت</span>
                        </div> <div
                            className={"bg-white shadow-lg rounded-xl flex justify-between items-center p-4"}>
                            <span>هزینه بیمه:</span>
                            <span>6985569 ت</span>
                        </div>
                    </div>
                </div>
                {/*// *** weekly chart //////////////////////*/}
                <div className={"bg-gradient-to-tl from-secondary to-accent rounded-lg shadow-lg p-4 w-full"}>
                    <TransactionChart/>
                </div>
            </div>
            {/*// *** received chart //////////////////////*/}
            <div className={"mt-5"}>
                <div className={"flex items-center gap-1"}>
                    <Input
                        variant={"bordered"}
                        color={"secondary"}
                        className={"w-fit"}
                        size={"sm"}
                        type="text"
                        placeholder="Search..."
                        labelPlacement="outside"
                        startContent={
                            <CiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                        }
                    />
                    <AutoSelect/>
                </div>
                <ReceivedTable/>
            </div>
        </div>
    )
}