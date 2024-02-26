'use client'
import {NextUIProvider, Tab, Tabs} from "@nextui-org/react";
import React from "react";

export default function CustomTab({tabItems , onSelectionChange , size} : any){
    return(
        <NextUIProvider>
            <Tabs aria-label="Tabs sizes" size={size} onSelectionChange={onSelectionChange}>
                {tabItems.map((item :any) =>    <Tab key={item.key} title={item.tabName}/>)}
            </Tabs>
        </NextUIProvider>
    )
}