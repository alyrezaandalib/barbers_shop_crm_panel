import {Input, Button} from "@nextui-org/react";
import {CiSearch} from "react-icons/ci";
import AutoSelect from "@/components/AutoSelect";
import React from "react";

export default function EmployeesPage() {
    return (
        <div className={"w-full h-full"}>
            {/*// *** main //////////////////////////*/}
            <div className={"h-full flex flex-col w-full"}>

                {/*// *** header //////////////////////////*/}
                <div className={"bg-white rounded-lg flex items-center justify-between shadow-lg h-fit p-2"}>
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
                    <Button variant={"solid"} radius={"sm"} color={"secondary"}>
                        کارمند جدید
                    </Button>
                </div>

                {/*// *** content //////////////////////////*/}
                <div
                    className={"bg-white rounded-lg shadow-lg h-full mt-1 p-3"}>
                </div>
            </div>
        </div>
    )
}