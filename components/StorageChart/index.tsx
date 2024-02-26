import React from "react";
import {CircularProgress, Card, CardBody,} from "@nextui-org/react";

export default function StorageChart() {
    return (
        <Card className="flex-row h-[30%] justify-between items-center border-none bg-gradient-to-tl from-secondary to-accent p-5">
            <div className={"w-full text-white flex flex-col"}>
                <span>فضای ذخیره سازی</span>
                <span className={"mt-3 font-bold text-lg"}>3/7 گیگابایت</span>
            </div>
            <CardBody className="justify-cen items-center pb-0">
                <CircularProgress
                    classNames={{
                        svg: "w-32 h-32 drop-shadow-md",
                        indicator: "stroke-white",
                        track: "stroke-white/10",
                        value: "text-3xl font-semibold text-white",
                    }}
                    value={80}
                    strokeWidth={4}
                    showValueLabel={true}
                />
            </CardBody>
        </Card>
    );
}
