import {Spinner} from "@nextui-org/react";
export default function Loading() {
    return (
        <div className={`flex justify-center items-center w-full`} style={{height:"calc(100% - 5rem)"}}>
            <Spinner size={"lg"} color="success"/>
        </div>
    );
}
