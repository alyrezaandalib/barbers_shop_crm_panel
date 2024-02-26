'use client'
import CountUp from 'react-countup';
export default function InstagramStats({name , value}:any) {
    return (
        <div className="px-9 py-6 flex flex-col items-center justify-center border-none w-[25%]">
            <div className="stat-title text-neutral">{name}</div>
            <div className="stat-value mt-2 text-neutral"><CountUp start={0} end={value} duration={5}/></div>
        </div>)
}