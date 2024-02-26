'use client'
import CountUp from 'react-countup';
import {Card} from "@nextui-org/react";

export default function InstagramStats({name, value}: any) {
    return (
        <Card className={"flex justify-center items-center p-3 rounded-lg pt-5 gap-3 w-full h-full"} shadow={"none"}>
            <strong className={"text-2xl"}><CountUp start={0} end={value} duration={5}/></strong>
            <div>{name}</div>
        </Card>
    )
}

// <div className="px-9 py-6 flex flex-col items-center justify-center border-none w-[25%]">
//     <div className="stat-title text-neutral">{name}</div>
//     <div className="stat-value mt-2 text-neutral"><CountUp start={0} end={value} duration={5}/></div>
// </div>