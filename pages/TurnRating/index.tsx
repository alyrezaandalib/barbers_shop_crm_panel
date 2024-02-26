'use client'
import {Avatar, Button, ScrollShadow} from "@nextui-org/react";
import {turns} from "@/json/home/turns";
import React, {useState} from "react";
import RightClickComponent from "@/components/RightClickMenu";
import EnvelopeIcon from "@/public/Icon/envelopeIcon";
import CloseIcon from "@/public/Icon/close";
import DeleteUser from "../../components/Modals/DeleteUserModal";
import CustomerIcon from "@/public/Icon/customerIcon";
import {truncateTextStart} from "@/services/TurncateText";
// import TurnCalender from "@/components/TurnCalender";
import {IoIosAdd} from "react-icons/io";

export default function TurnRatingPage() {
    const [open, setOpen] = useState(false)
    const [item, setItem] = useState(
        {
            FName: "",
            LName: "",
            phoneNumber: '',
            time: "",
        },
    )
    const handleMenuItemClick = (action: string) => {
        if (action === "cancelTurn") {
            setOpen(!open)
        } else {
            //
        }
    };

    const RightClickItems = [
        {Name: "ارسال پیامک", icon: <EnvelopeIcon/>, color: "none", onClick: () => handleMenuItemClick("sendSMS")},
        {Name: "لغو نوبت", icon: <CloseIcon/>, color: "danger", onClick: () => handleMenuItemClick("cancelTurn")},
    ]

    return (
        <div className={"flex items-start h-full gap-1 justify-between"}>
            {/*// *** sideBar //////////////////////////*/}
            <div
                className={"w-[25%] bg-white h-full rounded-lg shadow-lg flex flex-col relative"}>
                {/*// *** sideBar title //////////////////////////*/}
                <div className={"flex items-center gap-2 m-2 mt-4"}>
                    <div className={"w-7 h-7 shadow-lg bg-secondary rounded-full border-2 border-white"}></div>
                    <div className={"font-bold text-lg"}>نوبت های امروز</div>
                </div>
                <ScrollShadow className="w-full h-full p-1">

                    {turns.map((item, index) => {
                        return (
                            <RightClickComponent RightClickItems={RightClickItems} key={index} item={item}
                                                 setItem={setItem}>
                                <div
                                    className={"w-full px-2 py-2 rounded-none border-b flex items-start justify-between hover:bg-[#aaa]/20s"}
                                    key={index}>
                                    <div className={"flex items-center gap-2"}>
                                        <Avatar
                                            showFallback
                                            isBordered
                                            className={"w-8 h-8"}
                                            icon={<CustomerIcon className={"text-black/40"}/>}
                                            classNames={{
                                                base: "bg-white",
                                            }}
                                        />
                                        <div className={"flex flex-col text-[14px] mr-0.5"}>
                                            <span>{truncateTextStart(20, item.FName + " " + item.LName)}</span>
                                            <span>{item.phoneNumber}</span>
                                        </div>
                                    </div>
                                    <div>{item.time}</div>
                                </div>
                            </RightClickComponent>
                        )
                    })}
                </ScrollShadow>
                <Button
                        size={"lg"}
                        variant={"solid"}
                        isIconOnly
                        className={"rounded-full bg-secondary text-white text-2xl m-2 absolute bottom-0 left-0"}>
                    <IoIosAdd/>
                </Button>
            </div>

            <div className={"bg-white rounded-lg shadow-lg h-full p-3 overflow-y-auto w-full"} dir={"ltr"}>
                {/*// *** calender //////////////////////////*/}
                {/*<TurnCalender/>*/}
            </div>

            {/*// *** modal //////////////////////////*/}
            <DeleteUser open={open} setOpen={setOpen}
                        body={`از حذف نوبت خانم ${item.FName + " " + item.LName} در ساعت ${item.time} اطمینان دارید؟`}/>
        </div>
    )
}