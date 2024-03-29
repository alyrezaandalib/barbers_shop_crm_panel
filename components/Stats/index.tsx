'use client'
import CountUp from 'react-countup';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Stats({name, value}: any) {
    return (
        <Card className={"flex justify-center items-center p-3 rounded-lg pt-5 gap-3 w-full"}>
            <strong className={"text-2xl"}><CountUp start={0} end={value} duration={5}/></strong>
            <div>{name}</div>
        </Card>
    )
}


// <div
//     className="bg-white rounded-lg px-9 py-6 flex flex-col items-center justify-center shadow-lg w-[23.5%]">
//     <div className="stat-title text-neutral text-lg font-bold w-full">{name}</div>
//     <div className="stat-value mt-2 text-neutral font-bold text-2xl"><CountUp start={0} end={value} duration={5}/></div>
// </div>