'use client'
import React, {useState} from 'react';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import {data, data2, data3} from "@/json/wallet"
import CustomTab from "@/components/CustomTab";

const tab = [
    {tabName: "هفته", key: "week"},
    {tabName: "ماه", key: "month"},
    {tabName: "سال", key: "year"},
]

export default function TransactionChart() {
    const [selectedTab, setSelectedTab] = useState(data)

    const onSelectionChange = (key: any) => {
        key === "week" ? setSelectedTab(data) : key === "month" ? setSelectedTab(data2) : setSelectedTab(data3)
    }

    return (
        <span className={"flex items-start justify-between h-full gap-2"}>
            <CustomTab tabItems={tab} onSelectionChange={onSelectionChange} size={"sm"}/>
            <ResponsiveContainer width="100%" height={"100%"}>
                <LineChart width={100} height={100} data={selectedTab}>
                    <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={4}/>
                </LineChart>
            </ResponsiveContainer>
        </span>
    );
}