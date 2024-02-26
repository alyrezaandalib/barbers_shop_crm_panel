import Stats from "@/components/Stats";
import InstagramStats from "@/components/Stats/instagramStats";
import Instagram from "@/public/Icon/instagram";
import StorageChart from "@/components/StorageChart";
import {ScrollShadow, Button, User, Avatar} from "@nextui-org/react";
import {turns} from '@/json/home/turns';
import React from "react";
import CustomerIcon from "@/public/Icon/customerIcon";
import {truncateTextStart} from "@/services/TurncateText";
import WithdrawMoney from "@/components/withdrawMoney";

const stats = [
    {name: "امروز", value: "20"},
    {name: "این هفته", value: "150"},
    {name: "این ماه", value: "450"},
    {name: "قراردادها", value: "10"},
]
const instagramStats = [
    {name: "پست", value: "20"},
    {name: "دنبال کننده", value: "150"},
    {name: "دنبال شده", value: "450"},
]

export default function Home() {
    return (
        <div className={"flex flex-wrap items-start justify-between w-full text-[#555] h-full"}>

            {/*// ** stats and sms /////////////////////////////*/}
            <div className={"w-2/5 h-full flex justify-between flex-col items-center"}>
                {/*// ** work par times ///////////////////////////*/}
                <div className={"h-fit w-full"}>
                    <div className="flex items-center justify-between gap-2 w-full">
                        {stats.map((item, index) => <Stats key={index} name={item.name} value={item.value}/>)}
                    </div>
                    {/*// ** instagram information ///////////////////////////*/}
                    <div className="shadow-lg mt-3 rounded-lg w-full min-h-24 flex gap-2 bg-white justify-between">
                        {instagramStats.map((item, index) => <InstagramStats key={index} name={item.name}
                                                                             value={item.value}/>)}
                        <div className="bg-secondary rounded-l-lg flex justify-center items-center border-none w-full">
                            <Instagram/>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg mt-3 rounded-lg w-full h-full flex bg-white justify-between">
                </div>
            </div>

            {/*// **  /////////////////////////////*/}
            <div className={"w-1/3 h-full flex flex-col justify-between"}>
                <div className={"shadow-lg bg-white h-full rounded-lg"}>
                </div>
                <WithdrawMoney/>
            </div>

            {/*// ** storage and turn /////////////////////////////*/}
            <div className={"w-1/4 h-full flex flex-col justify-between"}>
                <StorageChart/>
                <div className={"shadow-lg bg-white h-[70%] mt-3 rounded-lg flex flex-col justify-center "}>
                    <div className={"flex justify-between w-full items-center p-3"}>
                        <div className={"flex items-center gap-2"}>
                            <div className={"w-7 h-7 shadow-lg bg-secondary rounded-full border-2 border-white"}></div>
                            <div className={"font-bold text-lg"}>نوبت روز</div>
                        </div>
                        <Button className={"rounded my-1.5 py-4 w-24"} color={"secondary"}>نوبت جدید</Button>
                    </div>
                    <ScrollShadow className="w-full h-full">
                        {turns.map((item, index) => {
                            return (
                                <div
                                    className={"w-full px-3 py-2 rounded-none border-b flex items-start justify-between hover:bg-[#aaa]/20s"}
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
                                        <div className={"flex flex-col text-[14px]"}>
                                            <span>{truncateTextStart(20, item.FName + " " + item.LName)}</span>
                                            <span>{item.phoneNumber}</span>
                                        </div>
                                    </div>
                                    <div>{item.time}</div>
                                </div>
                            )
                        })}
                    </ScrollShadow>

                </div>
            </div>
        </div>
    )
}