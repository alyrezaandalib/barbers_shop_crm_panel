import Sidebar from "@/components/Commons/SideBar";
import {sidebarItems} from "@/json/side";
import Header from "@/components/Commons/Header/desktop";
import * as React from "react";

export default function Content(props: propsType) {
    return <div className={"flex items-center max-w-[2000px] mx-auto"}>
        <Sidebar items={sidebarItems}/>
        <div className={"flex flex-col w-[91%] h-screen rounded-r-3xl bg-primary"}
             style={{boxShadow: "1px 0px 20px #666"}}>

            {/*// ** navbar*/}
            <Header/>

            {/*// ** sidebar*/}
            <div
                className={"p-5 pt-0"}
                style={{overflowY: "auto", height: "calc(100vh)"}}
            >
                {props.content}
            </div>
        </div>
    </div>
}

interface propsType {
    content: any;
}
