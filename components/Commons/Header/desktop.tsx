"use client";
import {PiBellSimpleFill} from "react-icons/pi";
import {HiMiniShoppingCart} from "react-icons/hi2";
import {CiSearch} from "react-icons/ci";
import React from "react";
import {
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input, Badge, Avatar, useDisclosure
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import AccountExitModal from "@/components/Modals/AccountExitModal";


export default function Nav() {
    // *** dropDown isValid ////////////////////////
    const [isInvisible, setIsInvisible] = React.useState(true);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const router = useRouter()

    return (
        <header>
            <div className={" w-full flex items-center justify-between p-5"}>
                <Input
                    className={"w-[300px] shadow-lg rounded-xl"}
                    type="text"
                    color={"secondary"}
                    variant={"bordered"}
                    placeholder="Search..."
                    labelPlacement="outside"
                    startContent={
                        <CiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
                    }
                />
                <div className={'flex items-center justify-around text-white gap-2'} dir={"ltr"}>

                    {/*// ** mini profile ////////////////////////////////*/}
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="settings" onClick={() => router.push("/profile")}>
                                پروفایل
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={onOpen}>
                                خروج
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/*// ** events ////////////////////////////////*/}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant={"light"}
                                className="capitalize"
                                isIconOnly
                            >
                                <Badge color="danger" content={5} isInvisible={false} shape="circle">
                                    <PiBellSimpleFill className={"text-2xl"}/>
                                </Badge>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dropdown Variants"
                        >
                            <DropdownItem key="new">New file</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/*// ** cart ////////////////////////////////*/}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant={"light"}
                                className="capitalize"
                                isIconOnly
                            >
                                <Badge color="danger" content={5} shape="circle">
                                    <HiMiniShoppingCart className={"text-2xl"}/>
                                </Badge>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dropdown Variants"
                        >
                            <DropdownItem key="new">New file</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <AccountExitModal isOpen={isOpen} onOpenChange={onOpenChange}/>
        </header>
    );
}
