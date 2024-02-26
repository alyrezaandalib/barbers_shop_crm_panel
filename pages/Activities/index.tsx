'use client'
import {Input} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";
import AutoSelect from "@/components/AutoSelect";
import React from "react";
import ActivitiesTable from "@/components/ActivitiesTable";
import CustomTab from "@/components/CustomTab";

const tab = [
    {tabName: "روز", key: "day"},
    {tabName: "هفته", key: "week"},
    {tabName: "ماه", key: "month"},
    {tabName: "سه ماه", key: "3_month"},
    {tabName: "شش ماه", key: "6_month"},
]

export default function App() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 h-full flex flex-col overflow-y-auto">

            {/*// ** tab ///////////////////////////////*/}
            <CustomTab tabItems={tab}/>
            <div className={"mt-6 w-full"}>
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
                <ActivitiesTable/>
            </div>
        </div>
    );
}
